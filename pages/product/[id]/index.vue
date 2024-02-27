<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from '~/types/product';
import { Size } from '~/types/product';

definePageMeta({
  layout: 'productdetail'
})

const route = useRoute();
const productId = ref<string | null>(typeof route.params.id == "string" ? route.params.id : null);

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
