<script setup>
import Toolbar from './components/Toolbar.vue'
import { RouterLink, RouterView } from 'vue-router'

const pages = [
  { path: '/', name: 'home', showedName: 'Home' },
  { path: '/about', name: 'about', showedName: 'About' },
  { path: '/gallery', name: 'gallery', showedName: 'Gallery' },
  { path: '/contact', name: 'contact', showedName: 'Contact' },
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
