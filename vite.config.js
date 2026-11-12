import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The two font files (both used in the hero's first paint). Preloading them means the text
// usually appears in its real font straight away instead of swapping in late
// (which shifts the layout and hurts CLS).
const CRITICAL_FONTS = [
  /manrope-latin-wght-normal-.*\.woff2$/, // all text (variable font)
  /ibm-plex-mono-latin-500-normal-.*\.woff2$/, // hero split-flap + board
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
