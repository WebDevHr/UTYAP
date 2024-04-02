<template>
  <div>
    <div class="relative bg-gradient-to-t from-black to-transparent pb-20">
      <NuxtParticles id="tsparticles" :options="options" />
      <div
        class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-2 sm:px-6 lg:px-8 pb-10">
        <LazyHomepageAudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-0 z-[1001]" />
        <HeroSection />
        <SliderComponent />
      </div>
    </div>

    <LazyHomepageCardsComponent />
    <LazyHomepageAboutUsComponent />

    <LazyHomepageVisionMissionComponent />
    <LazyHomepagePhotoGalleryComponent />
    <LazyHomepageContactUsComponent id="iletisim" />
    <LazyHomepageGoogleMapComponent />

  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles.json'
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

const interstellar = ref('')
const loaded = ref(false)

onMounted(() => {
  interstellar.value = '/interstellar.Day-one(320).mp3'
  loaded.value = true
})

</script>
