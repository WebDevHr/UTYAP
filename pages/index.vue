<template>
  <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
    <NuxtParticles
      id="tsparticles"
      :options="options"
    ></NuxtParticles>

    <!-- Hero Section -->
    <header class="bg-transparent text-white pb-16 pt-48">
      <div class="container mx-auto text-center">
        <div class="flex justify-center">
          <h1 class="text-6xl font-bold mb-4" style="width: 500px;">UZAY TEKNOLOJİLERİ VE YAPAY ZEKA TOPLULUĞU</h1>
        </div>
        <p class="text-lg">Gazi universitesinin, tek uzay teknolojileri toplulugu</p>
        <router-link to="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded-full inline-block">Get Started</router-link>
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Key Features</h2>

        <div class="flex flex-wrap -mx-4">
          <!-- Feature Item 1 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Feature Item 2 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Feature Item 3 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-blue-500 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-lg mb-8">Sign up now and experience the difference.</p>
        <router-link to="#" class="bg-white text-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-full inline-block">Sign Up</router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
  
<script setup>
import options from '~/assets/particles.json'

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


</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>
