import { notFound } from 'next/navigation';
import { topDestinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = topDestinations.find((d) => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === destination.imageId);

  return (
    <div className="container mx-auto max-w-5xl">
        <Button asChild variant="outline" className="mb-6">
            <Link href="/map">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Map
            </Link>
        </Button>
      <Card className="overflow-hidden">
        <div className="relative h-[50vh] w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={destination.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-5xl font-bold font-headline drop-shadow-lg">{destination.name}</h1>
                <p className="mt-2 max-w-2xl text-lg text-primary-foreground/90 drop-shadow-md">{destination.shortDescription}</p>
           </div>
        </div>
        <CardContent className="p-6 md:p-8">
            <div className="prose prose-stone dark:prose-invert max-w-none text-lg">
                <p>{destination.longDescription}</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function generateStaticParams() {
  return topDestinations.map((destination) => ({
    slug: destination.slug,
  }));
}
