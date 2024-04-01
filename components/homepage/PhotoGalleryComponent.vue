<template>
  <div class="text-white relative font-ubuntu">
    <NuxtParticles id="tsparticles3" :options="options2" />

    <div class="z-[100] bg-gradient-to-b to-transparent from-[#17163e] ">
      <div class="bg-gradient-to-t to-transparent from-[#17163e] sm:py-10 py-5">
        <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
          <div class="text-base lg:text-lg">
            <div class="mb-10 text-center lg:text-start">
              <h2 class="my-5">FOTOĞRAF GALERİSİ</h2>
              <p class="font-ubuntu font-light">Ekibimiz, etkinliklerimiz & yarışmalarımız </p>
            </div>
            <div class="flex flex-wrap gap-x-10 md:gap-y-10 gap-y-3 justify-center items-center">
              <div class="relative" v-for="(item, index) in gallery" :key="index">
                <img class="rounded-2xl max-w-[500px] max-h-[350px]" :src="item.src" alt="1">
                <div class="absolute w-full h-full rounded-2xl top-0 left-0 bg-black/40 hover:bg-transparent border-4 
                  border-gray-900 hover:border-transparent transition-all duration-300">
                  <div class="flex flex-col absolute bottom-0 p-5">
                    <h2> {{ item.title }} </h2>
                    <p class="md:text-base sm:text-sm text-xs font-extralight font-inter"> {{ item.description }} </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center my-5">
              <router-link to="#"
                class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold 
                py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500 lg:text-base md:text-sm text-xs">
                FOTOĞRAF GALERİSİ
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import options2 from '~/assets/particles/particles-background.json'
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

const gallery = [
  {
    title: 'UTYAP 2023',
    description: 'Daha fazla fotoğraf için aşağıdaki butona tıklayın!',
    src: '/pictures/utyap1.jpeg'
  },
  {
    title: 'UTYAP 2023',
    description: 'Daha fazla fotoğraf için aşağıdaki butona tıklayın!',
    src: '/pictures/utyap2.jpeg'
  },
  {
    title: 'UTYAP 2023',
    description: 'Daha fazla fotoğraf için aşağıdaki butona tıklayın!',
    src: '/pictures/utyap3.jpeg'
  },
  {
    title: 'UTYAP 2023',
    description: 'Daha fazla fotoğraf için aşağıdaki butona tıklayın!',
    src: '/pictures/utyap4.jpeg'
  },
  {
    title: 'UTYAP 2023',
    description: 'Daha fazla fotoğraf için aşağıdaki butona tıklayın!',
    src: '/pictures/utyap5.jpeg'
  },
]

</script>
