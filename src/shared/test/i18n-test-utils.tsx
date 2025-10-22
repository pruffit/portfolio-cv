import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const testI18n = i18n.createInstance()

testI18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  resources: {
    ru: {
      translation: {
        'test.title': 'Тест переключения языка',
        'test.description': 'Попробуйте переключить язык!',
        'common.theme': 'Тема',
        'common.language': 'Язык',
      },
    },
    en: {
      translation: {
        'test.title': 'Language toggle test',
        'test.description': 'Try switching the language!',
        'common.theme': 'Theme',
        'common.language': 'Language',
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
})

export function I18nTestProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={testI18n}>{children}</I18nextProvider>
}
