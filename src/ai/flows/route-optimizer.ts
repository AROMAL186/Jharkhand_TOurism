'use server';
/**
 * @fileOverview A Genkit flow for optimizing travel routes.
 *
 * - routeOptimizer - A function that generates an optimized travel route.
 * - RouteOptimizerInput - The input type for the routeOptimizer function.
 * - RouteOptimizerOutput - The return type for the routeOptimizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteOptimizerInputSchema = z.object({
  destinations: z.array(z.string()).describe('A list of destination names to include in the route.'),
  travelMode: z.enum(['DRIVING', 'BIKING', 'TRAIN']).describe('The preferred mode of travel.'),
  startPoint: z.string().optional().describe('An optional starting point for the journey.'),
  endPoint: z.string().optional().describe('An optional ending point for the journey.'),
  estimateCost: z.boolean().describe('Whether to provide a cost estimation.'),
  getWeather: z.boolean().describe('Whether to provide weather insights.'),
  analyzeTraffic: z.boolean().describe('Whether to provide real-time traffic analysis.'),
});
export type RouteOptimizerInput = z.infer<typeof RouteOptimizerInputSchema>;

const StepSchema = z.object({
  step: z.number().describe('The step number in the sequence.'),
  location: z.string().describe('The name of the location for this step.'),
  details: z.string().describe('A brief description of the activity or travel instruction for this step.'),
  estimatedDuration: z.string().optional().describe('The estimated time to complete this step (e.g., "2 hours").'),
});

const RouteOptimizerOutputSchema = z.object({
  title: z.string().describe('A descriptive title for the generated route plan.'),
  optimizedRoute: z.array(StepSchema).describe('The sequence of steps in the optimized route.'),
  summary: z.string().describe('A brief summary of the overall trip.'),
  costEstimation: z.string().optional().describe('An estimated cost for the trip if requested.'),
  weatherInsights: z.string().optional().describe('Weather information for the route if requested.'),
  trafficAnalysis: z.string().optional().describe('Traffic analysis for the route if requested.'),
});
export type RouteOptimizerOutput = z.infer<typeof RouteOptimizerOutputSchema>;

export async function routeOptimizer(input: RouteOptimizerInput): Promise<RouteOptimizerOutput> {
  return routeOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeOptimizerPrompt',
  input: {schema: RouteOptimizerInputSchema},
  output: {schema: RouteOptimizerOutputSchema},
  prompt: `You are an expert route planner for Jharkhand tourism. Your task is to generate an optimized travel itinerary based on the user's selections.

User Inputs:
- Destinations: {{{json destinations}}}
- Travel Mode: {{{travelMode}}}
{{#if startPoint}}- Start Point: {{{startPoint}}}{{/if}}
{{#if endPoint}}- End Point: {{{endPoint}}}{{/if}}

Requested Information:
- Cost Estimation: {{#if estimateCost}}Yes{{else}}No{{/if}}
- Weather Insights: {{#if getWeather}}Yes{{else}}No{{/if}}
- Traffic Analysis: {{#if analyzeTraffic}}Yes{{else}}No{{/if}}

Instructions:
1. Create a logical and efficient route that covers all selected destinations. The sequence should minimize travel time and backtracking.
2. If a start or end point is provided, use it. Otherwise, determine the most logical start/end from the selected destinations.
3. For each step in the route, provide the location name and clear details.
4. If requested, provide a cost estimation, weather insights, and/or traffic analysis in the corresponding output fields. Make the information concise and relevant to the trip.
5. Provide a summary of the trip.
6. The output must be in a structured format.
`,
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
