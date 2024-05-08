<template>
    <aside :class="`${is_expanded ? 'open' : 'close'}`">
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
                <RouterLink class="menu-item" :to="{ name: page.name }" @click="toggleByMenuItem" >
                    <span class="material-icons">{{ page.icon }}</span> 
                    <span class="text-menu">{{ page.showedName }}</span>
                </RouterLink>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref } from "vue"
import { usePrimeVue } from 'primevue/config';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
let themeCheck = ref(false)
const primeVue = usePrimeVue()
const lightTheme = 'aura-light-blue'
const darkTheme = 'aura-dark-blue'
const linkId = 'id-to-link'
let nextTheme = ''
let currentTheme = ref('')
let screenWidth = ref(screen.width);

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
        themeCheck.value = ref(false)
    }
}

const toggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}

const toggleByMenuItem = () => {
    console.log('', screenWidth.value)
    if (is_expanded.value && screenWidth.value <= 768) {
        is_expanded.value = !is_expanded.value
        localStorage.setItem("is_expanded", is_expanded.value)
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

checkCurrentTheme()
</script>

<script>
export default {
    props: ['pages']
}
</script>

<style lang="scss" scoped src="./sidebar.scss">
</style>