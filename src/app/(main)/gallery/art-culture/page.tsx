
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { artAndCultureDestinations } from '@/lib/data';
import { Landmark } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ArtCultureGalleryPage() {
  return (
    <div className="container mx-auto">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/gallery">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Link>
      </Button>

      <Card className="border-none shadow-none mb-8">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Landmark className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Art & Culture in Jharkhand</CardTitle>
          <CardDescription className="text-lg">
            Immerse yourself in the rich tapestry of tribal traditions, ancient art forms, and cultural heritage.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artAndCultureDestinations.map(dest => {
          const img = PlaceHolderImages.find(p => p.id === dest.imageId);
          return (
            <Link href={`#`} key={dest.slug} className="block group">
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-64 w-full">
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
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{dest.description}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
