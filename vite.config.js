import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fonts the hero renders in its first paint. Preloading them means the text
// usually appears in its real font straight away instead of swapping in late
// (which shifts the layout and hurts CLS).
const CRITICAL_FONTS = [
  /poppins-latin-800-normal-.*\.woff2$/, // hero title
  /poppins-latin-600-normal-.*\.woff2$/, // hero title, second line
  /manrope-latin-400-normal-.*\.woff2$/, // hero subtitle + copy
  /ibm-plex-mono-latin-500-normal-.*\.woff2$/, // kicker, buttons
]

function preloadCriticalFonts() {
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return
      const files = Object.keys(ctx.bundle)
      return CRITICAL_FONTS.flatMap((re) => {
        const file = files.find((f) => re.test(f))
        return file
          ? [{
              tag: 'link',
              attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file}`, crossorigin: '' },
              injectTo: 'head',
            }]
          : []
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadCriticalFonts()],
})
