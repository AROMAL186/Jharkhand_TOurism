
"use client";

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
import { Loader2, Wand2, MapPin, X, Plus, Clock, Milestone, Route, Lightbulb } from 'lucide-react';
import { optimizeRoute, RouteOptimizerOutput } from '@/ai/flows/route-optimizer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  destinations: z.array(z.object({ value: z.string().min(1, "Destination can't be empty.") })).refine(value => value.length >= 2, {
    message: "You must add at least two destinations.",
  }),
  optimizationMode: z.enum(['fastest', 'shortest']),
});

export function RouteOptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RouteOptimizerOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [{ value: 'Ranchi' }, { value: 'Netarhat' }, { value: 'Hazaribagh' }],
      optimizationMode: 'fastest',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'destinations',
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);

    const submissionData = {
      destinations: values.destinations.map(d => d.value),
      optimizationMode: values.optimizationMode,
    }

    try {
      const response = await optimizeRoute(submissionData);
      setResult(response);
    } catch (e) {
      setError('Failed to optimize route. Please try again.');
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
              
              <FormField
                control={form.control}
                name="destinations"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-base flex items-center gap-2"><MapPin /> Destinations</FormLabel>
                    <FormDescription>
                      Add at least two locations. The first will be your starting point. The optimizer will find the best route through all of them.
                    </FormDescription>
                    <div className="space-y-3">
                      {fields.map((field, index) => (
                        <FormField
                          key={field.id}
                          control={form.control}
                          name={`destinations.${index}.value`}
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex items-center gap-2">
                                <FormLabel className="w-20">{index === 0 ? 'Start From' : `Stop ${index}`}</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter a city or landmark" {...field} />
                                </FormControl>
                                {fields.length > 2 && (
                                    <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0"
                                    onClick={() => remove(index)}
                                    >
                                    <X className="h-4 w-4" />
                                    </Button>
                                )}
                              </div>
                               <FormMessage className="ml-24" />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                     <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => append({ value: '' })}
                        >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Stop
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="optimizationMode"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base flex items-center gap-2"><Wand2 /> Optimize For</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="fastest" id="fastest" />
                          </FormControl>
                          <FormLabel htmlFor="fastest" className="font-normal cursor-pointer">Fastest Route</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="shortest" id="shortest" />
                          </FormControl>
                          <FormLabel htmlFor="shortest" className="font-normal cursor-pointer">Shortest Distance</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Route className="mr-2 h-4 w-4" />}
                Optimize My Route
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
            <h2 className="text-3xl font-bold text-center font-headline">Your Optimized Route</h2>
            
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{result.totalEstimatedTime}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
                        <Milestone className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{result.totalEstimatedDistance}</div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Route/> Optimized Path</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 relative">
                      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-primary/20" />
                       {result.optimizedRoute.map((step, index) => (
                         <div key={step.order} className="flex items-start gap-4 relative">
                            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{step.order}</div>
                            <div className="flex-grow pt-1">
                                <p className="font-bold text-lg">{step.destination}</p>
                                {index > 0 && (
                                    <div className="text-sm text-muted-foreground flex gap-4 mt-1">
                                        <span><Clock className="inline mr-1 h-4 w-4" />{step.estimatedTime}</span>
                                        <span><Milestone className="inline mr-1 h-4 w-4" />{step.estimatedDistance}</span>
                                    </div>
                                )}
                            </div>
                         </div>
                       ))}
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary"/> Optimization Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{result.optimizationSummary}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </>
  );
}
