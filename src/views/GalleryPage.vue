<template>
  <main class="page fadein animation-duration-1000">
    <h1 class="text-center">Gallery Page</h1>
    
    <div class="galleria">
        <Galleria v-if="images" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" 
        containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </div>
            </template>
        </Galleria>
    </div>

    <!-- <Carousel v-if="monkeys" class="p-carousel-content" :value="monkeys"
    :numVisible="3" :numScroll="3" circular :autoplayInterval="4000">
      <template #item="monkey">
        <div class="my-4">
            <div class="mx-2">
                <img :src="monkey.data.srcImg" alt="" class="w-full border-round img-anim" />
            </div>
        </div>
      </template>
    </Carousel> -->

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { photoService } from '../service/photoService';

let monkeys = ref([])
let images = ref(null)

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
])

onMounted(() => {
  photoService.getImages().then((data) => (images.value = data));
  monkeys.value = [
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
})
</script>

<style></style>
