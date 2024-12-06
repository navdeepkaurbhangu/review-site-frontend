<template>
  <div class="container">
    <h1 class="mb-4">Reviews</h1>
    
    <!-- Show Loading Message -->
    <p v-if="loading">Loading reviews...</p>
    
    <!-- Show Error Message -->
    <p v-if="error">{{ error }}</p>

    <!-- Show Reviews -->
    <div v-if="!loading && reviews.length">
      <div v-for="review in reviews" :key="review.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ review.title }}</h5>
          <p class="card-text">
            <strong>Author:</strong> {{ review.author }}<br />
            <strong>Rating:</strong> {{ review.rating }} / 10
          </p>
          <router-link :to="`/review/${review.id}`" class="btn btn-primary">
            Read More
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- No Reviews Found -->
    <div v-if="!loading && !reviews.length">
      <p>No reviews found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State variables
const reviews = ref([]);
const loading = ref(true);
const error = ref('');

// Fetch data on component mount
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/reviews');
    reviews.value = response.data.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (err) {
    error.value = 'Error fetching reviews. Please try again later.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

