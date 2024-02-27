<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ProductsList } from "../types/product"
import ProductCard from '../components/ProductCard.vue';
import { definePageMeta } from '#imports'
import ProductPage from './product/[id]/[maat].vue'
import Modal from '../components/Modal.vue';

definePageMeta({
  layout: 'shopfront'
})

const { data: products } = await useFetch<ProductsList>('https://fakestoreapi.com/products')
const { data: categories } = await useFetch<string[]>('https://fakestoreapi.com/products/categories')



const selectedCategories = ref<string[]>([]);

const filteredProducts = computed(() => {
  if (selectedCategories.value.length === 0) {
    return products.value;
  }
  return products.value?.filter(product =>
    selectedCategories.value.includes(product.category)
  );
});

const handleCategoryChange = (event: any, category: string) => {
  if (event.target.checked) {
    selectedCategories.value.push(category);
  } else {
    const index = selectedCategories.value.indexOf(category);
    if (index > -1) {
      selectedCategories.value.splice(index, 1);
    }
  }
}

const showModal = ref({ open: false, productid: 0 });

const modalKey = ref(0);

const handleOpenModal = (productId: number) => {
  

  showModal.value.open = true;
  showModal.value.productid = productId;
  modalKey.value++;

  setTimeout(() => {
    const newUrl = `/product/${productId}/M`;
  window.history.pushState({ path: newUrl }, '', newUrl);
  }, 500);

  
};

</script>

<template>
    <Modal v-model="showModal.open" :key="modalKey">
      <div class="bg-gray-100 dark:bg-gray-800">
      <ProductPage :productId="showModal.productid" />
    </div>
    </Modal>
  <section aria-labelledby="products-heading" class="pb-24 pt-6">
    <h2 id="products-heading" class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
      <!-- Filters -->
      <form class="hidden lg:block">

        <div class="border-b border-gray-200 py-6">
          <h3 class="-my-3 flow-root">
            <!-- Expand/collapse section button -->
            <button type="button"
              class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-1" aria-expanded="false">
              <span class="font-medium text-gray-900">Category</span>
              <span class="ml-6 flex items-center">
                <!-- Expand icon, show/hide based on section open state. -->
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                <!-- Collapse icon, show/hide based on section open state. -->
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </h3>
          <!-- Filter section, show/hide based on section state. -->
          <div class="pt-6" id="filter-section-1">
            <div class="space-y-4">
              <div class="flex items-center" v-for="(category, index) in categories" :key="index">
                <input :id="`filter-category-${index}`" :name="`category[]`" :value="category"
                  @change="handleCategoryChange($event, category)" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label :for="`filter-category-${index}`" class="ml-3 text-sm text-gray-600">{{ category }}</label>
              </div>
            </div>
          </div>
        </div>

      </form>

      <!-- Product grid -->
      <div class="lg:col-span-3">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in filteredProducts" :key="product.id" class="group relative">
            <ProductCard :product="product" @openModal="handleOpenModal" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
