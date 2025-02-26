/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js,ts,tsx}",
    "./components/**/*.{html,jsx,js,tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'clipboard-strong-cyan': 'hsl(171, 66%, 44%)',
        'clipboard-light-blue': 'hsl(233, 100%, 69%)',
        'clipboard-grayish-blue': 'hsl(240, 2%, 79%)',
        'clipboard-very-dark-blue': 'hsl(207, 13%, 34%)'
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

