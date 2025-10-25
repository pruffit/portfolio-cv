import { useEffect, useState } from 'react'
import { Theme, ThemeProviderProps } from './theme.types'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    return savedTheme || defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.add('theme-transition-disabled')
    
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    
    localStorage.setItem('theme', theme)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove('theme-transition-disabled')
      })
    })
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}