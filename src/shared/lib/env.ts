interface EnvConfig {
  sentryDsn: string
  
  gaId: string
  ymId: string
  
  apiBaseUrl?: string
  debug: boolean
  cdnUrl?: string
  
  mode: string
  isProd: boolean
  isDev: boolean
}

export function getEnvConfig(): EnvConfig {
  const env = import.meta.env
  
  return {
    sentryDsn: env.VITE_SENTRY_DSN || '',
    
    gaId: env.VITE_GA_MEASUREMENT_ID || '',
    ymId: env.VITE_YM_COUNTER_ID || '',
    
    apiBaseUrl: env.VITE_API_BASE_URL,
    debug: env.VITE_DEBUG === 'true',
    cdnUrl: env.VITE_CDN_URL,
    
    mode: env.MODE,
    isProd: env.PROD,
    isDev: env.DEV,
  }
}

export function validateEnv(): {
  isValid: boolean
  missing: string[]
} {
  const config = getEnvConfig()
  const missing: string[] = []
  
  if (!config.isProd) {
    return { isValid: true, missing: [] }
  }
  
  if (!config.sentryDsn) missing.push('VITE_SENTRY_DSN')
  if (!config.gaId) missing.push('VITE_GA_MEASUREMENT_ID')
  if (!config.ymId) missing.push('VITE_YM_COUNTER_ID')
  
  return {
    isValid: missing.length === 0,
    missing,
  }
}

export function logEnvConfig(): void {
  if (import.meta.env.DEV) {
    const config = getEnvConfig()
    
    console.group('🔧 Environment Configuration')
    console.log('Mode:', config.mode)
    console.log('Production:', config.isProd)
    console.log('Debug:', config.debug)
    console.log('Sentry:', config.sentryDsn ? '✅ Configured' : '❌ Not configured')
    console.log('GA:', config.gaId ? '✅ Configured' : '❌ Not configured')
    console.log('YM:', config.ymId ? '✅ Configured' : '❌ Not configured')
    if (config.apiBaseUrl) console.log('API:', config.apiBaseUrl)
    if (config.cdnUrl) console.log('CDN:', config.cdnUrl)
    console.groupEnd()
  }
}

export function getSafeEnvInfo(): Record<string, unknown> {
  const config = getEnvConfig()
  
  return {
    mode: config.mode,
    isProd: config.isProd,
    hasSentry: !!config.sentryDsn,
    hasGA: !!config.gaId,
    hasYM: !!config.ymId,
    debug: config.debug,
  }
}

export default getEnvConfig