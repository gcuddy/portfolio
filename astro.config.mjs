import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  site: "https://guscuddy.com",
  output: "static",
  integrations: [tailwind(), svelte()],
  adapter: netlify(),
  redirects: {
    // "/notes": "/writing",
  },
});
