export const initialPortfolio = [
  {
    id: 1,
    title: "Nordic Golden Hour Nuptials",
    category: "Weddings",
    location: "Kronborg Castle, Helsingør",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Leica SL2",
    lens: "50mm f/1.4 Summilux",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 2,
    title: "Vogue Scandinavia Editorial",
    category: "Editorial",
    location: "Copenhagen Fashion Week",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Hasselblad H6D-100c",
    lens: "80mm f/2.2 HC",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Minimalist Architectural Portrait",
    category: "Portraits",
    location: "DAC (Danish Architecture Center), Copenhagen",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Canon EOS R5",
    lens: "85mm f/1.2 L USM",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "Kähler Design Spring Campaign",
    category: "Commercial",
    location: "Frederiksberg Studio",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Hasselblad X2D 100C",
    lens: "55mm f/2.5 XCD",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 5,
    title: "Seaside Intimate Elopement",
    category: "Weddings",
    location: "Skagen Dunes, Jutland",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Leica M11",
    lens: "35mm f/1.4 Summilux",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Monochrome Haute Couture",
    category: "Editorial",
    location: "Royal Danish Theatre, Copenhagen",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Leica Monochrom",
    lens: "50mm f/0.95 Noctilux",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 7,
    title: "The Artist in Her Element",
    category: "Portraits",
    location: "Nørrebro Atelier",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Canon EOS R5",
    lens: "50mm f/1.2 L USM",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 8,
    title: "Hay House Copenhagen Interior",
    category: "Commercial",
    location: "Østergade, Copenhagen",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Fujifilm GFX 100 II",
    lens: "23mm f/4 GF",
    aspectRatio: "aspect-[16/10]"
  }
];

export const initialBookings = [
  {
    id: "BKG-2026-001",
    clientName: "Freja & Søren Møller",
    clientEmail: "freja.moller@example.dk",
    clientPhone: "+45 28 49 10 32",
    serviceType: "Luxury Wedding Full-Day",
    date: "2026-08-15",
    timeSlot: "10:00 - 22:00",
    location: "Kokkedal Castle Copenhagen, Hørsholm",
    priceDKK: 32000,
    status: "Confirmed",
    notes: "12 hours coverage, includes second shooter and leatherbound heirloom album.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-002",
    clientName: "Eurowoman Magazine",
    clientEmail: "editor@eurowoman.dk",
    clientPhone: "+45 33 12 88 00",
    serviceType: "Editorial Fashion Shoot",
    date: "2026-08-20",
    timeSlot: "09:00 - 17:00",
    location: "Nyhavn Studio & Locations",
    priceDKK: 18500,
    status: "Confirmed",
    notes: "Cover shoot + 8-page editorial spread.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-003",
    clientName: "Mads & Christina",
    clientEmail: "mads.christina@gmail.com",
    clientPhone: "+45 40 91 22 14",
    serviceType: "Intimate Elopement",
    date: "2026-08-28",
    timeSlot: "14:00 - 19:00",
    location: "Bornholm Cliffs, Gudhjem",
    priceDKK: 16000,
    status: "Pending Inquiry",
    notes: "Client requested golden hour cliffside portraits.",
    paidDeposit: false
  },
  {
    id: "BKG-2026-004",
    clientName: "Ganni Brand Studio",
    clientEmail: "marketing@ganni.com",
    clientPhone: "+45 35 36 37 00",
    serviceType: "Commercial Campaign",
    date: "2026-09-04",
    timeSlot: "08:00 - 16:00",
    location: "Meatpacking District (Kødbyen)",
    priceDKK: 24000,
    status: "Confirmed",
    notes: "Autumn collection lifestyle lookbook.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-005",
    clientName: "Private Studio Block",
    clientEmail: "ida@idahelia.dk",
    clientPhone: "+45 20 11 22 33",
    serviceType: "Vacation & Personal Masterclass",
    date: "2026-09-10",
    timeSlot: "All Day",
    location: "Paris, France",
    priceDKK: 0,
    status: "Blocked Date",
    notes: "Personal photography masterclass trip.",
    paidDeposit: true
  }
];

export const initialHoursLog = [
  {
    id: "LOG-101",
    date: "2026-08-01",
    projectName: "Freja & Søren Wedding",
    category: "Pre-wedding Consultation",
    hours: 2.5,
    ratePerHourDKK: 1200,
    description: "Venue walkthrough at Kokkedal Castle and timeline planning.",
    billable: true
  },
  {
    id: "LOG-102",
    date: "2026-08-02",
    projectName: "Eurowoman Magazine Shoot",
    category: "Shooting",
    hours: 7.0,
    ratePerHourDKK: 1800,
    description: "Full day editorial studio and outdoor lighting setup.",
    billable: true
  },
  {
    id: "LOG-103",
    date: "2026-08-03",
    projectName: "Eurowoman Magazine Shoot",
    category: "Color Grading & Retouching",
    hours: 4.5,
    ratePerHourDKK: 950,
    description: "Culling 800 RAW images, skin retouching top 15 cover selections.",
    billable: true
  },
  {
    id: "LOG-104",
    date: "2026-07-29",
    projectName: "Kähler Design Spring",
    category: "Commercial Retouching",
    hours: 6.0,
    ratePerHourDKK: 1100,
    description: "High-end product detail retouching and TIFF delivery.",
    billable: true
  },
  {
    id: "LOG-105",
    date: "2026-07-27",
    projectName: "Studio Administration & Website",
    category: "Administrative",
    hours: 3.0,
    ratePerHourDKK: 0,
    description: "Updating www.idahelia.dk calendar and gallery updates.",
    billable: false
  }
];

export const topPhotographersInspiration = [
  {
    id: 1,
    name: "Levon Biss & Cedric D. Vincent",
    specialty: "High-End Editorial & Macro Fine Art",
    location: "UK / Copenhagen",
    keyStrengths: [
      "Project-centric narrative storytelling rather than loose image dumps.",
      "Ultra-clean white frame & wide padding allowing photography to command full attention.",
      "Micro-animations on hover with instant EXIF and project context."
    ],
    howIdaAppliesThis: "Ida's gallery highlights story-based project cards with clean camera EXIF overlays and expansive Scandinavian whitespace."
  },
  {
    id: 2,
    name: "Sander Vill",
    specialty: "Cinematic & Emotional Wedding Documentation",
    location: "Scandinavia / Europe",
    keyStrengths: [
      "Warm, intimate Northern light palette that creates instant emotional warmth ('Hygge').",
      "Direct transparent package breakdowns and seamless booking inquiry workflow.",
      "Emphasis on genuine candid moments blended with magazine-grade composition."
    ],
    howIdaAppliesThis: "Integrated live package pricing calculator in DKK, warm champagne gold accents, and friction-free direct booking."
  },
  {
    id: 3,
    name: "The Wed Curated Showcase",
    specialty: "Luxury International Fashion & Wedding Directory",
    location: "Global Vetted Benchmark",
    keyStrengths: [
      "Editorial magazine typography using high-contrast serif and sleek sans-serif.",
      "High performance lazy-loaded masonry visual grid.",
      "Client testimonial proofing cards that build instant high-ticket trust."
    ],
    howIdaAppliesThis: "Playfair Display & Plus Jakarta Sans styling, glassmorphic headers, client testimonial carousels, and instant admin management."
  }
];
