import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import wikiLinkPlugin, { getPermalinks } from "@portaljs/remark-wiki-link";

import netlify from "@astrojs/netlify/functions";
import slugify from "slugify";

const permalinks = getPermalinks("./src/content/obsidian");

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), svelte()],
  adapter: netlify(),
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          pathFormat: "obsidian-short",
          permalinks,
          wikiLinkResolver: (name) => {
            console.log("name", name);
            const slugified = slugify(name);
            console.log("slugified", slugified);
            return [slugified, name];
          },
          hrefTemplate: (permalink) => {
            console.log("permalink", permalink);
            const split = permalink.split("/");
            console.log({ split });
            const name = split.at(-1);
            return `/notes/${name.toLowerCase()}`;
          },
        },
      ],
    ],
  },

  redirects: {
    // "/notes": "/writing",
  },
});
