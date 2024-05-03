<template>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
        <template #start>
            <div class="flex align-items-center gap-2">
                <div v-for="page in pages" :key="page">
                    <RouterLink class="hover:shadow-6 flex" :to="{ name: page.name }">
                        <i :class="page.classIcon" class="mr-1"></i>{{ page.showedName }}
                    </RouterLink>
                </div>
                <RouterLink class="hover:shadow-6 flex" :to="{ name: 'booking' }">
                    <i class="pi pi-bookmark mr-1"></i>Book your stay 
                </RouterLink>
            </div>
        </template>

        <template #end>
            <div class="flex align-items-center gap-2">
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
import { useDark, useToggle } from '@vueuse/core'

const primeVue = usePrimeVue()
const lightTheme = 'aura-light-blue'
const darkTheme = 'aura-dark-blue'
const linkId = 'id-to-link'
let nextTheme = ''
let currentTheme = lightTheme
let themeCheck = ref(false)

const toggleTheme = () => {
    if (currentTheme === lightTheme) nextTheme = darkTheme;
    else if (currentTheme === darkTheme) nextTheme = lightTheme;
    // CHANGE THEME METHOD DOESN'T WORK ON BUILD APP !!
    //primeVue.changeTheme(currentTheme, nextTheme, linkId, () => {});  
    currentTheme = nextTheme
    let elToRemove = document.getElementById(linkId)
    let elToAdd = elToRemove.cloneNode()
    elToAdd.setAttribute("href", "/public/themes/"+currentTheme+"/theme.css")
    document.getElementById('index-head').appendChild(elToAdd)
    elToRemove.remove()
}
</script>

<script>
export default {
    props: ['pages']
}
</script>

<style>
</style>