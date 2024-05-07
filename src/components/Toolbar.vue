<template>
    <Toolbar>
        <template #start>
            <div class="align-items-center">
                <div v-for="page in pages" :key="page">
                    <RouterLink class="hover:shadow-6 flex" :to="{ name: page.name }">
                        <i :class="page.classIcon" class="mr-1"></i>{{ page.showedName }}
                    </RouterLink>
                </div>
            </div>
        </template>

        <template #end>
            <div class="align-items-center">
                <i v-if="themeCheck" class="pi pi-moon" style="color: slateblue"></i>
                <i v-if="!themeCheck" class="pi pi-sun" style="color: slateblue"></i>
                <InputSwitch id="theme-switch" v-model="themeCheck" @change="toggleTheme" />
            </div>
        </template>
    </Toolbar>
</template>

<script setup>
import { ref } from 'vue'
import { usePrimeVue } from 'primevue/config';

const primeVue = usePrimeVue()
const lightTheme = 'aura-light-blue'
const darkTheme = 'aura-dark-blue'
const linkId = 'id-to-link'
let nextTheme = ''
let currentTheme = lightTheme
let themeCheck = ref(false)

// with PrimeVue
const toggleTheme = () => {
    if (currentTheme === lightTheme) nextTheme = darkTheme;
    else if (currentTheme === darkTheme) nextTheme = lightTheme;
    // with PrimeVue method:
    primeVue.changeTheme(currentTheme, nextTheme, linkId, () => {})
    currentTheme = nextTheme
}

// Vanilla Style
/* const toggleTheme = () => {
    if (currentTheme === lightTheme) nextTheme = darkTheme;
    else if (currentTheme === darkTheme) nextTheme = lightTheme;
    currentTheme = nextTheme
    let elToRemove = document.getElementById(linkId)
    let elToAdd = elToRemove.cloneNode()
    elToAdd.setAttribute("href", "/public/themes/"+currentTheme+"/theme.css")
    document.getElementById('index-head').appendChild(elToAdd)
    elToRemove.remove()
} */
</script>

<script>
export default {
    props: ['pages']
}
</script>

<style>
</style>