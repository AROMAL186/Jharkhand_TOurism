'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { marketplaceItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingBasket, ShoppingCart, Sparkles, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { generateMarketplaceSuggestions, MarketplaceSuggestionsOutput } from '@/ai/flows/marketplace-suggestions';
import { Skeleton } from '@/components/ui/skeleton';

export default function MarketplacePage() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState<MarketplaceSuggestionsOutput['suggestions']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const products = marketplaceItems.map(({ id, name, category, artisan, price }) => ({
          id, name, category, artisan, price
        }));
        const result = await generateMarketplaceSuggestions({ products });
        if (result && result.suggestions) {
          setSuggestions(result.suggestions);
        }
      } catch (error) {
        console.error("Failed to fetch marketplace suggestions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
  }, []);

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({ title: 'Added to cart', description: `${item.name} has been added to your cart.` });
  };

  return (
    <div className="container mx-auto">
       <Card className="border-none shadow-none mb-8">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <ShoppingBasket className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Local Marketplace</CardTitle>
          <CardDescription className="text-lg">
            Support local artisans and take home a piece of Jharkhand's culture.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {marketplaceItems.map((item) => {
          const img = PlaceHolderImages.find((p) => p.id === item.imageId);
          const suggestion = suggestions.find(s => s.productId === item.id);
          
          return (
            <Card key={item.id} className="flex flex-col overflow-hidden group">
              <div className="relative h-64 w-full">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={img.imageHint}
                  />
                )}
                {loading ? (
                   <Skeleton className="absolute top-2 left-2 h-7 w-28" />
                ) : (
                  suggestion && (
                    <Badge variant="default" className="absolute top-2 left-2 bg-accent text-accent-foreground flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {suggestion.suggestion}
                    </Badge>
                  )
                )}
                <Badge variant="secondary" className="absolute top-2 right-2">{item.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>by {item.artisan}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-semibold text-primary">{item.price}</p>
              </CardContent>
              <CardFooter>
                {item.inStock ? (
                  <Button className="w-full" onClick={() => handleAddToCart(item)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                ) : (
                  <Button className="w-full" disabled>
                    Out of Stock
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
