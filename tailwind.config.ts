import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm dark — not blue-tinted GitHub dark, not pure black
        ink: {
          DEFAULT: "#0e0e0c",      // warm off-black background
          deep: "#080806",         // deepest layer
          panel: "#161613",        // elevated surfaces
          line: "#28281f",         // hairline borders
        },
        bone: {
          DEFAULT: "#e8e4d8",      // primary text — warm bone white
          dim: "#9b9789",          // secondary
          mute: "#67645a",         // tertiary, faint
        },
        sage: {
          DEFAULT: "#7a8471",      // muted sage — secondary accent
          dim: "#4a5043",
        },
        rust: {
          DEFAULT: "#d4663a",      // burnt orange — single sharp accent
          deep: "#a04d28",
          glow: "#e88556",
        },
      },
      fontFamily: {
        // Distinctive choices — NOT Inter/Roboto
        display: ['"Fraunces"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', '"Helvetica Neue"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
