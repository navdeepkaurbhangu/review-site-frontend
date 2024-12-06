<template>
    <div class="container">
      <h1 class="mb-4">Reviews</h1>
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
  </template>
  
  <script setup>
  const reviews = [
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 4, title: "The Alchemist-Jane Smith", email: "Null", rating: Null },
    { id: 23, title: "Elden Ring-Jake Miller", email: "90541106465@algonquincdistudent.ca", ratingstar: True },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },
    { id: 2, title: "Inception: A Dream Within a Dream-John Doe", email: "Null", ratingstar: Null },

  ];
  </script>
  