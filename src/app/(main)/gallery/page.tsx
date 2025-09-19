
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GalleryHorizontal } from 'lucide-react';
import Link from 'next/link';

const galleryCategories = [
    { name: 'Adventure', imageId: 'gallery-adventure' },
    { name: 'Art & Culture', imageId: 'gallery-art-culture' },
    { name: 'Crafts', imageId: 'gallery-crafts' },
    { name: 'Cuisine', imageId: 'gallery-cuisine' },
    { name: 'Festivals', imageId: 'gallery-festivals' },
    { name: 'Forts', imageId: 'gallery-forts' },
    { name: 'Hills', imageId: 'gallery-hills' },
    { name: 'Lakes', imageId: 'gallery-lakes' },
    { name: 'Monuments', imageId: 'gallery-monuments' },
    { name: 'Museums', imageId: 'gallery-museums' },
    { name: 'Pilgrim Centres', imageId: 'gallery-pilgrim' },
    { name: 'Waterfalls', imageId: 'gallery-waterfalls' },
    { name: 'Wellness', imageId: 'gallery-wellness' },
    { name: 'Wildlife', imageId: 'gallery-wildlife' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto">
       <Card className="border-none shadow-none mb-8">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <GalleryHorizontal className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Photo Gallery</CardTitle>
          <CardDescription className="text-lg">
            A visual journey through the stunning landscapes and vibrant culture of Jharkhand.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryCategories.map(category => {
            const img = PlaceHolderImages.find(p => p.id === category.imageId);
            return (
                <Link href="#" key={category.name} className="block group">
                    <Card className="overflow-hidden relative aspect-[4/5]">
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
                             <h3 className="text-white font-bold font-headline text-xl drop-shadow-md">{category.name}</h3>
                         </div>
                    </Card>
                </Link>
            )
        })}
      </div>
    </div>
  );
}
