/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "site-primary": "#223769",
        "site-text-primary": "#2D2D2D",
        "site-text-secondary": "#3D4D61",
        "site-shape": "#3D4D61",
        "site-light-background": "#F4F5F7",
        "site-dark-background": "#DCDEE2",
        "site-background-dark": "#0f172a",
        "site-background-dark-2": "#1e293b",
      }
    },
    container: {
      padding: "2rem",
      center: true,
      
    },
    screens:{
      sm: {'max': '640px'},
      md: {'max': '1024px',
            'min': '640px'} ,
      lg: {'min': '1300px'} ,
    }
  },
  plugins: [],
}

