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
import { ArrowRight, Trees, Landmark } from 'lucide-react';
import { culturalHighlights, topDestinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="relative h-[50vh] w-full rounded-lg overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Discover Jharkhand
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-primary-foreground/90 drop-shadow-md">
            Your gateway to the serene eco-tourism and vibrant culture of India's hidden gem.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link href="/itinerary">
              Plan Your Adventure <ArrowRight className="ml-2" />
            </Link>
          </Button>
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
