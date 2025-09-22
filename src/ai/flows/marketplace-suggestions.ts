'use server';

/**
 * @fileOverview Generates AI-powered suggestions for marketplace products.
 *
 * - generateMarketplaceSuggestions - A function that analyzes products and provides suggestions.
 * - MarketplaceSuggestionsInput - The input type for the function.
 * - MarketplaceSuggestionsOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  artisan: z.string(),
  price: z.string(),
});

const MarketplaceSuggestionsInputSchema = z.object({
  products: z.array(ProductSchema),
});
export type MarketplaceSuggestionsInput = z.infer<typeof MarketplaceSuggestionsInputSchema>;

const SuggestionSchema = z.object({
  productId: z.number().describe('The ID of the product this suggestion is for.'),
  suggestion: z.string().describe('A short, catchy suggestion for the product (e.g., "Top Rated", "Artisan\'s Choice", "Great Value").'),
});

const MarketplaceSuggestionsOutputSchema = z.object({
  suggestions: z.array(SuggestionSchema),
});
export type MarketplaceSuggestionsOutput = z.infer<typeof MarketplaceSuggestionsOutputSchema>;

export async function generateMarketplaceSuggestions(
  input: MarketplaceSuggestionsInput
): Promise<MarketplaceSuggestionsOutput> {
  return marketplaceSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketplaceSuggestionsPrompt',
  input: {schema: MarketplaceSuggestionsInputSchema},
  output: {schema: MarketplaceSuggestionsOutputSchema},
  prompt: `You are a helpful e-commerce assistant for a local artisan marketplace in Jharkhand.
  Your task is to generate a short, catchy, and positive suggestion for each product provided.

  Analyze the following list of products:
  {{#each products}}
  - Product ID: {{id}}, Name: {{name}}, Category: {{category}}, Artisan: {{artisan}}, Price: {{price}}
  {{/each}}

  Based on the product details, generate a compelling suggestion for each one.
  Examples of suggestions: "Top Rated", "Artisan's Choice", "Excellent Quality", "Popular Pick", "Great Value", "Must Buy", "Customer Favorite".
  
  Do not use negative or neutral words. The suggestions should encourage users to consider the product.
  Return a list of suggestions, each with the corresponding productId.
  `,
});

const marketplaceSuggestionsFlow = ai.defineFlow(
  {
    name: 'marketplaceSuggestionsFlow',
    inputSchema: MarketplaceSuggestionsInputSchema,
    outputSchema: MarketplaceSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
