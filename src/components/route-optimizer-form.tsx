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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
    Loader2, Route, Car, Bike, Train, Clock, Wallet, CloudSun, TrafficCone
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { routeOptimizer, RouteOptimizerOutput } from '@/ai/flows/route-optimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const destinations = [
  "Dassam Falls", 
  "Hundru Falls", 
  "Netarhat", 
  "Baidyanath Temple",
  "Jonha Falls", 
  "Pahari Mandir",
  "Tagore Hill", 
  "Parasnath Hill",
  "Betla National Park",
  "Maithon Dam",
  "Bokaro Steel Plant",
  "City Park, Bokaro",
  "Jubilee Park",
  "Dalma Wildlife Sanctuary",
  "Rock Garden & Kanke Dam",
  "Palamu Fort",
  "Lodh Falls",
  "Nagpheni Temple",
  "Deori Mandir", 
  "Patratu Valley",
  "Ranchi Lake"
];

const formSchema = z.object({
  selectedDestinations: z.array(z.string()).refine(value => value.length >= 2, {
    message: "Please select at least two destinations.",
  }),
  travelMode: z.enum(['Driving', 'Biking', 'Train']),
  startPoint: z.string().optional(),
  endPoint: z.string().optional(),
  estimateCost: z.boolean(),
  getWeather: z.boolean(),
  analyzeTraffic: z.boolean(),
});

export function RouteOptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState<RouteOptimizerOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedDestinations: [],
      travelMode: 'Driving',
      startPoint: '',
      endPoint: '',
      estimateCost: false,
      getWeather: false,
      analyzeTraffic: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setRoute(null);

    const aiInput = {
        destinations: values.selectedDestinations,
        travelMode: values.travelMode.toUpperCase() as 'DRIVING' | 'BIKING' | 'TRAIN',
        startPoint: values.startPoint,
        endPoint: values.endPoint,
        estimateCost: values.estimateCost,
        getWeather: values.getWeather,
        analyzeTraffic: values.analyzeTraffic,
    };

    try {
        const result = await routeOptimizer(aiInput);
        setRoute(result);
    } catch (error) {
        console.error("Failed to generate route:", error);
    }

    setLoading(false);
  }

  const handleNewTrip = () => {
    setRoute(null);
    form.reset();
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-bold mb-1">Plan Your Trip</h2>
        <p className="text-muted-foreground mb-6">Select your destinations and preferences.</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="selectedDestinations"
              render={() => (
                <FormItem>
                  <FormLabel className="font-semibold">Destinations</FormLabel>
                  <FormDescription>Select at least two places to visit.</FormDescription>
                  <ScrollArea className="h-48 mt-2 border rounded-md p-4">
                    <div className="space-y-2">
                    {destinations.sort().map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="selectedDestinations"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== item)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal w-full cursor-pointer">{item}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                    </div>
                  </ScrollArea>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="travelMode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Travel Mode</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {(['Driving', 'Biking', 'Train'] as const).map(mode => (
                        <Button 
                          key={mode} 
                          type="button"
                          variant={field.value === mode ? 'default' : 'outline'} 
                          onClick={() => field.onChange(mode)}
                          className="flex items-center justify-center gap-2"
                        >
                          {mode === 'Driving' && <Car className="h-4 w-4" />}
                          {mode === 'Biking' && <Bike className="h-4 w-4" />}
                          {mode === 'Train' && <Train className="h-4 w-4" />}
                          {mode}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <div>
              <FormLabel className="font-semibold">Start & End Points (Optional)</FormLabel>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <FormField
                  control={form.control}
                  name="startPoint"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Start Point" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endPoint"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="End Point" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

             <div>
                <FormLabel className="font-semibold">Additional Information</FormLabel>
                 <div className="space-y-4 mt-2 rounded-md border p-4">
                    <FormField
                        control={form.control}
                        name="estimateCost"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between">
                                <div className="space-y-0.5">
                                    <FormLabel>Cost Estimation</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="getWeather"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between">
                                <div className="space-y-0.5">
                                    <FormLabel>Weather Insights</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="analyzeTraffic"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between">
                                <div className="space-y-0.5">
                                    <FormLabel>Traffic Analysis</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </div>
            
            <Button type="submit" disabled={loading || form.getValues("selectedDestinations").length < 2} size="lg" className="w-full">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Generate Optimized Route
            </Button>
          </form>
        </Form>
      </div>

      <div className="bg-card p-6 rounded-lg border h-full flex flex-col">
        {!loading && route ? (
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-2">{route.title}</h2>
            <p className="text-muted-foreground mb-6">{route.summary}</p>
            
            <ScrollArea className="flex-grow mb-6">
                <div className="relative pl-8 space-y-8 py-2">
                  <div className="absolute left-[19px] top-2 h-full w-0.5 bg-primary/20" />
                  {route.optimizedRoute.map((step, index) => (
                      <div key={index} className="flex items-start gap-6 relative">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">{step.step}</div>
                        <div className="flex-grow pt-1">
                          <h3 className="font-bold text-md">{step.location}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{step.details}</p>
                          {step.estimatedDuration && (
                            <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
                              <Clock className="h-3 w-3" />
                              <span>{step.estimatedDuration}</span>
                            </div>
                          )}
                        </div>
                      </div>
                  ))}
                </div>
            </ScrollArea>

            <div className="grid grid-cols-1 gap-4">
                {route.costEstimation && (
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                            <Wallet className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">Cost</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">{route.costEstimation}</p></CardContent>
                    </Card>
                )}
                {route.weatherInsights && (
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                            <CloudSun className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">Weather</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">{route.weatherInsights}</p></CardContent>
                    </Card>
                )}
                {route.trafficAnalysis && (
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                            <TrafficCone className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">Traffic</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-muted-foreground">{route.trafficAnalysis}</p></CardContent>
                    </Card>
                )}
            </div>

             <Button variant="outline" onClick={handleNewTrip} className="mt-8 w-full">
                Plan a New Trip
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            {loading ? <Loader2 className="h-12 w-12 text-primary animate-spin" /> : <Route className="h-16 w-16 text-muted-foreground/30 mb-4" />}
            <h3 className="text-xl font-bold text-foreground mt-4">Your Optimized Route Will Appear Here</h3>
            <p className="max-w-xs mx-auto">Select your destinations and click generate to see your plan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
