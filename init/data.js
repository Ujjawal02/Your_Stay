const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    category: "Trending",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    category: "Trending",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    category: "Trending",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    category: "Trending",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    category: "Trending",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    category: "Trending",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    category: "Trending",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    category: "Trending",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    category: "Trending",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    category: "Trending",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    category: "Trending",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    category: "Trending",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    category: "Trending",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    category: "Trending",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    category: "Trending",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    category: "Trending",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    category: "Trending",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    category: "Trending",
    country: "Costa Rica",
  },
  {
    title: "Luxury Villa in Goa",
    description: "A modern villa with private pool and sea view.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1701421016474-09b19faa9f77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwVmlsbGElMjBpbiUyMEdvYXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 5000,
    location: "Goa",
    country: "India",
    category: "Trending"
  },
  {
    title: "Skyline Apartment",
    description: "High-rise apartment with panoramic city views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1673384131620-a6ec8bff239b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2t5bGluZSUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" },
    price: 3000,
    location: "Mumbai",
    country: "India",
    category: "Trending"
  },
  {
    title: "Countryside Retreat",
    description: "Peaceful stay surrounded by nature.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1733760125447-a363befe9aab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q291bnRyeXNpZGUlMjBSZXRyZWF0fGVufDB8fDB8fHww" },
    price: 2000,
    location: "Shimla",
    country: "India",
    category: "Trending"
  },
  {
    title: "Desert Camp",
    description: "Luxury tents in the Thar desert.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1613169620329-6785c004d900?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwY2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
    price: 1500,
    location: "Jaisalmer",
    country: "India",
    category: "Trending"
  },
  {
    title: "Lakeview Cottage",
    description: "Cozy cottage with serene lake views.",
    image: { filename: "listingimage", url: "https://media.istockphoto.com/id/533443584/photo/adirondack-chair.webp?a=1&b=1&s=612x612&w=0&k=20&c=qX-dqSotAwOmrhEV6NrRFAR1Rn6kJKfc1sEejSjPA_Y=" },
    price: 2500,
    location: "Nainital",
    country: "India",
    category: "Trending"
  },

  // 🏠 Room
  {
    title: "Budget Single Room",
    description: "Affordable stay for solo travelers.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1724788725974-4cb2f09e81e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVkZ2V0JTIwU2luZ2xlJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 800,
    location: "Delhi",
    country: "India",
    category: "Room"
  },
  {
    title: "Deluxe Double Room",
    description: "Spacious room with modern amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsdXhlJTIwRG91YmxlJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 1200,
    location: "Bangalore",
    country: "India",
    category: "Room"
  },
  {
    title: "Heritage Room",
    description: "Stay in a historic haveli room.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1733514691529-da25716e449b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyaXRhZ2UlMjBSb29tfGVufDB8fDB8fHww" },
    price: 1500,
    location: "Jaipur",
    country: "India",
    category: "Room"
  },
  {
    title: "Studio Room",
    description: "Compact studio with kitchenette.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1661853413809-6be6bed796d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3R1ZGlvJTIwUm9vbXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 1000,
    location: "Pune",
    country: "India",
    category: "Room"
  },
  {
    title: "Sea View Room",
    description: "Room with balcony overlooking the ocean.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VhJTIwVmlldyUyMFJvb218ZW58MHx8MHx8fDA%3D" },
    price: 1800,
    location: "Chennai",
    country: "India",
    category: "Room"
  },

  // 🌆 Iconic Cities
  {
    title: "Times Square Loft",
    description: "Modern loft in the heart of NYC.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1681678811643-0b69ab3ddae5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRpbWVzJTIwU3F1YXJlJTIwTG9mdHxlbnwwfHwwfHx8MA%3D%3D" },
    price: 6000,
    location: "New York",
    country: "USA",
    category: "Iconic Cities"
  },
  {
    title: "Parisian Apartment",
    description: "Classic apartment near Eiffel Tower.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFyaXNpYW4lMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" },
    price: 5500,
    location: "Paris",
    country: "France",
    category: "Iconic Cities"
  },
  {
    title: "Tokyo Capsule Stay",
    description: "Unique capsule hotel experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1759200262915-ca38e3ecb62a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VG9reW8lMjBDYXBzdWxlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities"
  },
  {
    title: "London Townhouse",
    description: "Elegant townhouse near Hyde Park.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1677343839745-44d686be098d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZG9uJTIwVG93bmhvdXNlfGVufDB8fDB8fHww" },
    price: 5000,
    location: "London",
    country: "UK",
    category: "Iconic Cities"
  },
  {
    title: "Dubai Marina Penthouse",
    description: "Luxury penthouse with skyline views.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1754211604014-eb5c139e0c52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHViYWklMjBNYXJpbmElMjBQZW50aG91c2V8ZW58MHx8MHx8fDA%3D" },
    price: 7000,
    location: "Dubai",
    country: "UAE",
    category: "Iconic Cities"
  },

  // 🏔️ Mountains
  {
    title: "Himalayan Cabin",
    description: "Rustic cabin with snow-capped views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1758707686485-3e5d7246dcce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGltYWxheWFuJTIwQ2FiaW58ZW58MHx8MHx8fDA%3D" },
    price: 2500,
    location: "Manali",
    country: "India",
    category: "Mountains"
  },
  {
    title: "Swiss Chalet",
    description: "Traditional chalet in the Alps.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1689805586474-e59c51f38254?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dpc3MlMjBDaGFsZXR8ZW58MHx8MHx8fDA%3D" },
    price: 8000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains"
  },
  {
    title: "Rocky Mountain Lodge",
    description: "Cozy lodge in Colorado Rockies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1597256817041-0c75c0633658?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9ja3klMjBNb3VudGFpbiUyMExvZGdlfGVufDB8fDB8fHww" },
    price: 4000,
    location: "Colorado",
    country: "USA",
    category: "Mountains"
  },
  {
    title: "Kashmir Cottage",
    description: "Peaceful cottage in lush valleys.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1700570036323-b4ceb7137f16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S2FzaG1pciUyMENvdHRhZ2V8ZW58MHx8MHx8fDA%3D" },
    price: 3000,
    location: "Srinagar",
    country: "India",
    category: "Mountains"
  },
  {
    title: "Andes Retreat",
    description: "Eco lodge in the Andes mountains.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1687995672262-1ed45d6ed3d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5kZXMlMjBSZXRyZWF0fGVufDB8fDB8fHww" },
    price: 3500,
    location: "Peru",
    country: "South America",
    category: "Mountains"
  },

  // 🏰 Castles
  {
    title: "Medieval Castle Stay",
    description: "Live like royalty in a medieval castle.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560451686-c0959d7139c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaWV2YWwlMjBDYXN0bGUlMjBTdGF5fGVufDB8fDB8fHww" },
    price: 10000,
    location: "Edinburgh",
    country: "Scotland",
    category: "Castles"
  },
  {
    title: "Irish Castle Retreat",
    description: "Historic castle with lush gardens.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1696882297380-7bf2f8144e1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXJpc2glMjBDYXN0bGUlMjBSZXRyZWF0fGVufDB8fDB8fHww" },
    price: 9000,
    location: "Dublin",
    country: "Ireland",
    category: "Castles"
  },
  {
    title: "French Chateau",
    description: "Elegant chateau in Loire Valley.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1694475499611-1f42774574ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlbmNoJTIwQ2hhdGVhdXxlbnwwfHwwfHx8MA%3D%3D" },
    price: 12000,
    location: "Loire",
    country: "France",
    category: "Castles"
  },
  {
    title: "German Fortress",
    description: "Stay in a preserved fortress.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1656907489759-635168e0e1ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2VybWFuJTIwRm9ydHJlc3N8ZW58MHx8MHx8fDA%3D" },
    price: 8000,
    location: "Bavaria",
    country: "Germany",
    category: "Castles"
  },
  {
    title: "Rajput Palace",
    description: "Royal palace experience in Rajasthan.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1691031429594-83d6103ec104?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFqcHV0JTIwUGFsYWNlfGVufDB8fDB8fHww" },
    price: 7000,
    location: "Udaipur",
    country: "India",
    category: "Castles"
  },

  // 🌊 Amazing Pools
  {
    title: "Infinity Pool Villa",
    description: "Villa with infinity pool overlooking ocean.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1543489822-c49534f3271f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5maW5pdHklMjBQb29sJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D" },
    price: 6000,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools"
  },
  {
    title: "Rooftop Pool Apartment",
    description: "Apartment with rooftop pool access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1594904578869-c011783103c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9vZnRvcCUyMFBvb2wlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" },
    price: 4000,
    location: "Singapore",
    country: "Singapore",
    category: "Amazing Pools"
  },
  {
    title: "Private Pool Cottage",
    description: "Cottage with secluded private pool.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1686782503408-05010b50f5e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJpdmF0ZSUyMFBvb2wlMjBDb3R0YWdlfGVufDB8fDB8fHww" },
    price: 3500,
    location: "Kerala",
    country: "India",
    category: "Amazing Pools"
  },
  {
    title: "Resort Lagoon Pool",
    description: "Stay at resort with lagoon-style pool.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzb3J0JTIwTGFnb29uJTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D" },
    price: 5000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing Pools"
  },
  {
    title: "Mountain Pool Retreat",
    description: "Pool retreat in mountain valley.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1723823037282-c004e4b1a194?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW91bnRhaW4lMjBQb29sJTIwUmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D" },
    price: 4500,
    location: "Nepal",
    country: "Nepal",
    category: "Amazing Pools"
  },

  // ⛺ Camping
{
  title: "Forest Tent Stay",
  description: "Stay in luxury tents amidst dense forest.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1682390303852-339e1a46ea2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9yZXN0JTIwVGVudCUyMFN0YXl8ZW58MHx8MHx8fDA%3D" },
  price: 1200,
  location: "Jim Corbett",
  country: "India",
  category: "Camping"
},
{
  title: "Desert Camping",
  description: "Experience starry nights in desert tents.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1769868023374-e256aa384e3c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzZXJ0JTIwQ2FtcGluZyUyQyUyMGluZGlhfGVufDB8fDB8fHww" },
  price: 1500,
  location: "Jaisalmer",
  country: "India",
  category: "Camping"
},
{
  title: "Mountain Camp",
  description: "Adventure camping in Himalayan foothills.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1572847981662-815cb936ef71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW91bnRhaW4lMjBDYW1wJTJDJTIwcmlzaGlrZXNofGVufDB8fDB8fHww" },
  price: 1800,
  location: "Rishikesh",
  country: "India",
  category: "Camping"
},
{
  title: "Lakeside Camp",
  description: "Tent stay beside serene lake.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1733266894035-75829607c97f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyTGFrZXNpZGUlMjBDYW1wJTIyJTJDJTIwbmFuaXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
  price: 1000,
  location: "Nainital",
  country: "India",
  category: "Camping"
},
{
  title: "Wildlife Safari Camp",
  description: "Stay close to nature with safari tours.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1719290545460-652d5074cf42?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lsZGxpZmUlMjBTYWZhcmklMjBDYW1wJTJDJTIwR2lyJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww" },
  price: 2000,
  location: "Gir National Park",
  country: "India",
  category: "Camping"
},

// 🌾 Farms
{
  title: "Organic Farm Stay",
  description: "Relax at an organic farm with fresh produce.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1646201272470-c5f5ac43d6a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T3JnYW5pYyUyMEZhcm0lMjBTdGF5JTJDJTIwcHVuamFifGVufDB8fDB8fHww" },
  price: 2500,
  location: "Punjab",
  country: "India",
  category: "Farms"
},
{
  title: "Mango Orchard Stay",
  description: "Stay in cottages surrounded by mango trees.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1558261515-72bff9896df1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFuZ28lMjBPcmNoYXJkJTIwU3RheSUyQ2luZGlhfGVufDB8fDB8fHww" },
  price: 1800,
  location: "Lucknow",
  country: "India",
  category: "Farms"
},
{
  title: "Coffee Plantation Retreat",
  description: "Experience life in a coffee estate.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1666976503799-4ef00906ab2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENvZmZlZSUyMFBsYW50YXRpb24lMjBSZXRyZWF0fGVufDB8fDB8fHww" },
  price: 3000,
  location: "Coorg",
  country: "India",
  category: "Farms"
},
{
  title: "Rice Field Homestay",
  description: "Traditional homestay near rice paddies.",
  image: { filename: "listingimage", url: "https://media.istockphoto.com/id/1412376991/photo/visiting-multiracial-family-learning-and-helping-japanese-farmer-plant-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qu-D2seTJJjxmN9zyRdHVktbgpaijK4TW0dYt5cgOLk=" },
  price: 1500,
  location: "Kerala",
  country: "India",
  category: "Farms"
},
{
  title: "Dairy Farm Stay",
  description: "Learn dairy farming with hands-on experience.",
  image: { filename: "listingimage", url: "https://media.istockphoto.com/id/2172286731/photo/dairy-cows-farm.jpg?s=612x612&w=0&k=20&c=E1BBUoUBhnpx8tc_zzGaHXjVxipAFuT2ItXmQi8AgCA=" },
  price: 2000,
  location: "Haryana",
  country: "India",
  category: "Farms"
},

// ❄️ Arctic
{
  title: "Igloo Stay",
  description: "Unique igloo experience in snowy landscapes.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587500919989-e6954bd42c95?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SWdsb28lMjBTdGF5fGVufDB8fDB8fHww" },
  price: 8000,
  location: "Lapland",
  country: "Finland",
  category: "Arctic"
},
{
  title: "Glass Dome Arctic",
  description: "Aurora Borealis view from glass domes.",
  image: { filename: "listingimage", url: "https://media.istockphoto.com/id/823451760/photo/reykjavik-city-view-of-hallgrimskirkja-iceland.webp?a=1&b=1&s=612x612&w=0&k=20&c=_TsYCVm7rtei6HxMQuh4Dar_dpROKut6m05MQqo1B50=" },
  price: 10000,
  location: "Norway",
  country: "Norway",
  category: "Arctic"
},
{
  title: "Snow Cabin",
  description: "Cozy cabin surrounded by snow.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1734549547989-805c0885dd9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U25vdyUyMENhYmlufGVufDB8fDB8fHww" },
  price: 7000,
  location: "Alaska",
  country: "USA",
  category: "Arctic"
},
{
  title: "Polar Lodge",
  description: "Stay near polar wildlife.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1773001356676-15493185b0be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyUG9sYXIlMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D" },
  price: 9000,
  location: "Greenland",
  country: "Greenland",
  category: "Arctic"
},
{
  title: "Ice Hotel",
  description: "Hotel built entirely of ice.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1583528187857-27f818f12caf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWNlJTIwSG90ZWx8ZW58MHx8MHx8fDA%3D" },
  price: 12000,
  location: "Sweden",
  country: "Sweden",
  category: "Arctic"
},

// 🏠 Domes
{
  title: "Eco Dome Stay",
  description: "Sustainable dome living in nature.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1771085026396-98dabb1a9ad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWNvJTIwRG9tZSUyMFN0YXl8ZW58MHx8MHx8fDA%3D" },
  price: 3500,
  location: "Goa",
  country: "India",
  category: "Domes"
},
{
  title: "Luxury Dome Retreat",
  description: "Modern dome with luxury interiors.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1718204438280-484021f08ca1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyTHV4dXJ5JTIwRG9tZSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D" },
  price: 5000,
  location: "Himachal Pradesh",
  country: "India",
  category: "Domes"
},
{
  title: "Desert Dome",
  description: "Unique dome stay in desert.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1762255107395-bcb83548e83f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVzZXJ0JTIwRG9tZXxlbnwwfHwwfHx8MA%3D%3D" },
  price: 4000,
  location: "Rajasthan",
  country: "India",
  category: "Domes"
},
{
  title: "Forest Dome",
  description: "Dome stay amidst dense forest.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1718204438600-e8481c2e5b0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9yZXN0JTIwRG9tZXxlbnwwfHwwfHx8MA%3D%3D" },
  price: 3000,
  location: "Meghalaya",
  country: "India",
  category: "Domes"
},
{
  title: "Beach Dome",
  description: "Dome stay near beachside.",
  image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1767250678134-926615d4c696?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVhY2glMjBEb21lfGVufDB8fDB8fHww" },
  price: 4500,
  location: "Kerala",
  country: "India",
  category: "Domes"
},

// 🚤 Boats
{
  title: "Houseboat Stay",
  description: "Traditional houseboat on backwaters.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG91c2Vib2F0JTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D" },
  price: 3500,
  location: "Alleppey",
  country: "India",
  category: "Boats"
},
{
  title: "Luxury Yacht",
  description: "Private yacht with premium facilities.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwWWFjaHR8ZW58MHx8MHx8fDA%3D" },
  price: 15000,
  location: "Goa",
  country: "India",
  category: "Boats"
},
{
  title: "River Cruise Boat",
  description: "Cruise along scenic rivers.",
  image: { filename: "listingimage", url: "https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=LyCW2PWifLFp9Qeho5Qyl8Psj1E-TP_5OyTIU6vqvcU=" },
  price: 5000,
  location: "Kolkata",
  country: "India",
  category: "Boats"
},
{
  title: "Fishing Boat Stay",
  description: "Stay on traditional fishing boats.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1733306638917-e822483019cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmlzaGluZyUyMEJvYXQlMjBTdGF5fGVufDB8fDB8fHww" },
  price: 2000,
  location: "Tamil Nadu",
  country: "India",
  category: "Boats"
},
{
  title: "Lake Houseboat",
  description: "Houseboat stay on Dal Lake.",
  image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1697729432049-caca66a1dab6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFrZSUyMEhvdXNlYm9hdHxlbnwwfHwwfHx8MA%3D%3D" },
  price: 4000,
  location: "Srinagar",
  country: "India",
  category: "Boats"
}


];

module.exports = { data: sampleListings };
