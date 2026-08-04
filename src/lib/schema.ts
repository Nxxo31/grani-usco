/**
 * Schema.org structured data for Grani USCO.
 *
 * Centralizes JSON-LD so it is declared once in the root layout and consumed
 * by search engines (Google rich results) without coupling layout.tsx to the
 * business data. Keep this file as the single source of truth for NAP
 * (Name, Address, Phone) data — other components should read from here.
 */

export const BUSINESS = {
  name: "Grani USCO",
  legalName: "Grani USCO",
  description:
    "Granizados artesanales con alcohol en Neiva, Colombia. Sabores únicos, calidad premium y la mejor experiencia para tus eventos.",
  url: "https://grani-usco.vercel.app",
  logo: "https://grani-usco.vercel.app/og-image.png",
  image: "https://grani-usco.vercel.app/og-image.png",
  telephone: "+573123456789",
  email: "info@graniusco.com",
  priceRange: "$$",
  currenciesAccepted: "COP",
  paymentAccepted: "Cash, Credit Card",
  address: {
    streetAddress: "Calle 12 #4-30, Barrio La Libertad",
    addressLocality: "Neiva",
    addressRegion: "Huila",
    postalCode: "410001",
    addressCountry: "CO",
  },
  geo: {
    latitude: 2.9273,
    longitude: -75.2889,
  },
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "16:00",
      closes: "02:00",
    },
  ],
  sameAs: [] as string[],
  servesCuisine: ["Cocktail", "Frozen Drinks", "Latin American"],
} as const;

export type LocalBusinessSchema = {
  "@context": "https://schema.org";
  "@type": "Restaurant" | "BarOrPub" | "FoodEstablishment";
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: readonly string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
  servesCuisine: string[];
  menu: string;
  hasMenu: {
    "@type": "Menu";
    hasMenuSection: Array<{
      "@type": "MenuSection";
      name: string;
      hasMenuItem: Array<{
        "@type": "MenuItem";
        name: string;
        description: string;
        offers: {
          "@type": "Offer";
          price: string;
          priceCurrency: "COP";
        };
      }>;
    }>;
  };
};

const MENU_ITEMS = [
  {
    name: "Tropical Bliss",
    description: "Piña, coco, ron blanco y toque de lima",
    price: "12000",
  },
  {
    name: "Green Fury",
    description: "Matcha, kiwi, vodka y miel de agave",
    price: "13000",
  },
  {
    name: "Ice Dragon",
    description: "Maracuyá, guaraná, tequila blanco y chile tajín",
    price: "11000",
  },
  {
    name: "Strawberry Fields",
    description: "Fresa, leche condensada, ron oscuro y chocolate blanco",
    price: "12500",
  },
  {
    name: "Mango Tango",
    description: "Mango, chile, tamarindo y mezcal",
    price: "13500",
  },
  {
    name: "Blue Lagoon",
    description: "Curacao azul, piña, ron blanco y crema de coco",
    price: "12000",
  },
];

export const localBusinessSchema: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: BUSINESS.url,
  logo: BUSINESS.logo,
  image: BUSINESS.image,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  currenciesAccepted: BUSINESS.currenciesAccepted,
  paymentAccepted: BUSINESS.paymentAccepted,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  openingHoursSpecification: BUSINESS.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [...spec.dayOfWeek],
    opens: spec.opens,
    closes: spec.closes,
  })),
  sameAs: BUSINESS.sameAs,
  servesCuisine: [...BUSINESS.servesCuisine],
  menu: `${BUSINESS.url}/#menu`,
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Granizados con Alcohol",
        hasMenuItem: MENU_ITEMS.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "COP",
          },
        })),
      },
    ],
  },
};
