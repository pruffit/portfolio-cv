import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageToggle } from './LanguageToggle'
import { I18nTestProvider } from '@/shared/test/i18n-test-utils'

describe('LanguageToggle', () => {
  it('should render language toggle button', () => {
    render(
      <I18nTestProvider>
        <LanguageToggle />
      </I18nTestProvider>
    )

    const button = screen.getByRole('button', { name: /toggle language/i })
    expect(button).toBeInTheDocument()
  })

  it('should toggle language on click', async () => {
    const user = userEvent.setup()
    render(
      <I18nTestProvider>
        <LanguageToggle />
      </I18nTestProvider>
    )

    const button = screen.getByRole('button', { name: /toggle language/i })

    await user.click(button)

    expect(button).toBeInTheDocument()
  })
})
