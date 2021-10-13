import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export const useSendOTP = (phoneNo) => {
  const [msgSent, setMsgSent] = useState(0)
  const [info, setInfo] = useState([{ status: false, addInfo: '' }])
  let count = 0
  let expirationDate = Date.now()
  console.log(expirationDate)
  const [cookie, setCookie] = useCookies(['attempts'])
  const fetchData = async () => {
    setIsLoading(true)
    console.log('OTP sent')
    try {
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
      setInfo(otpInfo)
      console.log(info)
    } catch {
      setInfo([{ status: false, addInfo: 'Server Error' }])
    } finally {
      setIsLoading(false)
    }
  }

  const sendOTP = async () => {
    console.log(expirationDate)
    setCookie('attempts', count++, { path: '/login' })
    if (cookie?.attempts < 5) {
      fetchData()
    } else {
      setInfo([{ status: false, addInfo: 'Max Limit Reached' }])
    }
  }

  return { info, sendOTP, setIsRequested }
}
