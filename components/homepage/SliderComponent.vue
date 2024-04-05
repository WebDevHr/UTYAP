<template>
  <div>
    <h2 class="text-white flex justify-center items-center pb-10 pt-20">
      Haberler
    </h2>
    <div class="overflow-hidden md:overflow-visible pb-10">
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
      <Swiper class="swiper-cards xl:max-w-[700px] lg:max-w-[550px] md:max-w-[450px] max-w-[400px] shadow rounded-md"
        :modules="[SwiperAutoplay, SwiperEffectCube, SwiperParallax, SwiperA11y, SwiperThumbs, SwiperPagination]"
        :slides-per-view="1" :loop="true" :pagination="{
          enabled: true,
          clickable: true,
          type: 'bullets',
        }" :parallax="true" :speed="800" :grab-cursor="true" :thumbs="{
          thumbsContainerClass: 'swiper-thumbs'
        }" :a11y="true" effect="cube" :autoplay="{
          delay: 4000,
          disableOnInteraction: true
        }">
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class="bg-white rounded-md py-2 md:py-4">
          <div class="card overflow-hidden mx-2 md:mx-4 rounded-md select-none">
            <div>
              <div class="h-64 overflow-hidden rounded-t-md" data-swiper-parallax="-200">
                <img class="h-64 object-cover w-full" :src="slide.src" :alt="idx" />
              </div>
              <div class="lg:px-12 px-4" data-swiper-parallax="-800" data-swiper-parallax-opacity="0.5">
                <h3 class="mb-2 mt-6">
                  {{ slide.title }}
                </h3>
                <p class="lg:text-sm text-xs font-light text-justify h-32">
                  {{ slide.description }}
                </p>
              </div>
            </div>
            <div class="flex justify-start my-5 mx-14" data-swiper-parallax="-1000" data-swiper-parallax-opacity="0">
              <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
          slide.tag }}</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperControls />
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import SwiperControls from '~/components/homepage/SwiperControls.vue'

const slides = [
  {
    title: 'KEÇİÖREN TEKNOMER PARTNERİMİZ!',
    description: 'UTYAP olarak Keçiören TEKNOMER ile ortak bir vizyon doğrultusunda güçlerimizi birleştirdiğimizi duyurmaktan mutluluk duyuyoruz. Bu partnerliğin Ankara\'daki teknoloji ve inovasyon ekosisteminin gelişmesine katkıda bulunacağına inanıyoruz.Partnerliğimiz kapsamında ortak projeler geliştirecek, çokça etkinlik organize edecek ve yeni başarılara imza atacağız.',
    src: '/pictures/news1.jpeg',
    tag: '#haber'
  },
  {
    title: 'Etkİnlİkler ve Deneyİmler!',
    description: 'UTYAP olarak çok yoğun ve verimli bir dönem geçirdik. Teknik geziler, firma işbirlikleri, eğitimler ve speak uplar gibi pek çok etkinlik düzenledik. Bu etkinlikler sayesinde hem sektördeki gelişmeleri yakından takip ettik hem de kendimizi kişisel ve mesleki olarak geliştirdik. İşte size bu etkinliklerden bazı kareler. Siz de UTYAP ailesine katılmak ve bu fırsatlardan yararlanmak isterseniz bize ulaşın. ',
    src: '/pictures/utyap4.jpeg',
    tag: '#rapor'
  },
  {
    title: 'Aramıza katılın‼️',
    description: 'Teknik birikime sahip ekiplerimiz gelecek yılın UTYAP liderlerini yetiştiriyor! Katılımın zorunlu olmadığı UTYAP Teknoloji Okuluna başvuru yapmak tek tık uzağınızda. UTYAP Teknoloji Okuluna kayıtlı üyelere özel Proje Odaklı Arduino, Eagle, Python ile Görüntü İşleme, Yapay Zeka, CAD ve PCB Tasarım eğitimlerine katılmak ve gelecek sene takımlarımızı emanet edeceğimiz USTAlardan olmak istiyorsan başvurunu bekliyoruz.',
    src: '/pictures/news3.jpeg',
    tag: '#etkinlik'
  },
]
</script>

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
