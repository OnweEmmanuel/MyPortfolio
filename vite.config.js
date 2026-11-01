import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at https://onweemmanuel.github.io/MyPortfolio/
  base: "/MyPortfolio/",
});
