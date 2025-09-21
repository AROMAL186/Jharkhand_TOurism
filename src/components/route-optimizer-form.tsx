'use client';

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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input';
import { Loader2, Route, Car, Bike, Train, MapPin, Search, Thermometer, Cloudy } from 'lucide-react';

const destinations = [
  "Dassam Falls", "Deori Mandir", "Betla National Park", "Patratu Valley",
  "Jonha Falls", "Hundru Falls", "Jubilee Park", "Baidyanath Dham",
  "Netarhat", "Maithon Dam", "Parasnath Hills", "Ranchi Lake"
];

const formSchema = z.object({
  selectedDestinations: z.array(z.string()).refine(value => value.length >= 2, {
    message: "You must select at least two destinations.",
  }),
  travelMode: z.enum(['Driving', 'Biking', 'Train']),
  startPoint: z.string().optional(),
  endPoint: z.string().optional(),
});

export function RouteOptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null); // Replace 'any' with your result type
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedDestinations: [],
      travelMode: 'Driving',
      startPoint: '',
      endPoint: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);
    console.log(values)
    // try {
    //   // Replace with your actual API call
    //   // const response = await optimizeRoute(values);
    //   // setResult(response);
    // } catch (e) {
    //   setError('Failed to optimize route. Please try again.');
    //   console.error(e);
    // } finally {
    //   setLoading(false);
    // }
    setTimeout(() => setLoading(false), 2000); // Simulate API call
  }

  return (
    <>
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">AI Route Optimizer</h1>
        <p className="mt-4 text-lg text-muted-foreground">Select two or more destinations, and our AI will calculate the most efficient travel path for you.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Build Your Journey</CardTitle>
          <CardDescription>Select destinations and options to create the perfect route.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <FormField
                control={form.control}
                name="selectedDestinations"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base font-semibold">1. Select Destinations</FormLabel>
                      <FormDescription>Choose at least two places you want to visit.</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {destinations.map((item) => (
                        <FormField
                          key={item}
                          control={form.control}
                          name="selectedDestinations"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer w-full">
                                  {item}
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

              <FormField
                control={form.control}
                name="travelMode"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-4">
                        <FormLabel className="text-base font-semibold">2. Choose Travel Mode</FormLabel>
                    </div>
                    <FormControl>
                        <div className="grid grid-cols-3 gap-4">
                            {(['Driving', 'Biking', 'Train'] as const).map(mode => (
                                <Button 
                                    key={mode} 
                                    type="button"
                                    variant={field.value === mode ? 'default' : 'outline'} 
                                    onClick={() => field.onChange(mode)}
                                    className="py-8 flex flex-col h-auto"
                                >
                                    {mode === 'Driving' && <Car className="h-8 w-8 mb-2" />}
                                    {mode === 'Biking' && <Bike className="h-8 w-8 mb-2" />}
                                    {mode === 'Train' && <Train className="h-8 w-8 mb-2" />}
                                    {mode}
                                </Button>
                            ))}
                        </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div>
                <FormLabel className="text-base font-semibold">3. Additional Options</FormLabel>
                 <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <FormField
                        control={form.control}
                        name="startPoint"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-sm text-muted-foreground">Start Point (Optional)</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="E.g., Ranchi Airport" {...field} className="pl-10" />
                                </div>
                            </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endPoint"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-sm text-muted-foreground">End Point (Optional)</FormLabel>
                            <FormControl>
                                <div className="relative">
                                     <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="E.g., Jamshedpur Hotel" {...field} className="pl-10" />
                                </div>
                            </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
              </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
                     <div className="flex gap-2">
                        <Button type="button" variant="outline" size="sm" disabled>
                            <Search className="mr-2 h-4 w-4" />
                            Estimate Costs
                        </Button>
                        <Button type="button" variant="outline" size="sm" disabled>
                            <Thermometer className="mr-2 h-4 w-4" />
                            Get Weather
                        </Button>
                        <Button type="button" variant="outline" size="sm" disabled>
                            <Cloudy className="mr-2 h-4 w-4" />
                            Analyze Traffic
                        </Button>
                    </div>
                    <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Route className="mr-2 h-4 w-4" />}
                        Find Optimal Route
                    </Button>
                </div>

            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Result and Error display can be added here */}
    </>
  );
}
