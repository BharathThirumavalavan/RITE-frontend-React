import axios from 'axios'
import { useState } from 'react'

export const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(false)
  const [msg, setMsg] = useState('')

  const authenticateUser = async (emailAddress, password) => {
    try {
      setLoading(true)
      await axios
        .post('/login', {
          emailAddress: emailAddress,
          password: password,
        })
        .then((res) => {
          setStatus(res?.data.success)
          setMsg(res?.data.msg)
          console.log(res?.data)
          localStorage.setItem('token', res?.data.token)
          localStorage.setItem('expiresIn', res?.data.expiresIn)
        })
        .catch((err) => {
          setStatus(err.response.data.success)
          setMsg(err.response.data.msg)
          localStorage.setItem('token', null)
          localStorage.setItem('expiresIn', null)
        })
    } catch (err) {
      console.error(err)
      setStatus(false)
      setMsg('Error Occured')
    } finally {
      setLoading(false)
    }
  }
  return { loading, status, msg, authenticateUser }
}
