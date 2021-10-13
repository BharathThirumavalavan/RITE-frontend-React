import React, { useContext } from 'react'
import { VerificationContext } from '../login/index'
import { Alert } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

export const AlertMsg = () => {
  const [alert, setAlert] = useContext(VerificationContext).alert

  setTimeout(() => {
    setAlert({
      status: false,
      msg: '',
      success: false,
    })
  }, 2000)
  return (
    <Fade>
      <Alert
        variant='col col-sm-4 col-xs-6 col-md-3 my-3 mx-auto text-center p-1'
        className={alert.success ? 'alert-success' : 'alert-danger'}
        role='alert'
      >
        <p className='my-1'>{alert.msg}</p>
      </Alert>
    </Fade>
  )
}
