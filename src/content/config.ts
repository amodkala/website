// Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";
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

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        url: z.string().url(),
        relatedPosts: z.array(reference('blog')),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
  projects: projectsCollection,
};
