import { User } from '../types'
import { API_URL } from './const'

export const fetchUserData = async (
  username: string,
  password: string
): Promise<User | null> => {
  const response = await fetch(`${API_URL}/civicrm/membership`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })

  if (response.status >= 400) {
    return null
  }

  const parsedResponse = await response.json()
  if (parsedResponse?.data) {
    sessionStorage.setItem('lastUpdate', Date.now().toString())

    return parsedResponse.data as User
  }

  return null
}

export default { fetchUserData }
