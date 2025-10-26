import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react"
import './app/styles/style.css'
import './app/providers//i18n/config'
import { App } from './app/App.tsx'
import { ThemeProvider } from '@/app/providers/theme'
import { initSentry } from '@/shared/lib/sentry'
import { initWebVitals } from '@/shared/lib/web-vitals'

initSentry()
initWebVitals()

const SentryApp = Sentry.withProfiler(App)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      <ThemeProvider defaultTheme="dark">
        <SentryApp />
      </ThemeProvider>
    </Sentry.ErrorBoundary>
  </StrictMode>
)

function ErrorFallback() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Что-то пошло не так</h1>
      <p style={{ marginBottom: '2rem', color: '#888' }}>
        Произошла непредвиденная ошибка. Мы уже работаем над её исправлением.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}
      >
        Обновить страницу
      </button>
    </div>
  )
}