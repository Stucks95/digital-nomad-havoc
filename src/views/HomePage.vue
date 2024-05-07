<script setup>
</script>

<template>
  <main class="page fadein animation-duration-1000">
    <h1 class="text-center">Home Page</h1>

    <div class="grid grid-nogutter text-800">
      <div class="col-12 md:col-6 p-4 text-center md:text-left flex align-items-center">
          <section>
              <div class="block text-2xl font-bold mb-1">Stay in a nice havoc in the centre of 
              <span class="text-primary">Athens</span></div>
              <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
      </div>
      <div class="flex justify-content-center col-12 p-4 md:col-6 overflow-hidden border-round-2xl">
        <div class="img-anim">
          <img src="../assets/home-page.jpg" alt="Image" 
          class="images md:ml-auto md:h-full max-w-30rem hover:opacity-80" />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.img-anim {
  transition: transform .2s; /* Animation */
}
.img-anim:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>