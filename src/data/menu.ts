/**
 * Static menu data for Grani USCO.
 *
 * The landing page only has 6 fixed drinks (PROJECT.md limitation #1), so this
 * module is the source of truth until Fase 2 introduces a CMS. Keep it pure
 * (no DOM, no client-only APIs) so it can be imported from both Server and
 * Client Components.
 */

import tropicalBliss from "@/assets/drinks/tropical-bliss.png";
import greenFury from "@/assets/drinks/green-fury.png";
import iceDragon from "@/assets/drinks/ice-dragon.png";
import strawberry from "@/assets/drinks/strawberry.png";
import mangoTango from "@/assets/drinks/mango-tango.png";
import blueLagoon from "@/assets/drinks/blue-lagoon.png";

export type Drink = {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Symbolic Tailwind accent — used for neon text + border accents on cards. */
  accent: "pink" | "green" | "ice";
  /** Static import from `@/assets/drinks/...` so next/image emits AVIF/WebP
   *  variants with an automatic blur placeholder (no blurDataURL hand-tuning). */
  image: typeof tropicalBliss;
};

export const MENU: readonly Drink[] = [
  {
    id: "tropical-bliss",
    name: "Tropical Bliss",
    description: "Piña, coco, ron blanco y toque de lima",
    price: 12000,
    accent: "pink",
    image: tropicalBliss,
  },
  {
    id: "green-fury",
    name: "Green Fury",
    description: "Matcha, kiwi, vodka y miel de agave",
    price: 13000,
    accent: "green",
    image: greenFury,
  },
  {
    id: "ice-dragon",
    name: "Ice Dragon",
    description: "Maracuyá, guaraná, tequila blanco y chile tajín",
    price: 11000,
    accent: "ice",
    image: iceDragon,
  },
  {
    id: "strawberry-fields",
    name: "Strawberry Fields",
    description: "Fresa, leche condensada, ron oscuro y chocolate blanco",
    price: 12500,
    accent: "pink",
    image: strawberry,
  },
  {
    id: "mango-tango",
    name: "Mango Tango",
    description: "Mango, chile, tamarindo y mezcal",
    price: 13500,
    accent: "green",
    image: mangoTango,
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    description: "Curacao azul, piña, ron blanco y crema de coco",
    price: 12000,
    accent: "ice",
    image: blueLagoon,
  },
] as const;

const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
  return COP.format(value);
}
