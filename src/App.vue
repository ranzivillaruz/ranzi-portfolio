<template>
  <div id="app">
    <Toast position="bottom-right" group="main"/>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: {
    Toast,
    Navbar,
    Footer
  }
};
</script>

<style>
/* src/App.vue styles */

/* Ensure html and body height is set for proper scrolling */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* For smooth scrolling */
}

/* Set a global dark background and default text color */
body {
  font-family: sans-serif; /* Or your preferred font */
  background-color: #2D3748; /* Tailwind's bg-gray-800 color */
  color: #E2E8F0; /* Tailwind's text-gray-200 for default text */
}

/* Add min-h-screen to #app to ensure it takes full height for content */
#app {
  min-height: 100vh; /* This ensures the app takes full viewport height */
  display: flex; /* Allows flex-col for stacking Navbar and content */
  flex-direction: column;
}
</style>
