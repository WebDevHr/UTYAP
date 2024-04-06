<template>
    <div class="background-gradient-navyblue-to-top relative">
        <NuxtParticles id="tsparticles10" :options="options" />
        <div class="font-ubuntu text-white">
            <div class="mx-auto flex max-w-7xl h-[700px] items-center justify-center px-6 lg:px-8">
                <div class="flex justify-center w-full h-[200px] items-center select-none flex-col-reverse gap-y-10">
                    <h2 class="animate__animated animate__jello animate__infinite animate__slower">
                        Çok Yakında
                    </h2>
                    <WrenchScrewdriverIcon
                        class="h-[80px] w-[80px] animate__animated animate__swing animate__infinite animate__slower "
                        aria-hidden="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles-nasa-under-construction.json'

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