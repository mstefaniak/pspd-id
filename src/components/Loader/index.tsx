import React from 'react'
import './styles.css'
import { BeerMug } from '../BeerMug'

export const Loader: React.VFC = () => {
  return (
    <div className={'Loader__container'}>
      <div className="flex flex-col justify-center items-center px-4 py-5 sm:p-48">
        <BeerMug />
        <div className="flex justify-center items-center px-4 py-8">
          <p className="font-semibold text-lg text-white text-center Loader__text">Ładowanie...</p>
        </div>
      </div>
    </div>
  )
}