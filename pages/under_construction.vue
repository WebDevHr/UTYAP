<template>
    <div class="bg-indigo-500">
        <div class="pt-[100px] w-full h-[800px]">
            <div class="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8 rounded">
                <div class="grid grid-cols-5 w-full text-white">
                    <div class="col-span-1"></div>
                    <div class="col-span-3 flex justify-center items-center h-[400px] select-none flex-col-reverse gap-y-10">
                        <h1 class="text-6xl font-bold leading-normal font-sacramento">
                            Çok Yakında 
                        </h1>
                        <WrenchScrewdriverIcon class="h-[100px] w-[100px]" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
</script>