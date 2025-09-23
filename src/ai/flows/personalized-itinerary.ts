// A Genkit flow for the AI Itinerary Planner, using Mistral 7B to generate personalized travel plans.

'use server';

/**
 * @fileOverview AI Itinerary Planner flow using Mistral 7B for personalized travel plans.
 *
 * - aiItineraryPlanner - A function that handles the itinerary planning process.
 * - AIItineraryPlannerInput - The input type for the aiItineraryPlanner function.
 * - AIItineraryPlannerOutput - The return type for the aiItineraryPlanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIItineraryPlannerInputSchema = z.object({
  query: z.string().describe("The user query for itinerary planning, e.g., 'Plan a 3-day trip to Ranchi for a family with kids.'"),
});
export type AIItineraryPlannerInput = z.infer<typeof AIItineraryPlannerInputSchema>;

const DayPlanSchema = z.object({
    day: z.number().describe("The day number, e.g., 1"),
    title: z.string().describe("A short title for the day's plan, e.g., 'Arrival and Local Exploration'"),
    activities: z.array(z.string()).describe("A list of activities with brief descriptions planned for the day."),
});

const AIItineraryPlannerOutputSchema = z.object({
  title: z.string().describe("The overall title of the itinerary."),
  plan: z.array(DayPlanSchema).describe('The day-by-day generated travel plan.'),
});
export type AIItineraryPlannerOutput = z.infer<typeof AIItineraryPlannerOutputSchema>;

export async function aiItineraryPlanner(input: AIItineraryPlannerInput): Promise<AIItineraryPlannerOutput> {
  return aiItineraryPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiItineraryPlannerPrompt',
  input: {schema: AIItineraryPlannerInputSchema},
  output: {schema: AIItineraryPlannerOutputSchema},
  prompt: `You are a travel expert specializing in Jharkhand tourism. Generate a personalized, day-by-day travel plan based on the user's query.

Query: {{{query}}}

Please provide the output in a structured format with a main title and a list of daily plans. Each day should have a day number, a title, and a list of activities.`,
});

const aiItineraryPlannerFlow = ai.defineFlow(
  {
    name: 'aiItineraryPlannerFlow',
    inputSchema: AIItineraryPlannerInputSchema,
    outputSchema: AIItineraryPlannerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
