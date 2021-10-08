import { SyntheticEvent, ChangeEvent, useState } from 'react'
import logo from '../../images/logo.png'
import { useStore } from '../../store'

const SignIn = (): JSX.Element => {
  const signInUser = useStore(state => state.signInUser)
  const errors = useStore(state => state.errors)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    if (email && password) {
      signInUser(email, password)
    }
  }

  return (
    <>
      <div className="flex-1 w-full flex items-start justify-center bg-gray-50 pb-2 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img src={logo} alt="logo" className="-mb-20 -mt-10 sm:-mt-20" />
            <h2 className="text-center text-2xl font-extrabold text-gray-900">
            LEGITYMACJA
            </h2>
          </div>
          {errors?.map(error => {
            return <div key={error} className="bg-red-200 text-red-600 p-4 text-center rounded">
              {error}
            </div>
          })}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                Email
                </label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                Hasło
                </label>
                <input
                  value={password}
                  onChange={handlePassChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Hasło"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
              Zaloguj
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { SignIn }
