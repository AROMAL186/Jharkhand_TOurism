"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, DollarSign, Lightbulb } from 'lucide-react';
import { generatePersonalizedItinerary, PersonalizedItineraryOutput } from '@/ai/flows/personalized-itinerary';

const formSchema = z.object({
  interests: z.string().min(3, 'Please describe your interests.'),
  preferences: z.string().min(3, 'Please describe your preferences.'),
  availableTime: z.string().min(1, 'Please enter your available time.'),
  locationPreferences: z.string().optional(),
  pace: z.enum(['relaxed', 'moderate', 'packed']),
});

export function ItineraryForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedItineraryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: 'Eco-tourism, cultural sites, waterfalls',
      preferences: 'Budget-friendly homestays, local food',
      availableTime: '3 days',
      locationPreferences: '',
      pace: 'moderate',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await generatePersonalizedItinerary(values);
      setResult(response);
    } catch (e) {
      setError('Failed to generate itinerary. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card className="mt-8">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Interests</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Waterfalls, trekking, temples, local art..." {...field} />
                      </FormControl>
                      <FormDescription>What do you love to do?</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Travel Preferences</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Budget, accommodation type, food..." {...field} />
                      </FormControl>
                      <FormDescription>How do you like to travel?</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FormField
                  control={form.control}
                  name="availableTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available Time</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3 days, 1 week" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pace"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pace</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your travel pace" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="relaxed">Relaxed</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="packed">Packed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="locationPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Preferences (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Ranchi, Netarhat" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate My Itinerary
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mt-8 border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Error</CardTitle>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        </Card>
      )}

      {result && (
        <div className="mt-8 space-y-6">
            <h2 className="text-3xl font-bold text-center font-headline">Your Custom Itinerary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Overall Theme</CardTitle>
                        <Lightbulb className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{result.overallTheme}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Estimated Cost</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{result.estimatedCost}</div>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Detailed Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-wrap">
                        {result.itinerary}
                    </div>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
