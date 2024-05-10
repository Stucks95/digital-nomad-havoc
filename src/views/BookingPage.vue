<template>
    <main class="page fadein animation-duration-1000 text-center">
        <h1 class="text-center">Book your stay !</h1>

        <Card>
            <template #content>
                <div class="check-in-out">
                    <div class="check-in m-2">
                        <label class="block m-2">Check In:</label>
                        <Calendar class="w-24" v-model="checkIn" showTime iconDisplay="input"
                        dateFormat="dd/mm/yy" placeholder="DD/MM/YY" hourFormat="24" :stepMinute="30" />
                        <!-- "minDate & maxDate" to add for user checks -->
                    </div>
                    <div class="check-out m-2">
                        <label class="block m-2">Check Out:</label>
                        <Calendar class="w-24" v-model="checkOut" showTime iconDisplay="input"
                        dateFormat="dd/mm/yy" placeholder="DD/MM/YY" hourFormat="24" :stepMinute="30" />
                    </div>
                </div>
                

                <div class="adults-kids mb-4">
                    <div class="adults m-2">
                        <label class="block m-2">Adults:</label>
                        <InputNumber class="w-24" v-model="adult" mode="decimal" showButtons :min="0" :max="10" />
                    </div>
                    <div class="kids m-2">
                        <label class="block m-2">Kids:</label>
                        <InputNumber class="w-24" v-model="kids" mode="decimal" showButtons :min="0" :max="10" />
                    </div>
                </div>               

                <div class="submit-btn">
                    <Button label="Submit" @click="addMessages()" />
                    <transition-group name="p-message" tag="div">
                        <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
                    </transition-group>
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from "vue"
const checkIn = ref(null)
const checkOut = ref(null)
const kids = ref(null)
const adult = ref(null)
const messages = ref([])
let count = ref(0)

const addMessages = () => {
    messages.value = [
        { severity: 'success', content: 'Work in progress !', id: count.value++ },
    ]
}

const clearMessages = () => {
    messages.value = []
}
</script>

<style>
</style>