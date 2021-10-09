import React from 'react'
import './styles.css'
import { AnimatePresence, motion } from 'framer-motion'
import { BeerMug } from '../BeerMug'

export const Loader: React.VFC = () => {
  return (
    <motion.div
      className={'Loader__container'}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="flex flex-col justify-center items-center px-4 py-5 sm:p-48">
        <BeerMug />
        <div className="flex justify-center items-center px-4 py-8">
          <p className="font-semibold text-lg text-white text-center Loader__text">
            Ładowanie...
          </p>
        </div>
      </div>
    </motion.div>
  )
}
