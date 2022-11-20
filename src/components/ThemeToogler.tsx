import {useEffect, useState} from 'react'
import clsx from 'clsx'
import MoonIcon from './icons/Moon'
import SunIcon from './icons/Sun'

export default function ThemeToogler() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button type="button" className="relative w-5">
      <SunIcon
        className={clsx(
          'absolute h-8 w-8 fill-green-400 transition-all duration-200 ease-in-out	md:h-9 md:w-9',
          {
            '-translate-x-1/2 translate-y-1/2': theme !== 'light',
            '-translate-x-1/2 -translate-y-1/2': theme === 'light',
            'opacity-0': theme !== 'light',
            'opacity-1': theme === 'light',
          }
        )}
        onClick={handleClick}
      />
      <MoonIcon
        className={clsx(
          'absolute h-8 w-8 fill-green-400 transition-all duration-200 ease-in-out	md:h-9 md:w-9',
          {
            '-translate-x-1/2 translate-y-1/2': theme !== 'dark',
            '-translate-x-1/2 -translate-y-1/2': theme === 'dark',
            'opacity-0': theme !== 'dark',
            'opacity-1': theme === 'dark',
          }
        )}
        onClick={handleClick}
      />
    </button>
  )
}
