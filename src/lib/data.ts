export const topDestinations = [
  {
    name: 'Netarhat',
    shortDescription: 'The "Queen of Chotanagpur", known for its glorious sunrises and sunsets.',
    imageId: 'dest-netarhat',
    coordinates: { lat: 23.4775, lng: 84.2721 },
  },
  {
    name: 'Patratu Valley',
    shortDescription: 'Famous for its winding roads and the stunning Patratu Dam.',
    imageId: 'dest-patratu',
    coordinates: { lat: 23.6664, lng: 85.2974 },
  },
  {
    name: 'Betla National Park',
    shortDescription: 'A diverse wildlife sanctuary, home to elephants, tigers, and bison.',
    imageId: 'dest-betla',
    coordinates: { lat: 23.888, lng: 84.1906 },
  },
  {
    name: 'Hundru Falls',
    shortDescription: 'A spectacular waterfall where the Subarnarekha River falls from a height of 98 meters.',
    imageId: 'dest-hundru',
    coordinates: { lat: 23.4526, lng: 85.656 },
  },
  {
    name: 'Deoghar',
    shortDescription: 'A major Hindu pilgrimage site with the famous Baidyanath Temple.',
    imageId: 'dest-deoghar',
    coordinates: { lat: 24.4826, lng: 86.6966 },
  },
  {
    name: 'Dassam Falls',
    shortDescription: 'A natural cascade where the Kanchi River falls from a height of 44 meters.',
    imageId: 'dest-dassam',
    coordinates: { lat: 23.1497, lng: 85.4511 },
  },
];

export const culturalHighlights = [
  {
    name: 'Sohrai Art',
    description: 'A traditional and ritualistic mural art practiced by tribal women during harvest and marriage seasons.',
    imageId: 'culture-sohrai',
  },
  {
    name: 'Chhau Dance',
    description: 'A semi-classical Indian dance with martial, tribal, and folk origins, often featuring vibrant masks.',
    imageId: 'culture-chhau',
  },
  {
    name: 'Local Cuisine',
    description: 'Savor unique dishes like Dhuska, Rugra, and Thekua that reflect the state\'s culinary heritage.',
    imageId: 'culture-cuisine',
  },
];

export const marketplaceItems = [
  {
    id: 1,
    name: 'Dokra Art Elephant',
    artisan: 'Suresh Kumar',
    price: '₹1,500',
    category: 'Handicraft',
    imageId: 'market-dokra',
  },
  {
    id: 2,
    name: 'Sohrai Painted Vase',
    artisan: 'Manjula Devi',
    price: '₹800',
    category: 'Pottery',
    imageId: 'market-sohrai-vase',
  },
  {
    id: 3,
    name: 'Bamboo Pen Stand',
    artisan: 'Lakhan Tudu',
    price: '₹350',
    category: 'Bamboo Craft',
    imageId: 'market-bamboo',
  },
  {
    id: 4,
    name: 'Handwoven Tribal Shawl',
    artisan: 'Sarita Hembrom',
    price: '₹2,200',
    category: 'Textile',
    imageId: 'market-shawl',
  },
  {
    id: 5,
    name: 'Eco-Tourism Package: Netarhat',
    artisan: 'Jharkhand Tourism',
    price: '₹5,000 / person',
    category: 'Eco-tour',
    imageId: 'market-tour-netarhat',
  },
  {
    id: 6,
    name: 'Wooden Chhau Mask',
    artisan: 'Prabhat Mahato',
    price: '₹3,000',
    category: 'Handicraft',
    imageId: 'market-chhau-mask',
  },
  {
    id: 7,
    name: 'Homestay in a Tribal Village',
    artisan: 'Community Stay Initiative',
    price: '₹1,200 / night',
    category: 'Homestay',
    imageId: 'market-homestay',
  },
  {
    id: 8,
    name: 'Organic Wild Honey',
    artisan: 'Van Dhan Vikas Kendra',
    price: '₹600',
    category: 'Local Produce',
    imageId: 'market-honey',
  },
];


export const busRoutes = [
    { id: 1, route: 'Ranchi to Hazaribagh', departure: '08:00 AM', arrival: '11:00 AM', status: 'On Time' },
    { id: 2, route: 'Jamshedpur to Dhanbad', departure: '09:30 AM', arrival: '01:00 PM', status: 'On Time' },
    { id: 3, route: 'Ranchi to Netarhat', departure: '06:00 AM', arrival: '11:30 AM', status: 'Delayed' },
    { id: 4, route: 'Bokaro to Deoghar', departure: '10:00 AM', arrival: '03:00 PM', status: 'On Time' },
    { id: 5, route: 'Dhanbad to Ranchi', departure: '02:00 PM', arrival: '06:00 PM', status: 'Arrived' },
];

export const trainRoutes = [
    { id: 1, trainName: 'Hatia-Anand Vihar Trm Jharkhand Express', trainNumber: '12873', route: 'Hatia to Delhi', scheduledArrival: '09:00 AM', status: 'On Time' },
    { id: 2, trainName: 'Ranchi Rajdhani Express', trainNumber: '20839', route: 'Ranchi to Delhi', scheduledArrival: '11:10 AM', status: 'On Time' },
    { id: 3, trainName: 'Tatanagar-Danapur Express', trainNumber: '18183', route: 'Tatanagar to Danapur', scheduledArrival: '04:00 PM', status: 'Delayed' },
    { id: 4, trainName: 'Howrah - Ranchi Shatabdi Express', trainNumber: '12019', route: 'Howrah to Ranchi', scheduledArrival: '01:15 PM', status: 'Arrived' },
];
