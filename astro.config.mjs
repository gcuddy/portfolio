import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import wikiLinkPlugin, { getPermalinks } from "@portaljs/remark-wiki-link";
// import * as fs from "node:fs";
import slugify from "slugify";
import cloudflare from "@astrojs/cloudflare";
// const permalinks = getPermalinks("./src/content/obsidian");

// https://astro.build/config
export default defineConfig({
  site: "https://guscuddy.com",
  output: "server",
  integrations: [tailwind(), svelte()],
  adapter: cloudflare({
    functionPerRoute: true,
    mode: "directory",
  }),
  markdown: {
    remarkPlugins: [
      // [
      //   wikiLinkPlugin,
      //   {
      //     pathFormat: "obsidian-short",
      //     permalinks,
      //     wikiLinkResolver: (name) => {
      //       console.log("name", name);
      //       const slugified = slugify(name);
      //       console.log("slugified", slugified);
      //       return [slugified, name];
      //     },
      //     hrefTemplate: (permalink) => {
      //       console.log("permalink", permalink);
      //       const split = permalink.split("/");
      //       console.log({
      //         split,
      //       });
      //       let name = split.at(-1);
      //       // we have to read file and see if we can get the slug from it
      //       // try {
      //       //   const text = fs.readFileSync(
      //       //     `./src/content/obsidian/${name}.md`,
      //       //     "utf-8",
      //       //   );
      //       //   const { data } = matter(text);
      //       //   if (data.slug) {
      //       //     // return data.slug;
      //       //   }
      //       // } catch {}
      //       // replace special characters
      //       name = name.replace(/[@"']/g, "");
      //       return `/notes/${name.toLowerCase()}`;
      //     },
      //   },
      // ],
    ],
  },
  redirects: {
    // "/notes": "/writing",
  },
});
