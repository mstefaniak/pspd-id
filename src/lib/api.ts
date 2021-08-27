import { User } from '../types'

const API_URL = 'https://crm-test.pspd.org.pl/api'

const headers = new Headers({
  'Content-Type': 'application/json',
})
interface TokenResponse {
  token: string
}

const getToken = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/user/token`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers,
  })

  const data = await response.json() as TokenResponse
  
  return data.token
}

const login = async (username: string, password: string) => {
  const token = await getToken(username, password)
  
  const response = await fetch(
    `${API_URL}/user/login`,
    {
      method: 'POST',
      body: JSON.stringify({username, password, token}),
      headers,
    })

  return response.status < 400
}

const getUser = async (username: string, password: string) => {
  const isLogged = await login(username, password)

  if (!isLogged) {
    return false
  }

  const response = await fetch(
    `${API_URL}/data/userdata`,
    {
      method: 'GET',
      credentials: 'include',
      headers,
    })

  // TODO: handle errors

  const user = await response.json()

  return user as User;
}

export { getUser }
