import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    build: {
      minify: false,
      base: "https://iacs-cs.github.io/apcsp-portfolio-AAIDANN/",
    },
  },
});
