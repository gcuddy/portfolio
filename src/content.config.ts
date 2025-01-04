// 1. Import utilities from `astro:content`
import { rssSchema } from "@astrojs/rss";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  notes: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
    schema: rssSchema.extend({
      draft: z.boolean().default(false),
      title: z.string(),
    }),
  }),
  lab: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/lab" }),
    schema: rssSchema
      .extend({
        draft: z.boolean().default(false),
      })
      .required({
        pubDate: true,
      }),
  }),
  projects: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/projects",
    }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().default(""),
        dates: z.string().optional(),
        featured: z.boolean().default(false),
        pubDate: z.coerce.date(),
        height: z.number().optional(),
        image: image().optional(),
        video: z.string().optional(),
        iframe: z.boolean().default(false),
        url: z.string().optional(),
        github: z.string().optional(),
        tags: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([]),
        scope: z
          .enum(["project", "experiment", "prototype"])
          .default("project"),
      }),
  }),
};
