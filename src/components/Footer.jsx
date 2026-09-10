import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`border-t-1 ${
      isDark ? 'border-blue-500/30' : 'border-blue-300/50'
    }`}>
        <footer className={`py-4 px-6 text-center text-sm ${
          isDark ? 'text-blue-300/50' : 'text-blue-700/70'
        }`}>
        &copy; {new Date().getFullYear()} Harihar Bidari. All rights reserved.
        </footer>
    </div>
  )
}

export default Footer
