import { User } from '../types'

const API_URL = 'https://crm-test.pspd.org.pl/api'

interface TokenResponse {
  token: string
}

interface LoginResponse {
  sessid: string;
  token: string;
  session_name: string;
}

interface LoginReturn {
  isLogged: boolean
  token: string
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

  return data.token
}

const login = async (username: string, password: string): Promise<LoginReturn> => {
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

  return {
    isLogged: response.status < 400,
    token: data?.token ?? '',
  }
}

const getUser = async (username: string, password: string): Promise<User | false> => {
  const { isLogged, token } = await login(username, password)

  if (!isLogged) {
    return false
  }

  const response = await fetch(`${API_URL}/data/userdata`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })

  // TODO: handle errors

  const user = await response.json()

  if (user && user.length) {
    return user[0] as User
  }

  return false
}

export { getUser }
