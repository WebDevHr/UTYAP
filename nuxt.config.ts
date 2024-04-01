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
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel : 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
      ]
    }
  },
})