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
        'common.download_cv': 'Скачать резюме',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.experience': 'Опыт',
        'nav.projects': 'Проекты',
        'nav.hobbies': 'Хобби',
        'nav.achievements': 'Достижения',
        'nav.game': 'Игра',
        'nav.contacts': 'Контакты',
        'about.title': 'Обо мне',
        'about.name': 'Котлаев Данил',
        'about.position': 'Frontend Developer',
        'about.description':
          'Фронтенд-разработчик с 4+ годами опыта создания современных веб-приложений.',
      },
    },
    en: {
      translation: {
        'test.title': 'Language toggle test',
        'test.description': 'Try switching the language!',
        'common.theme': 'Theme',
        'common.language': 'Language',
        'common.download_cv': 'Download CV',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.hobbies': 'Hobbies',
        'nav.achievements': 'Achievements',
        'nav.game': 'Game',
        'nav.contacts': 'Contacts',
        'about.title': 'About Me',
        'about.name': 'Kotlaev Danil',
        'about.position': 'Frontend Developer',
        'about.description':
          'Frontend developer with 4+ years of experience building modern web applications.',
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
