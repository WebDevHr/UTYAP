<template>
    <div>
        <div class="relative md:h-[800px] sm:h-[500px] h-[400px] background-gradient-black-to-bottom">
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

                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-black-to-top">
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
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-black-to-bottom">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">YÖNETİM KURULU</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for="(member, index) in  managementMembers " :key="index">
                            <div class="managerCard flex flex-col justify-center items-center w-[250px] p-3 rounded-3xl 
                                hover:bg-black/40 transition-all duration-300 relative">
                                <div class="overflow-hidden rounded-full h-44 w-44">
                                    <img class="h-44 w-44 object-cover" :src="member.picture" :alt="member.name">
                                </div>
                                <div class="relative flex flex-col justify-center items-center">
                                    <h3 class="mt-3 text-center">{{ member.name }}</h3>
                                    <h4 class="my-2 font-extralight text-gray-400 text-center">{{ member.title }}</h4>
                                    <div
                                        class="links flex flex-row gap-x-1 absolute top-0 opacity-0 transition-all duration-500">
                                        <a v-if="member.links.linkedIn" :href="member.links.linkedIn" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" />
                                            </svg>
                                        </a>
                                        <a v-if="member.links.instagram" :href="member.links.instagram" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a v-if="member.links.gmail" :href="member.links.gmail" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                            </svg>
                                        </a>
                                    </div>
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
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-black-to-top">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">Danışmanlar</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for=" n  in  3 " :key="n">
                            <div class="managerCard flex flex-col justify-center items-center w-[250px] p-3 rounded-3xl 
                                 transition-all duration-300 hover:bg-black/40">
                                <div
                                    class="overflow-hidden rounded-full h-44 w-44 bg-cover bg-center bg-[url('/pictures/3.jpg')]">
                                </div>
                                <div class="relative flex flex-col justify-center items-center">
                                    <h3 class="mt-3 text-center">PROF. DR. HASAN HÜSEYİN SAYAN</h3>
                                    <h4 class="my-2 font-extralight text-gray-300">AKADEMİK DANIŞMAN</h4>
                                    <div
                                        class="links flex flex-row gap-x-1 absolute top-0 opacity-0 transition-all duration-500">
                                        <a href="" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" />
                                            </svg>
                                        </a>
                                        <a href="" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="mailto:hsayan@gazi.edu.tr" class="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="relative pb-20 text-white">
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-navyblue-to-bottom">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">Takımlar</h2>

                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <div v-for=" n  in  3 " :key="n">
                            <div class="relative">
                                <div
                                    class="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-[url('/pictures/3.jpg')] rounded-3xl overflow-hidden">
                                </div>
                                <div class="managerCard flex flex-col justify-center items-center w-[280px] p-3 
                                    transition-all duration-300 bg-black/50 -z-20 rounded-3xl hover:bg-black/20">
                                    <h2 class="my-3">Paydar Takımı</h2>
                                    <h3 class="text-gray-400">Takım Üyelerİ:</h3>
                                    <h4 class="my-1 font-extralight text-gray-400">Ahmet - Mehmet - Ali</h4>
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

const managementMembers = [
    {
        name: 'Samed Kahraman',
        title: 'Başkan',
        picture: '/pictures/samedkahraman.jpg',
        links: {
            gmail: 'gazi.utyap@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/samedkahraman/',
            instagram: 'https://www.instagram.com/samedheroo/'
        }
    },
    {
        name: 'Ahmet Eren Özen',
        title: 'Başkan Yardımcısı',
        picture: '/pictures/ahmeterenozen.jpg',
        links: {
            gmail: '',
            linkedIn: 'https://www.linkedin.com/in/aerozen/',
            instagram: 'https://www.instagram.com/ahmet_eren_ozen/'
        }
    },
    {
        name: 'Hossein Razeghian',
        title: 'Web Geliştirme Ekibi Başkanı',
        picture: '/pictures/hosseinrazeghian.jpg',
        links: {
            gmail: 'mailto:razeqian@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/hossein-razeghian-958b0824b/',
            instagram: 'https://www.instagram.com/hsyn_rzghn/'
        }
    },
    {
        name: 'Samed Kahraman',
        title: 'Başkan',
        picture: '/pictures/2.jpg',
        links: {
            gmail: '',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Samed Kahraman',
        title: 'Başkan',
        picture: '/pictures/3.jpg',
        links: {
            gmail: '',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Samed Kahraman',
        title: 'Başkan',
        picture: '/pictures/3.jpg',
        links: {
            gmail: '',
            linkedIn: '',
            instagram: ''
        }
    },
]

</script>

<style scoped>
.managerCard:hover .links {
    @apply -translate-y-[55px] opacity-100;
}
</style>