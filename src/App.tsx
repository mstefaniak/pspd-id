import { useEffect, useCallback, useState } from 'react'
import './App.css'
import { SignIn } from './sign-in'
import { Card } from './card'
import { User } from './types'
import { fetchUserData } from './lib/api'
import { Loading } from './loading'

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User>()

  const init = useCallback(async () => {
    const userData = await fetchUserData()
    if (userData) {
      setUser(userData)
    }
  }, [fetchUserData])

  useEffect(() => {
    init().then(() => setIsLoading(false))
  }, [init])

  const handleSuccess = (userData: User) => {
    setUser(userData)
  }

  if (isLoading) {
    return <Loading />
  }

  if (user) {
    return <Card {...user} />
  }

  return (
    <SignIn onSuccess={handleSuccess} />
  )
}

export { App }
