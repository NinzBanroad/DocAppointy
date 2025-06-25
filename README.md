Doctor Appointment Booking App using React JS, MongoDB, Express and Node JS with Tailwind as utility-first CSS Framework and Vite for the Build Tool.

Reactjs is a JavaScript library used for building user interfaces, particularly for single-page applications.

Nodejs is a runtime environment that allows JavaScript to run server-side.

Express is a minimalist and flexible Node.js web application framework that provides a set of features for building web and mobile applications

MongoDB is a popular, open-source, NoSQL document database.

Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed classes for styling web elements.

Vite is a next-generation front-end build tool designed for modern web projects.

STEPS TO CREATE REACT APP USING VITE:

1. npm create vite@latest
2. Add project name
3. Select Framework: React
4. Select a variant: Javascript
5. Go to the newly added directory: cd name of the directory e.g. frontend
6. Install all dependencies: npm install
7. Then install also some additional packages like axios, react-router-dom, react-toastify
8. Update as well the vite.config.js file to add Tailwind CSS:
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
   plugins: [tailwindcss(), react()],
   server: { port: 5174 }, //you can remove this line if you are not using multiple ports
   });
9. Run npm run dev to run the project
