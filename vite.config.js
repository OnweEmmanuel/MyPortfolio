import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { policyToHtml } from "./kepa/markdown.js";

const KEPA_POLICY = resolve(import.meta.dirname, "kepa/privacy-policy.md");

// Writes Kepa's privacy policy into /kepa/privacy/ as plain HTML at build
// time (and on every reload in dev), from kepa/privacy-policy.md.
function kepaPrivacyPolicy() {
  return {
    name: "kepa-privacy-policy",
    configureServer(server) {
      server.watcher.add(KEPA_POLICY);
      server.watcher.on("change", (file) => {
        if (file === KEPA_POLICY) server.ws.send({ type: "full-reload" });
      });
    },
    transformIndexHtml(html) {
      if (!html.includes("<!-- kepa:privacy-policy -->")) return html;
      const policy = policyToHtml(readFileSync(KEPA_POLICY, "utf8"), { skipTitle: true });
      return html.replace("<!-- kepa:privacy-policy -->", policy);
    },
  };
}

export default defineConfig({
  plugins: [react(), kepaPrivacyPolicy()],
  // GitHub Pages serves this repo at https://onweemmanuel.github.io/MyPortfolio/
  base: "/MyPortfolio/",
  build: {
    // Each HTML file is its own page: /, /pricing/, /kepa/ and /kepa/privacy/.
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        pricing: resolve(import.meta.dirname, "pricing/index.html"),
        kepa: resolve(import.meta.dirname, "kepa/index.html"),
        kepaPrivacy: resolve(import.meta.dirname, "kepa/privacy/index.html"),
      },
    },
  },
});
