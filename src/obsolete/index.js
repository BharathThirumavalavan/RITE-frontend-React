import React, { useState } from 'react'
import { LoginPage } from './loginPg'
import { VerificationPage } from './VerificationPage'
import { AlertMsg } from './alert'
export const VerificationContext = React.createContext()

export const ValidationAPI = () => {
  const [login, setLogin] = useState(true)
  const [alert, setAlert] = useState({
    status: false,
    msg: '',
    success: false,
  })

  const [mobileNo, setMobileNo] = useState('')

  return (
    <VerificationContext.Provider
      value={{
        alert: [alert, setAlert],
        login: [login, setLogin],
        mobileNo: [mobileNo, setMobileNo],
      }}
    >
      {alert.status && <AlertMsg />}
      {login && <LoginPage />}
      {!login && <VerificationPage />}
    </VerificationContext.Provider>
  )
}
