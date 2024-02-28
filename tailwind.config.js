/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      screens: {
        '3xl': '1980px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
