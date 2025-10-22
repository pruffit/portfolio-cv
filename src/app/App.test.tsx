import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('should render the app with a button', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('should have proper layout classes', () => {
    const { container } = render(<App />)

    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('flex', 'min-h-svh', 'flex-col', 'items-center', 'justify-center')
  })

  it('should render button with correct text', () => {
    render(<App />)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /click me/i })
    await user.click(button)

    expect(button).toBeInTheDocument()
  })
})
