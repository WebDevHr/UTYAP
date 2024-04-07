<template>
	<div class="text-white relative font-ubuntu">
		<!-- <div class="bg-gradient-to-t from-transparent to-[#06021f]"> -->
		<!-- <div class="bg-gradient-to-t to-transparent from-[#06021f]"> -->
		<NuxtParticles id="tsparticles2" :options="options3"></NuxtParticles>
		<div class="pt-16 pb-8 select-none">
			<div
				class="font-sans bg-transparent mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 mb-10 text-center">
				<h2 class="mb-4">UTYAP HAKKINDA</h2>
				<p class="text-sm md:text-base font-thin text-white md:leading-loose font-ubuntu text-center">
					UTYAP 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından
					kurulmuştur.
					2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak yeni
					hedefler,
					yeni hayaller yolunda ilerlemeye başlamıştır.
				</p>
				<router-link :to="{ name: 'hakkimizda' }">
					<BaseComponentsBaseButton class="mt-6">DAHA FAZLA BİLGİ</BaseComponentsBaseButton>
				</router-link>
			</div>
		</div>
	</div>
	<!-- </div> -->
	<!-- </div> -->
</template>

<script setup>
import options3 from '~/assets/particles/particles-nasa.json'
</script>