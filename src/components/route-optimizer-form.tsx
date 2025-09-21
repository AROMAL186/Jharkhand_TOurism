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
import { Loader2, Route, Car, Bike, Train, MapPin, Search, Thermometer, Cloudy, Milestone, Clock, Building, Trees, Mountain } from 'lucide-react';

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

const nearbyAttractions = [
    {
      name: 'Jagannath Temple',
      description: 'A prominent temple in Ranchi, often called \'Rath Yatra\' Temple, similar in architecture to the Puri Jagannath temple.',
      location: 'Location: Ranchi, near Deori Mandir',
      icon: Building
    },
    {
      name: 'Rock Garden',
      description: 'A popular picnic spot and garden carved out of rocks, offering scenic views.',
      location: 'Location: Ranchi, near Hundru Falls',
      icon: Trees
    },
    {
      name: 'Kalyaneshwari Temple',
      description: 'An ancient temple dedicated to Goddess Kalyaneshwari, located very close to Maithon Dam.',
      location: 'Location: Maithon, near Maithon Dam',
      icon: Mountain
    }
  ];

export function RouteOptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
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

    // Simulate AI call
    setTimeout(() => {
        const routePoints = [
            ...(values.startPoint ? [values.startPoint] : []),
            ...values.selectedDestinations,
            ...(values.endPoint ? [values.endPoint] : []),
        ];

        if (routePoints.length < 2) {
            setError("Please provide at least two points (e.g., a start and end point, or two destinations).");
            setLoading(false);
            return;
        }

        const newOptimizedRoute = routePoints.map((point, index) => {
            let type = 'Stop';
            if (index === 0) type = 'Starting Point';
            if (index === routePoints.length - 1) type = 'Final Destination';

            let leg = null;
            if (index > 0) {
                leg = {
                    road: `Via local roads from ${routePoints[index - 1]}`,
                    distance: `${Math.floor(Math.random() * 100) + 20} km`,
                    time: `${Math.floor(Math.random() * 2) + 1}h ${Math.floor(Math.random() * 59)}m`
                };
            }

            return {
                order: index + 1,
                destination: point,
                type: type,
                leg: leg,
            };
        });

        const finalResult = {
            routeDetails: `This optimized route starts from ${newOptimizedRoute[0].destination} and ends at ${newOptimizedRoute[newOptimizedRoute.length - 1].destination}, visiting ${values.selectedDestinations.length} stop(s) in between.`,
            optimizedRoute: newOptimizedRoute,
            nearbyAttractions: nearbyAttractions
        };

        setResult(finalResult);
        setLoading(false);
    }, 1500);
  }

  return (
    <>
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">AI Route Optimizer</h1>
        <p className="mt-4 text-lg text-muted-foreground">Select two or more destinations, and our AI will calculate the most efficient travel path for you.</p>
      </div>

      {!result && (
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
                                            ? field.onChange([...(field.value || []), item])
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
                        {/* Note: These buttons are disabled as they are placeholders for future features. */}
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
      )}

      {error && (
        <Card className="mt-8 border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Error</CardTitle>
                <CardDescription>{error}</CardDescription>
            </CardHeader>
        </Card>
      )}

      {result && (
        <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Route Details</CardTitle>
                            <CardDescription>{result.routeDetails}</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="relative pl-8">
                                <div className="absolute left-[43px] top-5 h-[calc(100%-3rem)] w-0.5 bg-primary/20" />
                                {result.optimizedRoute.map((step: any, index: number) => (
                                    <div key={step.order} className="flex items-start gap-6 relative mb-8">
                                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">{step.order}</div>
                                        <div className="flex-grow pt-1">
                                            <p className="font-bold text-lg -mt-1">{step.destination}</p>
                                            <p className="text-sm text-muted-foreground">{step.type}</p>
                                            {step.leg && (
                                                <div className="text-sm text-muted-foreground flex items-center flex-wrap gap-x-4 gap-y-1 mt-2 border rounded-lg p-3 bg-muted/50">
                                                    <span className="flex items-center gap-1.5"><Car className="h-4 w-4" />{step.leg.road}</span>
                                                    <span className="flex items-center gap-1.5"><Milestone className="h-4 w-4" />{step.leg.distance}</span>
                                                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{step.leg.time}</span>
                                                </div>
                                            )}
                                            {index === result.optimizedRoute.length - 1 && (
                                                <p className="text-primary font-semibold mt-3">End of route</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <div>
                    <Card>
                         <CardHeader>
                            <CardTitle>What&apos;s Nearby?</CardTitle>
                            <CardDescription>Bonus stops and hidden gems along your route.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {result.nearbyAttractions.map((attraction: any) => {
                                const Icon = attraction.icon;
                                return (
                                <div key={attraction.name} className="border p-4 rounded-lg hover:bg-accent">
                                    <div className="flex items-start gap-4">
                                        <Icon className="h-8 w-8 text-muted-foreground mt-1" />
                                        <div>
                                            <p className="font-semibold">{attraction.name}</p>
                                            <p className="text-sm text-muted-foreground">{attraction.description}</p>
                                            <p className="text-xs text-muted-foreground/80 mt-2">{attraction.location}</p>
                                        </div>
                                    </div>
                                </div>
                           )} )}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="text-center">
                <Button variant="outline" onClick={() => {setResult(null); form.reset();}}>
                   <Search className="mr-2 h-4 w-4"/> Start a New Search
                </Button>
            </div>
        </div>
      )}
    </>
  );
}
