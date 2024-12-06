<template>
    <div class="container py-5">
      <div class="card shadow border-primary">
        <div class="card-body">
          <h1 class="text-primary">{{ review.title }}</h1>
          <p>
            <strong>Email:</strong> 
            <span v-if="review.email !== 'Null'" class="text-secondary">
              {{ review.email }}
            </span>
            <span v-else class="text-danger">Not Available</span>
          </p>
          <p>
            <strong>Rating:</strong>
            <span
              v-if="review.ratingstar !== 'Null' && review.ratingstar !== null"
              class="text-success"
            >
              ⭐ {{ review.ratingstar ? "Rated" : "Not Rated" }}
            </span>
            <span v-else class="text-danger">Not Rated</span>
          </p>
          <router-link to="/" class="btn btn-outline-secondary mt-3">
            Back to Reviews
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const reviews = [
  { id: 2, title: "Inception: A Dream Within a Dream - John Doe", email: "Null", ratingstar: "Null" },
    { id: 4, title: "The Alchemist - Jane Smith", email: "Null", ratingstar: "Null" },
    { id: 14, title: "The Godfather - Chris Evans", email: "Null", ratingstar: "Null" },
    { id: 23, title: "Elden Ring - Jake Miller", email: "90541106465@algonquincdistudent.ca", ratingstar: true },
    { id: 24, title: "1984-Mark Taylor", email: "90541106465@algonquincdistudent.ca", ratingstar: "True" },
    { id: 25, title: "Intersteller-Olivia Davis", email: "90541106465@algonquincdistudent.ca", ratingstar: "Null" },
    { id: 26, title: "The Catcher in the Rye - Lucy Brown", email: "90541106465@algonquincdistudent.ca", ratingstar: "Null" },
    { id: 27, title: "The Witcher 3 : Wild Hunt - Alex Johnson", email: "90541106465@algonquincdistudent.ca", ratingstar: "Null" },
    { id: 28, title: "Parasite - Sara Lee", email: "Null", ratingstar: "True" },
    { id: 29, title: "Red Dead Redemption 2 - Emma Wilson", email: "Null", ratingstar: "true" },
  ];
  const review = computed(() => {
    const id = parseInt(route.params.id);
    return reviews.find((r) => r.id === id);
  });
  </script>
  