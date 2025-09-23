
// src/ai/flows/sentiment-analysis.ts
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SentimentAnalysisInputSchema = z.object({
  text: z.string().describe('The text to be analyzed.'),
});

const SentimentAnalysisOutputSchema = z.object({
  sentiment: z.enum(['Positive', 'Negative', 'Neutral']).describe('The sentiment of the text.'),
});

export async function sentimentAnalysis(input: z.infer<typeof SentimentAnalysisInputSchema>): Promise<z.infer<typeof SentimentAnalysisOutputSchema>> {
  return sentimentAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sentimentAnalysisPrompt',
  input: { schema: SentimentAnalysisInputSchema },
  output: { schema: SentimentAnalysisOutputSchema },
  prompt: `Analyze the sentiment of the following text and classify it as Positive, Negative, or Neutral. 

Text: {{{text}}}

Sentiment:`,
});

const sentimentAnalysisFlow = ai.defineFlow(
  {
    name: 'sentimentAnalysisFlow',
    inputSchema: SentimentAnalysisInputSchema,
    outputSchema: SentimentAnalysisOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
