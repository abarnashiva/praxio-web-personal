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
          "2xl": "1850px",
        },
      },
      background: "#fff",
      colors: {
        primary: {
          DEFAULT: "#ED1F24CC",
          100: "#ED1F24CC",
          200: "#f9b8ba",
          300: "#f6898c",
          400: "#f25a5d",
          500: "#ED1F24CC",
          600: "#f25a5d",
          700: "#a50d11",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
