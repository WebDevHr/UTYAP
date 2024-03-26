<script setup lang="ts">
  import {
    ChevronRightIcon,
    ChevronLeftIcon
  } from '@heroicons/vue/24/outline'
  

const swiper = useSwiper()

</script>

<template>
  <button @click="swiper.slideNext()" class="p-3 absolute z-[1000] bottom-7 right-2 md:right-4 xl:right-6 hover:bg-gray-800/40 rounded-full duration-300">
    <ChevronRightIcon class="h-5 w-5 flex-none" aria-hidden="true" />
  </button>
  <button @click="swiper.slidePrev()" class="p-3 absolute z-[1000] bottom-7 left-2 md:left-4 xl:left-6 hover:bg-gray-800/40 rounded-full duration-300">
    <ChevronLeftIcon class="h-5 w-5 flex-none" aria-hidden="true" />
  </button>
</template>