<template>
  <div>
    <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10">
      <NuxtParticles
        id="tsparticles"
        :options="options"
      ></NuxtParticles>

      <!--Audioplayer-->
      <AudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-5 z-[1001]"/>

      <!-- Hero Section -->
      <HeroSection />

      <h1 class="font-bold text-white lg:text-[40px] md:text-[30px] text-[24px] flex justify-center items-center underline mb-10">
        Haberler
      </h1>
      <BaseSlider />
    </div>

    <div class=" bg-white">
      <!-- Features Section -->
      <div class="font-sans mx-auto max-w-7xl items-center justify-between py-4">

		

        <section class="py-16">
          <h1 class="text-[30px] flex justify-center">
            Detaylı Bilgi | Aramıza Katıl!
          </h1>
          
        </section>

        <!-- Call to Action -->
        <section class="bg-blue-500 text-white py-16">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p class="text-lg mb-8">Sign up now and experience the difference.</p>
            <router-link to="#" class="bg-white text-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-full inline-block">Sign Up</router-link>
          </div>
        </section>

      </div>
    </div>
    <div class="bg-black">
      <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
      hello
    </div>
    </div>
    
  </div>
</template>
  
<script setup>
import options from '~/assets/particles.json'
import AudioPlayer from '~/components/AudioPlayer.vue';
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

