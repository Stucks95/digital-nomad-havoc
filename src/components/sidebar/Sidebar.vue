<template>
    <aside id="sidebar" class="shadow-5">
        <div class="menu-toggle-wrap">
            <div class="btn-toggle" @click="toggleMenu">
                <span class="nav-icon"></span>
            </div>
        </div>

        <div class="logo">
            <img src="/public/icon/greek-flag.jpg" alt="Logo" >
        </div>

        <div class="switch-item">
            <span v-if="currentTheme === 'aura-light-blue'" class="material-icons mb-2" @change="toggleTheme">light_mode</span>
            <span v-if="currentTheme === 'aura-dark-blue'" class="material-icons mb-2" @change="toggleTheme">dark_mode</span>
            <InputSwitch id="theme-switch" v-model="themeCheck" @change="toggleTheme" />
        </div>

        <h2>MENU</h2>
        <div class="menu">
            <div v-for="page in pages" :key="page">
                <RouterLink class="menu-item" :to="{ name: page.name }" @click="toggleFromMenu">
                    <span class="material-icons">{{ page.icon }}</span> 
                    <span class="text-menu">{{ page.showedName }}</span>
                </RouterLink>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { usePrimeVue } from 'primevue/config';

const primeVue = usePrimeVue()
const lightTheme = 'aura-light-blue'
const darkTheme = 'aura-dark-blue'
const linkId = 'id-to-link'

let isOpen = ref(false)
if(!localStorage.getItem("isOpen")) { 
    localStorage.setItem("isOpen", isOpen.value) 
}
let screenWidth = ref(screen.width)
localStorage.setItem("screenWidth", screenWidth.value) 
let currentTheme = ref('')
let nextTheme = ''
let themeCheck = ref(false)

const checkCurrentTheme = () => {
    if (localStorage.getItem("currentTheme") === darkTheme) {
        primeVue.changeTheme(lightTheme, darkTheme, linkId, () => {})
        currentTheme.value = darkTheme
        themeCheck.value = true
    } else if (localStorage.getItem("currentTheme") === lightTheme) {
        primeVue.changeTheme(darkTheme, lightTheme, linkId, () => {})
        currentTheme.value = lightTheme
        themeCheck.value = false
    } else {
        primeVue.changeTheme(darkTheme, lightTheme, linkId, () => {})
        currentTheme.value = lightTheme
        themeCheck.value = false
    }
}

const toggleMenu = () => {
    let sidebar = document.querySelector("#sidebar")
    if (localStorage.getItem("isOpen") === "true") { 
        isOpen.value = false 
        sidebar.classList.remove('open')
    }
    else { 
        isOpen.value = true 
        sidebar.classList.add('open')
    }
    localStorage.setItem("isOpen", isOpen.value)
    //console.log('toggleMenu localStorage',localStorage)
}

const toggleFromMenu = () => {
    let sidebar = document.querySelector("#sidebar")
    if (screenWidth.value <= 768 && sidebar.classList.contains('open')) {
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

// with PrimeVue
const toggleTheme = () => {
    if (currentTheme.value === lightTheme) nextTheme = darkTheme;
    else if (currentTheme.value === darkTheme) nextTheme = lightTheme;
    primeVue.changeTheme(currentTheme.value, nextTheme, linkId, () => {})
    currentTheme.value = nextTheme
    localStorage.setItem("currentTheme", currentTheme.value)
}

onMounted(() => {
    let sidebar = document.querySelector("#sidebar")
    if(localStorage.getItem("isOpen") === "true") { 
        isOpen.value = true 
        sidebar.classList.add('open')
    }
    checkCurrentTheme()
})
</script>

<script>
export default {
    props: ['pages']
}
</script>

<style lang="scss" scoped src="./sidebar.scss"></style>