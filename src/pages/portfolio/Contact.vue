<template>
  <div class="contact-page min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
    <div class="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 md:p-12 border border-gray-700">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red-400 mb-8 sm:mb-10 md:mb-12 leading-tight">
        Connect with Me!
      </h1>

      <p class="text-lg sm:text-xl text-gray-300 text-center mb-10">
        Feel free to reach out through any of these platforms:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <a
          v-for="platform in socialLinks"
          :key="platform.name"
          :href="platform.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center space-x-4 p-4 bg-gray-700 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
        >
          <!-- Now using an <img> tag for all icons -->
          <img
            :src="platform.image"
            :alt="platform.name + ' icon'"
            class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span class="text-xl sm:text-2xl font-semibold">{{ platform.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import FacebookIcon from '@/assets/images/fb.svg';
import InstagramIcon from '@/assets/images/instagram.png';
import XTwitterIcon from '@/assets/images/x.png';
import LinkedInIcon from '@/assets/images/linkedin.svg';
import GithubIcon from '@/assets/images/github.svg';
import GmailIcon from '@/assets/images/gmail.svg';
export default {
  name: 'Contact',
  data() {
    return {
      socialLinks: [
        {
          name: 'Facebook',
          image: FacebookIcon, // Replace with the actual path to your Facebook icon
          link: 'https://www.facebook.com/ranzivllrz/', // Replace with your Facebook profile URL
        },
        {
          name: 'Instagram',
          image: InstagramIcon, // Replace with the actual path to your Instagram icon
          link: 'https://www.instagram.com/ranzivllrz/', // Replace with your Instagram profile URL
        },
        {
          name: 'X (Twitter)',
          image: XTwitterIcon, // Replace with the actual path to your X (Twitter) icon
          link: 'https://twitter.com/yourprofile', // Replace with your X (Twitter) profile URL
        },
        {
          name: 'LinkedIn',
          image: LinkedInIcon, // Replace with the actual path to your LinkedIn icon
          link: 'https://www.linkedin.com/in/ranzi-villaruz/', // Replace with your LinkedIn profile URL
        },
        {
          name: 'GitHub',
          image: GithubIcon, // Replace with the actual path to your GitHub icon
          link: 'https://github.com/ranzivillaruz', // Replace with your GitHub profile URL
        },
        {
          name: 'Gmail',
          image: GmailIcon, // Replace with the actual path to your Gmail icon
          link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ranzivillaruz@gmail.com', // Replace with your email address
        },
      ],
    };
  },
};
</script>

<style scoped>
/* You can add any specific styles here if needed, but Tailwind handles most of it */
</style>
