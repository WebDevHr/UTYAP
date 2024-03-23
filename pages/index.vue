<template>
  <div>
    <div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 ">
      <NuxtParticles
        id="tsparticles"
        :options="options"
      ></NuxtParticles>

      <!--Audioplayer-->
      <AudioPlayer :audioSrc="interstellar" :autoplay="loaded" class="fixed bottom-5 right-0 z-[1001]"/>

      <!-- Hero Section -->
      <HeroSection />

      <h1 class="font-semibold text-white lg:text-[40px] md:text-[30px] text-[24px] flex justify-center items-center underline mb-10">
        Haberler
      </h1>
      <BaseSlider />
    </div>

    <div class=" bg-white">
      <!-- Features Section -->
      <div class="font-sans mx-auto max-w-7xl items-center justify-between py-4">

        <section class="py-16">
          <h1 class="text-[20px] md:text-[30px]  font-semibold flex justify-center underline py-10">
            Detaylı Bilgi | Aramıza Katıl!
          </h1>
          <div class="flex xl:gap-x-10 flex-col xl:flex-row mx-10 justify-center relative items-center">
            <div 
              ref="cardToHover" 
              class="cardToHover card w-[350px] rounded overflow-hidden py-10 text-center" 
              v-for="(cartInfo, index) in cartInfos" 
              :key="index" 
              @mouseenter="cardHover"
              @mouseleave="cardHoverLeave"
            >
              
              <div class="shadow-lg border rounded-3xl overflow-hidden bg-gray-100">
                <div class="applyButton absolute top-[30px] justify-center w-[350px] hidden">
                  <button class=" px-5 py-3 my-2 border-2 border-gray-500 hover:border-white rounded-3xl bg-white/50 hover:bg-white font-semibold duration-300 text-gray-500 hover:text-gray-700">Hemen başvur</button>
                </div>
                <img :src="cartInfo.imgSrc" :alt="cartInfo.imgSrc" class="h-[215px] object-cover">
                <div class="cardBody p-5 bg-gray-100 h-[300px]">
                  <h1 class="text-md font-bold h-[55px] overflow-hidden mt-5">
                    {{ cartInfo.title }}
                  </h1>
                  <h4 class="font-light text-base h-[50px] mb-3">
                    {{ cartInfo.subtitle }}
                  </h4>
                  <nuxt-link 
                    :to="cartInfo.link.source" 
                    class="flex justify-center gap-x-2 items-center text-xs font-semibold hover:text-blue-950 duration-300"
                  >
                     <LinkIcon class="h-3 w-3" aria-hidden="true" />
                      {{ cartInfo.link.text }}
                  </nuxt-link>

                  <div class="cards gap-x-3 mx-5 hidden">
                    <div 
                      v-for="(card, index) in cartInfo.cards" 
                      class="bg-white p-5 flex-auto flex flex-col items-center justify-center rounded-lg my-5"
                      :class="[card.icon === 'exclamation' ? 'text-orange-300' : 'text-blue-950']"
                    >
                      <CalendarDaysIcon v-if="card.icon === 'calender'" class="h-5 w-5 flex-none" aria-hidden="true"/>
                      <ExclamationCircleIcon v-else class="h-5 w-5 flex-none" aria-hidden="true"/>
                      <p class="text-xs font-semibold mt-3" >
                        {{ card.description }}
                      </p>
                    </div>  
                  </div>

                  <p class="description text-xs text-justify h-[70px] hidden">
                    {{ cartInfo.description }}
                  </p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import options from '~/assets/particles.json'
import AudioPlayer from '~/components/AudioPlayer.vue';
import HeroSection from '~/components/HeroSection.vue';
import BaseSlider from '~/components/BaseSlider.vue';

  import {
    CalendarDaysIcon,
    ExclamationCircleIcon,
    LinkIcon
  } from '@heroicons/vue/24/outline'

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

const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work

const interstellar = ref('')
const loaded = ref(false)

onMounted(() => {
  interstellar.value = '/interstellar.Day-one(320).mp3'
  loaded.value = true
})


function cardHover(event) {
  const card = event.currentTarget; // Get the card being hovered
  const description = card.querySelector('.description');
  const hiddenInfo = card.querySelector('.cards');
  const cardBody = card.querySelector('.cardBody');
  const applyButton = card.querySelector('.applyButton');

  gsap.to([description, hiddenInfo], { 
    opacity: 1, 
    duration: 0.3, 
    display: 'flex', // Show the hidden info with flexbox
    ease: 'power1.out' 
  });

  gsap.to([cardBody], { 
    y: '-150px', // Adjust the upward movement as needed
    duration: 0.3, 
    ease: 'power1.out' 
  });

  gsap.to([applyButton], { 
    display: 'flex',
    opacity: 1,
    y: '10px', // Adjust the upward movement as needed
    duration: 0.3, 
    ease: 'power1.out' 
  });
  
}
function cardHoverLeave(event) {
  const card = event.currentTarget; // Get the card being hovered
  const description = card.querySelector('.description');
  const hiddenInfo = card.querySelector('.cards');
  const cardBody = card.querySelector('.cardBody');
  const applyButton = card.querySelector('.applyButton');

  gsap.to([description, hiddenInfo], { 
    opacity: 0, 
    duration: 0.3, 
    display: 'none', // Show the hidden info with flexbox
    ease: 'power1.out' 
  });

  gsap.to([cardBody], { 
    y: '0px', // Adjust the upward movement as needed
    duration: 0.3, 
    ease: 'power1.out' 
  });

  gsap.to([applyButton], { 
    display: 'none',
    opacity: 0,
    y: '0px', // Adjust the upward movement as needed
    duration: 0.3, 
    ease: 'power1.out' 
  });
}


const cartInfos = [
  {
    imgSrc: '/pictures/1.jpg',
    title: 'DESTEKÇİ OLARAK BEN DE VARIM!',
    subtitle: 'Sizi sponsor olarak aramızda görmeyi çok isteriz.',
    link: {
      source: 'https://www.instagram.com/gazi.utyap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      text: 'Bizi Takip Edin!'
    },
    cards: [
      {
        icon: 'exclamation',
        description: 'Etkinlikler, eğitimler ve yarışmalar düzenliyoruz!',
        color: 'orange'
      },
      {
        icon: 'calender',
        description: '2022\'den beri bu vizyon ve misyonda çalışıyoruz.'
      },
    ],
    description: 'Aramıza katılmak ve bizimle bu heyecanı yaşamak ister misiniz? Bunun için "Hemen Başvur" butonuna tıklamanız ve başvuru formunu doldurmanız yeterli!'
  },
  {
    imgSrc: '/pictures/2.jpg',
    title: 'EĞİTMEN, JÜRİ, KONUŞMACI & MENTOR OLARAK BEN DE VARIM!',
    subtitle: 'Sizi aramızda görmeyi çok isteriz.',
    link: {
      source: '#',
      text: 'Geçmiş mentorlar ve süreç hakkında bilgi'
    },
    cards: [
      {
        icon: 'exclamation',
        description: 'Etkinlikler, eğitimler ve yarışmalar düzenliyoruz!'
      },
      {
        icon: 'calender',
        description: '2022\'den beri bu vizyon ve misyonda çalışıyoruz.'
      },
    ],
    description: 'Bizimle çalışmak ister misiniz? Bunun için "Hemen Başvur" butonuna tıklamanız ve başvuru formunu doldurmanız yeterli!'
  },
  {
    imgSrc: '/pictures/4.jpg',
    title: 'PARTNER TOPLULUK OLARAK BİZ DE VARIZ!',
    subtitle: 'Sizi aramızda görmeyi çok isteriz.',
    link: {
      source: 'https://www.instagram.com/gazi.utyap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      text: 'Bizi Takip Edin!'
    },
    cards: [
      {
        icon: 'exclamation',
        description: 'Etkinlikler, eğitimler ve yarışmalar düzenliyoruz!'
      },
      {
        icon: 'calender',
        description: '2022\'den beri bu vizyon ve misyonda çalışıyoruz.'
      },
    ],
    description: 'Bizimle çalışmak ister misiniz? Bunun için "Bilgi Al" butonuna tıklamanız ve açılan sayfadaki başvuru formunu doldurmanız yeterli!'
  }
]


</script>

<style scoped>

</style>
