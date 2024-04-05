<template>
  <div ref="audioPlayerContainer"
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
      <audio class="" ref="audioPlayer" controls :src="audioSrc.src" :autoplay="autoplay" :muted="isMuted">
        Your browser does not support the audio element.
      </audio>

      <div class="text-center bg-gray-300 w-full rounded-lg">{{ audioSrc.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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

const audioPlayerContainer = ref(null);
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp(); //gsap to work
const audioPlayer = ref(null); // Ref for the audio element
const audioPlyerIsOpen = ref(true)
const audioPlayerToggle = ref(false)
const isMuted = ref()



onMounted(() => {
  playAudio();

  // Click outside logic
  const handleClickOutside = (event) => {
    if (audioPlyerIsOpen.value && audioPlayerContainer.value && !audioPlayerContainer.value.contains(event.target)) {
      audioPlayerSlideClose();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  // Cleanup (remove listener when component unmounts)
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  if (!!localStorage.getItem('isMuted')) {
    localStorage.setItem('isMuted', true)
    isMuted.value = true
  } else {
    isMuted.value = localStorage.getItem('isMuted')
  }
});

watch(isMuted, (newMutedState) => {
  localStorage.setItem('isMuted', newMutedState);
});

const audioPlayerSlideClose = () => {
  if (audioPlayerToggle.value) {
    gsap.to(".toggleSlide", {
      right: "-315px",
      duration: 0.6
    })
    audioPlayerToggle.value = !audioPlayerToggle.value
  }
}

const audioPlayerSlideToggle = () => {
  if (!audioPlayerToggle.value) {
    gsap.to(".toggleSlide", {
      right: "10px",
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
</script>
