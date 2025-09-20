
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
import { Loader2, Wand2, MapPin, X, Plus, Shuffle, Clock, Milestone, Route, Lightbulb } from 'lucide-react';
import { optimizeRoute, RouteOptimizerOutput } from '@/ai/flows/route-optimizer';
import { topDestinations } from '@/lib/data';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const formSchema = z.object({
  destinations: z.array(z.string()).refine(value => value.length >= 2, {
    message: "You must select at least two destinations.",
  }),
  optimizationMode: z.enum(['fastest', 'shortest']),
});

function SortableItem({ id, onRemove }: { id: string; onRemove: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex items-center gap-2 p-2 bg-muted rounded-md touch-none">
        <Shuffle className="h-5 w-5 text-muted-foreground" />
      <span className="flex-grow">{id}</span>
      <Button variant="ghost" size="icon" onClick={() => onRemove(id)} className="h-6 w-6">
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function RouteOptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RouteOptimizerOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: ['Ranchi', 'Netarhat'],
      optimizationMode: 'fastest',
    },
  });

  const { watch, setValue } = form;
  const selectedDestinations = watch('destinations');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = selectedDestinations.indexOf(active.id as string);
      const newIndex = selectedDestinations.indexOf(over.id as string);
      setValue('destinations', arrayMove(selectedDestinations, oldIndex, newIndex), { shouldValidate: true });
    }
  }

  const handleAddDestination = (destination: string) => {
    if (!selectedDestinations.includes(destination)) {
      setValue('destinations', [...selectedDestinations, destination], { shouldValidate: true });
    }
  };

  const handleRemoveDestination = (destination: string) => {
    setValue('destinations', selectedDestinations.filter(d => d !== destination), { shouldValidate: true });
  };


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await optimizeRoute(values);
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="destinations"
                    render={() => (
                        <FormItem>
                            <FormLabel className="text-base flex items-center gap-2"><MapPin /> Destinations</FormLabel>
                            <FormDescription>Select at least two destinations. The first one will be your starting point. Drag to reorder.</FormDescription>
                            <div className="space-y-2 p-2 border rounded-lg h-64 overflow-y-auto">
                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                    <SortableContext items={selectedDestinations} strategy={verticalListSortingStrategy}>
                                        {selectedDestinations.map(dest => (
                                            <SortableItem key={dest} id={dest} onRemove={handleRemoveDestination} />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <div className="space-y-4">
                    <h3 className="font-medium text-base">Available Destinations</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {topDestinations.map((dest) => {
                            const isSelected = selectedDestinations.includes(dest.name);
                            return (
                                <Button
                                    key={dest.slug}
                                    variant={isSelected ? "secondary" : "outline"}
                                    onClick={() => isSelected ? handleRemoveDestination(dest.name) : handleAddDestination(dest.name)}
                                    className="justify-start"
                                >
                                    {isSelected ? <X className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                                    {dest.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>

              </div>

              <FormField
                control={form.control}
                name="optimizationMode"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base flex items-center gap-2"><Shuffle /> Optimize For</FormLabel>
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
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
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
