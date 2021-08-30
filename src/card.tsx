import { User } from './types'
import { NotActive } from './not-active'
import { CardLine } from './card-line'

import logo from './images/logo.png'

const Card = ({ firstName, lastName, id, status, joinDate, ot }: User): JSX.Element => {
  const isActive = status === 'Current'
  const fullName = `${firstName} ${lastName}`

  if (!isActive) {
    return <NotActive />
  }

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
            <CardLine
              label="Imię i nazwisko" 
              value={fullName} 
              isEven 
            />
            <CardLine 
              label="Numer" 
              value={id} 
            />
            <CardLine 
              label="Składka opłacona" 
              value="TAK" 
              isEven 
            />
            <CardLine 
              label="Data przystąpienia" 
              value={new Intl.DateTimeFormat().format(Number(joinDate) * 1000)} 
            />
            <CardLine
              label="Oddział"
              value={ot}
              isEven
            />
          </dl>
        </div>
      </div>
    </div>
  )
}

export { Card }
