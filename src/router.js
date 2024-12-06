import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ReviewDetails from './views/ReviewDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/review/:id', name: 'ReviewDetails', component: ReviewDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
