import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type ConfigEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  base: mode === 'production' ? '/portfolio-cv/' : '/',
  
  plugins: [
    react({
      babel: {
        plugins: mode === 'production' 
          ? [['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]]
          : [],
      },
    }),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode !== 'production',
    minify: 'terser',
    
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion'],
          'vendor-i18n': ['i18next', 'react-i18next'],
          'vendor-ui': ['@radix-ui/react-slot', 'lucide-react'],
          'vendor-carousel': ['embla-carousel-react'],
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''
          const ext = name.split('.').pop() || ''
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]'
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    
    chunkSizeWarningLimit: 1000,
  },
  
  esbuild: mode === 'production' ? {
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info', 'console.debug'],
  } : undefined,
  
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  preview: {
    port: 4173,
    open: true,
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      'i18next',
      'motion',
      'lucide-react',
    ],
  },
}))