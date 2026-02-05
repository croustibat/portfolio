import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [glsl()],
  base: '/lab/',
  build: {
    outDir: '../public/lab',
    emptyOutDir: true,
  },
})
