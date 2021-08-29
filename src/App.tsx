import { useState } from 'react'
import './App.css'
import { SignIn } from './sign-in'
import { Card } from './card'
import { User } from './types'

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>()

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
