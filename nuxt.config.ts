// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-particles', 'nuxt-swiper', "@nuxt/fonts"],
  plugins: [
    '~/plugins/gsap-plugin.js',
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/globals.css',
    'animate.css/animate.min.css'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})