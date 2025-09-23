module.exports = {

"[project]/.next-internal/server/app/(main)/destinations/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "adventureDestinations": (()=>adventureDestinations),
    "artAndCultureDestinations": (()=>artAndCultureDestinations),
    "busRoutes": (()=>busRoutes),
    "culturalHighlights": (()=>culturalHighlights),
    "localServices": (()=>localServices),
    "marketplaceItems": (()=>marketplaceItems),
    "moreMenuItems": (()=>moreMenuItems),
    "topDestinations": (()=>topDestinations),
    "topExperiences": (()=>topExperiences),
    "trainRoutes": (()=>trainRoutes),
    "upcomingEvents": (()=>upcomingEvents),
    "videoGallery": (()=>videoGallery)
});
const topDestinations = [
    {
        name: 'Netarhat',
        slug: 'netarhat',
        shortDescription: 'The "Queen of Chotanagpur", known for its glorious sunrises and sunsets.',
        longDescription: "Nestled in the Chotanagpur Plateau, Netarhat is a picturesque hill station often called the 'Queen of Chotanagpur'. It's famous for its breathtaking sunrises and sunsets, especially from Magnolia Point. The serene environment, surrounded by dense forests of sal, palash, and mahua, makes it a perfect retreat for nature lovers. Key attractions include the Netarhat Residential School, Upper Ghaghri Falls, and Lower Ghaghri Falls.",
        imageId: 'dest-netarhat',
        coordinates: {
            lat: 23.4775,
            lng: 84.2721
        }
    },
    {
        name: 'Patratu Valley',
        slug: 'patratu-valley',
        shortDescription: 'Famous for its winding roads and the stunning Patratu Dam.',
        longDescription: 'The Patratu Valley is a mesmerizing destination, renowned for its serpentine ghat roads with hairpin bends and panoramic views of the surrounding hills and the Patratu Dam. The dam, which serves the Patratu Thermal Power Station, creates a vast reservoir that is a popular spot for boating and picnics. The drive through the valley is an adventure in itself, offering stunning photo opportunities at every turn.',
        imageId: 'dest-patratu',
        coordinates: {
            lat: 23.6664,
            lng: 85.2974
        }
    },
    {
        name: 'Betla National Park',
        slug: 'betla-national-park',
        shortDescription: 'A diverse wildlife sanctuary, home to elephants, tigers, and bison.',
        longDescription: "Betla National Park is one of India's oldest tiger reserves, boasting a rich biodiversity of flora and fauna. Spread over a hilly terrain, the park is home to elephants, tigers, leopards, bison (gaur), and numerous species of deer and monkeys. Visitors can explore the park through jeep safaris and elephant rides, and also visit the historic Palamu Forts located deep within the forest.",
        imageId: 'dest-betla',
        coordinates: {
            lat: 23.888,
            lng: 84.1906
        }
    },
    {
        name: 'Hundru Falls',
        slug: 'hundru-falls',
        shortDescription: 'A spectacular waterfall where the Subarnarekha River falls from a height of 98 meters.',
        longDescription: 'Hundru Falls is one of the most famous waterfalls in Jharkhand. It is formed where the Subarnarekha River takes a spectacular plunge from a height of 322 feet (98 meters), creating a scene of breathtaking beauty. The pool at the base of the falls is a popular spot for a refreshing dip. The area is also ideal for trekking and picnicking, surrounded by a rocky and verdant landscape.',
        imageId: 'dest-hundru',
        coordinates: {
            lat: 23.4526,
            lng: 85.656
        }
    },
    {
        name: 'Deoghar',
        slug: 'deoghar',
        shortDescription: 'A major Hindu pilgrimage site with the famous Baidyanath Temple.',
        longDescription: "Deoghar, meaning 'abode of the gods', is a significant Hindu pilgrimage center. It is home to the Baidyanath Temple, one of the twelve Jyotirlingas in India. The town attracts millions of devotees, especially during the Shravan Mela festival. Other spiritual sites in and around Deoghar include the Trikut Pahar (a popular trekking and ropeway spot), Nandan Pahar, and the Ramakrishna Mission Vidyapith.",
        imageId: 'dest-deoghar',
        coordinates: {
            lat: 24.4826,
            lng: 86.6966
        }
    },
    {
        name: 'Dassam Falls',
        slug: 'dassam-falls',
        shortDescription: 'A natural cascade where the Kanchi River falls from a height of 44 meters.',
        longDescription: 'Also known as Dassam Gagh, Dassam Falls is a stunning natural cascade located near Ranchi. The Kanchi River, a tributary of the Subarnarekha, drops from a height of about 144 feet (44 meters) here. The falls are known for their ten separate streams of water, giving them their name. The sound of the gushing water and the lush green surroundings create a tranquil and rejuvenating atmosphere.',
        imageId: 'dest-dassam',
        coordinates: {
            lat: 23.1497,
            lng: 85.4511
        }
    }
];
const topExperiences = [
    {
        title: 'Boating in Patratu Dam',
        description: 'Enjoy a serene boat ride amidst the picturesque hills of Patratu Valley.',
        imageId: 'exp-patratu-boating',
        href: '#'
    },
    {
        title: 'Sunrise at Netarhat',
        description: 'Witness a glorious sunrise from Magnolia Point, the "Queen of Chotanagpur".',
        imageId: 'dest-netarhat',
        href: '#'
    },
    {
        title: 'Wildlife Safari in Betla',
        description: 'Embark on a thrilling jungle safari to spot elephants, deer, and maybe a tiger.',
        imageId: 'dest-betla',
        href: '#'
    },
    {
        title: 'Trekking to Parasnath',
        description: 'A spiritual and adventurous trek to the highest peak in Jharkhand.',
        imageId: 'adventure-parasnath',
        href: '#'
    },
    {
        title: 'Explore Tribal Art',
        description: 'Discover the ancient Sohrai and Khovar art forms in local villages.',
        imageId: 'art-sohrai-khovar',
        href: '#'
    }
];
const adventureDestinations = [
    {
        name: 'Parasnath Hills',
        slug: 'parasnath-hills',
        description: 'The highest peak in Jharkhand, a popular pilgrimage site for Jains, and a challenging trekking destination.',
        imageId: 'adventure-parasnath'
    },
    {
        name: 'Trikut Pahar',
        slug: 'trikut-pahar',
        description: 'Known for its thrilling ropeway ride to the top of the hill, offering panoramic views and a trekking path.',
        imageId: 'adventure-trikut'
    },
    {
        name: 'Canary Hill',
        slug: 'canary-hill',
        description: 'Located in Hazaribagh, this hill has a watchtower that provides stunning views of the town and surrounding forests. A great spot for light treks.',
        imageId: 'adventure-canary'
    },
    {
        name: 'Khandoli Park',
        slug: 'khandoli-park',
        description: 'An adventure hub offering activities like parasailing, rock climbing, and boating in the shadow of Khandoli Hill.',
        imageId: 'adventure-khandoli'
    }
];
const artAndCultureDestinations = [
    {
        name: 'Sohrai Khovar Painting',
        slug: 'sohrai-khovar-painting',
        description: 'Explore villages in Hazaribagh where this traditional mural art form, a GI-tagged heritage, adorns the mud walls of homes.',
        imageId: 'art-sohrai-khovar'
    },
    {
        name: 'Chhau Dance of Seraikela',
        slug: 'chhau-dance',
        description: 'Witness the vibrant and martial art form of Chhau dance, with its intricate masks and powerful movements, in its place of origin, Seraikela.',
        imageId: 'art-chhau'
    },
    {
        name: 'Dokra Art of Dumka',
        slug: 'dokra-art',
        description: 'Visit artisan villages in Dumka to see the ancient bell metal casting technique of Dokra, used to create beautiful figurines and jewelry.',
        imageId: 'art-dokra'
    },
    {
        name: 'State Museum Hotwar',
        slug: 'state-museum-hotwar',
        description: 'Located in Ranchi, this museum houses a vast collection of archaeological finds, ethnographic objects, and art that tells the story of Jharkhand.',
        imageId: 'art-museum'
    }
];
const culturalHighlights = [
    {
        name: 'Sohrai Art',
        description: 'A traditional and ritualistic mural art practiced by tribal women during harvest and marriage seasons.',
        imageId: 'culture-sohrai'
    },
    {
        name: 'Chhau Dance',
        description: 'A semi-classical Indian dance with martial, tribal, and folk origins, often featuring vibrant masks.',
        imageId: 'culture-chhau'
    },
    {
        name: 'Local Cuisine',
        description: 'Savor unique dishes like Dhuska, Rugra, and Thekua that reflect the state\'s culinary heritage.',
        imageId: 'culture-cuisine'
    }
];
const marketplaceItems = [
    {
        id: 1,
        name: 'Dokra Art Elephant',
        artisan: 'Suresh Kumar',
        price: '₹1,500',
        category: 'Handicraft',
        imageId: 'market-dokra',
        inStock: true
    },
    {
        id: 2,
        name: 'Sohrai Painted Vase',
        artisan: 'Manjula Devi',
        price: '₹800',
        category: 'Pottery',
        imageId: 'market-sohrai-vase',
        inStock: true
    },
    {
        id: 3,
        name: 'Bamboo Pen Stand',
        artisan: 'Lakhan Tudu',
        price: '₹350',
        category: 'Bamboo Craft',
        imageId: 'market-bamboo',
        inStock: true
    },
    {
        id: 4,
        name: 'Handwoven Tribal Shawl',
        artisan: 'Sarita Hembrom',
        price: '₹2,200',
        category: 'Textile',
        imageId: 'market-shawl',
        inStock: true
    },
    {
        id: 5,
        name: 'Eco-Tourism Package: Netarhat',
        artisan: 'Jharkhand Tourism',
        price: '₹5,000 / person',
        category: 'Eco-tour',
        imageId: 'market-tour-netarhat',
        inStock: true
    },
    {
        id: 6,
        name: 'Wooden Chhau Mask',
        artisan: 'Prabhat Mahato',
        price: '₹3,000',
        category: 'Handicraft',
        imageId: 'market-chhau-mask',
        inStock: true
    },
    {
        id: 7,
        name: 'Homestay in a Tribal Village',
        artisan: 'Community Stay Initiative',
        price: '₹1,200 / night',
        category: 'Homestay',
        imageId: 'market-homestay',
        inStock: true
    },
    {
        id: 8,
        name: 'Organic Wild Honey',
        artisan: 'Van Dhan Vikas Kendra',
        price: '₹600',
        category: 'Local Produce',
        imageId: 'market-honey',
        inStock: true
    }
];
const localServices = [
    {
        id: 1,
        name: 'Rohan Sharma',
        type: 'Tour Guide',
        rating: 4.9,
        location: 'Ranchi',
        languages: [
            'English',
            'Hindi'
        ],
        available: true,
        image: '/images/guides/rohan.jpg'
    },
    {
        id: 2,
        name: 'Priya Singh',
        type: 'Tour Guide',
        rating: 4.8,
        location: 'Deoghar',
        languages: [
            'Hindi',
            'Bengali'
        ],
        available: true,
        image: '/images/guides/priya.jpg'
    },
    {
        id: 3,
        name: 'Anjali Mehta',
        type: 'Tour Guide',
        rating: 4.7,
        location: 'Hazaribagh',
        languages: [
            'English',
            'Hindi'
        ],
        available: false,
        image: '/images/guides/anjali.jpg'
    },
    {
        id: 4,
        name: 'Alok Nath',
        type: 'Tour Guide',
        rating: 4.8,
        location: 'Netarhat',
        languages: [
            'Hindi',
            'Sadri'
        ],
        available: true,
        image: '/images/guides/alok.jpg'
    },
    {
        id: 5,
        name: 'Sunita Devi',
        type: 'Translator',
        rating: 4.9,
        location: 'Ranchi',
        languages: [
            'English',
            'Hindi',
            'Santhali'
        ],
        available: true,
        image: '/images/translators/sunita.jpg'
    },
    {
        id: 6,
        name: 'Rajesh Murmu',
        type: 'Translator',
        rating: 4.8,
        location: 'Deoghar',
        languages: [
            'Hindi',
            'Bengali',
            'Santhali'
        ],
        available: true,
        image: '/images/translators/rajesh.jpg'
    },
    {
        id: 7,
        name: 'Amit Kumar',
        type: 'Driver',
        rating: 4.7,
        location: 'Hazaribagh',
        languages: [
            'English',
            'Hindi'
        ],
        available: false,
        image: '/images/drivers/amit.jpg'
    },
    {
        id: 8,
        name: 'Vikram Singh',
        type: 'Driver',
        rating: 4.8,
        location: 'Ranchi',
        languages: [
            'Hindi',
            'Sadri'
        ],
        available: true,
        image: '/images/drivers/vikram.jpg'
    },
    {
        id: 9,
        name: 'Suresh Yadav',
        type: 'Driver',
        rating: 4.6,
        location: 'Deoghar',
        languages: [
            'Hindi'
        ],
        available: true,
        image: '/images/drivers/suresh.jpg'
    },
    {
        id: 10,
        name: 'Manoj Bedia',
        type: 'Driver',
        rating: 4.8,
        location: 'Netarhat',
        languages: [
            'Hindi',
            'Sadri'
        ],
        available: true,
        image: '/images/drivers/manoj.jpg'
    }
];
const busRoutes = [
    {
        id: 1,
        route: 'Ranchi to Hazaribagh',
        departure: '08:00 AM',
        arrival: '11:00 AM',
        status: 'On Time'
    },
    {
        id: 2,
        route: 'Jamshedpur to Dhanbad',
        departure: '09:30 AM',
        arrival: '01:00 PM',
        status: 'On Time'
    },
    {
        id: 3,
        route: 'Ranchi to Netarhat',
        departure: '06:00 AM',
        arrival: '11:30 AM',
        status: 'Delayed'
    },
    {
        id: 4,
        route: 'Bokaro to Deoghar',
        departure: '10:00 AM',
        arrival: '03:00 PM',
        status: 'On Time'
    },
    {
        id: 5,
        route: 'Dhanbad to Ranchi',
        departure: '02:00 PM',
        arrival: '06:00 PM',
        status: 'Arrived'
    }
];
const trainRoutes = [
    {
        id: 1,
        trainName: 'Hatia-Anand Vihar Trm Jharkhand Express',
        trainNumber: '12873',
        route: 'Hatia to Delhi',
        scheduledArrival: '09:00 AM',
        status: 'On Time'
    },
    {
        id: 2,
        trainName: 'Ranchi Rajdhani Express',
        trainNumber: '20839',
        route: 'Ranchi to Delhi',
        scheduledArrival: '11:10 AM',
        status: 'On Time'
    },
    {
        id: 3,
        trainName: 'Tatanagar-Danapur Express',
        trainNumber: '18183',
        route: 'Tatanagar to Danapur',
        scheduledArrival: '04:00 PM',
        status: 'Delayed'
    },
    {
        id: 4,
        trainName: 'Howrah - Ranchi Shatabdi Express',
        trainNumber: '12019',
        route: 'Howrah to Ranchi',
        scheduledArrival: '01:15 PM',
        status: 'Arrived'
    }
];
const upcomingEvents = [
    {
        title: 'Jharkhand Tourism Awards - 2025',
        href: '#'
    },
    {
        title: 'Sarhul Festival Celebration',
        href: '#'
    },
    {
        title: 'Monsoon Trekking Expedition',
        href: '#'
    }
];
const moreMenuItems = [
    {
        title: 'About Us',
        href: '#'
    },
    {
        title: 'Blogs',
        href: '#'
    },
    {
        title: 'Tourism Awards',
        href: '#'
    },
    {
        title: 'Contact',
        href: '#'
    },
    {
        title: 'Certification Programme',
        href: '#'
    },
    {
        title: 'Tenders',
        href: '#'
    },
    {
        title: 'Island Ground Tariff',
        href: '#'
    },
    {
        title: 'Tourism Policy',
        href: '#'
    },
    {
        title: 'Tourist Visitors Statistics',
        href: '#'
    },
    {
        title: 'Tourism Calender 2025',
        href: '#'
    },
    {
        title: 'Tourism Projects',
        href: '#'
    }
];
const videoGallery = [
    {
        title: 'The Land of Waterfalls',
        thumbnailId: 'video-waterfalls',
        href: '#'
    },
    {
        title: 'Vibrance of Tribal Culture',
        thumbnailId: 'video-culture',
        href: '#'
    },
    {
        title: 'Into the Wilds of Betla',
        thumbnailId: 'video-wildlife',
        href: '#'
    }
];
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero-background\",\"description\":\"A powerful waterfall in Jharkhand.\",\"imageUrl\":\"https://picsum.photos/seed/hero-waterfall/1920/1080\",\"imageHint\":\"Jharkhand waterfall\"},{\"id\":\"dest-netarhat\",\"description\":\"Netarhat, the Queen of Chotanagpur.\",\"imageUrl\":\"https://picsum.photos/seed/netarhat/600/400\",\"imageHint\":\"Netarhat sunrise\"},{\"id\":\"dest-patratu\",\"description\":\"The winding roads of Patratu Valley.\",\"imageUrl\":\"https://picsum.photos/seed/patratu/600/400\",\"imageHint\":\"Patratu valley\"},{\"id\":\"dest-betla\",\"description\":\"Wildlife in Betla National Park.\",\"imageUrl\":\"https://picsum.photos/seed/betla/600/400\",\"imageHint\":\"Indian elephant\"},{\"id\":\"dest-hundru\",\"description\":\"The majestic Hundru Falls.\",\"imageUrl\":\"https://picsum.photos/seed/hundru/600/400\",\"imageHint\":\"Hundru falls\"},{\"id\":\"dest-deoghar\",\"description\":\"The Baidyanath Temple in Deoghar.\",\"imageUrl\":\"https://picsum.photos/seed/deoghar/600/400\",\"imageHint\":\"Deoghar temple\"},{\"id\":\"dest-dassam\",\"description\":\"The cascading Dassam Falls.\",\"imageUrl\":\"https://picsum.photos/seed/dassam/600/400\",\"imageHint\":\"Dassam falls\"},{\"id\":\"culture-sohrai\",\"description\":\"Traditional Sohrai mural art.\",\"imageUrl\":\"https://picsum.photos/seed/sohrai/600/400\",\"imageHint\":\"Sohrai art\"},{\"id\":\"culture-chhau\",\"description\":\"A vibrant Chhau dancer with a mask.\",\"imageUrl\":\"https://picsum.photos/seed/chhau/600/400\",\"imageHint\":\"Chhau dance\"},{\"id\":\"culture-cuisine\",\"description\":\"A plate of delicious Jharkhandi cuisine.\",\"imageUrl\":\"https://picsum.photos/seed/cuisine/600/400\",\"imageHint\":\"Indian thali\"},{\"id\":\"market-dokra\",\"description\":\"A Dokra art elephant figurine.\",\"imageUrl\":\"https://picsum.photos/seed/dokra/400/400\",\"imageHint\":\"dokra craft\"},{\"id\":\"market-sohrai-vase\",\"description\":\"A vase painted with Sohrai art.\",\"imageUrl\":\"https://picsum.photos/seed/sohraivase/400/400\",\"imageHint\":\"Sohrai painting\"},{\"id\":\"market-bamboo\",\"description\":\"A handcrafted bamboo pen stand.\",\"imageUrl\":\"https://picsum.photos/seed/bamboo/400/400\",\"imageHint\":\"bamboo craft\"},{\"id\":\"market-shawl\",\"description\":\"A handwoven tribal shawl.\",\"imageUrl\":\"https://picsum.photos/seed/shawl/400/400\",\"imageHint\":\"tribal textile\"},{\"id\":\"market-tour-netarhat\",\"description\":\"An eco-tourism package for Netarhat.\",\"imageUrl\":\"https://picsum.photos/seed/tournetarhat/400/400\",\"imageHint\":\"Netarhat landscape\"},{\"id\":\"market-chhau-mask\",\"description\":\"A wooden Chhau dance mask.\",\"imageUrl\":\"https://picsum.photos/seed/chhaumask/400/400\",\"imageHint\":\"Chhau mask\"},{\"id\":\"market-homestay\",\"description\":\"A homestay in a tribal village.\",\"imageUrl\":\"https://picsum.photos/seed/homestay/400/400\",\"imageHint\":\"Indian village\"},{\"id\":\"market-honey\",\"description\":\"A jar of organic wild honey.\",\"imageUrl\":\"https://picsum.photos/seed/honey/400/400\",\"imageHint\":\"honey jar\"},{\"id\":\"gallery-adventure\",\"description\":\"Adventure activities\",\"imageUrl\":\"https://picsum.photos/seed/adv/400/500\",\"imageHint\":\"rock climbing\"},{\"id\":\"gallery-art-culture\",\"description\":\"Art and Culture\",\"imageUrl\":\"https://picsum.photos/seed/art/400/500\",\"imageHint\":\"tribal painting\"},{\"id\":\"gallery-beaches\",\"description\":\"Beaches\",\"imageUrl\":\"https://picsum.photos/seed/beach/400/500\",\"imageHint\":\"river bank\"},{\"id\":\"gallery-crafts\",\"description\":\"Handicrafts\",\"imageUrl\":\"https://picsum.photos/seed/craft/400/500\",\"imageHint\":\"Jharkhand craft\"},{\"id\":\"gallery-cuisine\",\"description\":\"Local Cuisine\",\"imageUrl\":\"https://picsum.photos/seed/cuis/400/500\",\"imageHint\":\"Jharkhand food\"},{\"id\":\"gallery-festivals\",\"description\":\"Festivals of Jharkhand\",\"imageUrl\":\"https://picsum.photos/seed/fest/400/500\",\"imageHint\":\"Sarhul festival\"},{\"id\":\"gallery-forts\",\"description\":\"Ancient Forts\",\"imageUrl\":\"https://picsum.photos/seed/fort/400/500\",\"imageHint\":\"Palamu fort\"},{\"id\":\"gallery-hills\",\"description\":\"Lush green hills\",\"imageUrl\":\"https://picsum.photos/seed/hill/400/500\",\"imageHint\":\"Parasnath hills\"},{\"id\":\"gallery-lakes\",\"description\":\"Serene Lakes\",\"imageUrl\":\"https://picsum.photos/seed/lake/400/500\",\"imageHint\":\"Dimna lake\"},{\"id\":\"gallery-monuments\",\"description\":\"Historical Monuments\",\"imageUrl\":\"https://picsum.photos/seed/monu/400/500\",\"imageHint\":\"Maluti temples\"},{\"id\":\"gallery-museums\",\"description\":\"State Museums\",\"imageUrl\":\"https://picsum.photos/seed/muse/400/500\",\"imageHint\":\"Ranchi museum\"},{\"id\":\"gallery-palaces\",\"description\":\"Historic Palaces\",\"imageUrl\":\"https://picsum.photos/seed/palace/400/500\",\"imageHint\":\"Ratu palace\"},{\"id\":\"gallery-pilgrim\",\"description\":\"Pilgrimage sites\",\"imageUrl\":\"https://picsum.photos/seed/pilg/400/500\",\"imageHint\":\"Baidyanath temple\"},{\"id\":\"gallery-waterfalls\",\"description\":\"Majestic Waterfalls\",\"imageUrl\":\"https://picsum.photos/seed/wfall/400/500\",\"imageHint\":\"Jonha falls\"},{\"id\":\"gallery-wellness\",\"description\":\"Wellness and Retreats\",\"imageUrl\":\"https://picsum.photos/seed/well/400/500\",\"imageHint\":\"yoga nature\"},{\"id\":\"gallery-wildlife\",\"description\":\"Wildlife Sanctuaries\",\"imageUrl\":\"https://picsum.photos/seed/wild/400/500\",\"imageHint\":\"Dalma wildlife\"},{\"id\":\"gallery-world-heritage\",\"description\":\"World Heritage Sites\",\"imageUrl\":\"https://picsum.photos/seed/whs/400/500\",\"imageHint\":\"ancient ruins\"},{\"id\":\"adventure-parasnath\",\"description\":\"Parasnath Hills\",\"imageUrl\":\"https://picsum.photos/seed/parasnath/600/400\",\"imageHint\":\"Parasnath temple\"},{\"id\":\"adventure-trikut\",\"description\":\"Trikut Pahar Ropeway\",\"imageUrl\":\"https://picsum.photos/seed/trikut/600/400\",\"imageHint\":\"Trikut ropeway\"},{\"id\":\"adventure-canary\",\"description\":\"Canary Hill\",\"imageUrl\":\"https://picsum.photos/seed/canary/600/400\",\"imageHint\":\"Hazaribagh view\"},{\"id\":\"adventure-khandoli\",\"description\":\"Khandoli Park\",\"imageUrl\":\"https://picsum.photos/seed/khandoli/600/400\",\"imageHint\":\"Khandoli dam\"},{\"id\":\"art-sohrai-khovar\",\"description\":\"Sohrai Khovar Painting\",\"imageUrl\":\"https://picsum.photos/seed/sohraikhovar/600/400\",\"imageHint\":\"Sohrai mural\"},{\"id\":\"art-chhau\",\"description\":\"Chhau Dance of Seraikela\",\"imageUrl\":\"https://picsum.photos/seed/chhaudance/600/400\",\"imageHint\":\"Seraikela Chhau\"},{\"id\":\"art-dokra\",\"description\":\"Dokra Art of Dumka\",\"imageUrl\":\"https://picsum.photos/seed/dokraart/600/400\",\"imageHint\":\"Dhokra art\"},{\"id\":\"art-museum\",\"description\":\"State Museum Hotwar\",\"imageUrl\":\"https://picsum.photos/seed/statemuseum/600/400\",\"imageHint\":\"Ranchi museum\"},{\"id\":\"exp-patratu-boating\",\"description\":\"Boating in Patratu Dam\",\"imageUrl\":\"https://picsum.photos/seed/patratu-boat/600/800\",\"imageHint\":\"Patratu boating\"},{\"id\":\"video-waterfalls\",\"description\":\"Waterfalls video thumbnail\",\"imageUrl\":\"https://picsum.photos/seed/vid-waterfall/600/338\",\"imageHint\":\"Jharkhand falls\"},{\"id\":\"video-culture\",\"description\":\"Culture video thumbnail\",\"imageUrl\":\"https://picsum.photos/seed/vid-culture/600/338\",\"imageHint\":\"Jharkhand festival\"},{\"id\":\"video-wildlife\",\"description\":\"Wildlife video thumbnail\",\"imageUrl\":\"https://picsum.photos/seed/vid-wildlife/600/338\",\"imageHint\":\"Jharkhand wildlife\"},{\"id\":\"transport-bg\",\"description\":\"A winding road through the hills of Jharkhand, perfect for a transport page background.\",\"imageUrl\":\"https://picsum.photos/seed/transport-road/1920/1080\",\"imageHint\":\"Jharkhand road\"},{\"id\":\"plan-1\",\"description\":\"An image for the trip planner card\",\"imageUrl\":\"https://picsum.photos/seed/plan-1/300/200\",\"imageHint\":\"map compass\"},{\"id\":\"plan-2\",\"description\":\"An image for the transport card\",\"imageUrl\":\"https://picsum.photos/seed/plan-2/300/200\",\"imageHint\":\"bus train\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/app/(main)/destinations/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DestinationPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function DestinationPage({ params }) {
    const destination = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topDestinations"].find((d)=>d.slug === params.slug);
    if (!destination) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const image = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === destination.imageId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                asChild: true,
                variant: "outline",
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/map",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                            lineNumber: 23,
                            columnNumber: 17
                        }, this),
                        "Back to Map"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                    lineNumber: 22,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[50vh] w-full",
                        children: [
                            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: image.imageUrl,
                                alt: destination.name,
                                fill: true,
                                className: "object-cover",
                                "data-ai-hint": image.imageHint,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                lineNumber: 39,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 p-8 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-bold font-headline drop-shadow-lg",
                                        children: destination.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl text-lg text-primary-foreground/90 drop-shadow-md",
                                        children: destination.shortDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                lineNumber: 40,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6 md:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-stone dark:prose-invert max-w-none text-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: destination.longDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/destinations/[slug]/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topDestinations"].map((destination)=>({
            slug: destination.slug
        }));
}
}}),
"[project]/src/app/(main)/destinations/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/destinations/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_db878380._.js.map