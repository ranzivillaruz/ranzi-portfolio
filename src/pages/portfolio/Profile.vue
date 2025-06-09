<template>
  <div class="profile-page flex-grow">
    <section class="hero-section flex flex-col md:flex-row items-center justify-center p-8 md:p-16 min-h-screen bg-gray-900 text-gray-100">
      <div class="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="@/assets/images/Myimg.jpg"
          alt="Ranzi's Profile"
          class="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg border-4 border-red-500"
        />
      </div>

      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold text-red-400 leading-tight">
          Hi! I am Ranzi,
        </h1>
        <p class="text-2xl md:text-4xl text-gray-200 mt-2">
          Aspiring Web &amp; Mobile Developer
        </p>
        <p class="mt-4 text-lg text-gray-300 max-w-xl"> Passionate about crafting dynamic and user-friendly digital experiences.
          Constantly learning and exploring the latest technologies to build innovative solutions.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// All tech icon imports and the 'techs' data property have been removed from here.

export default {
  name: 'Profile',
  data() {
    return {
      // 'techs' data property is now removed
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to Profile.vue */
</style>
