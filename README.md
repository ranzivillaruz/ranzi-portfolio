# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# ranzi-portfolio

Ranzi N. Villaruz - Vue.js Portfolio Web App
🚀 Project Overview
Welcome to my personal/professional portfolio web application, built with Vue.js! This interactive single-page application is designed to showcase my profile, projects, and creative work, offering a seamless user experience with custom styling and animations. It's a testament to my skills in modern frontend development using the Vue.js framework and its ecosystem.

✨ Features
This portfolio app includes the following key sections and functionalities:

Custom Login Page: A unique login interface with basic hardcoded validation. Upon successful login, users are redirected to the portfolio dashboard.
Profile Page (/portfolio/profile): Displays my personal details, including a photo, a brief biography, and links to my social media profiles.
Portfolio Showcase (/portfolio/showcase): A dynamic gallery or card-based display of my work and projects, highlighting key aspects of each.
Contact Page (/portfolio/contact): A simple form for visitors to leave messages, including fields for name, email, and message content.
Creative Page (/portfolio/creative): A unique space to showcase a specific interest or skill.
[E.g., "My Tech Blog" / "My Hobbies Gallery" / "Interactive Resume" / "Client Testimonials" / "A mini-calculator app"]
Unique Design & Animations: The application features a custom color theme and incorporates various animations and effects to enhance visual appeal and user interaction.
Vue Router Navigation: Smooth and efficient client-side routing enables seamless navigation between the different sections of the portfolio without full page reloads.
🛠️ Technologies Used
Vue.js [Version 4]: The progressive JavaScript framework for building user interfaces.
Vue Router [Version 4.x]: Official routing library for Vue.js.
UI Framework: TailwindCSS, Primevue
libraries/tools: Vite, Vue-router, Vue-Devtool

## 🖥️ Local Setup and Installation

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have the following installed:

Node.js (LTS version recommended)
npm (Node Package Manager, comes with Node.js) or Yarn
Installation Steps
Clone the repository:

Bash

git clone https://github.com/ranzivillaruz/ranzi-portfolio.git
Navigate into the project directory:

Bash

cd ranzi-portfolio
Install project dependencies:

Bash

npm install

# OR

yarn install
Run the development server:

Bash

npm run serve

# OR

yarn serve
This command will start a local development server, typically at http://localhost:8080. The console will provide the exact address.

➡️ Usage
Open your web browser and navigate to the address provided by the development server (e.g., http://localhost:8080).

Use the following hardcoded credentials to log in:
Username: Ranzi
Password: 123

📄 Project Structure
The project follows a standard Vue.js directory structure:

ranzi-portfolio/
├── public/ # Static assets (index.html, favicon.ico)
├── src/
│ ├── assets/ # Images, fonts, custom CSS (e.g., global styles)
│ ├── components/ # Reusable Vue components (e.g., Card, FormField)
│ ├── router/ # Vue Router configuration (index.js with routes)
│ ├── views/ # Main page components (e.g., Profile.vue, Login.vue)
│ ├── App.vue # Main application component
│ └── main.js # Entry point of the Vue app (initializes Vue, router)
├── .gitignore # Specifies intentionally untracked files to ignore
├── package.json # Project metadata and dependencies
├── README.md # This file!
└── vue.config.js (optional)# Vue CLI configuration
📝 Code Comments
Key sections of the code, especially within Vue components, router configuration, and custom logic, are well-commented to explain their purpose and functionality. This helps in understanding the implementation details and maintainability.

🤝 Contributing
This is a personal portfolio project, but if you have suggestions or find issues, feel free to open an issue in this repository.

📧 Contact
[Your Name] - ranzivillaruz@gmail.com
GitHub: [Link to your GitHub profile, e.g., https://github.com/ranzivillaruz]
