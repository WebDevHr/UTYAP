<template>
    <div>
        <div class="relative md:h-[800px] sm:h-[500px] h-[400px] background-gradient-black-to-bottom">
            <NuxtParticles id="tsparticles11" :options="options"></NuxtParticles>
            <AboutusHero />
        </div>
        <div class="relative">
            <div class="absolute top-0 left-0 bg-[url('/pictures/about-us.jpg')] bg-fixed bg-cover w-full h-full -z-20">
            </div>
            <div class="relative py-20 text-white">
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-black-to-top">
                </div>
                <AboutusHistory />
            </div>
            <div class="relative py-20 text-white font-ubuntu">
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-black-to-bottom">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">YÖNETİM KURULU</h2>
                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <AboutusCard v-for="(member, index) in  managementMembers " :key="index" :member="member" />
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
                        <AboutusCard v-for="(consultant, index) in  consultants " :key="index" :member="consultant" />
                    </div>
                </div>
            </div>
            <div class="relative pb-20 text-white">
                <div class="absolute top-0 left-0 w-full h-full -z-10 background-gradient-navyblue-to-bottom">
                </div>
                <div class="mx-auto flex flex-col max-w-7xl py-4 px-4">
                    <h2 class="my-10">Takımlar</h2>
                    <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
                        <AboutusTeamCard v-for=" n  in  3 " :key="n" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import options from '~/assets/particles/particles-colors.json'

import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
if (process.client) {
    await loadFull(tsParticles)
}

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
            gmail: 'razeqian@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/hossein-razeghian-958b0824b/',
            instagram: 'https://www.instagram.com/hsyn_rzghn/'
        }
    },
    {
        name: 'Serkan AKBURU',
        title: 'Keşif Araçları Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'akburuserkan@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Aybars ÖZTÜRK',
        title: 'Fırlatma Sistemleri Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'musabaybars01@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Fatma Kübra ÖZTEKİN',
        title: 'Sponsorluk Danışmanı',
        picture: '',
        links: {
            gmail: 'f.kubraoztekin06@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Eygi Tuana GÜÇLÜ',
        title: 'Özgün-İnovatİf Tasarım',
        picture: '',
        links: {
            gmail: 'eygi.0604@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Kaan PARLAK',
        title: 'Robotik Teknik Lideri',
        picture: '',
        links: {
            gmail: 'kn.prlk.06@gmail.com ',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Eren GÖNENÇ',
        title: 'Savunma Sanayi Geliştirme ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'erengonenc08@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Yasemin BURCAK',
        title: 'Elektronik Tasarım Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'yaseminburcak61@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Mehmet Furkan IŞIK',
        title: 'Gömülü Sistemler Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'isikm2689@gmail.com ',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Temur TURAN',
        title: 'Yapay Zeka Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'mustafa.temur.turan@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Erkam UÇAN',
        title: 'Uygulama Geliştirme Ekibi Başkanı',
        picture: '',
        links: {
            gmail: 'erkamucan@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
    {
        name: 'Enise ALSANCAK',
        title: 'Sosyal Medya Sorumlusu',
        picture: '',
        links: {
            gmail: 'enisealsancak@gmail.com',
            linkedIn: '',
            instagram: ''
        }
    },
]

const consultants = [
    {
        name: 'PROF. DR. HASAN HÜSEYİN SAYAN',
        title: 'AKADEMİK DANIŞMAN',
        picture: '',
        links: {
            gmail: 'hsayan@gazi.edu.tr',
            linkedIn: '',
            instagram: ''
        }
    },
]

</script>
