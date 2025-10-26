import { useEffect, useState, useCallback } from 'react'

interface WindowSize {
  width: number
  height: number
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    let timeoutId: number

    const debouncedHandleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(handleResize, 150)
    }

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [handleResize])

  return windowSize
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}