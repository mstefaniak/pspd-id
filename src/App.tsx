import { useEffect } from 'react'
import './App.css'
import { SignIn } from './containers/SignIn'
import { Card } from './containers/IdCard'
import { Loader } from './components/Loader'
import { Footer } from './components/Footer'
import { useClearCache } from 'react-clear-cache'
import { useStore } from './store'
import { AnimatePresence } from 'framer-motion'

const App = (): JSX.Element => {
  const user = useStore((state) => state.user)
  const loading = useStore((state) => state.loading)
  const { isLatestVersion, emptyCacheStorage } = useClearCache()

  useEffect(() => {
    if (!isLatestVersion) emptyCacheStorage()
  }, [])

  if (loading) return <AnimatePresence><Loader /></AnimatePresence>

  return (
    <div className="flex flex-col min-h-screen">
      {user ? <Card {...user} /> : <SignIn />}
      <Footer />
    </div>
  )
}

export { App }
