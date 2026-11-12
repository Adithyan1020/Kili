import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used only at build time to pre-render the page to static HTML for crawlers
// and fast first paint. CSS/fonts are handled by the client build.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
