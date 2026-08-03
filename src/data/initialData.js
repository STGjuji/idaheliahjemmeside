export const initialPortfolio = [
  {
    id: 1,
    title: "Nordisk Gylden Time Bryllup",
    category: "Bryllupper",
    location: "Kronborg Slot, Helsingør",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Leica SL2",
    lens: "50mm f/1.4 Summilux",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 2,
    title: "Vogue Scandinavia Redaktion",
    category: "Moderedaktion",
    location: "Scandinavian Fashion Week",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Hasselblad H6D-100c",
    lens: "80mm f/2.2 HC",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Minimalistisk Arkitektonisk Portræt",
    category: "Portrætter",
    location: "DAC (Dansk Arkitektur Center)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Canon EOS R5",
    lens: "85mm f/1.2 L USM",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "Kähler Design Forårskampagne",
    category: "Erhverv",
    location: "Design Studio",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Hasselblad X2D 100C",
    lens: "55mm f/2.5 XCD",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 5,
    title: "Kystnært Intimt Bryllup",
    category: "Bryllupper",
    location: "Skagen Klitter, Jylland",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    camera: "Leica M11",
    lens: "35mm f/1.4 Summilux",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Monokrom Haute Couture",
    category: "Moderedaktion",
    location: "Det Kongelige Teater",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Leica Monochrom",
    lens: "50mm f/0.95 Noctilux",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 7,
    title: "Kunstneren i Sit Atelier",
    category: "Portrætter",
    location: "Atelier Studio",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    camera: "Canon EOS R5",
    lens: "50mm f/1.2 L USM",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 8,
    title: "Hay House Interiør",
    category: "Erhverv",
    location: "Design Atelier",
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
    serviceType: "Eksklusivt Heldagsbryllup",
    date: "2026-08-15",
    timeSlot: "10:00 - 22:00",
    location: "Kokkedal Slot, Hørsholm",
    priceDKK: 32000,
    status: "Bekræftet",
    notes: "12 timers dækning, inkluderer assisterende fotograf og håndlavet luksusalbum.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-002",
    clientName: "Eurowoman Magasin",
    clientEmail: "editor@eurowoman.dk",
    clientPhone: "+45 33 12 88 00",
    serviceType: "Editorial Modeoptagelse",
    date: "2026-08-20",
    timeSlot: "09:00 - 17:00",
    location: "Studio & Udendørs",
    priceDKK: 18500,
    status: "Bekræftet",
    notes: "Forsideoptagelse + 8-siders redaktionelt opslag.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-003",
    clientName: "Mads & Christina",
    clientEmail: "mads.christina@gmail.com",
    clientPhone: "+45 40 91 22 14",
    serviceType: "Intimt Kystbryllup",
    date: "2026-08-28",
    timeSlot: "14:00 - 19:00",
    location: "Bornholms Klipper, Gudhjem",
    priceDKK: 16000,
    status: "Afventer Forespørgsel",
    notes: "Kunden har forespurgt på portrætter ved klipperne i den gyldne time.",
    paidDeposit: false
  },
  {
    id: "BKG-2026-004",
    clientName: "Ganni Brand Studio",
    clientEmail: "marketing@ganni.com",
    clientPhone: "+45 35 36 37 00",
    serviceType: "Erhvervskampagne",
    date: "2026-09-04",
    timeSlot: "08:00 - 16:00",
    location: "Meatpacking Studio",
    priceDKK: 24000,
    status: "Bekræftet",
    notes: "Efterårskollektion lifestyle lookbook.",
    paidDeposit: true
  },
  {
    id: "BKG-2026-005",
    clientName: "Privat Kalenderblokering",
    clientEmail: "ida@idahelia.dk",
    clientPhone: "+45 20 11 22 33",
    serviceType: "Ferie & Personlig Masterclass",
    date: "2026-09-10",
    timeSlot: "Hele dagen",
    location: "Paris, Frankrig",
    priceDKK: 0,
    status: "Blokeret Dato",
    notes: "Personlig fotomasterclass og rejse.",
    paidDeposit: true
  }
];

export const initialHoursLog = [
  {
    id: "LOG-101",
    date: "2026-08-01",
    projectName: "Freja & Søren Bryllup",
    category: "Før-bryllup Rådgivning",
    hours: 2.5,
    ratePerHourDKK: 1200,
    description: "Lokationsgennemgang på Kokkedal Slot og tidsplanlægning.",
    billable: true
  },
  {
    id: "LOG-102",
    date: "2026-08-02",
    projectName: "Eurowoman Magasin Optagelse",
    category: "Fotografering / Skud",
    hours: 7.0,
    ratePerHourDKK: 1800,
    description: "Heldags modeoptagelse i studie og udendørs lysopsætning.",
    billable: true
  },
  {
    id: "LOG-103",
    date: "2026-08-03",
    projectName: "Eurowoman Magasin Optagelse",
    category: "Farveredigering & Retouchering",
    hours: 4.5,
    ratePerHourDKK: 950,
    description: "Udvælgelse af 800 RAW-filer, hudretouchering af top 15 forsidebilleder.",
    billable: true
  },
  {
    id: "LOG-104",
    date: "2026-07-29",
    projectName: "Kähler Design Forår",
    category: "Kommerciel Retouchering",
    hours: 6.0,
    ratePerHourDKK: 1100,
    description: "High-end produktdetalje-retouchering og levering i TIFF.",
    billable: true
  },
  {
    id: "LOG-105",
    date: "2026-07-27",
    projectName: "Studieadministration & Hjemmeside",
    category: "Administration",
    hours: 3.0,
    ratePerHourDKK: 0,
    description: "Opdatering af www.idahelia.dk kalender og galleriopdateringer.",
    billable: false
  }
];

export const topPhotographersInspiration = [
  {
    id: 1,
    name: "Levon Biss & Cedric D. Vincent",
    specialty: "High-End Redaktionel & Kunstnerisk Fotografering",
    location: "Storbritannien / Skandinavien",
    keyStrengths: [
      "Projektcentreret visuel fortælling frem for tilfældige billedsamlinger.",
      "Ultra-ren hvid ramme og luftig opsætning, der giver fotografiet fuld opmærksomhed.",
      "Mikro-animationer ved hover med øjeblikkelige kameradata (EXIF) og projektkontekst."
    ],
    howIdaAppliesThis: "Idas galleri fremhæver historiedrevne projektkort med klare kameradata (EXIF) og skandinavisk luftig elegance."
  },
  {
    id: 2,
    name: "Sander Vill",
    specialty: "Cinematisk & Følelsesladet Bryllupsdokumentar",
    location: "Skandinavien / Europa",
    keyStrengths: [
      "Varm, intim nordisk lyspalet, der skaber øjeblikkelig hygge og stemning.",
      "Direkte og gennemskuelige pakkestrukturer samt smidig bookingforespørgsel.",
      "Fokus på autentiske, uopstillede øjeblikke kombineret med magasin-kvalitet."
    ],
    howIdaAppliesThis: "Integreret prisberegner i DKK, varme champagneguld detaljer og direkte ubesværet booking."
  },
  {
    id: 3,
    name: "The Wed Curated Showcase",
    specialty: "Internationale Luksusmode & Bryllupsmagasiner",
    location: "Global Kurateret Benchmark",
    keyStrengths: [
      "Redaktionel typografi med elegant Playfair Display serif og ren sans-serif.",
      "Højtydende gallerigitter med hurtig indlæsning.",
      "Udtalelser fra klienter, der opbygger øjeblikkelig tillid hos eksklusive kunder."
    ],
    howIdaAppliesThis: "Playfair Display typografi, stilfulde glaspaneler, klientanmeldelser og øjeblikkelig admin-styring."
  }
];
