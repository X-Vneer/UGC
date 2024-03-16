import type { Config } from "tailwindcss"

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
        padding: "2rem",
      },
      colors: {
        primary: "#e5ff76",
        secondary: "#1F19E1",
        customBlack: "#1e1e1e",
        lightGray: "#7a7a7a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
