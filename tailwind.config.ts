import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "30em", // 480px
        sm: "34em", // 544px
        md: "44em", // 704px
        lg: "59em", // 944px
        xl: "75em", // 1200px
        "2xl": "84em",
      },
    },
  },
  plugins: [],
};
export default config;
