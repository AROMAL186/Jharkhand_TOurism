'use server';

/**
 * @fileOverview Performs AI-driven sentiment analysis on tourist feedback.
 *
 * - analyzeSentiment - A function that analyzes the sentiment of tourist feedback.
 * - SentimentAnalysisInput - The input type for the analyzeSentiment function.
 * - SentimentAnalysisOutput - The return type for the analyzeSentiment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SentimentAnalysisInputSchema = z.object({
  feedback: z
    .string()
    .describe('The feedback text provided by a tourist.'),
});
export type SentimentAnalysisInput = z.infer<typeof SentimentAnalysisInputSchema>;

const SentimentAnalysisOutputSchema = z.object({
  sentiment: z
    .string()
    .describe('The overall sentiment expressed in the feedback (e.g., positive, negative, neutral).'),
  positiveKeywords: z
    .array(z.string())
    .describe('Keywords or phrases indicating positive sentiment.'),
  negativeKeywords: z
    .array(z.string())
    .describe('Keywords or phrases indicating negative sentiment.'),
  suggestions: z
    .string()
    .describe('Suggestions for improvement based on the sentiment analysis.'),
});
export type SentimentAnalysisOutput = z.infer<typeof SentimentAnalysisOutputSchema>;

export async function analyzeSentiment(input: SentimentAnalysisInput): Promise<SentimentAnalysisOutput> {
  return analyzeSentimentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sentimentAnalysisPrompt',
  input: {schema: SentimentAnalysisInputSchema},
  output: {schema: SentimentAnalysisOutputSchema},
  prompt: `You are an AI assistant that analyzes tourist feedback to determine the overall sentiment and provide suggestions for improvement.

  Analyze the following feedback:
  """{{feedback}}"""

  Determine the overall sentiment (positive, negative, or neutral).
  Identify keywords or phrases that indicate positive and negative sentiment.
  Provide suggestions for improvement based on the sentiment analysis.

  Output the sentiment, positive keywords, negative keywords, and suggestions in a JSON format.
  `,
});

const analyzeSentimentFlow = ai.defineFlow(
  {
    name: 'analyzeSentimentFlow',
    inputSchema: SentimentAnalysisInputSchema,
    outputSchema: SentimentAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
