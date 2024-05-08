<script setup>
</script>

<template>
  <main class="page fadein animation-duration-1000">
    <h1 class="text-center">Home Page</h1>

    <div class="grid grid-nogutter text-800">
      <div class="col-12 md:col-6 text-center flex align-items-center">
          <section>
              <div class="block text-2xl font-bold mb-1">Stay in a nice havoc in the centre of 
              <span class="text-primary">Athens</span></div>
              <p class="mb-4 text-700 line-height-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, reiciendis cumque laboriosam quos, minus dolor eum consequatur velit, repudiandae maiores vel. Consectetur velit explicabo, nihil harum iure, nulla voluptatibus omnis molestias perferendis reprehenderit nisi. Sit ut necessitatibus magnam laboriosam, similique incidunt veritatis! Iure illum maiores est hic ullam sunt laboriosam facere, dicta vitae vero laudantium incidunt delectus. Perferendis facere architecto doloremque labore aspernatur expedita sunt ipsum, id ab, nostrum eligendi repellendus magnam debitis. Quia debitis ex impedit, harum in labore quam aspernatur fuga ut eligendi. Placeat illum tempore adipisci possimus sed quia vitae voluptatem tempora odit? Soluta obcaecati fuga aliquam!</p>
          </section>
      </div>
      <div class="flex justify-content-center col-12 md:col-6 overflow-hidden border-round-2xl">
        <div class="img-anim">
          <img src="../assets/home-page.jpg" alt="Image" class="images hover:opacity-80" />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.img-anim {
  transition: transform 0.2s; /* Animation */
}
.img-anim:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>