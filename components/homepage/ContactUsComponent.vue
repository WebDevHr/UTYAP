<template>
  <div class="relative">
    <!-- <div class="absolute w-full h-full bg-black/40 z-[-1]"></div> -->
    <div class="font-sans mx-auto max-w-7xl items-center justify-between py-4 px-6 lg:px-8 z-[100]">
      <h2 class="my-5">İletİşİm</h2>
      <h3 class="text-lg font-semibold my-5">Bİzİmle İletİşİme Geçİn</h3>
      <div class="container flex flex-col md:flex-row gap-6 my-10">
        <div class="md:basis-1/3 rounded-lg flex flex-col gap-y-5">
          <div class="mb-3">
            <div class="flex gap-x-5 items-center">
              <MapPinIcon
                class="h-10 md:h-12 w-10 md:w-12 lg:w-14 lg:h-14 flex-none bg-[#3b5e98] border p-3 rounded-full text-white" />
              <div class="flex flex-col gap-y-1">
                <h3>KONUM:</h3>
                <div>Ankara, Türkiye</div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="flex gap-x-5 items-center">
              <MapPinIcon
                class="h-10 md:h-12 w-10 md:w-12 lg:w-14 lg:h-14 flex-none bg-[#3b5e98] border p-3 rounded-full text-white" />
              <div class="flex flex-col gap-y-1">
                <h3>E-Posta:</h3>
                <div>info@utyap.com</div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="flex gap-x-5 items-center">
              <MapPinIcon
                class="h-10 md:h-12 w-10 md:w-12 lg:w-14 lg:h-14 flex-none bg-[#3b5e98] border p-3 rounded-full text-white" />
              <div class="flex flex-col gap-y-1">
                <h3>SOSYAL MEDYA:</h3>
                <div>@gazi.utyap</div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:basis-2/3 rounded-lg">
          <div class="max-w-3xl flex flex-col justify-center">
            <form @submit.prevent="handleSubmit">
              <div class="flex md:flex-row flex-col gap-x-3">
                <div class="mb-4 flex-grow">
                  <input type="text" id="name" v-model="formData.name" placeholder="Ad Soyad"
                    class="w-full border-2 border-[#3b5e98] text-white bg-[#3b5e98] rounded-md px-3 py-2 focus:outline-none focus:border-black"
                    required />
                </div>

                <div class="mb-4 flex-grow">
                  <input type="email" id="email" v-model="formData.email" placeholder="E-posta Adresi"
                    class="w-full border-2 border-[#3b5e98] text-white bg-[#3b5e98] rounded-md px-3 py-2 focus:outline-none focus:border-black"
                    required />
                </div>
              </div>

              <div class="mb-4">
                <input type="text" id="subject" v-model="formData.subject" placeholder="Konu"
                  class="w-full border-2 border-[#3b5e98] text-white bg-[#3b5e98] rounded-md px-3 py-2 focus:outline-none focus:border-black"
                  required />
              </div>

              <div class="">
                <textarea id="message" v-model="formData.message" placeholder="Mesaj"
                  class="resize-none w-full border-2 border-[#3b5e98] text-white bg-[#3b5e98] rounded-md px-3 py-2 focus:outline-none focus:border-black"
                  rows="4" required></textarea>
              </div>

              <div class="flex justify-center">
                <button type="submit"
                  class="bg-white/30 hover:bg-white hover:text-gray-800 text-gray-400 font-bold 
                  py-2 px-4 mt-6 rounded-full inline-block border transition-all duration-500 lg:text-base md:text-sm text-xs">
                  GÖNDER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MapPinIcon
} from '@heroicons/vue/24/outline'

const formData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
async function handleSubmit() {
  // Here's where you'll handle form submission 
  // (e.g., send data to an API endpoint)

  // Example Implementation:
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.formData),
  });

  if (response.ok) {
    console.log('Form submitted successfully!');
    // Optionally clear the form or display a success message
  } else {
    console.error('Error submitting form:', response.statusText);
  }
}
</script>