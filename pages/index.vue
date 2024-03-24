<template>
  <div>
    <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 ">
      <NuxtParticles
        id="tsparticles"
        :options="options"
      ></NuxtParticles>

      <AudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-0 z-[1001]"/>

      <HeroSection />
      
      <BaseSlider />
    </div>

    <CardsComponent />
    <div class="bg-black">
      <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
        hello
      </div>
    </div>
    
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles.json'
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

