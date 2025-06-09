import { createRouter, createWebHistory } from 'vue-router';

import Profile from '../pages/portfolio/Profile.vue';
import Showcase from '../pages/portfolio/Showcase.vue';
import Contact from '../pages/portfolio/Contact.vue';
import Creative from '../pages/portfolio/Creative.vue';

const routes = [
  { path: '/', component: Profile },           // Home page
  { path: '/showcase', component: Showcase },
  { path: '/contact', component: Contact },
  { path: '/creative', component: Creative },
  { path: '/:catchAll(.*)', redirect: '/' }   // Redirect unknown routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;