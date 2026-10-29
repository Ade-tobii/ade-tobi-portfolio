import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies. Add a new Markdown file to src/content/work/ to publish a
 * new build; the build fails with a clear message if a field is missing.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** Optional technical title, shown under the main title on the case page. */
    subtitle: z.string().optional(),
    summary: z.string(),
    order: z.number(),
    client: z.string().optional(),
    /** Short plain-language label shown above the title, e.g. "Banking". */
    category: z.string(),
    /** One-line headline result, shown as the green impact badge. */
    impact: z.string(),
    challenge: z.string(),
    solution: z.string(),
    result: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    stack: z.array(z.string()),
    diagram: z.string().optional(),
    diagramAlt: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { work };
