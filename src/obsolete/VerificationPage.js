import { useSendOTP } from './useSendOTP'
import logo from '../assets/icon.png'
import { VerificationContext } from './index'
import { useContext, React, useEffect, useState } from 'react'
import { useVerify } from './useVerify'
import { useHistory } from 'react-router-dom'
import { addUser } from './addUser'
export const VerificationPage = () => {
  const setAlert = useContext(VerificationContext).alert[1]
  const mobileNo = useContext(VerificationContext).mobileNo[0]
  const [_info, _isRequested, setIsRequested] = useSendOTP(mobileNo)
  let [count, setCount] = useState(5)
  let timer = null
  const [isDisabled, setIsDisabled] = useState('disabled')
  const [pin, setPin] = useState('')
  let history = useHistory()
  const [start, setStart] = useState(true)
  const [isVerfied, msg, setCheck] = useVerify(mobileNo, pin)
  let isAdded = null
  useEffect(() => {
    if (setCheck) {
      isAdded = addUser(mobileNo)
      setCheck(false)
      if (isVerfied) {
        if (isAdded.status) {
          setAlert({
            status: true,
            msg: isAdded.msg,
            success: true,
          })
          setTimeout(() => {
            history.push('/home')
          }, 2000)
        } else {
          setAlert({
            status: true,
            msg: isAdded.msg,
            success: false,
          })
        }
      } else {
        setAlert({
          status: true,
          msg: msg,
          success: false,
        })
      }
    }
  }, [setCheck, isAdded])

  async function authentication(e) {
    e.preventDefault()
    console.log('object')
    await setCheck(true)
  }

  useEffect(() => {
    setIsRequested(false)
    if (start) {
      timer = setInterval(() => {
        setCount(count--)
        if (count < 0) {
          clearInterval(timer)
          setIsDisabled('')
          setCount(5)
          setStart(false)
        }
      }, 1000)
      console.log(start)
    }
  }, [start])

  return (
    <div className='shadow-lg loginWindow centerItem d-flex flex-column p-4 animateSlide'>
      <a href='/home' className='mx-auto m-5 '>
        <img
          src={logo}
          alt='logo'
          style={{ width: '75px', height: '75px' }}
          className='shadow-lg rounded-circle '
        />
      </a>
      <form className='text-center'>
        <div className='form-group'>
          <label
            htmlFor='mobileNumber'
            id='otpLabel'
            className='form-label fs-4 my-3'
          >
            Please Enter the code
          </label>
          <p className='login text-muted'>
            A 6-digit OTP has been sent to{' '}
            {mobileNo.substring(mobileNo.length - 4)}
          </p>
          <div
            className='input-group has-validation w-50 mx-auto my-4'
            style={{ height: '3rem' }}
          >
            <input
              type='text'
              name='mobile'
              id='mobileNumber'
              maxLength='6'
              className='form-control text-center'
              aria-describedby='inputGroupPrepend'
              value={pin}
              onChange={(e) => {
                setPin(e.target.value)
              }}
              style={{
                letterSpacing: '1rem',
                fontWeight: 'bolder',
                fontSize: '1.2rem',
              }}
              req
            />
          </div>
          <div>
            <button
              className={`btn btn-success mx-2 ${isDisabled}`}
              onClick={(e) => {
                e.preventDefault()
                setIsDisabled('disabled')
              }}
            >
              Resend
            </button>
            <button
              className='btn btn-primary mx-2'
              onClick={(e) => {
                authentication(e)
              }}
            >
              Submit
            </button>
            {start && <p className='text-muted m-2'> Resend in {count}</p>}
          </div>
        </div>
      </form>
    </div>
  )
}
