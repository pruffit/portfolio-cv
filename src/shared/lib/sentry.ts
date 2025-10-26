import * as Sentry from "@sentry/react";

export function initSentry() {
  const isProd = import.meta.env.PROD;
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  
  if (isProd && dsn) {
    Sentry.init({
      dsn,
      environment: import.meta.env.MODE,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      tracesSampleRate: 1.0,
      
      replaysSessionSampleRate: 0.1,
      
      replaysOnErrorSampleRate: 1.0,
      
      beforeSend(event) {
        if (event.request) {
          delete event.request.cookies;
        }
        return event;
      },
    });
  }
}

export function logError(error: Error, context?: Record<string, unknown>) {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, {
      extra: context,
    });
  } else {
    console.error('Error:', error, context);
  }
}