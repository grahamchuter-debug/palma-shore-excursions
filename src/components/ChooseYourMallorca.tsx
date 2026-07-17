"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "historic-palma",
    emoji: "⛪",
    title: "Historic Palma",
    tagline:
      "Explore Palma Cathedral, the old town, courtyards, markets, waterfront and historic streets.",
    highlights: [
      "Cathedral and Parc de la Mar setting",
      "Old-town lanes and courtyards",
      "Markets and waterfront promenades",
      "Minimal travel time from the harbour",
      "Ideal for shorter port calls",
    ],
    cta: "Explore historic Palma",
    href: "/shore-excursions/palma-old-town-cathedral",
    imageKey: "historic",
    wide: true,
  },
  {
    slug: "soller-valldemossa",
    emoji: "⛰️",
    title: "Sóller and Valldemossa",
    tagline:
      "Discover Mallorca’s celebrated mountain villages, citrus valley and dramatic Tramuntana scenery.",
    highlights: [
      "Valldemossa hillside character",
      "Sóller citrus valley",
      "Tramuntana mountain scenery",
      "Our Editor’s Choice for first-time visitors",
      "Practical full-day timeframe",
    ],
    cta: "Explore Sóller and Valldemossa",
    href: "/shore-excursions/soller-valldemossa",
    imageKey: "soller",
    wide: true,
  },
  {
    slug: "railways",
    emoji: "🚂",
    title: "Railways and Island Scenery",
    tagline:
      "Experience the famous Sóller train, historic tram, mountain landscapes and scenic coastline.",
    highlights: [
      "Historic Sóller railway",
      "Tram towards Port de Sóller",
      "Coastal boat segment when included",
      "Best for long port calls",
      "Journey-led island day",
    ],
    cta: "View the island tour",
    href: "/shore-excursions/mallorca-train-tram-boat",
    imageKey: "train",
    wide: false,
  },
  {
    slug: "caves",
    emoji: "🌊",
    title: "Caves and Coastal Wonders",
    tagline:
      "Journey underground at the Caves of Drach or explore Mallorca’s eastern coastline and hidden coves.",
    highlights: [
      "Caves of Drach chambers",
      "Underground lake setting",
      "Eastern Mallorca travel",
      "Memorable natural highlight",
      "Popular half-day choice",
    ],
    cta: "Visit the caves",
    href: "/shore-excursions/caves-of-drach",
    imageKey: "caves",
    wide: false,
  },
  {
    slug: "food",
    emoji: "🍷",
    title: "Food and Local Flavours",
    tagline:
      "Taste Mallorcan produce, markets, pastries, tapas, wine and the flavours of Palma.",
    highlights: [
      "Central market atmosphere",
      "Local tasting stops",
      "Compact city-based duration",
      "Small-group format where offered",
      "Easy after-tour free time",
    ],
    cta: "Taste Palma",
    href: "/shore-excursions/palma-food-tour",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "active",
    emoji: "🚴",
    title: "Active Mallorca",
    tagline:
      "Choose cycling, hiking, coastal adventures and more energetic ways to experience the island.",
    highlights: [
      "E-bike city routes",
      "Coastal and trail adventures",
      "Small-group active formats",
      "For confident, energetic travellers",
      "A clear alternative to coach tours",
    ],
    cta: "Go active",
    href: "/shore-excursions/mallorca-coastal-adventure",
    imageKey: "active",
    wide: false,
  },
];

export function ChooseYourMallorca() {
  return (
    <section className="section-padding border-b border-coastal-100 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Find your day ashore</p>
          <h2 className="section-title mt-2">How would you like to experience Mallorca?</h2>
          <p className="section-subtitle">
            Palma opens the door to far more than one type of day ashore. Stay close to the ship and
            explore the old city, travel into the Tramuntana Mountains, ride Mallorca’s historic
            railway or escape towards caves, coves and traditional villages.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.historic;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`group card-editorial overflow-hidden ${card.wide ? "sm:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${card.wide ? "aspect-[21/9] lg:aspect-auto lg:min-h-[280px]" : "aspect-[16/10]"}`}>
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/50 to-transparent" aria-hidden="true" />
                  <span className="absolute left-4 top-4 text-2xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-coastal-800">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.tagline}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                    {card.highlights.slice(0, card.wide ? 5 : 3).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-maple-500" aria-hidden="true">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex text-sm font-semibold text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
