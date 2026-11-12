import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './fonts.css'
import './index.css'
import './legacy.css' // temporary, removed once every section is redesigned
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds are pre-rendered to static HTML (see scripts/prerender.mjs),
// so hydrate that markup; in dev the root is empty and we render from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
