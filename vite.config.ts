import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const useHash = false
const isThinPackage = false
const libName = ('ReactRouterTest' + (isThinPackage ? 'Thin' : '')).trim()

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  define: {
    'process.env': { NODE_ENV: 'production' },
  },
  build: {
    lib: {
      entry: 'src/elma.tsx',
      name: libName,
      formats: ['umd'],
      fileName: format => `${libName}${useHash ? '-[hash]' : ''}.${format}.js`,
    },
    rollupOptions: {
      external: isThinPackage ? ['react', 'react-dom'] : '',
      output: {
        assetFileNames: `${libName}${useHash ? '-[hash]' : ''}.[ext]`,
        globals: isThinPackage
          ? {
              react: 'React',
              'react-dom': 'ReactDOM',
            }
          : {},
      },
    },
  },
})
