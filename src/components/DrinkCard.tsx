'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import type { Drink } from "@/data/menu";
import { formatPrice } from "@/data/menu";

const ACCENT_CLASSES: Record<Drink["accent"], { text: string; border: string; chip: string; svg?: string }> = {
  pink: {
    text: "neon-text",
    border: "border-neon-pink/20",
    chip: "bg-neon-pink/20 text-neon-pink",
  },
  green: {
    text: "neon-text-green",
    border: "border-neon-green/20",
    chip: "bg-neon-green/20 text-neon-green",
  },
  ice: {
    text: "neon-text-ice",
    border: "border-neon-ice/20",
    chip: "bg-neon-ice/20 text-neon-ice",
  },
};

export type DrinkCardProps = {
  drink: Drink;
  index: number;
};

export function DrinkCard({ drink, index }: DrinkCardProps) {
  const a = ACCENT_CLASSES[drink.accent];
  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4), ease: "easeOut" }}
      className={`glassmorphism overflow-hidden p-6 hover:scale-[1.02] transition-transform duration-300 ${a.border}`}
      aria-labelledby={`drink-${drink.id}-title`}
    >
      {/* next/image serves AVIF/WebP, lazy-loads (priority=false by default),
          and BLITZ-blur on first paint using the image's blur hash. */}
      <div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden">
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          // The first card is above the fold on desktop — priority gives it a
          // preconnect and skips lazy-loading so it doesn't wait on the IntersectionObserver.
          priority={index === 0}
        />
      </div>

      <h3
        id={`drink-${drink.id}-title`}
        className={`text-xl font-bold mb-3 flex items-center gap-2 ${a.text}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3"
          />
        </svg>
        {drink.name}
      </h3>
      <p className="text-gray-300 mb-4">{drink.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{formatPrice(drink.price)}</span>
        <span className={`px-3 py-1 text-xs font-semibold rounded ${a.chip}`}>
          Alcohol incluido
        </span>
      </div>
    </motion.article>
  );
}

export default DrinkCard;
