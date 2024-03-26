<script setup>
  import SwiperControls from '~/components/homepage/SwiperControls.vue'

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
  <div>
    <h2 class="font-semibold text-white lg:text-[40px] md:text-[30px] text-[24px] flex justify-center items-center mb-10">
      Haberler
    </h2>
    <div class="overflow-hidden md:overflow-visible mb-10">
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
        class="swiper-cards xl:w-[700px] lg:w-[550px] md:w-[450px] sm:w-[400px] w-[296px] shadow rounded-md"
        :modules="[SwiperAutoplay, SwiperEffectCube, SwiperParallax, SwiperA11y]"
        :slides-per-view="1"
        :loop="true"
        :parallax="true"
        :speed="800"
        :mousewheel="true"
        :a11y="true"
        effect="cube"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true
        }"
      >
        <SwiperSlide
          v-for="(slide, idx) in slides"
          :key="idx"
          class="bg-white rounded-md py-2 md:py-4"
        >
          <div class="card overflow-hidden mx-2 md:mx-4 rounded-md select-none">
            <div>
              <div class="max-h-56 overflow-hidden rounded-t-md" data-swiper-parallax="-200" >
                <img class="w-full object-cover" :src="`pictures/${idx}.jpg`" :alt="idx" /> 
              </div>
              <div class="lg:px-12 px-4" data-swiper-parallax="-800" data-swiper-parallax-opacity="0.5">
                <div class="font-bold text-xl mb-2 mt-6">
                  Başvurular alınıyor!!!
                </div>
                <p class="text-sm font-light text-justify">
                  Utyap yeni uyelerini ariyor. Sizde aramizda olmak istersiniz , hemen bavuru yapin ve ekiplerimize dahil olun.
                </p>
              </div>
            </div>
            <div class="flex justify-start my-5 mx-14" data-swiper-parallax="-1000" data-swiper-parallax-opacity="0">
              <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperControls />
      </Swiper>
    </div>
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
