<template>
    <main class="page fadein animation-duration-1000 text-center">
        <h1 class="text-center">Book your stay !</h1>
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

                <div class="card">
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
const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'success', content: 'Work in progress !', id: count.value++ },
    ];
};

const clearMessages = () => {
    messages.value = [];
};

const checkIn = ref(null)
const checkOut = ref(null)
const kids = ref(null)
const adult = ref(null)
</script>

<style>
</style>