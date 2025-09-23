
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
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Wand2, DollarSign, Leaf, Heart, Calendar as CalendarIcon, Users, Mountain, Camera, Sparkles, Utensils, MapPin, Building, Sprout, Handshake } from 'lucide-react';
import { aiItineraryPlanner, AIItineraryPlannerOutput } from '@/ai/flows/personalized-itinerary';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format, addDays, differenceInDays } from 'date-fns';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
];

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
  preferences: z.string().refine(value => value, {
      message: "You have to select one preference."
  }),
});

const ItineraryDisplay = ({ plan, title }: { plan: AIItineraryPlannerOutput['plan'], title: string }) => {
  if (!plan || plan.length === 0) return null;

  return (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Here is a plan crafted just for you by our AI Assistant.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible defaultValue="day-1" className="w-full">
                {plan.map((dayPlan) => (
                    <AccordionItem value={`day-${dayPlan.day}`} key={dayPlan.day}>
                        <AccordionTrigger>
                            <div className="flex items-center gap-3">
                                <Badge className="h-8 w-8 flex items-center justify-center text-base shrink-0">
                                    {dayPlan.day}
                                </Badge>
                                <span className="font-semibold text-lg">{dayPlan.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 border-l-2 border-primary ml-4">
                            <ul className="space-y-4 text-muted-foreground">
                                {dayPlan.activities.map((activity, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                                        <span>{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
  );
};


export function TripPlannerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIItineraryPlannerOutput | null>(null);
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
      interests: ["heritage", "eco-tourism"],
      preferences: "cultural",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);

    const duration = differenceInDays(values.dateRange.to, values.dateRange.from) + 1;
    const interestsText = values.interests.join(', ');

    const query = `
        Plan a ${duration}-day trip to Jharkhand.
        The trip is from ${format(values.dateRange.from, "PPP")} to ${format(values.dateRange.to, "PPP")}.
        It's for ${values.groupSize} traveler(s).
        The budget is around Rs.${values.budget.toLocaleString()}.
        Their interests are: ${interestsText}.
        Their travel style is: ${values.preferences}.
        Please provide a detailed, day-by-day itinerary.
      `;

    try {
      const response = await aiItineraryPlanner({ query });
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
                        <FormLabel className="flex items-center gap-2"><CalendarIcon className="h-4 w-4"/> Travel Dates</FormLabel>
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
                        <FormLabel className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> Budget: Rs. {field.value.toLocaleString()}</FormLabel>
                        <FormControl>
                           <Input
                                type="number"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                placeholder="15000"
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
                        <FormLabel className="flex items-center gap-2"><Users className="h-4 w-4"/> Group Size: {field.value} people</FormLabel>
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
                render={({ field }) => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base flex items-center gap-2"><Heart className="h-5 w-5" /> Your Interests *</FormLabel>
                            <FormDescription>Select a few of your interests to help us plan the best trip for you.</FormDescription>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {interests.map((interest) => (
                           <Card
                                key={interest.id}
                                onClick={() => {
                                    const updatedInterests = field.value.includes(interest.id)
                                        ? field.value.filter(i => i !== interest.id)
                                        : [...field.value, interest.id];
                                    field.onChange(updatedInterests);
                                }}
                                className={cn(
                                    "p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-amber-50",
                                    field.value.includes(interest.id) && "bg-amber-100 border-amber-400 ring-2 ring-amber-400"
                                )}
                                >
                                <interest.icon className="h-8 w-8 text-amber-700" />
                                <p className="text-sm font-medium text-center">{interest.label}</p>
                            </Card>
                        ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
                />


                <FormField
                    control={form.control}
                    name="preferences"
                    render={({ field }) => (
                        <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base flex items-center gap-2"><Sparkles className="h-5 w-5" /> Travel Preferences</FormLabel>
                             <FormDescription>What's your travel style?</FormDescription>
                        </div>
                        <RadioGroup 
                            value={field.value}
                            onValueChange={field.onChange}
                            className="flex flex-wrap gap-x-6 gap-y-4">
                            {travelPreferences.map((pref) => (
                                <div key={pref.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={pref.id} id={pref.id} />
                                <Label htmlFor={pref.id} className="font-normal">{pref.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
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

      {loading && (
          <Card className="mt-8">
              <CardContent className="p-6 flex items-center justify-center">
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  <p className="text-muted-foreground">Generating your personalized itinerary...</p>
              </CardContent>
          </Card>
      )}

      {result && (
        <div className="mt-8 space-y-6">
            <ItineraryDisplay plan={result.plan} title={result.title}/>
        </div>
      )}
    </>
  );
}
