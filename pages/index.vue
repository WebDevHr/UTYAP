<template>
  <div class="font-sans bg-gray-100">

    <!-- Navigation -->
    <nav class="bg-blue-500 p-4">
      <div class="w-full h-20" id="particles-js"></div>
      <div class="container mx-auto">
        <router-link to="/" class="text-white font-bold text-lg">Your Brand</router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-gray-900 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Your Product</h1>
        <p class="text-lg">Supercharge your experience with our amazing features.</p>
        <router-link to="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded-full inline-block">Get Started</router-link>
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Key Features</h2>

        <div class="flex flex-wrap -mx-4">
          <!-- Feature Item 1 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Feature Item 2 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Feature Item 3 -->
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-4">Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-blue-500 text-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-lg mb-8">Sign up now and experience the difference.</p>
        <router-link to="#" class="bg-white text-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-full inline-block">Sign Up</router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
  
<script>

</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>
  