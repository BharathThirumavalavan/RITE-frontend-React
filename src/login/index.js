import React, { useState } from 'react'
import { LoginPage } from './login'
export const VerificationContext = React.createContext()

export const ValidationAPI = () => {
  const [email, setEmail] = useState('')
  return (
    <VerificationContext.Provider value={email}>
      <LoginPage />
    </VerificationContext.Provider>
  )
}
