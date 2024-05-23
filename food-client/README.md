####  CMD
      npm create vite@latest name-of-your-project -- --template react
      cd my-project
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      npm i -D daisyui@latest


#### tailwind.config.js
        /** @type {import('tailwindcss').Config} */
          export default {
            content: [
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
              extend: {},
            },
            plugins: [
              require('daisyui'),
            ],
          }

####  index.css
          @tailwind base;
          @tailwind components;
          @tailwind utilities;


##### cmd
      npm run dev
