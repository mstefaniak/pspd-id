interface User {
  firstName: string
  lastName: string
  email: string
  isActive: boolean
  id: number
  createdAt: string
}

const getUser = async (email: string, pass: string) => {
  const response = await fetch(
    'https://60599953b11aba001745c686.mockapi.io/api/users',
    {
      method: 'POST',
      body: JSON.stringify({email, pass})
    })

  // TODO: handle errors

  const user = await response.json()

  return user as User;
}

export type { User }
export { getUser }
