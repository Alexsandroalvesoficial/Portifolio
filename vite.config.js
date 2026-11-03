import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = fs.existsSync(path.resolve(__dirname, 'src/assets/images'))
  ? path.resolve(__dirname, 'src/assets/images')
  : path.resolve(__dirname, 'src/assets/imagens')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /(.*)\/assets\/images\/(.*)/,
        replacement: `${imagesDir}/$2`
      }
    ]
  }
})
