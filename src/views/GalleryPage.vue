<template>
  <div class="page fadein animation-duration-1000">
    <h1 class="text-center">Gallery Page</h1>
    
    <Carousel v-if="monkeys" class="p-carousel-content" :value="monkeys"
    :numVisible="3" :numScroll="3" circular :autoplayInterval="4000">
      <template #item="monkey">
        <div class="my-4">
            <div class="mx-2">
                <img :src="monkey.data.srcImg" alt="" class="w-full border-round img-anim" />
            </div>
        </div>
      </template>
    </Carousel>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const monkey = ref([])
// new URL -> to resolve the img problem..
/* for (let i = 0; i < 12; i++) {
  monkey.value.push({ id: i+1, srcImg: new URL("@/assets/monkeys/"+(i+1)+".jpg", import.meta.url).href })
} */
const monkeys = [
  { id: 1, srcImg: new URL("@/assets/monkeys/1.jpg", import.meta.url).href },
  { id: 2, srcImg: new URL("@/assets/monkeys/2.jpg", import.meta.url).href },
  { id: 3, srcImg: new URL("@/assets/monkeys/3.jpg", import.meta.url).href },
  { id: 4, srcImg: new URL("@/assets/monkeys/4.jpg", import.meta.url).href },
  { id: 5, srcImg: new URL("@/assets/monkeys/5.jpg", import.meta.url).href },
  { id: 6, srcImg: new URL("@/assets/monkeys/6.jpg", import.meta.url).href },
  { id: 7, srcImg: new URL("@/assets/monkeys/7.jpg", import.meta.url).href },
  { id: 8, srcImg: new URL("@/assets/monkeys/8.jpg", import.meta.url).href },
  { id: 9, srcImg: new URL("@/assets/monkeys/9.jpg", import.meta.url).href },
  { id: 10, srcImg: new URL("@/assets/monkeys/10.jpg", import.meta.url).href },
  { id: 11, srcImg: new URL("@/assets/monkeys/11.jpg", import.meta.url).href },
  { id: 12, srcImg: new URL("@/assets/monkeys/12.jpg", import.meta.url).href },
]

onMounted(() => {})

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style></style>
