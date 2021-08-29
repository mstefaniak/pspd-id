import { useEffect, useCallback, useState } from 'react'
import './App.css'
import { SignIn } from './sign-in'
import { Card } from './card'
import { User } from './types'
import { fetchUserData } from './lib/api'

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>()

  const init = useCallback(async () => {
    const userData = await fetchUserData()
    if (userData) {
      setUser(userData)
    }
  }, [fetchUserData])

  useEffect(() => {
    init()
  }, [init])

  const handleSuccess = (userData: User) => {
    setUser(userData)
  }

  if (user) {
    return <Card {...user} />
  }

  return (
    <SignIn onSuccess={handleSuccess} />
  )
}

export { App }
