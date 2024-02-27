<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductDetailCard from '~/components/ProductDetailCard.vue';
import { Size, type Product } from '~/types/product';
definePageMeta({
    layout: 'productdetail'
})

interface props {
    productId: number
}

const props = defineProps<props>();


const route = useRoute();
let productId = ref<string | null>(typeof route.params.id == "string" ? route.params.id : null);

if(!productId.value || productId.value == "0") {
    productId.value = ""+props.productId
}

const { data: detail } = await useFetch<Product>('https://fakestoreapi.com/products/'+productId.value)


watch(() => route.params.id, (newId) => {
    if(typeof newId == "string")
    productId.value = newId;
});

const maten = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
</script>

<template>
   <ProductDetailCard :sizes="maten" :productId="productId" :detail="detail" />
</template>
