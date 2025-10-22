import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/style.css'
import { App } from './app/App.tsx'
import { ThemeProvider } from '@/app/providers/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </StrictMode>
)
