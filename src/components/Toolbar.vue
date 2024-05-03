<template>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
        <template #start>
            <div class="flex align-items-center gap-2">
                <div class="pages" v-for="page in pages" :key="page">
                    <RouterLink :to="{ name: page.name }">
                        <Button :label="page.showedName" text plain />
                    </RouterLink>
                </div>
                <InputSwitch v-model="themeToggle" @change="changeTheme" />
            </div>
        </template>

        <template #end>
            <div class="flex align-items-center gap-2">
                <Button label="Share" severity="contrast" size="small" />
            </div>
        </template>
    </Toolbar>
</template>

<script>
import { ref } from 'vue'
import { usePrimeVue } from 'primevue/config';

export default {
    props: ['pages'],
    setup() {
        const PrimeVue = usePrimeVue();
        let themeToggle = ref(false)

        const changeTheme = () => {
            if (themeToggle.value) {
                PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', 'theme-link', () => {})
            } else {
                PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', 'theme-link', () => {})
            }
        }

        return { themeToggle, changeTheme }
    }
}
</script>

<style>
</style>