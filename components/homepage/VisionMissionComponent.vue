<template>
  <div class="font-bebasneue tracking-wider select-none overflow-hidden bg-gradient-to-t to-transparent from-[#17163e]">
    <div class="font-sans bg-transparent mx-auto max-w-7xl">
      <div class="py-4 px-6 lg:px-8 my-10 flex flex-col xl:flex-row gap-x-10 xl:h-[550px] mb-[100px] items-center">
        <div
          class="xl:basis-1/2 flex xl:gap-x-20 gap-x-10 justify-center items-center bg-[url('/assets/pictures/laptop.png')] bg-cover h-[180px] sm:h-[250px] xl:h-[350px] w-[296px] sm:w-[400px] xl:w-[350px]">
          <img src="/assets/pictures/gazi-logo.png" alt="Utyap Logo"
            class="xl:w-[120px] xl:h-[120px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]">
          <img src="/assets/pictures/utyap-logo.png" alt="Utyap Logo"
            class="xl:w-[120px] xl:h-[120px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]">
        </div>
        <div class="xl:basis-1/2 flex flex-col container">
          <h2 class="my-4 text-center lg:text-left">VİZYONUMUZ | MİSYONUMUZ</h2>
          <p
            class="text-sm md:text-base font-thin text-gray-500 md:leading-loose font-ubuntu lg:text-justify text-center">
            UTYAP ekibi olarak genç neslin; sürdürülebilirliği özümseyip teknoloji ve girişimcilikle birleştirerek
            çevrelerinde en güçlü etkiyi yaratan motivasyonları yüksek, genç, bilgili, yetenekli girişimciler
            yetişmesini;
            ülke ekonomisini sürdürülebilir fikirlerle güçlendirmelerini hedeflemekteyiz.
          </p>
          <div class="flex flex-col md:flex-row flex-wrap gap-y-5 md:gap-y-10 my-10 text-sm">
            <div class="md:basis-1/2 flex flex-row justify-center md:justify-start items-center gap-x-5 md:pr-5">
              <FaceSmileIcon class="h-8 md:h-10 w-8 md:w-10 flex-none text-blue-900" />
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>200</strong></div>
                <div class="w-[200px] md:w-full">
                  <strong>Kişiye</strong> ulaştık
                </div>
              </div>
            </div>
            <div class="md:basis-1/2 flex flex-row justify-center md:justify-start items-center gap-x-5 md:pr-5">
              <BriefcaseIcon class="h-8 md:h-10 w-8 md:w-10 flex-none text-blue-900" />
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>100</strong></div>
                <div class="w-[200px] md:w-full">
                  <strong>Organizasyon</strong> planladık
                </div>
              </div>
            </div>
            <div class="md:basis-1/2 flex flex-row justify-center md:justify-start items-center gap-x-5 md:pr-5">
              <ClockIcon class="h-8 md:h-10 w-8 md:w-10 flex-none text-blue-900" />
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>25</strong></div>
                <div class="w-[200px] md:w-full">
                  <strong>Partner toplulukla</strong> etki bırakmak için yola çıktık
                </div>
              </div>
            </div>
            <div class="md:basis-1/2 flex flex-row justify-center md:justify-start items-center gap-x-5 md:pr-5">
              <PresentationChartBarIcon class="h-8 md:h-10 w-8 md:w-10 flex-none text-blue-900" />
              <div class="flex flex-col gap-y-3">
                <div class="text-3xl"><strong>50</strong></div>
                <div class="w-[200px] md:w-full">
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

</script>

<style scoped>
strong {
  @apply md:text-lg text-base
}
</style>