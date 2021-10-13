import React, { useState, useEffect } from 'react'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
import { useLogin } from './useHooks/useLogin'
import { Redirect } from 'react-router-dom'

export const LoginPage = () => {
  const [redirectLogin, setRedirectLogin] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { status, msg, authenticateUser } = useLogin()
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setRedirectLogin(true)
      }, 3000)
    }
  }, [msg])

  const checkLogin = async (e) => {
    e.preventDefault()
    await authenticateUser(email, password)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 5000)
  }

  return (
    <>
      {redirectLogin ? (
        <Redirect to='/' />
      ) : (
        <Fade>
          <div className='loginForm my-5'>
            <div className='shadow-lg p-4 animateSlide col-12 col-md-6'>
              <h1 className='display-5 d-flex justify-content-center'>
                <a
                  href='/home'
                  className=' mt-4 mb-2 text-decoration-none text-danger'
                >
                  RITE
                </a>
              </h1>

              <h2 className='display-6 text-center mt-3 mb-4'>Welcome Back!</h2>
              <form className='container'>
                <div className='form-group mb-4'>
                  <label htmlFor='email' className='fs-6 my-2 text-capitalize'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='emailAddress'
                    className='form-control '
                    aria-describedby='inputGroupPrepend'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                  />
                </div>
                <div className='form-group mb-2'>
                  <label className=' fs-6  text-capitalize'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    aria-describedby='inputGroupPrepend'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  {alert && (
                    <AttentionSeeker effect='headShake'>
                      <p
                        className={status ? 'text-success' : 'text-danger'}
                        style={{ fontSize: '0.9rem' }}
                      >
                        {msg}
                      </p>
                    </AttentionSeeker>
                  )}
                  <a href='/reset-password' style={{ fontSize: '0.8rem' }}>
                    Forget Password
                  </a>
                </div>

                <div className='d-flex justify-content-center mb-3 '>
                  <button
                    id='submit'
                    className='btn btn-outline-primary w-100'
                    onClick={(e) => {
                      checkLogin(e)
                    }}
                  >
                    Login
                  </button>
                </div>
                <p className='text-muted' style={{ fontSize: '0.8rem' }}>
                  Don't have an account{' '}
                  <a href='/signup' className='text-decoration-none'>
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </Fade>
      )}
    </>
  )
}
