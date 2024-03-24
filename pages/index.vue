<template>
  <div>
    <div class="relative">
      <NuxtParticles
        id="tsparticles"
        :options="options"
      ></NuxtParticles>
      <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10">
        <AudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-0 z-[1001]"/>

        <HeroSection />
        
        <BaseSlider />
      </div>
    </div>

    <CardsComponent />

    <div class="text-white relative">
      <NuxtParticles
        id="tsparticles2"
        :options="options2"
      ></NuxtParticles>
      <div class="bg-black/40 pt-16 pb-8">
        <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 text-center">
        <h2 class="text-xl lg:text-3xl font-bold mb-4">UTYAP HAKKINDA</h2>
        <p class="text-md lg:text-lg mb-8 lg:mx-20 md:mx-10 mx-3 text-justify">Utyap 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından kurulmuştur. 2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak yeni hedefler, yeni hayaller yolunda ilerlemeye başlamıştır.</p>
        <router-link to="#" class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500">DAHA FAZLA BİLGİ</router-link>
      </div>
      </div>
    </div>


    <div>
      <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
        hello
      </div>
    </div>
    
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles.json'
import options2 from '~/assets/particles/particles-parallax.json'
import AudioPlayer from '~/components/AudioPlayer.vue';
import CardsComponent from '~/components/CardsComponent.vue';
import HeroSection from '~/components/HeroSection.vue';
import BaseSlider from '~/components/BaseSlider.vue';

import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles' // or whichever bundle you wish to use
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { loadLightInteraction } from 'tsparticles-interaction-light'
if (process.client) {
  // This example will BLOCK your application from rendering until the tsParticles library is initialized
  // You can put this in some other place if you know that you won't be loading particles until after the first paint
  await loadFull(tsParticles)
}
await loadPolygonPath(tsParticles)
await loadLightInteraction(tsParticles)

const interstellar = ref('')
const loaded = ref(false)

onMounted(() => {
  interstellar.value = '/interstellar.Day-one(320).mp3'
  loaded.value = true
})

</script>

