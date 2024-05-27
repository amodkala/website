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
        isDraft: z.boolean(),

        relatedPosts: z.array(reference('blog')).optional(),
        relatedNotes: z.array(reference('notes')).optional(),
        relatedProjects: z.array(reference('projects')).optional()
    })
});

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        key: z.number(),
        title: z.string(),
        source: z.string(),

        relatedPosts: z.array(reference('blog')).optional(),
        relatedNotes: z.array(reference('notes')).optional(),
        relatedProjects: z.array(reference('projects')).optional()
    })
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        description: z.string(),
        url: z.string().url(),

        relatedPosts: z.array(reference('blog')).optional(),
        relatedNotes: z.array(reference('notes')).optional(),
        relatedProjects: z.array(reference('projects')).optional()
    })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: postsCollection,
    notes: notesCollection,
    projects: projectsCollection,
};
