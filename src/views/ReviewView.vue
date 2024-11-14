<script setup lang="ts">
import { onMounted } from 'vue';
import { useReviewStore } from '@/stores/ReviewStore';

const reviewStore = useReviewStore();

// Cargar datos al montar el componente
onMounted(() => {
  reviewStore.fetchReviews();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-8">Reseñas de Clientes</h1>
    <div class="grid gap-6">
      <!-- Renderizado dinámico de tarjetas -->
      <div
        v-for="review in reviewStore.reviews"
        :key="review.id"
        class="flex bg-white shadow-md rounded-lg overflow-hidden max-w-4xl"
      >
        <!-- Imagen -->
        <img
          :src="review.image"
          alt="Imagen de reseña"
          class="w-1/4 object-cover"
        />
        <!-- Contenido -->
        <div class="p-4 flex flex-col flex-grow">
          <h2 class="text-lg font-bold text-gray-800 mb-2">{{ review.title }}</h2>
          <p class="text-gray-600 flex-grow">{{ review.description }}</p>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-sm font-semibold text-gray-700">{{ review.subtitle }}</h3>
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {{ review.buttonLabel }}
            </button>
          </div>
          <p class="text-xs text-gray-500 mt-4">{{ review.footerText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
