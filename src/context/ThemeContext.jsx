import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

      if (nextTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark')
      } else {
        document.body.removeAttribute('data-theme')
      }

      return nextTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
