import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import './app/styles/style.css'
import './app/providers//i18n/config'
import { App } from './app/App.tsx'
import { ThemeProvider } from '@/app/providers/theme'
import { HelmetProvider } from 'react-helmet-async'

const SentryApp = Sentry.withProfiler(App)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <SentryApp />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
