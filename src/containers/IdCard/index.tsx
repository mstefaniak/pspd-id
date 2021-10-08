import { User } from '../../types'
import { NotActive } from '../../components/NotActive'
import { CardLine } from '../../components/CardLine'
import { DATETIME_FORMAT_OPTIONS, LOCALE, OUTDATE_DIFF } from '../../lib/const'

import logo from '../../images/logo.png'
import { useEffect, useState } from 'react'
import { DigitalClock } from '../../components/DigitalClock'
import { useStore } from '../../store'

const Card = ({
  firstName,
  lastName,
  pspdId,
  status,
  joinDate,
  region,
  qrCode,
}: User): JSX.Element => {
  const [currentTimestamp, setCurrentTimestamp] = useState(Date.now())
  const signOutUser = useStore((state) => state.signOutUser)
  const lastSyncTimestamp = useStore((state) => state.lastSyncTimestamp)

  const isActive = status === 'Current'
  const fullName = `${firstName} ${lastName}`
  const isOutdated = currentTimestamp - lastSyncTimestamp > OUTDATE_DIFF

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(Date.now())
    }, 30 * 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const lastUpdate = new Intl.DateTimeFormat(LOCALE, DATETIME_FORMAT_OPTIONS).format(
    lastSyncTimestamp
  )

  useEffect(() => {
    if (isOutdated) {
      signOutUser()
    }
  }, [lastSyncTimestamp])

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
        <div>
          <DigitalClock />
        </div>
        <div className="px-8 pt-2 pb-4">
          <img src={`data:image/png;base64,${qrCode}`} />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <CardLine
              label="Imię i nazwisko"
              value={<span className="font-bold">{fullName}</span>}
              isEven
            />
            <CardLine label="Numer" value={pspdId} />
            <CardLine
              label="Składka opłacona"
              value={<span className="text-green-600 font-bold">TAK</span>}
              isEven
            />
            <CardLine
              label="Data przystąpienia"
              value={new Intl.DateTimeFormat(LOCALE, DATETIME_FORMAT_OPTIONS).format(
                Number(joinDate) * 1000
              )}
            />
            <CardLine label="Oddział" value={region} isEven />
            <CardLine
              label="Ostatnia aktualizacja"
              value={
                <span className={isOutdated ? 'text-red-600 font-bold' : ''}>
                  {lastUpdate}
                </span>
              }
            />
          </dl>
        </div>
        <div className="py-4 px-4">
          <button
            onClick={(e) => {
              e.preventDefault()
              signOutUser()
            }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Wyloguj
          </button>
        </div>
      </div>
    </div>
  )
}

export { Card }
