<template>
    <div class="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-[100px]">
            <div class="col-span-2 border">
                <NuxtParticles
                id="tsparticles"
                :options="options"
                ></NuxtParticles>
                <h1 class="pt-32 font-sans text-5xl/normal font-bold text-white max-w-[600px]">İnsanların bağlantı kurma şeklini değiştiriyoruz.</h1>
                <h2 class="text-2xl/relaxed font-normal text-white">
                    Utyap 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından kurulmuştur.

                    2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak yeni hedefler, yeni hayaller yolunda ilerlemeye başlamıştır.
                </h2>
            </div>
            <div class="col-span-1 border"></div>
        </div>
    </div>
</template>


<script setup>
import options from '~/assets/particles2.json'

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