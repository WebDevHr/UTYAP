<template>
    <GoogleMap :api-key="GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <Marker :options="{ position: center, title: 'utyap' }" />
        <InfoWindow :options="{ position: center }">
            <div class="flex justify-center items-center gap-x-1 mb-1">
                <img src="/assets/pictures/utyap-logo.png" width="20" height="20" />
                <div class="font-bold">UTYAP</div>
            </div>
            <a href="https://maps.app.goo.gl/va9AgZV27qNsLk8b9"
                class="text-blue-400 hover:text-blue-700 font-normal">View on Google
                Maps</a>
        </InfoWindow>
    </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
const center = { lat: 39.93941876113325, lng: 32.81729416785606 }
const GOOGLE_MAPS_API_KEY = useRuntimeConfig().public.GOOGLE_MAPS_API_KEY;
</script>