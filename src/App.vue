<script setup>
import Toolbar from './components/Toolbar.vue'
import { RouterLink, RouterView } from 'vue-router'

const pages = [
  { path: '/', name: 'home', showedName: 'Home', classIcon: 'pi pi-home' },
  { path: '/about', name: 'about', showedName: 'About', classIcon: 'pi pi-id-card' },
  { path: '/gallery', name: 'gallery', showedName: 'Gallery', classIcon: 'pi pi-image' },
  { path: '/contact', name: 'contact', showedName: 'Contact', classIcon: 'pi pi-user' },
]
</script>

<template>
  <Toolbar class="fadein animation-duration-500" :pages = pages />

  <RouterView />
</template>

<style>
.page {
  padding: 1rem;
}
</style>
