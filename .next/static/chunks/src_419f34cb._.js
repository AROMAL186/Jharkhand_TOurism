(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "busRoutes": (()=>busRoutes),
    "culturalHighlights": (()=>culturalHighlights),
    "marketplaceItems": (()=>marketplaceItems),
    "topDestinations": (()=>topDestinations),
    "trainRoutes": (()=>trainRoutes)
});
const topDestinations = [
    {
        name: 'Netarhat',
        shortDescription: 'The "Queen of Chotanagpur", known for its glorious sunrises and sunsets.',
        imageId: 'dest-netarhat',
        coordinates: {
            lat: 23.4775,
            lng: 84.2721
        }
    },
    {
        name: 'Patratu Valley',
        shortDescription: 'Famous for its winding roads and the stunning Patratu Dam.',
        imageId: 'dest-patratu',
        coordinates: {
            lat: 23.6664,
            lng: 85.2974
        }
    },
    {
        name: 'Betla National Park',
        shortDescription: 'A diverse wildlife sanctuary, home to elephants, tigers, and bison.',
        imageId: 'dest-betla',
        coordinates: {
            lat: 23.888,
            lng: 84.1906
        }
    },
    {
        name: 'Hundru Falls',
        shortDescription: 'A spectacular waterfall where the Subarnarekha River falls from a height of 98 meters.',
        imageId: 'dest-hundru',
        coordinates: {
            lat: 23.4526,
            lng: 85.656
        }
    },
    {
        name: 'Deoghar',
        shortDescription: 'A major Hindu pilgrimage site with the famous Baidyanath Temple.',
        imageId: 'dest-deoghar',
        coordinates: {
            lat: 24.4826,
            lng: 86.6966
        }
    },
    {
        name: 'Dassam Falls',
        shortDescription: 'A natural cascade where the Kanchi River falls from a height of 44 meters.',
        imageId: 'dest-dassam',
        coordinates: {
            lat: 23.1497,
            lng: 85.4511
        }
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
        imageId: 'market-dokra'
    },
    {
        id: 2,
        name: 'Sohrai Painted Vase',
        artisan: 'Manjula Devi',
        price: '₹800',
        category: 'Pottery',
        imageId: 'market-sohrai-vase'
    },
    {
        id: 3,
        name: 'Bamboo Pen Stand',
        artisan: 'Lakhan Tudu',
        price: '₹350',
        category: 'Bamboo Craft',
        imageId: 'market-bamboo'
    },
    {
        id: 4,
        name: 'Handwoven Tribal Shawl',
        artisan: 'Sarita Hembrom',
        price: '₹2,200',
        category: 'Textile',
        imageId: 'market-shawl'
    },
    {
        id: 5,
        name: 'Eco-Tourism Package: Netarhat',
        artisan: 'Jharkhand Tourism',
        price: '₹5,000 / person',
        category: 'Eco-tour',
        imageId: 'market-tour-netarhat'
    },
    {
        id: 6,
        name: 'Wooden Chhau Mask',
        artisan: 'Prabhat Mahato',
        price: '₹3,000',
        category: 'Handicraft',
        imageId: 'market-chhau-mask'
    },
    {
        id: 7,
        name: 'Homestay in a Tribal Village',
        artisan: 'Community Stay Initiative',
        price: '₹1,200 / night',
        category: 'Homestay',
        imageId: 'market-homestay'
    },
    {
        id: 8,
        name: 'Organic Wild Honey',
        artisan: 'Van Dhan Vikas Kendra',
        price: '₹600',
        category: 'Local Produce',
        imageId: 'market-honey'
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero-background\",\"description\":\"A scenic view of Jharkhand's landscape.\",\"imageUrl\":\"https://picsum.photos/seed/hero/1920/1080\",\"imageHint\":\"landscape valley\"},{\"id\":\"dest-netarhat\",\"description\":\"Netarhat, the Queen of Chotanagpur.\",\"imageUrl\":\"https://picsum.photos/seed/netarhat/600/400\",\"imageHint\":\"sunrise hill\"},{\"id\":\"dest-patratu\",\"description\":\"The winding roads of Patratu Valley.\",\"imageUrl\":\"https://picsum.photos/seed/patratu/600/400\",\"imageHint\":\"winding road\"},{\"id\":\"dest-betla\",\"description\":\"Wildlife in Betla National Park.\",\"imageUrl\":\"https://picsum.photos/seed/betla/600/400\",\"imageHint\":\"wildlife deer\"},{\"id\":\"dest-hundru\",\"description\":\"The majestic Hundru Falls.\",\"imageUrl\":\"https://picsum.photos/seed/hundru/600/400\",\"imageHint\":\"waterfall cliff\"},{\"id\":\"dest-deoghar\",\"description\":\"The Baidyanath Temple in Deoghar.\",\"imageUrl\":\"https://picsum.photos/seed/deoghar/600/400\",\"imageHint\":\"temple architecture\"},{\"id\":\"dest-dassam\",\"description\":\"The cascading Dassam Falls.\",\"imageUrl\":\"https://picsum.photos/seed/dassam/600/400\",\"imageHint\":\"waterfall rocks\"},{\"id\":\"culture-sohrai\",\"description\":\"Traditional Sohrai mural art.\",\"imageUrl\":\"https://picsum.photos/seed/sohrai/600/400\",\"imageHint\":\"tribal art\"},{\"id\":\"culture-chhau\",\"description\":\"A vibrant Chhau dancer with a mask.\",\"imageUrl\":\"https://picsum.photos/seed/chhau/600/400\",\"imageHint\":\"dance mask\"},{\"id\":\"culture-cuisine\",\"description\":\"A plate of delicious Jharkhandi cuisine.\",\"imageUrl\":\"https://picsum.photos/seed/cuisine/600/400\",\"imageHint\":\"food plate\"},{\"id\":\"market-dokra\",\"description\":\"A Dokra art elephant figurine.\",\"imageUrl\":\"https://picsum.photos/seed/dokra/400/400\",\"imageHint\":\"metal statue\"},{\"id\":\"market-sohrai-vase\",\"description\":\"A vase painted with Sohrai art.\",\"imageUrl\":\"https://picsum.photos/seed/sohraivase/400/400\",\"imageHint\":\"painted pottery\"},{\"id\":\"market-bamboo\",\"description\":\"A handcrafted bamboo pen stand.\",\"imageUrl\":\"https://picsum.photos/seed/bamboo/400/400\",\"imageHint\":\"bamboo craft\"},{\"id\":\"market-shawl\",\"description\":\"A handwoven tribal shawl.\",\"imageUrl\":\"https://picsum.photos/seed/shawl/400/400\",\"imageHint\":\"textile pattern\"},{\"id\":\"market-tour-netarhat\",\"description\":\"An eco-tourism package for Netarhat.\",\"imageUrl\":\"https://picsum.photos/seed/tournetarhat/400/400\",\"imageHint\":\"mountain landscape\"},{\"id\":\"market-chhau-mask\",\"description\":\"A wooden Chhau dance mask.\",\"imageUrl\":\"https://picsum.photos/seed/chhaumask/400/400\",\"imageHint\":\"wooden mask\"},{\"id\":\"market-homestay\",\"description\":\"A homestay in a tribal village.\",\"imageUrl\":\"https://picsum.photos/seed/homestay/400/400\",\"imageHint\":\"village hut\"},{\"id\":\"market-honey\",\"description\":\"A jar of organic wild honey.\",\"imageUrl\":\"https://picsum.photos/seed/honey/400/400\",\"imageHint\":\"honey jar\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/interactive-map.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InteractiveMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function InteractiveMap() {
    _s();
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyBmCpMAvMSi7F1pdazMb3XRdL8iP9GacQc");
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Jharkhand's approximate center
    const position = {
        lat: 23.6345,
        lng: 85.3847
    };
    const selectedImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === selectedLocation?.imageId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
        apiKey: apiKey,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
            defaultCenter: position,
            defaultZoom: 8,
            mapId: "jharkhand_explorer_map",
            gestureHandling: 'greedy',
            disableDefaultUI: true,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topDestinations"].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: loc.coordinates,
                        onClick: ()=>setSelectedLocation(loc)
                    }, loc.name, false, {
                        fileName: "[project]/src/components/interactive-map.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this)),
                selectedLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoWindow"], {
                    position: selectedLocation.coordinates,
                    onCloseClick: ()=>setSelectedLocation(null),
                    minWidth: 200,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-none shadow-none max-w-sm",
                        children: [
                            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-40 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: selectedImage.imageUrl,
                                    alt: selectedLocation.name,
                                    fill: true,
                                    className: "object-cover rounded-t-lg",
                                    "data-ai-hint": selectedImage.imageHint
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive-map.tsx",
                                    lineNumber: 57,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive-map.tsx",
                                lineNumber: 56,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: selectedLocation.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive-map.tsx",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive-map.tsx",
                                lineNumber: 66,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: selectedLocation.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive-map.tsx",
                                    lineNumber: 70,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive-map.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive-map.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive-map.tsx",
                    lineNumber: 49,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/interactive-map.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/interactive-map.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(InteractiveMap, "pGedlDpRVZiPTL4140bC/BFKe+Y=");
_c = InteractiveMap;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_419f34cb._.js.map