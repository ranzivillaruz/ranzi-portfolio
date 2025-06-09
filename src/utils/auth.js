// src/utils/auth.js (Example, adjust based on your actual implementation)

const USERNAME = 'Ranzi';
const PASSWORD = '123'; // Replace with a secure method for production!
const LOGIN_KEY = 'isLoggedIn'; // Key for localStorage/sessionStorage

export function login(username, password) {
  if (username === USERNAME && password === PASSWORD) {
    localStorage.setItem(LOGIN_KEY, 'true'); // Or sessionStorage
    return true;
  }
  return false;
}

export function isLoggedIn() {
  return localStorage.getItem(LOGIN_KEY) === 'true'; // Or sessionStorage
}

// Add this logout function
export function logout() {
  localStorage.removeItem(LOGIN_KEY); // Or sessionStorage
}