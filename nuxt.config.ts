// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles'
  ],
  plugins: [
    '~/plugins/gsap-plugin.js'
  ],
  css: [
    '~/assets/css/main.css',
  ],
})
