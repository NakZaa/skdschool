import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skd: {
          primary: {
            600: "#008e0c",
            300: "#1db42f",
          },
          gray: {
            100: "#F8FAFC",
            500: "#64748B",
          },
        },
      },
      fontFamily: {
        display: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: "768px",
        md: "992px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
}
export default config
