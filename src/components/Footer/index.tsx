import React from 'react'
import { API_VERSION, APP_VERSION } from '../../lib/const'
import meta from '../../lib/version.json'
import { motion } from 'framer-motion'

export const Footer: React.VFC = () => {
  const appVersion = `v.${APP_VERSION}`
  const apiVersion = `v.${API_VERSION}`

  return (
    <motion.footer
      className="flex flex-1 items-center w-full bg-gray-100 max-h-16"
      initial={{ y: 100, backgroundColor: 'rgb(249, 250, 251)' }}
      animate={{ y: 0, backgroundColor: 'rgb(243, 244, 246)' }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-1 text-center text-xs text-gray-400">
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
    </motion.footer>
  )
}
