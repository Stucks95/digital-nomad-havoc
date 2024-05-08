<template>
    <aside :class="`${is_expanded ? 'open' : 'close'}`">
        <div class="menu-toggle-wrap">
            <div class="menu-toggle" @click="toggleMenu">
                <!-- <span class="material-icons">keyboard_double_arrow_right</span> -->
                <span class="nav-icon"></span>
            </div>
        </div>

        <div class="logo">
            <img src="/public/icon/greek-flag.jpg" alt="Logo" >
        </div>

        <div class="switch-item">
            <span v-if="!themeCheck" class="material-icons mb-2" @change="toggleTheme">light_mode</span>
            <span v-if="themeCheck" class="material-icons mb-2" @change="toggleTheme">dark_mode</span>
            <!-- <i v-if="themeCheck" class="pi pi-moon mb-2" @change="toggleTheme" style="color: slateblue"></i>
            <i v-if="!themeCheck" class="pi pi-sun mb-2" @change="toggleTheme" style="color: slateblue"></i> -->
            <InputSwitch id="theme-switch" v-model="themeCheck" @change="toggleTheme" />
        </div>

        <h2>MENU</h2>
        <div class="menu">
            <div v-for="page in pages" :key="page">
                <RouterLink class="menu-item" :to="{ name: page.name }">
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
const primeVue = usePrimeVue()
const lightTheme = 'aura-light-blue'
const darkTheme = 'aura-dark-blue'
const linkId = 'id-to-link'
let nextTheme = ''
let currentTheme = lightTheme
let themeCheck = ref(false)

const toggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}

// with PrimeVue
const toggleTheme = () => {
    if (currentTheme === lightTheme) nextTheme = darkTheme;
    else if (currentTheme === darkTheme) nextTheme = lightTheme;
    // with PrimeVue method:
    primeVue.changeTheme(currentTheme, nextTheme, linkId, () => {})
    currentTheme = nextTheme
}
</script>

<script>
export default {
    props: ['pages']
}
</script>

<style lang="scss" scoped>
aside {
    .switch-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    display: flex;
    flex-direction: column;
    width: calc(2rem + 55px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--surface-ground);
    color: var(--text-color);
    border-radius: 2em;
    padding: 1.2rem;

    transition: 0.3s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    h2, .text-menu {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    .menu {
        margin: 0 -1rem;
        padding: 1rem;

        .menu-item {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem;
            transition: 0.2s ease-out;

            .text-menu {
                transition: 0.2s ease-out;
            }

            &:hover {
                background-color: var(--highlight-bg);
                color: var(--highlight-text-color);
            }
            /* .material-icons {
                font-size: 2rem;
                margin-right: 0.2em;
                transition: 0.2s ease-out;
            } */
        }
    }

    &.open {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            left: 85%;
            .menu-toggle .nav-icon {
                background-color: transparent;
                &::before {
                    transform: rotate(-45deg);
                    top: 0;
                }
                &::after {
                    transform: rotate(45deg);
                    top: 0;
                }
            }
        }

        h2, .text-menu {
            opacity: 1;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        margin-bottom: 1rem;
        cursor: pointer;
        position: relative;
        top: 0;
        transition: 0.3 ease-out;

        .menu-toggle {
            padding: 0.3rem 0;
        }
        .menu-toggle .nav-icon {
            transition: 0.3s ease-out;
            display: block;
            width: 23px;
            height: 2.5px;
            position: relative;
            background-color: var(--primary-color);

            &::before, &::after {
                background-color: var(--primary-color);
                content: "";
                display: block;
                height: 100%;
                width: 100%;
                transition: all .2s ease-out;
                position: absolute;
            }

            &::before {
                top: 7px;
            }

            &::after {
                top: -7px;
            }

            /* .material-icons {
                font-size: 2rem;
                color: --primary-color;
            } */

            &:hover {
                /* .material-icons {
                    color: var(--primary-color);
                    transform: translateX(0.2rem);
                } */
                color: var(--surface-ground);
                transform: translateX(0.2rem);
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>