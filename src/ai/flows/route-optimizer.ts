
'use server';

/**
 * @fileOverview Optimizes a travel route between multiple destinations in Jharkhand.
 *
 * - optimizeRoute - A function that calculates the most efficient route.
 * - RouteOptimizerInput - The input type for the optimizeRoute function.
 * - RouteOptimizerOutput - The return type for the optimizeRoute function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteOptimizerInputSchema = z.object({
  destinations: z
    .array(z.string())
    .describe('An array of destination names to be included in the route.'),
  optimizationMode: z
    .enum(['fastest', 'shortest'])
    .describe('The mode for optimization, either "fastest" time or "shortest" distance.'),
});
export type RouteOptimizerInput = z.infer<typeof RouteOptimizerInputSchema>;

const RouteStepSchema = z.object({
    order: z.number().describe("The step number in the optimized route."),
    destination: z.string().describe("The name of the destination for this step."),
    estimatedTime: z.string().describe("Estimated travel time from the previous destination."),
    estimatedDistance: z.string().describe("Estimated travel distance from the previous destination."),
});

const RouteOptimizerOutputSchema = z.object({
  optimizedRoute: z
    .array(RouteStepSchema)
    .describe('The optimized route as an ordered list of destinations.'),
  totalEstimatedTime: z.string().describe('The total estimated travel time for the entire route.'),
  totalEstimatedDistance: z.string().describe('The total estimated distance for the entire route.'),
  optimizationSummary: z
    .string()
    .describe('A brief summary explaining the rationale behind the optimized route.'),
});
export type RouteOptimizerOutput = z.infer<typeof RouteOptimizerOutputSchema>;

export async function optimizeRoute(input: RouteOptimizerInput): Promise<RouteOptimizerOutput> {
  return routeOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeOptimizerPrompt',
  input: {schema: RouteOptimizerInputSchema},
  output: {schema: RouteOptimizerOutputSchema},
  prompt: `You are a route optimization expert for Jharkhand, India. Your task is to create the most efficient travel route for a tourist.

  Given the following destinations:
  {{#each destinations}}
  - {{{this}}}
  {{/each}}

  And the desired optimization mode: {{{optimizationMode}}}

  Calculate the optimal order of destinations to visit. The route must start from the first destination in the provided list.
  For each step in the route, provide the destination name, the estimated travel time, and distance from the previous stop. For the first destination, the time and distance should be 0.
  Provide the total estimated time and distance for the entire trip.
  Also, provide a brief summary explaining why this route is the most efficient based on the chosen optimization mode.
  
  Assume standard road travel conditions within Jharkhand. Use realistic travel times and distances between the locations.`,
});

const routeOptimizerFlow = ai.defineFlow(
  {
    name: 'routeOptimizerFlow',
    inputSchema: RouteOptimizerInputSchema,
    outputSchema: RouteOptimizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
