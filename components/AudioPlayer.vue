<template>
  <div class="w-[48px] hover:w-[300px] duration-300 overflow-hidden border border-r-0 border-gray-500 rounded-s-full bg-gray-100">
    <audio class="" ref="audioPlayer" controls :src="audioSrc" :autoplay="autoplay">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  audioSrc: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const audioPlayer = ref(null); // Ref for the audio element

function playAudio() {
  if (audioPlayer.value) { 
    audioPlayer.value.play();
  }
}

onMounted(() => {
  playAudio();  
}) 
</script>
