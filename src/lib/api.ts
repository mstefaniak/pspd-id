import { User } from '../types'
import { API_URL } from './const'

interface TokenResponse {
  token: string
}

interface LoginResponse {
  sessid: string;
  token: string;
  session_name: string;
}

const getToken = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/user/token`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const data = await response.json() as TokenResponse

  return data?.token
}

const login = async (username: string, password: string): Promise<boolean> => {
  const token = await getToken(username, password)

  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })

  const data = (await response.json()) as LoginResponse

  sessionStorage.setItem('token', data?.token)

  return response.status < 400
}

const getUser = async (username: string, password: string): Promise<User | null> => {
  const isLogged = await login(username, password)

  if (!isLogged) {
    return null
  }

  return fetchUserData()
}

export const fetchUserData = async (): Promise<User | null> => {
  const token = sessionStorage.getItem('token')

  if (!token) {
    console.error('Token not found')
    return null
  }

  const response = await fetch(`${API_URL}/data/userdata`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })

  if (response.status >= 400) {
    return null
  }

  const user = await response.json()

  if (user && user.length) {
    sessionStorage.setItem('lastUpdate', Date.now().toString())
    
    return user[0] as User
  }

  return null
}

export { getUser }
