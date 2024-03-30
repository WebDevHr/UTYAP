<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>


<style>
* {
  @apply font-ubuntu
}

p {
  @apply font-inter
}

h2 {
  @apply font-bebasneue tracking-widest text-xl md:text-2xl lg:text-3xl font-bold
}

h3 {
  @apply font-bebasneue tracking-widest text-base md:text-lg lg:text-xl font-bold
}

input::placeholder {
  @apply text-gray-300
}

textarea::placeholder {
  @apply text-gray-300
}
</style>
