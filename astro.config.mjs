import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://nguyenhaminhtuan.github.io',
  integrations: [
    tailwind(),
    react(),
    image({serviceEntryPoint: '@astrojs/image/sharp'}),
  ],
})
