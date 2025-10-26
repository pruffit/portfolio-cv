import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'
import { logError } from './sentry'

interface AnalyticsEvent {
  name: string
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

function sendToAnalytics(metric: Metric) {
  const event: AnalyticsEvent = {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    rating: metric.rating,
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }

  if (typeof window !== 'undefined' && window.ym) {
    const counterId = '104854629'
    window.ym(counterId, 'reachGoal', 'web-vitals', {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
    })
  }

  if (metric.rating === 'poor') {
    logError(new Error(`Poor Web Vital: ${metric.name}`), {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
    })
  }

  if (import.meta.env.DEV) {
    console.log('Web Vital:', event)
  }
}

export function initWebVitals() {
  if (import.meta.env.PROD) {
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics)
  }
}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      params?: Record<string, string | number | boolean>
    ) => void
    ym?: (
      counter: number | string,
      method: 'reachGoal' | 'hit' | 'params',
      ...params: (string | Record<string, string | number | boolean>)[]
    ) => void
  }
}