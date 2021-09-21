import moment from 'moment'
import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000)
  }, [])

  return (
    <p className="text-center text-xl text-gray-800 font-semibold">{moment(time).format('DD/MM/YY HH:mm:ss')}</p>
  )
}

export default DigitalClock