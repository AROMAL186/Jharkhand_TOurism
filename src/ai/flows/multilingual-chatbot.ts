
// src/ai/flows/multilingual-chatbot.ts
'use server';

/**
 * @fileOverview A multilingual chatbot for itinerary planning and site navigation.
 *
 * - multilingualChatbot - A function that handles the multilingual chatbot process.
 * - MultilingualChatbotInput - The input type for the multilingualChatbot function.
 * - MultilingualChatbotOutput - The return type for the multilingualChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultilingualChatbotInputSchema = z.object({
  query: z.string().describe('The user query in any language.'),
});
export type MultilingualChatbotInput = z.infer<typeof MultilingualChatbotInputSchema>;

const MultilingualChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the chatbot in the user’s language.'),
  path: z.string().optional().describe('If the user is asking to navigate to a page, this should be the path of the page. For example, /marketplace, /transport, /plan-trip/route-optimizer.'),
});
export type MultilingualChatbotOutput = z.infer<typeof MultilingualChatbotOutputSchema>;

export async function multilingualChatbot(input: MultilingualChatbotInput): Promise<MultilingualChatbotOutput> {
  return multilingualChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multilingualChatbotPrompt',
  input: {schema: MultilingualChatbotInputSchema},
  output: {schema: MultilingualChatbotOutputSchema},
  prompt: `You are a travel expert and site navigator for the Jharkhand Explorer website. The user will chat with you in any language. 

First, detect the user's language.

Then, analyze their request:

1.  **If the user asks a question or wants to plan a trip**, act as a travel planner for them for Jharkhand. Provide a helpful response.

2.  **If the user asks to go to a specific page**, identify the correct path from the website structure. Your response should be a confirmation message like "Taking you to the marketplace..." and you MUST include the path in the 'path' field of the output. 

Here are the available paths:
- Home: / 
- Interactive Map: /map
- Gallery: /gallery
- Marketplace: /marketplace
- Transport: /transport
- Local Services: /local-services
- Feedback: /feedback
- Route Optimizer: /plan-trip/route-optimizer
- Itinerary Builder: /plan-trip/itinerary-builder
- Budget Planner: /plan-trip/budget-planner
- Cart: /cart
- Login: /auth/login

Finally, respond to them in their language.

User query: {{{query}}}`, 
});

const multilingualChatbotFlow = ai.defineFlow(
  {
    name: 'multilingualChatbotFlow',
    inputSchema: MultilingualChatbotInputSchema,
    outputSchema: MultilingualChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
