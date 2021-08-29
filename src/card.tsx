import logo from './images/logo.png'
import { User } from './types'

const Card = ({ name, id, status, joinDate }: User): JSX.Element => {
  const isActive = status === 'Current'

  return (
    <div className="sm:min-h-screen sm:flex sm:items-start sm:justify-center sm:bg-gray-50 sm:py-12">
      <div className="sm:max-w-lg sm:shadow bg-white overflow-hidden sm:rounded-lg">
        <div className="px-4 py-1 sm:px-6 grid grid-cols-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
            Legitymacja
          </h3>
          <div className="flex justify-end">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Imię i nazwisko
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Numer
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {id}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Składka opłacona
              </dt>
              <dd className="mt-1 text-sm text-green-600 sm:mt-0 sm:col-span-2">
                <span className={isActive ? 'text-green-600' : 'text-red-600'}>
                  {isActive ? 'TAK' : 'NIE'}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Data przystąpienia
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {new Intl.DateTimeFormat().format(Number(joinDate) * 1000)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export { Card }
