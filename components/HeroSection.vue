<template>
    <header class="bg-transparent text-white pb-48 pt-48">
        <div class="container mx-auto text-center select-none">
          <div class="flex justify-center">
            <h1 class="sm:text-6xl text-3xl font-bold mb-4 sm:max-w-[500px] max-w-[250px]">UZAY TEKNOLOJİLERİ VE YAPAY ZEKA TOPLULUĞU</h1>
          </div>
          <p class="sm:text-lg text-sm">Gazi universitesinin, tek uzay teknolojileri toplulugu</p>
          <router-link to="#" 
            class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500"
          >
            <div class="flex justify-center items-center gap-x-1 text-sm sm:text-base">
              Ekiplerimiz hakkında bilgi edinin 
              <ArrowRightIcon class="h-5 w-5" aria-hidden="true" />
            </div>
          </router-link>
        </div>
      </header>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid'
</script>