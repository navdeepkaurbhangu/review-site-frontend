<template>
    <div class="container py-5">
      <h1 class="mb-4 text-center text-primary">Reviews Library</h1>
      <div class="row">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="col-md-4 mb-4 d-flex align-items-stretch"
        >
          <div class="card shadow border-primary">
            <div class="card-body">
              <h5 class="card-title text-primary">{{ review.title }}</h5>
              <p class="card-text">
                <strong>Email:</strong> 
                <span v-if="review.email !== 'Null'" class="text-secondary">
                  {{ review.email }}
                </span>
                <span v-else class="text-danger">Not Available</span>
                <br />
                <strong>Rating:</strong>
                <span
                  v-if="review.ratingstar !== 'Null' && review.ratingstar !== null"
                  class="text-success fw-bold"
                >
                  ⭐ {{ review.ratingstar ? "Rated" : "Not Rated" }}
                </span>
                <span v-else class="text-danger">Not Rated</span>
              </p>
              <router-link
                :to="`/review/${review.id}`"
                class="btn btn-outline-primary mt-2"
              >
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
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
  </script>
  