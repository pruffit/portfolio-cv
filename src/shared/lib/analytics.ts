export function initAnalytics() {
  const isProd = import.meta.env.PROD
  
  if (!isProd) {
    console.log('Analytics: disabled in development mode')
    return
  }

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (gaId && gaId !== '') {
    initGoogleAnalytics(gaId)
  } else {
    console.log('Google Analytics: not initialized (no measurement ID)')
  }

  const ymId = import.meta.env.VITE_YM_COUNTER_ID
  if (ymId && ymId !== '') {
    initYandexMetrika(ymId)
  } else {
    console.log('Yandex Metrika: not initialized (no counter ID)')
  }
}

function initGoogleAnalytics(measurementId: string) {
  try {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
    window.gtag = gtag as typeof window.gtag
    
    gtag('js', new Date())
    gtag('config', measurementId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    })

    if (import.meta.env.DEV) {
      console.log('Google Analytics: initialized successfully', measurementId)
    }
  } catch (error) {
    console.error('Google Analytics: initialization failed', error)
  }
}

function initYandexMetrika(counterId: string) {
  try {
    ;(function(m, e, t, r, i, k, a) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
      }
      m[i].l = 1 * new Date().getTime()
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j]?.src === r) {
          return
        }
      }
      k = e.createElement(t)
      a = e.getElementsByTagName(t)[0]
      k.async = 1
      k.src = r
      a?.parentNode?.insertBefore(k, a)
    })(
      window,
      document,
      'script',
      'https://mc.yandex.ru/metrika/tag.js',
      'ym'
    )

    window.ym?.(counterId, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })

    const noscript = document.createElement('noscript')
    const img = document.createElement('img')
    img.src = `https://mc.yandex.ru/watch/${counterId}`
    img.style.position = 'absolute'
    img.style.left = '-9999px'
    img.alt = ''
    noscript.appendChild(img)
    document.body.appendChild(noscript)

    if (import.meta.env.DEV) {
      console.log('Yandex Metrika: initialized successfully', counterId)
    }
  } catch (error) {
    console.error('Yandex Metrika: initialization failed', error)
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: 'config' | 'set' | 'event' | 'js',
      targetIdOrDate: string | Date,
      params?: Record<string, string | number | boolean>
    ) => void
    ym?: (
      counter: number | string,
      method: 'init' | 'reachGoal' | 'hit' | 'params',
      ...params: (string | Record<string, unknown>)[]
    ) => void
  }
}

export {}