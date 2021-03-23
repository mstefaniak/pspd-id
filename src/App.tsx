import { useState } from 'react'
import './App.css';
import { SignIn } from './sign-in'
import { Card } from './card'
import { User } from './lib/api'

const App = () => {
  const [user, setUser] = useState<User>()

  const handleSuccess = (userData: User) => {
    setUser(userData)
  }

  if (user) {
    return <Card {...user} />
  }

  return (
    <SignIn onSuccess={handleSuccess} />
  );
}

export { App }
