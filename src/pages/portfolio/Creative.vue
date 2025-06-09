<template>
  <div class="creative-page min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 md:p-8">
    <div class="max-w-7xl mx-auto py-8">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-8 sm:mb-10 md:mb-12 leading-tight">
        My Creative Works & Tech Stack
      </h1>

      <p class="text-lg sm:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        This is where I showcase my projects and the tools I use to bring ideas to life.
        Dive in to see what I've been building!
      </p>

      <!-- Placeholder for actual projects - You'll add project cards here -->
      <section class="mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-red-400 mb-8">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Example Project Card (You'll duplicate this for each project) -->
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/aichat.png" alt="Project Thumbnail" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-blue-300 mb-2">ChAIt</h3>
            <p class="text-gray-400 text-sm mb-4">ChAIt is an AI-powered chatbot web application designed to facilitate smooth and intelligent conversations across multiple languages. Its purpose is to bridge language barriers by automatically translating messages in real time, making it ideal for global customer support, learning, or casual use.</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Python</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Tailwind CSS</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Laravel</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Docker</span>
            </div>
            <div class="flex justify-end space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-500 font-medium transition-colors duration-200">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200">GitHub</a>
            </div>
          </div>
          <!-- End Example Project Card -->
<div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/transcribe.jpg" alt="Project Thumbnail" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-blue-300 mb-2">Transcribe Me</h3>
            <p class="text-gray-400 text-sm mb-4">Transcribe Me is a powerful and intuitive web application designed to automatically transcribe spoken content from videos into accurate, editable text. Its purpose is to help content creators, students, researchers, and professionals save time by converting audio to text with just a few clicks.</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">React JS</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Laravel</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">Firebase</span>
            </div>
            <div class="flex justify-end space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-500 font-medium transition-colors duration-200">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200">GitHub</a>
            </div>
          </div><div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/inndays.png" alt="Project Thumbnail" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-blue-300 mb-2">innDays</h3>
            <p class="text-gray-400 text-sm mb-4">innDays is a user-friendly web application designed to simplify short-term rental bookings for local travelers and hosts. Inspired by Airbnb, its purpose is to connect guests with comfortable, affordable accommodations in their area. The platform enables hosts to list their properties and manage bookings, while guests can browse, reserve, and review stays with ease.</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">HTML</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">CSS</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">JS</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-red-300">PHP</span>
            </div>
            <div class="flex justify-end space-x-3">
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-500 font-medium transition-colors duration-200">Live Demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200">GitHub</a>
            </div>
          </div>
          <!-- Add more project cards here -->
        </div>
      </section>

      <!-- Technologies I Use section moved here -->
      <section class="tech-stack-section py-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-red-400 mb-10">
          Technologies I Use
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <div
            v-for="tech in techs"
            :key="tech.name"
            class="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-700"
          >
            <img
              :src="tech.image"
              :alt="tech.name"
              class="w-20 h-20 object-contain mb-2"
            />
            <p class="text-gray-200 text-sm font-medium text-center">{{ tech.name }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// Import all your images at the top for Vite
import reactIcon from '@/assets/images/react.svg';
import laravelIcon from '@/assets/images/laravel.svg';
import tailwindcssIcon from '@/assets/images/tailwindcss.svg';
import vueIcon from '@/assets/images/Vue.js.png';
import javaIcon from '@/assets/images/java.svg';
import dockerIcon from '@/assets/images/docker.svg';
import phpIcon from '@/assets/images/php.svg';
import htmlIcon from '@/assets/images/html.svg';
import cssIcon from '@/assets/images/css.svg';
import javascriptIcon from '@/assets/images/javascript.png';
import pythonIcon from '@/assets/images/python.svg';
import cIcon from '@/assets/images/c.png';

export default {
  name: 'Creative', // Changed component name to Creative
  data() {
    return {
      // Tech stack data is now here
      techs: [
        { name: 'React', image: reactIcon },
        { name: 'Laravel', image: laravelIcon },
        { name: 'Tailwind CSS', image: tailwindcssIcon },
        { name: 'Vue.js', image: vueIcon },
        { name: 'Java', image: javaIcon },
        { name: 'Docker', image: dockerIcon },
        { name: 'PHP', image: phpIcon },
        { name: 'HTML', image: htmlIcon },
        { name: 'CSS', image: cssIcon },
        { name: 'JavaScript', image: javascriptIcon },
        { name: 'Python', image: pythonIcon },
        { name: 'C++', image: cIcon },
      ],
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to Creative.vue */
</style>
