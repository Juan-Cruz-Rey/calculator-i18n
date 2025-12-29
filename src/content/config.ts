/**
 * Content Collections Configuration
 *
 * This file defines the schema for MDX calculator content.
 * Each calculator has a separate MDX file per language in:
 * src/content/calculators/{lang}/{calculatorId}.mdx
 */

import { defineCollection, z } from 'astro:content';

const calculators = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO Meta Data
    title: z.string(),
    metaDescription: z.string(),
    keywords: z.string().optional(),
    canonical: z.string(),

    // Optional Schema.org structured data
    schema: z.record(z.any()).optional(),

    // Calculator-specific configuration
    showCalculatorFirst: z.boolean().default(false), // If true, show calculator before intro content
    hideCalculator: z.boolean().default(false), // If true, don't include the calculator component automatically
  })
});

export const collections = {
  calculators
};
