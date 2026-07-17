export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero-home",
    "Palma Cathedral and Mediterranean waterfront — cruise day in Palma de Mallorca",
  ),
  ogDefault: img(
    "og-default",
    "Palma and Mallorca cruise planning — cathedral, Sóller, Valldemossa and shore excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Palma Shore Excursions",
  },
  port: img("port", "Palma de Mallorca cruise port and harbour approach"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  cathedral: img("cathedral", "Palma Cathedral (La Seu) above the bay"),
  historic: img("historic", "Historic Palma old town and sandstone architecture"),
  soller: img("soller", "Sóller valley town beneath the Tramuntana Mountains"),
  valldemossa: img("valldemossa", "Stone lanes and mountain setting in Valldemossa"),
  tramuntana: img("tramuntana", "Serra de Tramuntana terraces and mountain scenery"),
  caves: img("caves", "Caves of Drach underground chambers in eastern Mallorca"),
  coast: img("coast", "Mallorca coastline and Mediterranean light"),
  food: img("food", "Mallorcan market produce and local flavours in Palma"),
  train: img("train", "Historic Sóller railway through the Mallorca mountains"),
  cycling: img("cycling", "Cycling and e-bike touring in Palma"),
  private: img("private", "Private Mallorca shore excursion from Palma"),
  active: img("active", "Active shore excursion day in Palma and Mallorca"),
  compare: img("compare", "Comparing Palma shore excursion options"),
  walking: img("walking", "Walking Palma old town from the cruise harbour"),
  photography: img("photography", "Photography viewpoints across Palma and Mallorca"),
  family: img("family", "Family exploring Palma on a cruise day ashore"),
  market: img("market", "Mercat de l’Olivar and Palma market culture"),
  port: img("port", "Palma cruise port terminal and waterfront"),
  "hero-home": img("hero-home", "Palma Mediterranean harbour hero image"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "soller-valldemossa": "soller",
  "caves-of-drach": "caves",
  "palma-old-town-cathedral": "cathedral",
  "mallorca-train-tram-boat": "train",
  "palma-food-tour": "food",
  "private-soller-valldemossa": "private",
  "palma-ebike-tour": "cycling",
  "mallorca-coastal-adventure": "active",
  "private-caves-drach-porto-cristo": "caves",
  "palma-hop-on-hop-off": "historic",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "historic");
}

export const excursionsHubImage = pick("cathedral");

const highlightImageKeys: Record<string, string> = {};

const comparisonImageKeys: Record<string, string> = {
  "which-palma-shore-excursion": "compare",
  "palma-or-mallorca-island": "historic",
  "soller-or-caves": "caves",
  "can-you-explore-palma-independently": "walking",
  "private-tour-vs-coach-tour": "private",
  "best-palma-tour-first-time": "soller",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "historic");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "historic");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("historic");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("coast");
}

export const guidesHubImage = pick("tramuntana");
