import { defineCollection, z } from 'astro:content';

const vips = defineCollection({
  type: 'content', // Use 'content' for Markdown/MDX content
  schema: z.object({
    founderName: z.string(),
    companyName: z.string(),
    coverDiffuse: z.string().optional(),
    coverNormal: z.string().optional(),
    coverRoughness: z.string().optional(),
    backImage: z.string().optional(),
    spineImage: z.string().optional(),
    personalNote: z.string().optional(),
    // Add more fields if needed
  }),
});

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Add more fields if needed
    })
})

export const collections = {
  'vips': vips,
  'pages': pages,
};
