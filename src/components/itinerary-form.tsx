
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
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, DollarSign, Lightbulb, Leaf, Heart, Calendar as CalendarIcon, Users, Mountain, Camera, Sparkles, Utensils, MapPin, Building, Sprout, Handshake } from 'lucide-react';
import { generatePersonalizedItinerary, PersonalizedItineraryOutput } from '@/ai/flows/personalized-itinerary';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format, addDays, differenceInDays } from 'date-fns';

const interests = [
    { id: 'wildlife', label: 'Wildlife & Nature', icon: Sprout },
    { id: 'heritage', label: 'Cultural Heritage', icon: Building },
    { id: 'tribal', label: 'Tribal Experiences', icon: Handshake },
    { id: 'adventure', label: 'Adventure Sports', icon: Mountain },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'handicrafts', label: 'Handicrafts & Art', icon: Sparkles },
    { id: 'spiritual', label: 'Spiritual Sites', icon: Heart },
    { id: 'cuisine', label: 'Local Cuisine', icon: Utensils },
    { id: 'eco-tourism', label: 'Eco-Tourism', icon: Leaf },
    { id: 'historical', label: 'Historical Sites', icon: MapPin },
];

const travelPreferences = [
    { id: 'eco-friendly', label: 'Eco Friendly' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'budget', label: 'Budget' },
]

const formSchema = z.object({
  dateRange: z.object({
    from: z.date({
      required_error: "A start date is required.",
    }),
    to: z.date({
      required_error: "An end date is required.",
    }),
  }),
  budget: z.number().min(1000).max(100000),
  groupSize: z.number().min(1).max(20),
  interests: z.array(z.string()).refine(value => value.some(item => item), {
      message: "You have to select at least one interest."
  }),
  preferences: z.array(z.string()).refine(value => value.some(item => item), {
      message: "You have to select at least one preference."
  }),
  pace: z.enum(['relaxed', 'moderate', 'packed']), // Keep pace from previous version
});

export function ItineraryForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedItineraryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: {
        from: new Date(),
        to: addDays(new Date(), 3),
      },
      budget: 15000,
      groupSize: 2,
      interests: ["eco-tourism", "heritage"],
      preferences: ["budget", "cultural"],
      pace: 'moderate',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);

    const duration = differenceInDays(values.dateRange.to, values.dateRange.from) + 1;

    const submissionData = {
        interests: values.interests.join(', '),
        preferences: values.preferences.join(', '),
        availableTime: `${duration} days`,
        locationPreferences: '', // This can be added back if needed
        pace: values.pace,
    }

    try {
      const response = await generatePersonalizedItinerary(submissionData);
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <FormField
                    control={form.control}
                    name="dateRange"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="flex items-center gap-2"><CalendarIcon /> Travel Dates</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value.from && "text-muted-foreground"
                                )}
                              >
                                {field.value.from ? (
                                  field.value.to ? (
                                    <>
                                      {format(field.value.from, "LLL dd, y")} -{" "}
                                      {format(field.value.to, "LLL dd, y")}
                                    </>
                                  ) : (
                                    format(field.value.from, "LLL dd, y")
                                  )
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={field.value.from}
                              selected={field.value}
                              onSelect={field.onChange}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="flex items-center gap-2"><DollarSign /> Budget: ₹{field.value.toLocaleString()}</FormLabel>
                        <FormControl>
                            <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                min={1000}
                                max={100000}
                                step={1000}
                            />
                        </FormControl>
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="groupSize"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="flex items-center gap-2"><Users /> Group Size: {field.value} people</FormLabel>
                        <FormControl>
                            <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                min={1}
                                max={20}
                                step={1}
                            />
                        </FormControl>
                        </FormItem>
                    )}
                />
              </div>

               <FormField
                control={form.control}
                name="interests"
                render={() => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base flex items-center gap-2"><Heart /> Your Interests *</FormLabel>
                            <FormDescription>Select a few of your interests to help us plan the best trip for you.</FormDescription>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {interests.map((interest) => (
                            <FormField
                            key={interest.id}
                            control={form.control}
                            name="interests"
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={interest.id}
                                    className="border rounded-lg p-4 flex flex-col items-center justify-center gap-2 has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors cursor-pointer"
                                >
                                    <FormControl>
                                    <Checkbox
                                        className="sr-only"
                                        checked={field.value?.includes(interest.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, interest.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value) => value !== interest.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <interest.icon className="h-8 w-8 text-primary" />
                                    <FormLabel className="font-normal text-center cursor-pointer">{interest.label}</FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
                />


                <FormField
                    control={form.control}
                    name="preferences"
                    render={() => (
                        <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base flex items-center gap-2"><Sparkles /> Travel Preferences</FormLabel>
                             <FormDescription>What's your travel style?</FormDescription>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg border p-4">
                            {travelPreferences.map((item) => (
                            <FormField
                                key={item.id}
                                control={form.control}
                                name="preferences"
                                render={({ field }) => {
                                return (
                                    <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                    <FormControl>
                                        <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                            return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                    (value) => value !== item.id
                                                )
                                                )
                                        }}
                                        />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {item.label}
                                    </FormLabel>
                                    </FormItem>
                                )
                                }}
                            />
                            ))}
                        </div>
                        <FormMessage />
                        </FormItem>
                    )}
                />

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
