<script setup>
  import SwiperControls from '~/components/SwiperControls.vue'

  const slides = ref(Array.from({ length: 5 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    // const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'
    const contrast = 'black';

    return { bg: `rgb(${255}, ${255}, ${255})`, color: contrast }
  }))
</script>

<template>
  <div class="overflow-hidden md:overflow-visible">
    <!-- <Swiper
      :height="500"
      class="w-full rounded my-10"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperParallax, SwiperScrollbar]"
      :slides-per-view="2"
      :scrollbar="true"
      :loop="true"
      :effect="'creative'"
      :parallax="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
      >
      <div class="card max-w-sm rounded overflow-hidden shadow-md h-[300px]">
        <div class="px-6 py-4">
          <div class="h-48 overflow-hidden">
            <img class="w-full object-cover" :src="`pictures/${idx}.jpg`" :alt="idx" /> 
          </div>
          <div class="font-bold text-xl mb-2 mt-2">
            haber {{ idx }}
          </div>
          <p class="text-gray-700 text-base">
            description
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news</span>
        </div>
      </div>
      </SwiperSlide>

      <SwiperControls />
    </Swiper> -->
    <Swiper
      class="swiper-cards xl:w-[600px] lg:w-[500px] md:w-[400px] sm:w-[300px] w-[250px] shadow rounded-md"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        class="bg-white rounded-md py-4"
      >
        <div class="card overflow-hidden mx-6 border rounded-md">
          <div>
            <div class="max-h-56 overflow-hidden rounded-t-md">
              <img class="w-full object-cover" :src="`pictures/${idx}.jpg`" :alt="idx" /> 
            </div>
            <div class="lg:px-12 px-4">
              <div class="font-bold text-xl mb-2 mt-6">
                Başvurular alınıyor!!!
              </div>
              <p class="text-sm font-light text-justify">
                Utyap yeni uyelerini ariyor. Sizde aramizda olmak istersiniz , hemen bavuru yapin ve ekiplerimize dahil olun.
              </p>
            </div>
          </div>
          <div class="flex justify-start my-5 mx-14">
            <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news</span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperControls />
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}


</style>
