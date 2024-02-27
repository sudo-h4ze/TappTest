<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product, ProductsList } from "../types/product"
const props = defineProps<{
  product: Product;
}>();
function truncateDescription(description: string): string {
  if (description.length > 50) {
    return description.substring(0, 50) + '...';
  }
  return description;
}

function truncateTitle(description: string): string {
  if (description.length > 20) {
    return description.substring(0, 20) + '...';
  }
  return description;
}
</script>
<template>
    <NuxtLink v-if="props.product" :to="`/product/${props.product.id}`">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img :src="props.product.image" :alt="props.product.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
            <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ truncateTitle(props.product.title) }}
            </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ truncateDescription(props.product.description) }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">€{{ props.product.price }}</p>
        </div>
    </NuxtLink>
</template>