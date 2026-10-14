export const pricingIntro = {
  label: "Prisliste · 2026",
  title: "Smukke, ægte øjeblikke – foreviget med nærvær, ro og kærlighed",
  subtitle:
    "Hos mig handler fotografering ikke om at stå perfekt foran kameraet. Det handler om at skabe billeder, der føles som jer – naturlige, varme og fulde af de små øjeblikke, I gerne vil huske."
};

export const deliveryNote =
  "Alle fotograferinger leveres i et online galleri med færdigredigerede billeder i høj opløsning.";

export const travelNote =
  "Kørsel: De første 15 km fra Slagelse er inkluderet. Herefter 4 kr./km.";

export const extraHourPrice = 1000;

export const pricingCategories = [
  {
    id: "graviditet",
    emoji: "🤰",
    name: "Graviditet",
    packages: [
      {
        id: "gravid",
        name: "Gravid",
        price: 1500,
        short: "45–60 min · Udendørs eller efter aftale · 10 billeder",
        includes: [
          "45–60 minutters fotografering",
          "Udendørs eller efter aftale",
          "Mulighed for at benytte graviditetskjole",
          "Partner og børn er velkomne",
          "10 færdigredigerede billeder",
          "Online galleri"
        ]
      },
      {
        id: "gravid-premium",
        name: "Gravid Premium",
        price: 2200,
        short: "Op til 1,5 time · Flere looks · Alle bedste billeder",
        includes: [
          "Op til 1,5 times fotografering",
          "Flere outfits/looks",
          "Graviditetskjole(r) efter aftale",
          "Billeder alene + med partner/familie",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "familie",
    emoji: "👨‍👩‍👧",
    name: "Familie & Børn",
    packages: [
      {
        id: "familie",
        name: "Familie",
        price: 1500,
        short: "Op til 60 min · Op til 6 personer · 10 billeder",
        includes: [
          "Op til 60 minutters fotografering",
          "Op til 6 personer",
          "Udendørs fotografering",
          "Familie-, søskende- og individuelle billeder",
          "10 færdigredigerede billeder",
          "Online galleri"
        ]
      },
      {
        id: "familie-premium",
        name: "Familie Premium",
        price: 2200,
        short: "Op til 1,5 time · Flere lokationer · Outfit-skift",
        includes: [
          "Op til 1,5 times fotografering",
          "Flere opstillinger og lokationer",
          "Familie-, søskende- og portrætbilleder",
          "Mulighed for outfit-skift",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "mini",
    emoji: "🧸",
    name: "Mini Børnesession",
    packages: [
      {
        id: "mini",
        name: "Mini",
        price: 699,
        short: "20–30 min · 1–2 børn · 5 billeder · Flere billeder kan tilkøbes",
        includes: [
          "20–30 minutters fotografering",
          "1–2 børn",
          "5 færdigredigerede billeder",
          "Online galleri",
          "Perfekt til: Fødselsdag · Årstider · Jul · Milepæle · Søskendebilleder"
        ]
      }
    ]
  },
  {
    id: "bryllup",
    emoji: "💍",
    name: "Bryllup",
    packages: [
      {
        id: "vielse",
        name: "Vielse",
        price: 2500,
        short: "Før, under og efter vielsen · Alle bedste billeder",
        includes: [
          "Fotografering før, under og efter vielsen",
          "Stemningsbilleder fra kirken",
          "Gratulationer",
          "Familie- og gruppebilleder",
          "Brudeparbilleder",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      },
      {
        id: "vielse-brudepar",
        name: "Vielse + Brudepar",
        price: 3500,
        short: "Ca. 2 timers fotografering · Naturlige og romantiske portrætter",
        includes: [
          "Ca. 2 timers fotografering",
          "Vielsen",
          "Gratulationer",
          "Familie- og gruppebilleder",
          "Brudeparbilleder",
          "Naturlige og romantiske portrætter",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      },
      {
        id: "vielse-reception",
        name: "Vielse → Reception",
        price: 5000,
        short: "Op til 4 timer · Reception, kage & stemning",
        includes: [
          "Op til 4 timers fotografering",
          "Vielse",
          "Gratulationer",
          "Familie- og gruppebilleder",
          "Brudeparbilleder",
          "Reception",
          "Bryllupskage",
          "Stemningsbilleder",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      },
      {
        id: "vielse-brudevals",
        name: "Vielse → Brudevals",
        price: 8500,
        short: "Op til 7 timer · Taler, indslag & brudevals",
        includes: [
          "Op til 7 timers fotografering",
          "Vielse",
          "Gratulationer",
          "Familie- og gruppebilleder",
          "Brudeparbilleder",
          "Reception",
          "Bryllupskage",
          "Taler og indslag",
          "Stemningsbilleder",
          "Brudevals",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "barnedaab",
    emoji: "👶",
    name: "Barnedåb",
    packages: [
      {
        id: "barnedaab",
        name: "Barnedåb",
        price: 3500,
        short: "Op til 3 timer · Kirke, familie & dåbsbarnet",
        includes: [
          "Op til 3 timers fotografering",
          "Ankomst",
          "Ceremonien i kirken",
          "Gratulationer",
          "Familie- og gruppebilleder",
          "Portrætter af dåbsbarnet",
          "Stemningsbilleder fra dagen",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "konfirmation",
    emoji: "🎓",
    name: "Konfirmation",
    packages: [
      {
        id: "konfirmation",
        name: "Konfirmation",
        price: 4500,
        short: "Full dag · Kirke, portrætter & reception",
        includes: [
          "Fotografering ved kirken",
          "Portrætter af konfirmanden",
          "Familie- og gruppebilleder",
          "Gratulationer",
          "Stemningsbilleder",
          "Fotografering ved reception",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      },
      {
        id: "konfirmandportraetter",
        name: "Konfirmandportrætter",
        price: 1500,
        short: "45–60 min · Valgfri lokation · 10 billeder",
        includes: [
          "45–60 minutters fotografering",
          "Valgfri lokation",
          "10 færdigredigerede billeder",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "modregruppe",
    emoji: "👩‍👧‍👦",
    name: "Mødregruppe",
    packages: [
      {
        id: "modregruppe",
        name: "Mødregruppe",
        price: 2000,
        short: "Op til 6 mødre + babyer · 5 billeder pr. familie",
        includes: [
          "Op til 6 mødre + babyer",
          "1–1,5 times fotografering",
          "Fællesbilleder",
          "Mor + baby-billeder",
          "Babybilleder",
          "5 færdigredigerede billeder pr. familie",
          "Online galleri"
        ]
      },
      {
        id: "modregruppe-premium",
        name: "Mødregruppe Premium",
        price: 3000,
        short: "Op til 2 timer · Babyportrætter · Alle bedste billeder",
        includes: [
          "Op til 6 mødre + babyer",
          "Op til 2 timers fotografering",
          "Fællesbilleder",
          "Individuelle mor + baby-billeder",
          "Babyportrætter",
          "Alle de bedste billeder færdigredigeret",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "par",
    emoji: "🤍",
    name: "Parfotografering",
    packages: [
      {
        id: "par",
        name: "Par",
        price: 1200,
        short: "45–60 min · Naturlige og romantiske billeder · 10 billeder",
        includes: [
          "45–60 minutters fotografering",
          "Udendørs eller efter aftale",
          "Naturlige og romantiske billeder",
          "10 færdigredigerede billeder",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "nyfodt",
    emoji: "👶",
    name: "Nyfødt",
    packages: [
      {
        id: "newborn",
        name: "Newborn",
        price: 2000,
        short: "1–2 timer · Baby + forældre · 15 billeder",
        includes: [
          "1–2 timers fotografering",
          "Baby + forældre",
          "Søskendebilleder",
          "Naturlige familiebilleder",
          "15 færdigredigerede billeder",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "kaeledyr",
    emoji: "🐾",
    name: "Kæledyr",
    packages: [
      {
        id: "kaeledyr",
        name: "Kæledyr",
        price: 1200,
        short: "45–60 min · Udendørs · 10 billeder",
        includes: [
          "45–60 minutters fotografering",
          "Udendørs",
          "Portrætter + naturlige billeder",
          "10 færdigredigerede billeder",
          "Online galleri"
        ]
      }
    ]
  },
  {
    id: "portraet",
    emoji: "📸",
    name: "Portræt",
    packages: [
      {
        id: "portraet",
        name: "Portræt",
        price: 1000,
        short: "30–45 min · Udendørs eller efter aftale · 8 billeder",
        includes: [
          "30–45 minutters fotografering",
          "Udendørs eller efter aftale",
          "8 færdigredigerede billeder",
          "Online galleri"
        ]
      }
    ]
  }
];

export const addonOptions = [
  {
    id: "singlePhoto",
    label: "Ekstra digitalt billede",
    description: "Vælg dit yndlingsbillede oveni pakken",
    price: 150
  },
  {
    id: "fivePhotos",
    label: "5 ekstra billeder",
    description: "Få flere af sessionens bedste billeder",
    price: 500
  },
  {
    id: "allPhotos",
    label: "Alle billeder fra sessionen",
    description: "Samtlige færdigredigerede billeder fra dagen",
    price: 800
  }
];

export const allPackageNames = pricingCategories.flatMap((cat) =>
  cat.packages.map((pkg) => pkg.name)
);