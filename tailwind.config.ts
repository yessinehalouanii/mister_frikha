import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF2FB",
          500: "#2F6DB3",
          900: "#1F3E6A",
        },
        steel: {
          50: "#F4F6F8",
          500: "#8A8F98",
          900: "#2B2B2B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
