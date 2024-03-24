<template>
    <header ref="headerNav" class="bg-transparent fixed w-full pt-4 navHeader px-6 2xl:px-0 z-[1000]">
      <nav class="mx-auto flex max-w-7xl items-center justify-between py-4" aria-label="Global" v-if="!mobileMenuOpen" >
        <div class="flex lg:flex-1 trigger" >
          <router-link class="-m-1.5 p-1.5" :to="{name: 'index'}">
            <span class="sr-only">UTYAP</span>
            <img class="h-12 w-auto" src="~/assets/pictures/utyap-logo.png" alt="UTYAP" /></router-link>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>

        
        <PopoverGroup class="hidden lg:flex lg:gap-x-6">

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton class="navLink tracking-widest flex items-center gap-x-1 text-sm font-semibold leading-3 text-white hover:bg-indigo-200 py-4 pl-7 pr-5 rounded text-[16px] font-inter">
              UTYAP
              <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
            </PopoverButton>
  
            <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-y-3" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel v-slot="{ close }" class="absolute -left-8 top-full z-10 mt-4 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                  <div 
                    v-for="item in products" 
                    :key="item.name" 
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" 
                    @click="accept(close)"
                  >
                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <nuxt-link :to="{name: item.href}" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0"></span>
                      </nuxt-link>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a @click="accept(close)" v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <router-link 
            :to="{name: 'index'}"
            class="navLink tracking-widest text-sm font-semibold leading-3 text-white hover:bg-indigo-200 py-5 px-5 rounded text-[16px] font-inter"
          >Anasayfa</router-link>
          <router-link 
            :to="{name: 'hakkimizda'}" 
            class="navLink tracking-widest text-sm font-semibold leading-3 text-white hover:bg-indigo-200 py-5 px-5 rounded text-[16px] font-inter"
          >Hakkımızda</router-link>
          <router-link 
            :to="{name: 'under_construction'}" 
            class="navLink tracking-widest text-sm font-semibold leading-3 text-white hover:bg-indigo-200 py-5 px-5 rounded text-[16px] font-inter"
          >İletişim</router-link>

        </PopoverGroup>


        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link :to="{name : 'under_construction'}">
            <div class="navFollow navLink text-white font-light py-2 px-4 rounded-full inline-block border hover:bg-indigo-200 " >
              <div class="tracking-wide flex justify-center items-center gap-x-1">
                Bize Katılın 
                <ArrowRightIcon class="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </router-link>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">UTYAP</span>
              <img class="h-12 w-auto" src="~/assets/pictures/utyap-logo.png" alt="UTYAP" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    UTYAP
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton 
                      v-for="item in [...products, ...callsToAction]" 
                      :key="item.name" as="a" 
                      :href="item.href" 
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <router-link 
                  :to="{name: 'index'}"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Anasayfa</router-link>
                <router-link 
                  :to="{name: 'hakkimizda'}" 
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Hakkımızda</router-link>
                <router-link 
                  :to="{name: 'under_construction'}" 
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >İletişim</router-link>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Bize Katılın</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
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
    RocketLaunchIcon
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, ArrowRightIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

  const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work
  
  const products = [
    { name: 'Yazılım Departmanı', description: 'Yapay zeka - Web geliştirme - uygulama geliştirme', href: 'departmanlar-yazilim', icon: ComputerDesktopIcon },
    { name: 'Robotik Departmanı', description: 'Elektronik tasırım - Özgün/İnovatif - Savunma sanayi', href: 'departmanlar-robotik', icon: CpuChipIcon },
    { name: 'Uzay Teknolojileri Departmanı', description: 'Uzay araçları - İnovatif tasarım - Keşif araçları - Fırlatma sistemleri', href: 'departmanlar-uzay_teknolojileri', icon: RocketLaunchIcon },
  ]
  const callsToAction = [
    { name: 'Tanıtım Videosu', href: 'https://www.youtube.com/shorts/VRTgVtvZujU', icon: PlayCircleIcon },
    { name: 'İletişime Geçin', href: 'under_construction', icon: PhoneIcon },
  ]

  const headerNav = ref(null)
  
  const mobileMenuOpen = ref(false)

  onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".navHeader",
          start: 'center top',
          scrub: 1,
        },
    });

    tl.to(".navLink", { color: 'black' })
        .to(".navFollow", { borderColor: 'black' })
        .to(".navHeader", {
          backgroundColor: 'rgba(255, 255, 255)',
          paddingTop: 0,
          boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.16), 0px 2px 5px 0px rgba(0, 0, 0, 0.26)",
        });

  })

  async function accept(close) {
    await fetch('/accept-terms', { method: 'POST' })
    close()
  }

  </script>