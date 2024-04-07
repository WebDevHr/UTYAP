<template>
  <div class="bg-[url('/pictures/cards.jpg')] bg-fixed bg-cover bg-center">
    <div class="background-gradient-navyblue-to-bottom ">
      <div class="background-gradient-navyblue-to-top">
        <!-- Features Section -->
        <div class="font-sans mx-auto max-w-7xl items-center justify-between py-4 overflow-hidden">

          <section class="py-0 md:py-10">
            <h2 class="flex justify-center py-10 text-white">
              Detaylı Bilgi | Aramıza Katıl!
            </h2>
            <div class="flex xl:gap-x-10 flex-col xl:flex-row mx-3 md:mx-10 justify-center relative items-center">
              <div ref="cardToHover"
                class="cardToHover card max-w-[350px] md:w-[350px] rounded overflow-hidden py-5 lg:py-10 text-center w-full"
                v-for="(cartInfo, index) in cartInfos" :key="index" @mouseenter="cardHover"
                @mouseleave="cardHoverLeave">

                <div class="shadow-lg border rounded-3xl overflow-hidden bg-gray-100 relative">
                  <div class="applyButton absolute -top-[12px] items-center  justify-center md:w-[350px] hidden w-full">
                    <nuxt-link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSczu_qUgivJdWK_xurMqQBwWctV5oR_bPEzm7tPUCKXGH1OVQ/viewform">
                      <BaseComponentsBaseButton :type="`submit`" class="mt-3">HEMEN BAŞVUR</BaseComponentsBaseButton>
                    </nuxt-link>
                  </div>
                  <img :src="cartInfo.imgSrc" :alt="cartInfo.imgSrc" class="h-[215px] w-full object-cover">
                  <div class="cardBody p-5 bg-gray-100 h-[300px]">
                    <h1 class="text-sm xs:text-base font-bold h-[55px] overflow-hidden mt-5">
                      {{ cartInfo.title }}
                    </h1>
                    <h4 class="font-light text-sm sm:text-base h-[50px] mb-3">
                      {{ cartInfo.subtitle }}
                    </h4>
                    <nuxt-link :to="cartInfo.link.source"
                      class="flex justify-center gap-x-2 items-center text-xs font-semibold hover:text-blue-500 duration-300">
                      <LinkIcon class="h-3 w-3" aria-hidden="true" />
                      {{ cartInfo.link.text }}
                    </nuxt-link>

                    <div class="cards gap-x-3 mx-5 hidden">
                      <div v-for="(card, index) in cartInfo.cards"
                        class="bg-white p-3 sm:p-5 flex-auto flex flex-col items-center font-inter rounded-lg my-5"
                        :class="[card.icon === 'exclamation' ? 'text-orange-300' : 'text-blue-950']">
                        <CalendarDaysIcon v-if="card.icon === 'calender'" class="h-5 w-5 flex-none"
                          aria-hidden="true" />
                        <ExclamationCircleIcon v-else class="h-5 w-5 flex-none" aria-hidden="true" />
                        <p class="sm:text-xs text-[11px] font-semibold mt-3">
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
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import {
  CalendarDaysIcon,
  ExclamationCircleIcon,
  LinkIcon
} from '@heroicons/vue/24/outline'

const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work

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
    imgSrc: '/pictures/card1.jpg',
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
    imgSrc: '/pictures/card2.jpg',
    title: 'EĞİTMEN, JÜRİ, KONUŞMACI & MENTOR OLARAK BEN DE VARIM!',
    subtitle: 'Sizi aramızda görmeyi çok isteriz.',
    link: {
      source: 'https://www.instagram.com/gazi.utyap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
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
    imgSrc: '/pictures/card3.jpg',
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


<style scoped></style>