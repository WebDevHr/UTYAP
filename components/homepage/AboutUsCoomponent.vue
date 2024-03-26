<template>
	<div class="text-white relative font-ubuntu">
		<NuxtParticles
			id="tsparticles2"
			:options="options2"
		></NuxtParticles>
		<div class="bg-black/50 pt-16 pb-8 select-none">
			<div class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 text-center">
				<h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">UTYAP HAKKINDA</h2>
				<p class="text-md md:text-base lg:text-lg mb-8 lg:mx-20 md:mx-10 mx-3 text-center font-thin">
					Utyap 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından kurulmuştur.
					 2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak yeni hedefler, 
					 yeni hayaller yolunda ilerlemeye başlamıştır.
				</p>
				<router-link to="#" 
					class="bg-white/30 hover:bg-white hover:text-gray-800 text-white font-bold 
						py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500 lg:text-base md:text-sm text-xs"
					>
					DAHA FAZLA BİLGİ
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import options2 from '~/assets/particles/particles-parallax.json'
</script>