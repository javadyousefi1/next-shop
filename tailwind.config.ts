import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/*/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-iranSans)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#4a6dff",
        darkPrimary: "#1032c0",
        secondary: "#3f4264",
        mainBlack: "#212121",
        mainGray: "#9e9e9e",
      },
    },
  },
  plugins: [],
};
export default config;
