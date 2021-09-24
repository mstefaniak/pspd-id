import { useState } from 'react'
import './App.css'
import { SignIn } from './sign-in'
import { Card } from './card'
import { User } from './types'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Loader from './components/Loader'

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>()

  const handleSuccess = (userData: User) => {
    setUser(userData)
  }

  return (
    <>

      <SwitchTransition mode={'in-out'}>
        <CSSTransition
          appear
          key={user ? 'user' : isLoading ? 'loading' : 'form'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames='fade'
        >
          {user ? <Card {...user} /> : isLoading ? <Loader /> :
            <SignIn onSuccess={handleSuccess} onLoading={state => setIsLoading(state)} />
          }
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

export { App }
