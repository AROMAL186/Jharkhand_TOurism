
export interface Shop {
  id: string;
  name: string;
  description: string;
  position: { lat: number; lng: number };
  rating: number; // Out of 5
  visitCount: number;
  category: string;
  imageUrl: string;
}

export const shops: Shop[] = [
  {
    id: 'shop1',
    name: 'Ambalikas Paitkar Paintings',
    description: 'Authentic Paitkar paintings from the Amadubi village, known for their narrative scroll paintings.',
    position: { lat: 22.6916, lng: 86.1556 }, // Near Jamshedpur
    rating: 4.8,
    visitCount: 1250,
    category: 'Art & Handicrafts',
    imageUrl: '/images/shops/paitkar.jpg',
  },
  {
    id: 'shop2',
    name: 'Dhokra Crafts of Sadeikela',
    description: 'Exquisite Dhokra (lost-wax casting) metal crafts made by artisans from the Sadeikela region.',
    position: { lat: 22.7956, lng: 86.0442 }, // Saraikela
    rating: 4.9,
    visitCount: 2300,
    category: 'Metalwork',
    imageUrl: '/images/shops/dhokra.jpg',
  },
  {
    id: 'shop3',
    name: 'Ranchi Wooden Toys',
    description: 'Hand-carved wooden toys and decorative items, a specialty of Ranchi local craftsmen.',
    position: { lat: 23.3441, lng: 85.3096 }, // Ranchi
    rating: 4.5,
    visitCount: 980,
    category: 'Toys & Decor',
    imageUrl: '/images/shops/wooden_toys.jpg',
  },
  {
    id: 'shop4',
    name: 'Bamboo Wonders of Dumka',
    description: 'A wide range of bamboo products, from furniture to decorative pieces, sourced from Dumka.',
    position: { lat: 24.2655, lng: 87.2464 }, // Dumka
    rating: 4.6,
    visitCount: 1500,
    category: 'Home Goods',
    imageUrl: '/images/shops/bamboo.jpg',
  },
  {
    id: 'shop5',
    name: 'Hazaribagh Terracotta',
    description: 'Beautiful terracotta pottery and sculptures from the Hazaribagh region.',
    position: { lat: 23.9994, lng: 85.3657 }, // Hazaribagh
    rating: 4.7,
    visitCount: 1800,
    category: 'Pottery',
    imageUrl: '/images/shops/terracotta.jpg',
  },
];
