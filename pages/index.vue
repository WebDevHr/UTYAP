<template>
  <div>
    <div class="relative">
      <NuxtParticles id="tsparticles" :options="options" />
      <div
        class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-2 sm:px-6 lg:px-8 mb-10">
        <AudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-0 z-[1001]" />
        <HeroSection />
        <SliderComponent />
      </div>
    </div>

    <CardsComponent />
    <LazyLoad :threshold="0.2">
      <AboutUsCoomponent />
    </LazyLoad>

    <VisionMissionComponent />
    <PhotoGalleryComponent />
    <ContactUsComponent />

  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles.json'
import options2 from '~/assets/particles/particles-background.json'
import AudioPlayer from '~/components/homepage/AudioPlayer.vue';
import CardsComponent from '~/components/homepage/CardsComponent.vue';
import HeroSection from '~/components/homepage/HeroSection.vue';
import SliderComponent from '~/components/homepage/SliderComponent.vue';
import AboutUsCoomponent from '~/components/homepage/AboutUsCoomponent.vue';
import VisionMissionComponent from '~/components/homepage/VisionMissionComponent.vue';
import PhotoGalleryComponent from '~/components/homepage/PhotoGalleryComponent.vue';
import ContactUsComponent from '~/components/homepage/ContactUsComponent.vue';

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

const interstellar = ref('')
const loaded = ref(false)

onMounted(() => {
  interstellar.value = '/interstellar.Day-one(320).mp3'
  loaded.value = true
})

</script>
