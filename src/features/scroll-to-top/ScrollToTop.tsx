import { useState, useEffect } from 'react'
import { Button } from '@/shared/ui/button'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-40 md:bottom-8 md:right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg md:size-12"
            aria-label="Scroll to top"
          >
            <ArrowUp className="size-4 md:size-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
