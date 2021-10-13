import axios from 'axios'
import { useState, useEffect } from 'react'

export const useSignup = (emailAddress, password) => {
  const [isFetching, setIsFetching] = useState(false)
  const [status, setStatus] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (isFetching) {
      setMsg('')
      const registerUser = async () => {
        try {
          await axios
            .post('/signup', {
              emailAddress: emailAddress,
              password: password,
            })
            .then((res) => {
              setStatus(res?.data.success)
              setMsg(res?.data.msg)
            })
            .catch((err) => {
              setStatus(err?.response.data.success)
              setMsg(err?.response.data.msg)
            })
        } catch (err) {
          console.error(err)
          setStatus(false)
          setMsg('Error Occured')
        } finally {
          if (msg) {
            setIsFetching(false)
          }
        }
      }
      registerUser()
    }
  }, [isFetching])

  return { setIsFetching, status, msg }
}
