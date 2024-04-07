<template>
  <header class="bg-transparent text-white pb-48 pt-64 sm:pt-48">
    <div class="container mx-auto text-center select-none">
      <div class="flex justify-center">
        <h1 class="sm:text-6xl text-3xl font-bold mb-4 sm:max-w-[500px] max-w-[250px] font-inter">UZAY TEKNOLOJİLERİ VE
          YAPAY ZEKA TOPLULUĞU</h1>
      </div>
      <p class="sm:text-lg text-sm font-light font-ubuntu">Gazi Üniversitesinin, Tek Uzay Teknolojileri Topluluğu</p>
      <router-link :to="{ name: 'hakkimizda' }">
        <BaseComponentsBaseButton class="mt-6">
          <div class="flex justify-center items-center gap-x-1">
            TOPLULUĞUMUZ HAKKINDA BİLGİ EDİNİN
            <ArrowRightIcon class="h-5 w-5" aria-hidden="true" />
          </div>
        </BaseComponentsBaseButton>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid'
</script>