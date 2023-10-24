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
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      dates: z.string().optional(),
      featured: z.boolean().default(false),
      pubDate: z.coerce.date(),
      image: z.string(),
      url: z.string(),
      github: z.string(),
      tags: z.array(z.string()),
      technologies: z.array(z.string()),
    }),
  }),
};
