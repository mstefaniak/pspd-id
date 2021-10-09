import React, { useEffect, useState } from 'react'
import { DATETIME_FORMAT_OPTIONS } from '../../lib/const'

export const DigitalClock: React.VFC = () => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <p className="text-center text-xl text-gray-800 font-semibold">
      {new Intl.DateTimeFormat('pl-PL', DATETIME_FORMAT_OPTIONS).format(time)}
    </p>
  )
}
