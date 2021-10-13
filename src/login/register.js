import { useState, useEffect } from 'react'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
import { Redirect } from 'react-router-dom'
import { useSignup } from './useHooks/useSignup'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [alert, setAlert] = useState({ success: false, status: false, msg: '' })
  const [redirectLogin, setRedirectLogin] = useState(false)
  let regularExpression =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@?_/ "])[a-zA-Z0-9!#$/@_%&?]{8,20}$/
  const { setIsFetching, status, msg } = useSignup(email, password)

  useEffect(() => {
    if (msg) {
      setAlert({
        success: status,
        status: true,
        msg: msg,
      })
    }
  }, [msg])

  const validateData = async (e) => {
    e.preventDefault()
    if (password === checkPassword) {
      if (regularExpression.test(password)) {
        setIsFetching((prev) => !prev)
        setTimeout(() => {
          setRedirectLogin(true)
        }, 3000)
      } else {
        setAlert({
          success: false,
          status: true,
          msg: 'Password must have atlease one uppercase,lowercase, special characters and digits',
        })
      }
    } else {
      setAlert({
        success: false,
        status: true,
        msg: `Password doesn't match`,
      })
    }
    setTimeout(() => {
      setAlert({
        success: false,
        status: false,
        msg: '',
      })
    }, 5000)
  }

  return (
    <>
      {redirectLogin ? (
        <Redirect to='/login' />
      ) : (
        <Fade>
          <div className='loginForm my-5'>
            <div className='shadow-lg p-4 animateSlide'>
              <h2 className='display-6 text-center my-2'>Welcome to RITE!</h2>
              <h2 className='fs-4 text-center my-3'>Create an account</h2>
              <form className='mt-3'>
                <div className='form-group my-4'>
                  <label
                    htmlFor='email'
                    className='text-muted '
                    style={{ fontSize: '0.8rem' }}
                  >
                    Please enter email address
                  </label>
                  <input
                    className='form-control'
                    type='email'
                    id='email'
                    name='emailAddress'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                  />
                </div>
                <div className='form-group my-4'>
                  <label
                    htmlFor='email'
                    className='text-muted '
                    style={{ fontSize: '0.8rem' }}
                  >
                    Password
                  </label>

                  <input
                    className='form-control passwordInput'
                    type='password'
                    value={password}
                    id='password'
                    name='password'
                    minLength='8'
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    required
                  />
                </div>
                <div className='form-group my-4'>
                  <label
                    htmlFor='email'
                    className='text-muted '
                    style={{ fontSize: '0.8rem' }}
                  >
                    Confirm Password
                  </label>
                  <input
                    className='form-control'
                    type='password'
                    id='passwordCheck'
                    name='passwordCheck'
                    value={checkPassword}
                    onChange={(e) => {
                      setCheckPassword(e.target.value)
                    }}
                    minLength='6'
                    required
                  />
                  {alert.status && (
                    <AttentionSeeker
                      effect={alert.success ? 'flash' : 'headShake'}
                      duration={1000}
                    >
                      <p
                        className={
                          alert.success ? 'text-success' : 'text-danger'
                        }
                        style={{ fontSize: '0.9rem' }}
                      >
                        {alert.msg}
                      </p>
                    </AttentionSeeker>
                  )}
                </div>
                <span className='text-muted ' style={{ fontSize: '0.8rem' }}>
                  By signing up, you agree to the{' '}
                  <a
                    href='/terms-and-conditions'
                    className='text-decoration-none'
                  >
                    Terms and conditions of RITE.
                  </a>
                </span>

                <button
                  className='btn btn-outline-primary w-100 my-3'
                  onClick={(e) => validateData(e)}
                >
                  Create account
                </button>
              </form>
              <p className='text-muted' style={{ fontSize: '0.8rem' }}>
                Have an account?{' '}
                <a href='/login' className='text-decoration-none'>
                  Log in
                </a>
              </p>
            </div>
          </div>
        </Fade>
      )}
    </>
  )
}
