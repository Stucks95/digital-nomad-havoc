<template>
    <div class="page fadein animation-duration-1000 text-center">
        <Card>
            <template #content>
            <div class="check-in">
                <label class="mr-2">Check In:</label>
                <Calendar
                class="m-2"
                v-model="checkIn"
                showIcon
                iconDisplay="input"
                dateFormat="dd/mm/yy"
                placeholder="DD/MM/YY"
                />
            </div>
            <div class="check-out mb-4">
                <label class="mr-2">Check Out:</label>
                <Calendar
                class="m-2"
                v-model="checkOut"
                showIcon
                iconDisplay="input"
                dateFormat="dd/mm/yy"
                placeholder="DD/MM/YY"
                />
            </div>

            <div class="adults">
                <label class="mr-2">Adults (0 to 6):</label>
                <InputNumber class="m-2 w-24" v-model="adult" mode="decimal" showButtons :min="0" :max="6" />
            </div>
            <div class="kids mb-4">
                <label class="mr-2">Kids (0 to 6):</label>
                <InputNumber class="m-2 w-24" v-model="kids" mode="decimal" showButtons :min="0" :max="6" />
            </div>

            <div class="submit m-4 flex justify-content-center">
                <Button label="Submit" type="submit" class="flex text-center p-button-raised"></Button>
            </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from "vue"

const checkIn = ref(null)
const checkOut = ref(null)
const kids = ref(null)
const adult = ref(null)

/* const getDates = computed(() => {
    return { checkIn, checkOut }
}) */
</script>

<style>
</style>