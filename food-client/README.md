####  CMD
      npm create vite@latest name-of-your-project -- --template react
      cd my-project
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      npm i -D daisyui@latest
      npm install react-router-dom localforage match-sorter sort-by

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



#######   route Create 
#### 1.CMD 
        npm install react-router-dom localforage match-sorter sort-by
##### 2.Routes.jsx
      import { createBrowserRouter } from "react-router-dom";
      const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
      ]);
      export default router;

##### 3.main.jsx
      import React from 'react'
      import ReactDOM from 'react-dom/client'

      import './index.css'
      import { RouterProvider } from 'react-router-dom'
      import router from './routes/Routes.jsx'

      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      )
 
