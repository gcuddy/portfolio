// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  notes: defineCollection({
    type: "content",
    schema: z.object({
      description: z.string().optional(),
      draft: z.boolean().default(false),
      //   date could also be in filename
      pubDate: z.coerce.date().optional(),
      title: z.string(),
    }),
  }),
  lab: defineCollection({
    type: "content",
    schema: z.object({
      description: z.string().optional(),
      draft: z.boolean().default(false),
      //   date could also be in filename
      date: z.coerce.date().optional(),
      title: z.string(),
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().default(""),
      dates: z.string().optional(),
      featured: z.boolean().default(false),
      pubDate: z.coerce.date(),
      height: z.number().optional(),
      image: z.string().optional(),
      iframe: z.boolean().default(false),
      url: z.string().optional(),
      github: z.string(),
      tags: z.array(z.string()).default([]),
      technologies: z.array(z.string()).default([]),
      scope: z.enum(["project", "experiment"]).default("project"),
    }),
  }),
};
