import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { ThemeProvider } from './providers/theme'
import { I18nTestProvider } from '@/shared/test/i18n-test-utils'

const AppWithProviders = () => (
  <I18nTestProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </I18nTestProvider>
)

describe('App', () => {
  it('should render header with navigation', () => {
    render(<AppWithProviders />)

    const headers = screen.getAllByText(/котлаев данил/i)
    expect(headers.length).toBeGreaterThan(0)
  })

  it('should render theme toggle button', () => {
    render(<AppWithProviders />)

    const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeToggle).toBeInTheDocument()
  })

  it('should render language toggle button', () => {
    render(<AppWithProviders />)

    const langToggle = screen.getByRole('button', { name: /toggle language/i })
    expect(langToggle).toBeInTheDocument()
  })

  it('should render all sections', () => {
    render(<AppWithProviders />)

    expect(document.querySelector('#about')).toBeInTheDocument()
    expect(document.querySelector('#skills')).toBeInTheDocument()
    expect(document.querySelector('#experience')).toBeInTheDocument()
    expect(document.querySelector('#projects')).toBeInTheDocument()
    expect(document.querySelector('#hobbies')).toBeInTheDocument()
    expect(document.querySelector('#achievements')).toBeInTheDocument()
    expect(document.querySelector('#game')).toBeInTheDocument()
    expect(document.querySelector('#contacts')).toBeInTheDocument()
  })

  it('should render footer with social links', () => {
    render(<AppWithProviders />)

    expect(screen.getByText(/© 2025 kotlaev danil/i)).toBeInTheDocument()
  })

  it('should render download CV button', () => {
    render(<AppWithProviders />)

    const downloadButton = screen.getByRole('button', { name: /скачать резюме/i })
    expect(downloadButton).toBeInTheDocument()
  })
})
