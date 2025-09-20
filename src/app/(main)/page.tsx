

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
import { ArrowRight, Trees, Landmark, Leaf, Mountain, Quote, Gem, Search } from 'lucide-react';
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

const galleryCategories = [
    { name: 'Adventure', imageId: 'gallery-adventure', href: '/gallery/adventure' },
    { name: 'Art & Culture', imageId: 'gallery-art-culture', href: '/gallery/art-culture' },
    { name: 'Beaches', imageId: 'gallery-beaches', href: '#' },
    { name: 'Crafts', imageId: 'gallery-crafts', href: '#' },
    { name: 'Cuisine', imageId: 'gallery-cuisine', href: '#' },
    { name: 'Festivals', imageId: 'gallery-festivals', href: '#' },
    { name: 'Forts', imageId: 'gallery-forts', href: '#' },
    { name: 'Hills', imageId: 'gallery-hills', href: '#' },
    { name: 'Lakes', imageId: 'gallery-lakes', href: '#' },
    { name: 'Monuments', imageId: 'gallery-monuments', href: '#' },
    { name: 'Museums', imageId: 'gallery-museums', href: '#' },
    { name: 'Palaces', imageId: 'gallery-palaces', href: '#' },
    { name: 'Pilgrim Centres', imageId: 'gallery-pilgrim', href: '#' },
    { name: 'Waterfalls', imageId: 'gallery-waterfalls', href: '#' },
    { name: 'Wellness', imageId: 'gallery-wellness', href: '#' },
    { name: 'Wildlife', imageId: 'gallery-wildlife', href: '#' },
    { name: 'World Heritage Sites', imageId: 'gallery-world-heritage', href: '#' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
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
            <Trees className="text-accent" /> Places to Visit
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
                  <Link href={`/destinations/${dest.slug}`} className="block h-full">
                    <Card className="overflow-hidden h-full group">
                      <div className="relative h-56 w-full">
                        {img && (
                          <Image
                            src={img.imageUrl}
                            alt={dest.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={img.imageHint}
                          />
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle>{dest.name}</CardTitle>
                        <CardDescription>{dest.shortDescription}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </section>

      <section>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline flex items-center justify-center gap-2">
                <Search className="text-primary" /> Explore Jharkhand
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">Discover the experiences that await you in this beautiful state.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryCategories.map(category => {
                const img = PlaceHolderImages.find(p => p.id === category.imageId);
                return (
                    <Link href={category.href} key={category.name} className="block group">
                        <Card className="overflow-hidden relative h-56">
                             {img && (
                                <Image
                                    src={img.imageUrl}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    data-ai-hint={img.imageHint}
                                />
                             )}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                             <div className="absolute bottom-0 left-0 p-4">
                                 <h3 className="text-white font-bold font-headline text-lg drop-shadow-md">{category.name}</h3>
                             </div>
                        </Card>
                    </Link>
                )
            })}
             <Link href="/itinerary" className="block group">
                <Card className="overflow-hidden relative h-56 bg-primary/10 flex flex-col items-center justify-center text-center p-4 hover:bg-primary/20 transition-colors">
                     <div className="absolute inset-0" />
                     <div className="relative">
                         <h3 className="text-primary font-bold font-headline text-lg">Start Planning</h3>
                         <p className="text-sm text-primary/80 mt-1">Create your custom trip now</p>
                         <Button variant="link" className="mt-2 text-primary">Go <ArrowRight className="ml-1"/></Button>
                     </div>
                </Card>
            </Link>
        </div>
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
