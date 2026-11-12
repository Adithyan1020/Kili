// Injects the server-rendered app into dist/index.html so the full page
// content is present in the HTML (for search engines and social crawlers).
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrDir = path.join(root, 'dist-ssr');
const htmlPath = path.join(root, 'dist', 'index.html');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const html = await readFile(htmlPath, 'utf8');

if (!html.includes('<!--app-html-->')) {
  throw new Error('prerender: <!--app-html--> placeholder not found in dist/index.html');
}

await writeFile(htmlPath, html.replace('<!--app-html-->', render()));
await rm(ssrDir, { recursive: true, force: true });
console.log('prerender: dist/index.html populated');
