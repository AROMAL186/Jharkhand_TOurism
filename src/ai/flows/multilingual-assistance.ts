// src/ai/flows/multilingual-assistance.ts
'use server';

/**
 * @fileOverview A multilingual chatbot for assisting tourists with trip planning.
 *
 * - multilingualAssistance - A function that provides multilingual chatbot assistance for trip planning.
 * - MultilingualAssistanceInput - The input type for the multilingualAssistance function.
 * - MultilingualAssistanceOutput - The return type for the multilingualAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultilingualAssistanceInputSchema = z.object({
  query: z.string().describe('The tourist query or request for assistance.'),
  language: z.string().describe('The language in which the response should be provided.'),
});

export type MultilingualAssistanceInput = z.infer<typeof MultilingualAssistanceInputSchema>;

const MultilingualAssistanceOutputSchema = z.object({
  response: z.string().describe('The chatbot response in the requested language.'),
});

export type MultilingualAssistanceOutput = z.infer<typeof MultilingualAssistanceOutputSchema>;

export async function multilingualAssistance(input: MultilingualAssistanceInput): Promise<MultilingualAssistanceOutput> {
  return multilingualAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multilingualAssistancePrompt',
  input: {schema: MultilingualAssistanceInputSchema},
  output: {schema: MultilingualAssistanceOutputSchema},
  prompt: `You are a multilingual chatbot assisting tourists with trip planning in Jharkhand.

  Respond to the following query in the specified language:

  Query: {{{query}}}
  Language: {{{language}}}

  Provide a helpful and informative response tailored to the tourist's needs.`,
});

const multilingualAssistanceFlow = ai.defineFlow(
  {
    name: 'multilingualAssistanceFlow',
    inputSchema: MultilingualAssistanceInputSchema,
    outputSchema: MultilingualAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
