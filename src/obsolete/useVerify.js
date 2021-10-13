import { useState, useEffect } from 'react'

export const useVerify = (mobileNo, pin) => {
  const [isVerfied, setIsVerfied] = useState(false)
  const [msg, setMsg] = useState('')
  const [check, setCheck] = useState(true)
  const [attempt, setAttempts] = useState(0)

  const validate = async () => {
    try {
      const checkPin = await fetch('/login/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: `+91${mobileNo}`,
          code: pin,
        }),
      })
      const verification = await checkPin.json()
      setIsVerfied(verification.status)
      setMsg(verification.msg)
    } catch {
      setIsVerfied(false)
      setMsg('Unable to verify OTP')
    }
  }
  useEffect(() => {
    if (attempt < 10) {
      validate()
      setCheck(false)
      setAttempts((prev) => prev + 1)
    } else {
      setIsVerfied(false)
      setMsg('Reached Limit Please try again')
    }
  }, [check])

  return [isVerfied, msg, setCheck]
}
