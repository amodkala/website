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

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        key: z.number(),
        title: z.string(),
        source: z.string()
    })
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        description: z.string(),
        url: z.string().url(),
        posts: z.array(reference('blog')).optional()
    })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: postsCollection,
    notes: notesCollection,
    projects: projectsCollection,
};
