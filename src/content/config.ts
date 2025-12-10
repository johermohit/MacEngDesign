import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = {
    'pages': pagesCollection,
};
