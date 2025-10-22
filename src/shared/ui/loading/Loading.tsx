import { motion } from 'motion/react'

export function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="size-4 rounded-full bg-primary"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
