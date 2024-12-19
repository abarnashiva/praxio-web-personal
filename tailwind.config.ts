import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0 1rem 0 1rem",
        screens: {
          "2xl": "1800px",
        },
      },
      background: "#fff",
      colors: {
        primary: {
          DEFAULT: "#106FB1",
          100: "#106FB1",
          200: "#0e649f",
          300: "#0d598e",
          400: "#0b4e7c",
          500: "#0a436a",
          600: "#083859",
          700: "#062c47",
        },
        secondary: {
          DEFAULT: "#7DBC44",
        },
        banner: {
          DEFAULT: "#333333",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-family)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
