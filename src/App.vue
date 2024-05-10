<script setup>
import { ref } from "vue"
import Toolbar from './components/Toolbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/sidebar/Sidebar.vue'

const pages = [
  { path: '/', name: 'home', showedName: 'Home', icon: `home` },
  { path: '/about', name: 'about', showedName: 'About', icon: `info` },
  { path: '/gallery', name: 'gallery', showedName: 'Gallery', icon: `photo_camera` },
  { path: '/contact', name: 'contact', showedName: 'Contact', icon: `contact_page` },
  { path: '/booking', name: 'booking', showedName: 'Booking', icon: `bookmark` },
]

let isOpen = ref(false)

const toggleMenuFromOutside = () => {
  let sidebar = document.querySelector("#sidebar")
  let screenWidth = screen.width
  if (screenWidth <= 768 && sidebar.classList.contains('open')) {
    if (localStorage.getItem("isOpen") === "true") { 
        isOpen.value = false 
        sidebar.classList.remove('open')
    }
    else { 
        isOpen.value = true 
        sidebar.classList.add('open')
    }
    localStorage.setItem("isOpen", isOpen.value)
  }
}
</script>

<template>
  <div class="app">
    <!-- <Toolbar class="fadein animation-duration-500" :pages = pages /> -->
    <Sidebar class="fadein animation-duration-500" :pages = pages />

    <RouterView @click="toggleMenuFromOutside" />
  </div>
</template>