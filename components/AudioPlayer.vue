<template>
  <div>
    <audio ref="audioPlayer" controls :src="audioSrc" :autoplay="autoplay">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

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
