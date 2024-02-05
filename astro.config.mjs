import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), svelte()],
  adapter: netlify(),
  redirects: {
    // "/notes": "/writing",
  },
});
