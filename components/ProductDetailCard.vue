<script setup lang="ts" >
import { defineProps } from 'vue';
import type { Product } from '~/types/product';
import { Size } from '~/types/product';
const route = useRoute();
const router = useRouter();

interface props {
    detail: Product | null,
    sizes: Size[],
    productId: string | null
}

const props = defineProps<props>();

const maat = ref<Size>(route.params.maat as Size || 'M');

const selectMaat = (newMaat: Size) => {
    maat.value = newMaat;
    const newPath = `/product/${props.productId}/${newMaat}`;
    router.push(newPath);
}

watch(() => route.params.maat, (newMaat) => {
    maat.value = newMaat as Size;
});

const isMaatSelected = (buttonMaat: Size): boolean => {
    return maat.value === buttonMaat;
};
</script>
<template>
    <div class="md:flex-1 px-4">
        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img class="w-full h-full object-cover"
                :src="props.detail?.image" alt="Product Image">
        </div>
        <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
                <button
                    class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add
                    to Cart</button>
            </div>
            <div class="w-1/2 px-2">
                <button
                    class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add
                    to Wishlist</button>
            </div>
        </div>
    </div>

    <div class="md:flex-1 px-4">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ props.detail?.title }}</h2>
        <div class="flex mb-4">
            <div class="mr-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span class="text-gray-600 dark:text-gray-300">€{{ props.detail?.price }}</span>
            </div>
            <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span class="text-gray-600 dark:text-gray-300">In Stock</span>
            </div>
        </div>
        <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
            <div class="flex items-center mt-2">
                <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
            </div>
        </div>
        <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
            <div class="flex items-center mt-2">
                <MaatKnop v-for="maat in props.sizes" :key="maat" :maat="maat" :isGeselecteerd="isMaatSelected(maat)"
                    @maatGeselecteerd="selectMaat" />
            </div>
        </div>
        <div>
            <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {{ props.detail?.description }}
            </p>
        </div>
    </div>
</template>