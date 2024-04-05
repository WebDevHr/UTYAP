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

h1 {
  @apply sm:text-6xl text-3xl font-bold mb-4 font-inter
}

h2 {
  @apply font-bebasneue tracking-widest text-xl md:text-2xl lg:text-3xl font-bold
}

h3 {
  @apply font-bebasneue tracking-widest text-base md:text-lg lg:text-xl font-bold
}

input::placeholder {
  @apply text-gray-500
}

textarea::placeholder {
  @apply text-gray-500
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.2;
  transform: translateX(-30px);
}

html,
body {
  scroll-behavior: smooth;
}

.background-gradient-navyblue-to-top {
  background: linear-gradient(180deg, rgba(6, 2, 31, 1) 0%, rgba(6, 2, 31, 0) 70%);
}

.background-gradient-navyblue-to-bottom {
  background: linear-gradient(0deg, rgba(6, 2, 31, 1) 0%, rgba(6, 2, 31, 0) 70%);
}
</style>
