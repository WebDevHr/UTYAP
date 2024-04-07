<template>
    <button :type="type" class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-full
     inline-block border transition-all duration-500 lg:text-base md:text-sm text-xs font-ubuntu">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
    },
})
</script>