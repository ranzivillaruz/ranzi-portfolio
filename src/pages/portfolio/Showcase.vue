<template>
  <div class="showcase-page min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 md:p-8">
    <div class="max-w-7xl mx-auto py-8">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-8 sm:mb-10 md:mb-12 leading-tight">
        My Hobbies & Interests
      </h1>

      <p class="text-lg sm:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Beyond coding, I love to spend my time exploring various hobbies. Here's a glimpse into my world outside of development!
      </p>

      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Example Hobby Card (Duplicate this for each of your hobbies) -->
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/computer.jpg" alt="Hobby Thumbnail" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-red-300 mb-2">Playing Computer Games</h3>
            <p class="text-gray-400 text-sm mb-4">Playing computer games is one of my favorite hobbies. It helps me relax, sharpen my strategic thinking, and enjoy immersive stories and challenges. Whether it’s competitive multiplayer games or single-player adventures, gaming allows me to connect with friends, develop quick reflexes, and explore virtual worlds.

</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Relaxing</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Creative</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Bliss</span>
            </div>
          </div>
          <!-- End Example Hobby Card -->

          <!-- Add more hobby cards here based on your interests -->
          <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/book.jpg" alt="Reading Books" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-red-300 mb-2">Reading</h3>
            <p class="text-gray-400 text-sm mb-4">I enjoy reading real-life and business books because they offer practical insights, inspiring stories, and valuable lessons. These books help me understand different perspectives, improve decision-making, and develop personal and professional growth. It’s a hobby that fuels my curiosity and keeps me motivated to keep learning.</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Learning</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Imagination</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Relaxation</span>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <img src="../../assets/images/hiking.jpg" alt="Hiking" class="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 class="text-xl font-semibold text-red-300 mb-2">Hiking</h3>
            <p class="text-gray-400 text-sm mb-4">Hiking is one of my favorite ways to stay active and connect with nature. It allows me to explore scenic trails, enjoy fresh air, and clear my mind from everyday stress. Whether it’s a casual walk or a challenging climb, hiking gives me a sense of adventure and accomplishment.</p>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500">
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Outdoor</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Fitness</span>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-blue-300">Exploration</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  data() {
    return {
      // You can define a 'hobbies' array here if you want to loop through data
      // For now, content is directly in the template
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to Showcase.vue */
</style>
