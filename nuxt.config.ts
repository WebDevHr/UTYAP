// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-particles',
    'nuxt-swiper',
  ],
  plugins: [
    '~/plugins/gsap-plugin.js',
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/globals.css',
  ],
})
