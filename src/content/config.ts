// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      tags: z.array(z.string()),
      isDraft: z.boolean()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
};
