/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'left' : {
          '0%':{ transform: 'translateX(-10%)', opacity:0 },
          '100%':{ transform: 'translateX(0%)', opacity:1 }
        }, 
        'right' : {
          '0%':{ transform: 'translateX(10%)', opacity:0 },
          '100%':{ transform: 'translateX(0%)', opacity:1 }
        }, 
        'top' : {
          '0%':{ transform: 'translatey(-10%)', opacity:0 },
          '100%':{ transform: 'translateY(0%)', opacity:1 }
        }, 
        'bottom' : {
          '0%':{ transform: 'translateY(10%)', opacity:0 },
          '100%':{ transform: 'translateY(0%)', opacity:1 }
        }, 
        'bgchange': {
          '0%':{ backgroundSize: '0% 100%',},
          '100%':{ backgroundSize: '100% 100%' }
        }
      },
       animation: {
        'left': 'left 1.5s ease-in-out',
        'right': 'right 1.5s ease-in-out',
        'top': 'top 1.5s ease-in-out',
        'bottom': 'bottom 1.5s ease-in-out',
        'bgchange': 'bgchange 1.5 ease-in-out',
       }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

