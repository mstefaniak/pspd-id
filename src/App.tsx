import { useEffect } from 'react'
import './App.css'
import { SignIn } from './containers/SignIn'
import { Card } from './containers/IdCard'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Loader } from './components/Loader'
import { API_VERSION, APP_VERSION } from './lib/const'
import meta from './lib/version.json'
import { useClearCache } from 'react-clear-cache'
import { useStore } from './store'

const App = (): JSX.Element => {
  const user = useStore(state => state.user)
  const loading = useStore(state => state.loading)
  const { isLatestVersion, emptyCacheStorage } = useClearCache()

  useEffect(() => {
    if (!isLatestVersion) emptyCacheStorage()
  }, [])

  const appVersion = `v.${APP_VERSION}`
  const apiVersion = `v.${API_VERSION}`

  return (
    <SwitchTransition mode={'in-out'}>
      <CSSTransition
        appear
        key={user ? 'user' : loading ? 'loading' : 'form'}
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames="fade"
      >
        <div className="flex flex-col min-h-screen">
          {user ? (
            <Card {...user} />
          ) : loading ? (
            <Loader />
          ) : (
            <SignIn />
          )}
          {
            !loading &&           
            <footer className="flex flex-1 items-center w-full bg-gray-100 max-h-16">
              <div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p onClick={() => emptyCacheStorage()} className="mt-1 text-center text-xs text-gray-400">
                Hash: {meta.version}
                </p>
                <div className="flex justify-around items-end">
                  <span className="mt-1 text-center text-xs text-gray-400">
                  UI: {appVersion}
                  </span>
                  <span className="mt-1 text-center text-xs text-gray-400">
                  API: {apiVersion}
                  </span>
                </div>
              </div>
            </footer>
          }
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export { App }
