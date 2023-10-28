/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "m-sm": "400px",
        "m-md": "430px",
        "m-lg": "450px",
      },
      colors: {
        "primary-50": "#F5F0F6",
        "primary-100": "#ECCDF6",
        "primary-200": "#E0ABF0",
        "primary-300": "#D081E9",
        "primary-500": "#A103D3",
        "primary-700": "#6B028D",
        "primary-900": "#360146",
        "neutral-100": "#EEEEEE",
        "neutral-200": "#FAFAFA",
        "neutral-300": "#A6A6A6",
        "neutral-500": "#4D4D4D",
        "secondary-700": "#D49600",
        "success-50": "#EAF2E2",
        "success-900": "#0B640D",
      },
      // change font size to em from default rem
      fontSize: {
        "2xs": ".625em",
        xs: ".75em",
        sm: ".875em",
        base: "1em",
        lg: "1.125em",
        xl: "1.25em",
        "2xl": "1.5em",
      },
    },
  },
  plugins: [],
};
