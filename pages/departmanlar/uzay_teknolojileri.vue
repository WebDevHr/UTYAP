<template>
    <div>
        <div class="pt-[100px] w-full h-[800px] relative">
            <div class="w-full h-full bg-[#07162e] absolute -z-20 top-0 left-0"></div>
            <div class="absolute top-0 right-0 xl:w-[40%] lg:w-1/2 md:w-[55%] w-full h-[800px]">
                <NuxtParticles id="tsparticles" :options="options"></NuxtParticles>
            </div>
            <div class="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8 rounded">
                <div class="grid grid-flow-row-dense grid-cols-5 grid-rows-3 mt-[300px] text-white">
                    <div class="col-span-2">
                        <h1 class="text-5xl font-extrabold leading-normal font-inter">
                            Uzay Teknolojileri Departmanı
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import options from '~/assets/particles/particles-polygon-mask-rocket.json'

import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles' // or whichever bundle you wish to use
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { loadLightInteraction } from 'tsparticles-interaction-light'
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask'
if (process.client) {
    // This example will BLOCK your application from rendering until the tsParticles library is initialized
    // You can put this in some other place if you know that you won't be loading particles until after the first paint
    await loadFull(tsParticles)
}
await loadPolygonPath(tsParticles)
await loadLightInteraction(tsParticles)
await loadPolygonMaskPlugin(tsParticles);


</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>