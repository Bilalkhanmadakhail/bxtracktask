/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sxm': '500px',
      'ssm': '580px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdm': '900px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lgm': '1120px',
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1420px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

