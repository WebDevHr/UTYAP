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
        
        <SliderComponent />
      </div>
    </div>

    <CardsComponent />

    <div class="text-white relative font-ubuntu">
      <NuxtParticles
        id="tsparticles2"
        :options="options2"
      ></NuxtParticles>
      <div class="bg-black/50 pt-16 pb-8 select-none">
        <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 text-center">
        <h2 class="text-xl lg:text-3xl font-bold mb-4">UTYAP HAKKINDA</h2>
        <p class="text-md lg:text-lg mb-8 lg:mx-20 md:mx-10 mx-3 text-center font-thin">Utyap 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından kurulmuştur. 2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak yeni hedefler, yeni hayaller yolunda ilerlemeye başlamıştır.</p>
        <router-link to="#" class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500">DAHA FAZLA BİLGİ</router-link>
      </div>
      </div>
    </div>


    <div class="font-bebasneue tracking-wider select-none">
      <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 flex flex-col xl:flex-row gap-x-10 xl:h-[500px] mb-[100px]">
        <div class="xl:basis-1/2 flex xl:gap-x-20 gap-x-10 justify-center items-center bg-[url('/assets/pictures/laptop.png')] bg-cover h-[250px] xl:h-[350px] my-10 xl:my-0 w-[400px] xl:w-[350px] xl:mt-20">
          <img src="/assets/pictures/gazi-logo.png" alt="Utyap Logo" class="xl:w-[120px] xl:h-[120px] w-[80px] h-[80px]">
          <img src="/assets/pictures/utyap-logo.png" alt="Utyap Logo" class="xl:w-[120px] xl:h-[120px] w-[80px] h-[80px]">
        </div>
        <div class="xl:basis-1/2 flex flex-col h-[350px] container">
          <h2 class="font-bold text-xl lg:text-3xl my-4 tracking-wider">VİZYONUMUZ | MİSYONUMUZ</h2>
          <p class="text-md font-thin text-gray-500 leading-loose font-ubuntu text-justify">
            UTYAP ekibi olarak genç neslin; sürdürülebilirliği özümseyip teknoloji ve girişimcilikle birleştirerek 
            çevrelerinde en güçlü etkiyi yaratan motivasyonları yüksek, genç, bilgili, yetenekli girişimciler yetişmesini; 
            ülke ekonomisini sürdürülebilir fikirlerle güçlendirmelerini hedeflemekteyiz.
          </p>
          <div class="flex flex-wrap gap-y-10 my-10">
            <div class="basis-1/2 flex flex-row justify-start items-center gap-x-5 pr-5">
              <FaceSmileIcon class="h-10 w-10 flex-none text-blue-900"/>
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>200</strong></div>
                <div>
                  <strong>Kişiye</strong> ulaştık
                </div>
              </div>
            </div>
            <div class="basis-1/2 flex flex-row justify-start items-center gap-x-5 pr-5">
              <BriefcaseIcon class="h-10 w-10 flex-none text-blue-900"/>
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>100</strong></div>
                <div>
                  <strong>Organizasyon</strong> planladık
                </div>
              </div>
            </div>
            <div class="basis-1/2 flex flex-row justify-start items-center gap-x-5 pr-5">
              <ClockIcon class="h-10 w-10 flex-none text-blue-900"/>
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>25</strong></div>
                <div>
                  <strong>Partner toplulukla</strong> etki bırakmak için yola çıktık
                </div>
              </div>
            </div>
            <div class="basis-1/2 flex flex-row justify-start items-center gap-x-5 pr-5">
              <PresentationChartBarIcon class="h-10 w-10 flex-none text-blue-900"/>
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>50</strong></div>
                <div class="">
                  <strong>Mentor-juri-eğitmen</strong> daha büyük etkiler için bizimle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
  
<script setup>
import {
FaceSmileIcon,
ClockIcon,
PresentationChartBarIcon,
BriefcaseIcon
} from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'
import options from '~/assets/particles/particles.json'
import options2 from '~/assets/particles/particles-parallax.json'
import AudioPlayer from '~/components/homepage/AudioPlayer.vue';
import CardsComponent from '~/components/homepage/CardsComponent.vue';
import HeroSection from '~/components/homepage/HeroSection.vue';
import SliderComponent from '~/components/homepage/SliderComponent.vue';

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

