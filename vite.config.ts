import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
  plugins: [
    { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) },
    tailwindcss(),
    tanstackStart({ srcDirectory: 'src' }),
    viteReact(),
    nitro(),
  ],
})
