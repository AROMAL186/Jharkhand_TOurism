
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trees, Landmark, Leaf, Mountain, Quote, Gem } from 'lucide-react';
import { culturalHighlights, topDestinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

const facts = [
    {
        icon: Leaf,
        title: "The Land of Forests",
        text: "The name 'Jharkhand' means 'The Land of Forests,' and it lives up to its name with over 29% of its area covered in lush green forests and woodlands."
    },
    {
        icon: Gem,
        title: "Mineral Wealth",
        text: "Jharkhand is a storehouse of mineral wealth, holding over 40% of India's mineral resources, including coal, iron ore, and mica."
    },
    {
        icon: Mountain,
        title: "Ancient Rock Art",
        text: "The state is home to ancient rock art and archaeological sites, with some paintings dating back to the Mesolithic-Chalcolithic period."
    }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="relative h-[60vh] w-full rounded-lg overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Jharkhand: India's Hidden Gem
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/90 drop-shadow-md">
            "A journey through Jharkhand is a journey through time, where ancient traditions meet stunning natural beauty."
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/itinerary">
              Plan Your Adventure <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
          <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-headline">Why Visit Jharkhand?</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">Discover a land of serene eco-tourism, vibrant tribal culture, and breathtaking natural wonders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facts.map((fact) => (
                  <Card key={fact.title}>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <fact.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{fact.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{fact.text}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold font-headline flex items-center gap-2">
            <Trees className="text-accent" /> Top Destinations
          </h2>
          <Button variant="link" asChild>
            <Link href="/map">View all on map <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {topDestinations.map((dest) => {
              const img = PlaceHolderImages.find((p) => p.id === dest.imageId);
              return (
                <CarouselItem key={dest.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-56 w-full">
                      {img && (
                        <Image
                          src={img.imageUrl}
                          alt={dest.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={img.imageHint}
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{dest.name}</CardTitle>
                      <CardDescription>{dest.shortDescription}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-2">
          <Landmark className="text-primary" /> Cultural Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalHighlights.map((highlight) => {
            const img = PlaceHolderImages.find((p) => p.id === highlight.imageId);
            return (
              <Card key={highlight.name} className="overflow-hidden group">
                <div className="relative h-56 w-full">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={highlight.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{highlight.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
