import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at https://onweemmanuel.github.io/MyPortfolio/
  base: "/MyPortfolio/",
  build: {
    // Each HTML file is its own page: / and /pricing/. Kepa has its own
    // site at https://getkepa.pages.dev/ (repo OnweEmmanuel/kepa-site).
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        pricing: resolve(import.meta.dirname, "pricing/index.html"),
      },
    },
  },
});
