/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SENTRY_DSN?: string
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_YM_COUNTER_ID?: string
  readonly VITE_API_BASE_URL?: string
  readonly VITE_DEBUG?: string
  readonly VITE_CDN_URL?: string
  readonly MODE: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly SSR: boolean
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}