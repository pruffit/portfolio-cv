import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { ThemeProvider } from './providers/theme'

describe('App', () => {
  it('should render the app with a button', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('should render theme toggle button', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeToggle).toBeInTheDocument()
  })

  it('should have proper layout classes', () => {
    const { container } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('flex', 'min-h-svh', 'flex-col', 'items-center', 'justify-center')
  })

  it('should render button with correct text', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /click me/i })
    await user.click(button)

    expect(button).toBeInTheDocument()
  })

  it('should render theme description text', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    expect(screen.getByText(/theme toggle is working/i)).toBeInTheDocument()
  })
})
