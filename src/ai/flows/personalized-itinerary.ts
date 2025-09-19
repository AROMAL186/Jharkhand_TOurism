
'use server';

/**
 * @fileOverview Generates personalized travel itineraries for tourists in Jharkhand based on their interests, preferences, and available time.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized travel itinerary.
 * - PersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - PersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedItineraryInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the tourist, such as eco-tourism, cultural sites, historical landmarks, or adventure activities.'),
  preferences: z
    .string()
    .describe('The preferences of the tourist, such as budget, accommodation type, food preferences, and travel style.'),
  availableTime: z
    .string()
    .describe('The available time the tourist has for the trip, specified in days or hours.'),
  locationPreferences: z.string().describe('Preferred locations or regions within Jharkhand, if any.'),
  pace: z.string().describe('Desired pace of the itinerary (e.g., relaxed, moderate, packed).'),
});
export type PersonalizedItineraryInput = z.infer<
  typeof PersonalizedItineraryInputSchema
>;

const PersonalizedItineraryOutputSchema = z.object({
  itinerary: z
    .string()
    .describe('A day-by-day, detailed travel itinerary for the tourist, including destinations, activities, and estimated time for each activity. Use Markdown for formatting.'),
  overallTheme: z.string().describe('A short summary of the overall theme of the itinerary.'),
  estimatedCost: z
    .string()
    .describe('An estimated cost for the entire itinerary, including transportation, accommodation, and activities.'),
});
export type PersonalizedItineraryOutput = z.infer<
  typeof PersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: PersonalizedItineraryInput
): Promise<PersonalizedItineraryOutput> {
  return personalizedItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedItineraryPrompt',
  input: {schema: PersonalizedItineraryInputSchema},
  output: {schema: PersonalizedItineraryOutputSchema},
  prompt: `You are an expert travel planner specializing in Jharkhand tourism.

  Based on the tourist's interests, preferences, and available time, create a personalized travel itinerary for exploring Jharkhand's eco and cultural tourism spots.

  Interests: {{{interests}}}
  Preferences: {{{preferences}}}
  Available Time: {{{availableTime}}}
  Location Preferences: {{{locationPreferences}}}
  Pace: {{{pace}}}

  Provide a detailed, day-by-day itinerary, including destinations, activities, and estimated time for each activity. Use Markdown for clear formatting (e.g., headings for days, bullet points for activities). Also, provide a short summary of the overall theme of the itinerary and an estimated cost for the entire trip.
  If no location preferences provided, focus on the most popular tourism locations.`,
});

const personalizedItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFlow',
    inputSchema: PersonalizedItineraryInputSchema,
    outputSchema: PersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

    