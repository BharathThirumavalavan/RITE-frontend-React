import { useState, useCallback } from 'react'

export const useSendOTP = (phoneNo) => {
  const [status, setStatus] = useState(true)
  const [info, setInfo] = useState('')
  const fetchData = useCallback(async () => {
    console.log('Otp sent')
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: `+91${phoneNo}`,
        channel: 'sms',
      }),
    })

    const otpInfo = await response.json()
    setStatus(otpInfo.status)
    setInfo(otpInfo.addInfo)
  }, [phoneNo])
  const trigger = fetchData
  return [status, info, trigger]
}
