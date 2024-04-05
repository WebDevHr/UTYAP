<template>
  <div
    class="fixed bottom-5 -right-[315px] z-[1001] flex flex-row items-center bg-gray-100 px-3 pb-1 gap-x-3 rounded-2xl toggleSlide"
    v-if="audioPlyerIsOpen">
    <div class="flex flex-col gap-y-2 py-2">
      <button class="rounded-full bg-gray-300" @click="audioPlyerIsOpen = !audioPlyerIsOpen">
        <XMarkIcon class="h-6 w-6 p-1" aria-hidden="true" />
      </button>
      <button class="rounded-full bg-gray-300" @click="audioPlayerSlideToggle">
        <ChevronDoubleLeftIcon class="h-6 w-6 p-1" aria-hidden="true"
          :class="[audioPlayerToggle ? 'rotate-180 transition-all duration-500' : 'transition-all duration-500']" />
      </button>
    </div>
    <div class="overflow-hidden flex flex-col justify-center items-center ">
      <audio class="" ref="audioPlayer" controls :src="audioSrc.src" :autoplay="autoplay">
        Your browser does not support the audio element.
      </audio>
      <div class="text-center bg-gray-300 w-full rounded-lg">{{ audioSrc.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  XMarkIcon,
  ChevronDoubleLeftIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  audioSrc: {
    type: Object,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})


const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work
const audioPlayer = ref(null); // Ref for the audio element
const audioPlyerIsOpen = ref(true)
const audioPlayerToggle = ref(false)

const audioPlayerSlideToggle = () => {
  if (!audioPlayerToggle.value) {
    gsap.to(".toggleSlide", {
      right: 0,
      duration: 0.6
    })
  }
  else {
    gsap.to(".toggleSlide", {
      right: "-315px",
      duration: 0.6
    })
  }
  audioPlayerToggle.value = !audioPlayerToggle.value
}

function playAudio() {
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }
}

onMounted(() => {
  playAudio();
}) 
</script>
