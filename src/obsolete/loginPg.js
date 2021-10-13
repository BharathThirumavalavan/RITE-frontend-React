import logo from '../assets/icon.png'
import { VerificationContext } from './index'
import { useContext, React, useEffect } from 'react'
import { useSendOTP } from './useSendOTP'
export const LoginPage = () => {
  const setAlert = useContext(VerificationContext).alert[1]
  const [mobileNo, setMobileNo] = useContext(VerificationContext).mobileNo
  const setLogin = useContext(VerificationContext).login[1]
  const [info, isRequested, setIsRequested] = useSendOTP(mobileNo)

  useEffect(() => {
    if (isRequested) {
      if (info.status) {
        setAlert({
          status: true,
          msg: info.addInfo,
          success: true,
        })
        setLogin(false)
      } else {
        setAlert({
          status: true,
          msg: 'please wait',
          success: false,
        })
      }
    }
  }, [isRequested, info])

  const otpTrigger = async (e) => {
    e.preventDefault()
    if (mobileNo.length !== 10) {
      setAlert({
        status: true,
        msg: 'Please check the number',
        success: false,
      })
    } else {
      await setIsRequested(true)
      console.log(isRequested)
    }
  }

  return (
    <div className='shadow-lg loginWindow centerItem d-flex flex-column p-4 animateSlide'>
      <a href='/home' className='mx-auto mt-4 mb-2 '>
        <img
          src={logo}
          alt='logo'
          style={{ width: '75px', height: '75px' }}
          className='shadow-lg rounded-circle '
        />
      </a>
      <h2 className='display-5 text-center mt-3 mb-4'>Welcome to Loslory</h2>
      <form className='text-center'>
        <div className='form-group'>
          <label
            htmlFor='mobileNumber'
            id='otpLabel'
            className='form-label fs-4  my-2'
          >
            Enter your mobile number
          </label>
          <p className='login text-muted'>A 6-digit OTP will be sent on SMS</p>
          <div
            className='input-group has-validation mx-auto my-2'
            style={{ height: '3rem', width: '250px' }}
          >
            <span className='input-group-text' id='inputGroupPrepend'>
              +91
            </span>
            <input
              type='text'
              name='mobile'
              id='mobileNumber'
              maxLength='10'
              className='form-control '
              style={{
                letterSpacing: '0.2rem',
              }}
              value={mobileNo}
              onChange={(e) => {
                setMobileNo(e.target.value)
              }}
              aria-describedby='inputGroupPrepend'
              required
            />
          </div>
          <button
            id='phoneBtn'
            className='btn btn-outline-primary my-3'
            onClick={(e) => {
              otpTrigger(e)
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
