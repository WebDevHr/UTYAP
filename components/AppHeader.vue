<template>
  <header ref="headerNav" class="bg-transparent fixed w-full pt-4 navHeader px-6 2xl:px-0 z-[1000]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between py-4" aria-label="Global" v-if="!mobileMenuOpen">
      <div class="flex lg:flex-1 trigger">
        <router-link class="-m-1.5 p-1.5" :to="{ name: 'index' }"
          :class="{ 'animate__animated animate__hinge': repeat1, 'animate__animated animate__bounceInDown': repeat3, }">
          <span class="sr-only">UTYAP</span>
          <div class="flex items-center">
            <img class="h-10 md:h-12 w-auto" src="~/assets/pictures/utyap-logo.png" alt="UTYAP" />
          </div>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="navMenu h-7 w-7 text-gray-500" aria-hidden="true" />
        </button>
      </div>


      <PopoverGroup class="hidden lg:flex lg:gap-x-1 relative">

        <Popover v-for="(navItem, index) in navItems" :key="index" v-slot="{ open }">
          <PopoverButton
            class="navLink h-[40px] tracking-widest flex items-center
            text-sm font-normal leading-3 text-white rounded text-[16px] font-inter italic
             hover:shadow-[0px_2px_10px_rgb(0,0,0,0.5)] border border-transparent hover:border-white transition-all duration-200 focus:outline-none outline-none">
            <div v-if="navItem.subItems.length != 0" class="flex flex-row gap-x-[2px] items-center py-2 pl-5 pr-3">
              {{ navItem.name }}
              <ChevronDownIcon
                :class="[open ? 'rotate-180 transition-all duration-300' : 'transition-all duration-300', 'h-5 w-5 flex-none']"
                aria-hidden="true" />
            </div>
            <nuxt-link v-else :to="{ name: navItem.link, hash: navItem.hash }" class="py-3 pl-3 pr-3">
              {{ navItem.name }}
            </nuxt-link>
          </PopoverButton>

          <transition v-if="navItem.subItems.length != 0" enter-active-class="transition ease-out duration-500"
            enter-from-class="opacity-0 -translate-y-10" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-5">
            <PopoverPanel v-slot="{ close }"
              class="absolute left-0 top-[110%] z-10 mt-4 w-[100%] overflow-hidden border-t-8 border-blue-500 rounded-t-xl rounded-b-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in navItem.subItems" :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  @click="accept(close)">
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-700"
                      aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <nuxt-link :to="{ name: item.href }" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0"></span>
                    </nuxt-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a @click="accept(close)" v-for="item in callsToAction" :key="item.name" :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>

        </Popover>

      </PopoverGroup>


      <nuxt-link
        to="https://docs.google.com/forms/d/e/1FAIpQLSczu_qUgivJdWK_xurMqQBwWctV5oR_bPEzm7tPUCKXGH1OVQ/viewform"
        class="hidden lg:flex lg:flex-1 lg:justify-end" :class="{ 'animate__animated animate__flash': repeat2 }">
        <div
          class="navFollow navLink text-white font-normal py-2 px-4 rounded-full inline-block border border-white hover:border-transparent hover:shadow-[0px_2px_10px_rgb(0,0,0,0.5)]">
          <div class="tracking-wide flex justify-center items-center gap-x-1 italic">
            Bize Katılın
            <ArrowRightIcon class="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </nuxt-link>
    </nav>

    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"></div>
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">UTYAP</span>
            <img class="h-10 w-auto" src="~/assets/pictures/utyap-logo.png" alt="UTYAP" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div v-for="(navItem, index) in navItems" :key="index">
                <Disclosure v-if="navItem.subItems.length !== 0" as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {{ navItem.name }}
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...navItem.subItems, ...callsToAction]" :key="item.name" as="div"
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <nuxt-link :to="{ name: item.href }"
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
      item.name }}</nuxt-link>
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <router-link v-else :to="{ name: navItem.link }"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
      navItem.name }}</router-link>
              </div>
            </div>
            <div class="py-6">
              <a href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Bize
                Katılın</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ArchiveBoxIcon,
  CalendarIcon,
  DocumentChartBarIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, ArrowRightIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work

const navItems = [
  {
    name: 'Anasayfa',
    link: 'index',
    subItems: [],
    hash: ''
  },
  {
    name: 'Hakkımızda',
    link: 'hakkimizda',
    subItems: [],
    hash: ''
  },
  {
    name: 'Departmanlar',
    link: '',
    subItems: [
      { name: 'Yazılım Departmanı', description: 'Yapay zeka - Web geliştirme - uygulama geliştirme', href: 'departmanlar-yazilim', icon: ComputerDesktopIcon },
      { name: 'Robotik Departmanı', description: 'Elektronik tasırım - Özgün/İnovatif - Savunma sanayi', href: 'departmanlar-robotik', icon: CpuChipIcon },
      { name: 'Uzay Teknolojileri Departmanı', description: 'Uzay araçları - İnovatif tasarım - Keşif araçları - Fırlatma sistemleri', href: 'departmanlar-uzay_teknolojileri', icon: RocketLaunchIcon },
    ]
  },
  {
    name: 'Etkinlikler',
    link: '',
    subItems: [
      { name: 'Geçmiş etkinliklerin arşivi', description: '', href: 'under_construction', icon: ArchiveBoxIcon },
      { name: 'Gelecek etkinlik takvimi', description: '', href: 'under_construction', icon: CalendarIcon },
      { name: 'Etkinlik kayıt ve katılım bilgileri', description: '', href: 'under_construction', icon: DocumentChartBarIcon },
      { name: 'Konuşmacılar ve sunumlar', description: '', href: 'under_construction', icon: UserIcon },
    ]
  },
  {
    name: 'Projeler',
    link: 'under_construction',
    subItems: [],
    hash: ''
  },
  {
    name: 'İletişim',
    link: 'index',
    subItems: [],
    hash: '#iletisim'
  }
]

const callsToAction = [
  { name: 'Tanıtım Videosu', href: 'under_construction', icon: PlayCircleIcon },
  { name: 'İletişime Geçin', href: 'under_construction', icon: PhoneIcon },
]

const headerNav = ref(null)
const repeat1 = ref(false)
const repeat2 = ref(false)
const repeat3 = ref(false)
const mobileMenuOpen = ref(false)

let scrollPosition

onMounted(() => {
  scrollPosition = document.documentElement.scrollTop;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".navHeader",
      toggleActions: "restart pause reverse pause",
      start: "center top",
      scrub: 1,
    },
  });

  tl.to(".navLink", { color: 'black' })
    .to(".navMenu", { color: 'black' })
    .to(".navFollow", { borderColor: 'black' })
    .to(".navHeader", {
      backgroundColor: 'rgba(255, 255, 255)',
      paddingTop: 0,
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.16), 0px 2px 5px 0px rgba(0, 0, 0, 0.26)",
    });

  setInterval(() => {
    repeat2.value = true;
    setTimeout(() => {
      repeat2.value = false
    }, 2000);
  }, 5000)

  setTimeout(() => {
    repeat1.value = true;
  }, 500)
  setTimeout(() => {
    repeat1.value = false;
    repeat3.value = true;
  }, 3000)
})

async function accept(close) {
  await fetch('/accept-terms', { method: 'POST' })
  close()
}

</script>


<style scoped></style>