import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#22263b",
        secondary: "#ff3d52",
        accent: "#1d2235",
      },
      background: {
        primary: "#22263b",
        secondary: "#ff3d52",
        accent: "#1d2235",
      },
      width: {
        layout: "1140px",
      },
      maxWidth: {
        layout: "1140px",
      },
    },
  },
  plugins: [],
});
export default config;
