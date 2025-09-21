'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Edit, ToggleLeft, ToggleRight } from 'lucide-react';
import { marketplaceItems } from '@/lib/data';

export default function SellerDashboard() {
  const [products, setProducts] = useState(marketplaceItems);

  const toggleStock = (id: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, inStock: !p.inStock } : p));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Manage Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {products.map(product => (
                <li key={product.id} className="flex items-center justify-between p-4 rounded-lg bg-background">
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => toggleStock(product.id)}>
                      {product.inStock ? <ToggleLeft /> : <ToggleRight />}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>View Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No orders yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
