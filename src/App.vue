<script setup>
import Toolbar from './components/Toolbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const pages = [
  { path: '/', name: 'home', showedName: 'Home', icon: `home` },
  { path: '/about', name: 'about', showedName: 'About', icon: `info` },
  { path: '/gallery', name: 'gallery', showedName: 'Gallery', icon: `photo_camera` },
  { path: '/contact', name: 'contact', showedName: 'Contact', icon: `contact_page` },
  { path: '/booking', name: 'booking', showedName: 'Booking', icon: `bookmark` },
]
</script>

<template>
  <div class="app">
    <!-- <Toolbar class="fadein animation-duration-500" :pages = pages /> -->
    <Sidebar class="fadein animation-duration-500" :pages = pages />

    <RouterView />
  </div>
</template>

<style lang="scss">
:root {
  --sidebar-width: 250px;
}
* {
  box-sizing: border-box;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
}

body {
  background: var(--highlight-bg);
}

.app {
  display: flex;

  main {
    flex: 1 1 0;

    @media (max-width: 768px) {
      padding-left: 2rem;
      .pi-sun {
          display: none !important;
      }
      .pi-moon {
          display: none !important;
      }
    }
  }
}
</style>
