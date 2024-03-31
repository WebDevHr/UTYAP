<template>
    <div>
        <div class="relative md:h-[800px] sm:h-[500px] h-[400px] bg-gradient-to-b from-transparent to-black">
            <NuxtParticles id="tsparticles" :options="options"></NuxtParticles>
            <div class="mx-auto flex flex-col max-w-7xl items-center justify-between py-4 px-4">
                <div class="grid grid-flow-row-dense grid-cols-5 md:mt-[100px] lg:mt-[200px]">
                    <div class="md:col-span-3 col-span-5">
                        <h1 class="pt-32 text-white leading-snug w-3/4 font-ubuntu">
                            Hakkımızda
                        </h1>
                        <h4 class="md:text-xl/relaxed text-base/relaxed  text-white md:mt-10 mt-5 text-justify">
                            Utyap 2019'da Gazi Üniversitesi Teknoloji Fakültesinde gönüllü öğrenciler tarafından
                            kurulmuştur.

                            2022 itibariyle kendini tamamen yenileyen Utyap birçok toplulukla anlaşmalar yaparak
                            yeni
                            hedefler,
                            yeni hayaller yolunda ilerlemeye başlamıştır.
                        </h4>
                    </div>
                    <div
                        class="col-span-2 hidden relative pl-5 md:pl-10 lg:pl-20 pr-0 md:flex items-end justify-end max-w-sm">
                        <img src="/assets/pictures/utyap-logo.png" alt="">
                        <!-- <NuxtParticles id="tsparticles2" :options="options2"></NuxtParticles> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
            <div class="absolute top-0 left-0 bg-[url('/pictures/about-us.jpg')] bg-fixed bg-cover w-full h-full -z-20">
            </div>
            <div class="relative py-20 text-white">

                <div class="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-black to-white/20">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="text-white w-full my-10">
                        TOPLULUĞUN TARİHÇESİ
                    </h2>

                    <div class="leading-relaxed text-justify">
                        Gazi UTYAP Topluluğu, Gazi Üniversitesi Bilgisayar Mühendisliği Bölümü öğrencileri
                        tarafından
                        2007 yılında kurulmuştur. Topluluk, yazılım geliştirme, web tasarımı, robotik, yapay zeka ve
                        daha birçok alanda faaliyet göstermektedir.
                        <br />

                        Topluluğun kuruluş amacı, bilgisayar mühendisliği öğrencilerinin teorik bilgilerini pratik
                        becerilerle birleştirmelerine ve bu alandaki gelişmeleri takip etmelerine yardımcı olmaktır.
                        Topluluk, bu amaca yönelik olarak çeşitli kurslar, atölye çalışmaları, seminerler ve
                        yarışmalar
                        düzenlemektedir.
                        <br />

                        Gazi UTYAP Topluluğu, Türkiye'nin en aktif öğrenci topluluklarından biridir. Topluluk,
                        kuruluşundan bu yana birçok projeye imza atmıştır. Bu projeler arasında;
                        <br />

                        <ul class="list-disc my-5 ml-10">
                            <li>
                                Açık Kaynak Yazılım Geliştirme: Topluluk, Gazi GNU/Linux dağıtımı ve GaziWeb
                                Framework
                                gibi
                                açık kaynak yazılım projeleri geliştirmiştir.
                            </li>
                            <li>
                                Robotik: Topluluk, robotik yarışmalarına katılmış ve çeşitli robotlar tasarlamıştır.
                                Yapay
                                Zeka: Topluluk, yapay zeka alanındaki gelişmeleri takip etmektedir ve bu alanda
                                çalışmalar yürütmektedir.
                            </li>
                            <li>
                                Eğitim: Topluluk, yazılım geliştirme ve web tasarımı gibi konularda kurslar ve
                                atölye
                                çalışmaları düzenlemektedir.

                            </li>
                        </ul>

                        Gazi UTYAP Topluluğu, Gazi Üniversitesi Bilgisayar Mühendisliği Bölümü öğrencilerinin yanı
                        sıra
                        diğer bölümlerden öğrencilere de açıktır. Topluluğa üye olmak için Gazi UTYAP Topluluğu'nun
                        web
                        sitesini ziyaret edebilirsiniz.
                        <br />
                    </div>
                </div>

            </div>
            <div class="relative py-20 text-white font-ubuntu">
                <div class="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white/20 to-black">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">YÖNETİM KURULU</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for="n in 10" :key="n">
                            <div
                                class="managerCard flex flex-col justify-center items-center w-[280px] border p-3 rounded-3xl 
                                border-transparent hover:border-white outline outline-transparent hover:outline-white outline-1 outline-offset-[5px] transition-all duration-300">
                                <div
                                    class="overflow-hidden rounded-full h-44 w-44 bg-cover bg-center bg-[url('/pictures/3.jpg')]">
                                </div>
                                <h3 class="mt-3">Samed Kahraman</h3>
                                <h4 class="my-2 font-extralight">Pozisyon</h4>
                                <div class="flex flex-row gap-x-1">
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-linkedin-240.png" alt="linkedin">
                                    </a>
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-instagram-240.png" alt="instagram">
                                    </a>
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-gmail-240.png" alt="gmail">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="relative">
            <div
                class="absolute top-0 left-0 bg-[url('/pictures/team-work.jpg')] bg-fixed bg-cover w-full h-full -z-20">
            </div>
            <div class="relative py-20 text-white">
                <div class="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-black to-white/20">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">Danışmanlar</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for="n in 3" :key="n">
                            <div
                                class="managerCard flex flex-col justify-center items-center w-[280px] border p-3 rounded-3xl 
                                border-transparent hover:border-white outline outline-transparent hover:outline-white outline-1 outline-offset-[5px] transition-all duration-300">
                                <div
                                    class="overflow-hidden rounded-full h-44 w-44 bg-cover bg-center bg-[url('/pictures/3.jpg')]">
                                </div>
                                <h3 class="mt-3">Samed Kahraman</h3>
                                <h4 class="my-2 font-extralight">Pozisyon</h4>
                                <div class="flex flex-row gap-x-1">
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-linkedin-240.png" alt="linkedin">
                                    </a>
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-instagram-240.png" alt="instagram">
                                    </a>
                                    <a href="" class="p-1">
                                        <img class="w-8 h-8" src="/icons/icons8-gmail-240.png" alt="gmail">
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="relative pb-20 text-white">
                <div class="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white/20 to-black ">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">Takımlar</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for="n in 3" :key="n">
                            <div class="relative">
                                <div
                                    class="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-[url('/pictures/3.jpg')] rounded-3xl overflow-hidden">
                                </div>
                                <div class="managerCard flex flex-col justify-center items-center w-[280px] p-3 
                                    transition-all duration-300 bg-black/50 -z-20 rounded-3xl hover:bg-transparent">
                                    <h2 class="my-3">Paydar Takımı</h2>
                                    <h3>Takım Üyelerİ:</h3>
                                    <h4 class="my-1 font-extralight">Ahmet - Mehmet - Ali</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import options from '~/assets/particles/particles-colors.json'
import options2 from '~/assets/particles/particles-polygon-mask-uytap.json'

import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles' // or whichever bundle you wish to use
import { loadPolygonPath } from 'tsparticles-path-polygon'
import { loadLightInteraction } from 'tsparticles-interaction-light'
import { loadCanvasMaskPlugin } from "tsparticles-plugin-canvas-mask";
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask'
if (process.client) {
    // This example will BLOCK your application from rendering until the tsParticles library is initialized
    // You can put this in some other place if you know that you won't be loading particles until after the first paint
    await loadFull(tsParticles)
}
await loadPolygonPath(tsParticles)
await loadLightInteraction(tsParticles)
await loadCanvasMaskPlugin(tsParticles);
await loadPolygonMaskPlugin(tsParticles);


</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>