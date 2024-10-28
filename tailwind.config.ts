import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      colors: {
        red: "#BF2C38",
        "red-dark": "#83151E",
        "red-light": "#EF4A57",
        orange: "#C9824A",
        "orange-light": "#E3A472",
        "orange-dark": "#984F15",
        darkBlue: "#30313E",
        "darkBlue-light": "#595B76",
        "darkBlue-dark": "#1B1C23",
        grey: "#86848A",
        "grey-dark": "#6C6A6F",
        "grey-light": "#A19FA4",
        offWhite: "#E7E5E2",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        display: ["var(--font-josefin-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
};
export default config;
