import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('should render the app with a button', () => {
    render(<AppWithProviders />)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
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

  it('should have proper layout classes', () => {
    const { container } = render(<AppWithProviders />)

    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('flex', 'min-h-svh', 'flex-col', 'items-center', 'justify-center')
  })

  it('should render button with correct text', () => {
    render(<AppWithProviders />)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const user = userEvent.setup()
    render(<AppWithProviders />)

    const button = screen.getByRole('button', { name: /click me/i })
    await user.click(button)

    expect(button).toBeInTheDocument()
  })

  it('should render translated text', () => {
    render(<AppWithProviders />)

    expect(screen.getByText(/тест переключения языка/i)).toBeInTheDocument()
    expect(screen.getByText(/попробуйте переключить язык/i)).toBeInTheDocument()
  })
})
