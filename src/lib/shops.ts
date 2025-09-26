export interface Shop {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  visitCount: number;
  position: {
    lat: number;
    lng: number;
  };
}

export const shops: Shop[] = [
  {
    id: '1',
    name: 'Paitkar Paintings',
    description: 'Ancient scroll paintings from the Amadubi village.',
    imageUrl: '/images/shops/paitkar.jpg',
    rating: 4.8,
    visitCount: 1250,
    position: { lat: 22.58, lng: 86.20 },
  },
  {
    id: '2',
    name: 'Dhokra Crafts',
    description: 'Exquisite lost-wax casting metalwork.',
    imageUrl: '/images/shops/dhokra.jpg',
    rating: 4.7,
    visitCount: 1500,
    position: { lat: 23.3441, lng: 85.3096 },
  },
  {
    id: '3',
    name: 'Wooden Toys of Jharkhand',
    description: 'Traditional handmade wooden toys for all ages.',
    imageUrl: '/images/shops/wooden_toys.jpg',
    rating: 4.6,
    visitCount: 980,
    position: { lat: 23.35, lng: 85.32 },
  },
  {
    id: '4',
    name: 'Bamboo Workshop',
    description: 'Beautifully crafted bamboo items and furniture.',
    imageUrl: '/images/shops/bamboo.jpg',
    rating: 4.9,
    visitCount: 2100,
    position: { lat: 24.21, lng: 84.45 },
  },
    {
    id: '5',
    name: 'Terracotta Pottery',
    description: 'Handmade terracotta pots and decorative items.',
    imageUrl: '/images/shops/terracotta.jpg',
    rating: 4.5,
    visitCount: 850,
    position: { lat: 23.99, lng: 86.42 },
  },
];
