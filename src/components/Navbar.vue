<template>
  <header class="bg-gray-800">
    <Toast position="top-right" group="main" /> 
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16">
      <div class="text-xl font-bold text-gray-800 hidden md:block"> My Portfolio
      </div>

      <nav class="flex items-center space-x-4 md:space-x-6">
        <router-link to="/" class="text-red-400 hover:text-red-300">Profile</router-link>
        <router-link to="/creative" class="text-red-400 hover:text-red-300">Tech Stack</router-link>
        <router-link to="/showcase" class="text-red-400 hover:text-red-300">Hobbies</router-link>
        <router-link to="/contact" class="text-red-400 hover:text-red-300">Contact</router-link>
      </nav>

      <!-- <div class="relative">
        <button
          class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          @click="toggleDropdown"
        >
          {{ loggedIn ? 'Owner' : 'Login' }}
        </button>

        <div
          v-if="showDropdown && !loggedIn"
          class="absolute right-0 mt-2 w-48 bg-gray-700 border rounded shadow-md z-10 p-4"
          @click.stop
        >
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="w-full mb-2 px-2 py-1 border rounded text-sm"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full mb-2 px-2 py-1 border rounded text-sm"
          />
          <button
            @click="handleLogin"
            class="w-full bg-red-600 text-white py-1 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </div>

        <div
          v-if="showDropdown && loggedIn"
          class="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10 p-4"
          @click.stop
        >
          <p class="text-sm text-gray-700 mb-2">Welcome back, Owner!</p>
          <button
            @click="handleLogout"
            class="w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>
import { login, isLoggedIn, logout as authLogout } from '../utils/auth.js'; // Import logout from auth.js

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      username: '',
      password: '',
      showDropdown: false,
      loggedIn: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleLogin() {
      const success = login(this.username, this.password);
      if (success) {
        this.loggedIn = true;
        this.username = '';
        this.password = '';
        this.showDropdown = false;

        this.$toast.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome back, Owner!',
          life: 3000,
          group: 'main',
        });
      } else {
        this.$toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'You are not the Owner.',
          life: 3000,
          group: 'main',
        });
      }
    },
    handleLogout() {
      authLogout(); // Call the logout function to clear the state
      this.loggedIn = false;
      this.showDropdown = false;

      this.$toast.add({
        severity: 'info',
        summary: 'Logged Out',
        detail: 'Goodbye, Owner!',
        life: 3000,
        group: 'main',
      });
    }
  },
  mounted() {
    // Option A: Always start as logged out during development
    authLogout(); // Clear login state when the component mounts
    this.loggedIn = isLoggedIn(); // This will now be false
  }
};
</script>