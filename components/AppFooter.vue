<template>
  <div>
    <!-- Footer -->
    <div class="relative">
      <NuxtParticles id="tsparticles5" :options="options" />
      <div class="background-gradient-navyblue-to-top">
        <div class="container font-sans mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 z-[100]">
          <div class="text-white flex flex-col md:flex-row md:my-14 sm:my-10 my-5">
            <div class="flex flex-col md:basis-1/3 w-full">
              <div class="flex justify-start m-10">
                <nuxt-link :to="{ name: 'index' }">
                  <img class="w-20 h-20" src="/assets/pictures/utyap-logo.png" alt="utyap-logo">
                </nuxt-link>
              </div>
              <div class=" font-extralight text-gray-400">
                Cumhuriyetimizin 100. yılında geleceğe açılan bir kapı:
                <br />
                Gazi Üniversitesi | Uzay Teknolojileri ve Yapay Zeka Topluluğu
              </div>
              <div class="links flex flex-row flex-wrap gap-x-1 my-10">
                <a href="https://www.linkedin.com/company/gaziutyap/?originalSubdomain=tr"
                  class="p-1 text-white/50 hover:text-white hover:translate-x-1 hover:-translate-y-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/gazi.utyap/"
                  class="p-1 text-white/50 hover:text-white hover:translate-x-1 hover:-translate-y-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                    <path fill="currentColor" fill-rule="evenodd"
                      d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                      clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@gaziutyap4707"
                  class="p-1 text-white/50 hover:text-white hover:translate-x-1 hover:-translate-y-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z" />
                  </svg>
                </a>
                <a href="https://chat.whatsapp.com/LxqN18IgXFLK6LjWyJUVQp"
                  class="p-1 text-white/50 hover:text-white hover:translate-x-1 hover:-translate-y-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a.961.961 0 0 0-.372.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.448 9.448 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.497.497 0 0 0-.176-.041a.482.482 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.43 1.43 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6.025 6.025 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.297 6.297 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" />
                  </svg>
                </a>
                <a href="https://discord.com/invite/qNWX9vx5Mn"
                  class="p-1 text-white/50 hover:text-white hover:translate-x-1 hover:-translate-y-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" />
                  </svg>
                </a>


              </div>
            </div>
            <div class="flex md:basis-2/3 md:pl-40 my-5">
              <div class="basis-1/2 flex flex-col">
                <h2 class="mb-10">LİNKLER</h2>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'index' }">Anasayfa</router-link>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'hakkimizda' }">Hakkımızda</router-link>
                <nuxt-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSczu_qUgivJdWK_xurMqQBwWctV5oR_bPEzm7tPUCKXGH1OVQ/viewform">
                  Aramıza Katıl
                </nuxt-link>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'under_construction' }">Projeler</router-link>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'under_construction' }">Etkinlikler</router-link>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'under_construction' }">Kariyer</router-link>
                <router-link
                  class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700 mb-4 w-[150px]"
                  :to="{ name: 'under_construction' }">Eğitim</router-link>
              </div>
              <div class="basis-1/2">
                <div class="md:w-[200px] flex flex-col gap-y-5">
                  <h2 class="mb-10">İLETİŞİM</h2>
                  <div
                    class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700">
                    Design and modified by
                    <nuxt-link class="text-blue-400 hover:text-blue-700" to="https://github.com/WebDevHr">
                      UTYAP Web Team
                    </nuxt-link>
                  </div>
                  <nuxt-link
                    class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700"
                    to="mailto:gazi.utyap@gmail.com?subject=Website:">
                    gazi.utyap@gmail.com
                  </nuxt-link>
                  <nuxt-link
                    class="font-extralight text-gray-400 hover:text-white hover:translate-x-1 hover:-translate-y-[2px] focus:text-blue-700"
                    to="mailto:info@example.com?subject=Website:">
                    info@utyap.com
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-gray-900 text-white py-8 text-sm sm:text-base md:text-lg">
        <div class="container mx-auto text-center font-bebasneue">
          UZAY TEKNOLOJİLERİ VE YAPAY ZEKA TOPLULUĞU © 2024 Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles-amongus.json'
import HeroSection from '~/components/homepage/HeroSection.vue';
import SliderComponent from '~/components/homepage/SliderComponent.vue';

import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles' // or whichever bundle you wish to use
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { loadLightInteraction } from 'tsparticles-interaction-light'
import { loadCanvasMaskPlugin } from "tsparticles-plugin-canvas-mask";
if (process.client) {
  // This example will BLOCK your application from rendering until the tsParticles library is initialized
  // You can put this in some other place if you know that you won't be loading particles until after the first paint
  await loadFull(tsParticles)
}
await loadPolygonPath(tsParticles)
await loadLightInteraction(tsParticles)
await loadCanvasMaskPlugin(tsParticles);
</script>