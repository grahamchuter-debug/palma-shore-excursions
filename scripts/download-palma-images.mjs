#!/usr/bin/env node
/**
 * Download Palma / Mallorca images from Wikimedia Commons (CC-licensed).
 */
import { writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA = "PalmaShoreExcursions/1.0 (https://palmashoreexcursions.com; image setup)";

/** Unique primary subjects — Palma Cathedral, harbour, villages and island scenery. */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Palma Cathedral (La Seu) from Parc de la Mar.jpg",
    "File:Palma Cathedral (La Seu) and reflection at Parc de la Mar.jpg",
    "File:Catedral de Palma de Mallorca 01.jpg",
    "File:Cathedral of Santa Maria of Palma.jpg",
  ],
  "og-default.jpg": [
    "File:Palma Cathedral.jpg",
    "File:Catedral de Palma de Mallorca 01.jpg",
    "File:Palma, Mallorca cruise ship harbour.jpg",
  ],
  "port.jpg": [
    "File:Port of Palma de Mallorca.jpg",
    "File:Palma, Mallorca cruise ship harbour.jpg",
    "File:Palma de Mallorca.jpg",
  ],
  "cruise-port.jpg": [
    "File:Palma, Mallorca cruise ship harbour.jpg",
    "File:Port of Palma de Mallorca.jpg",
  ],
  "cathedral.jpg": [
    "File:Catedral de Palma de Mallorca 01.jpg",
    "File:Cathedral of Santa Maria of Palma.jpg",
    "File:Palma Cathedral.jpg",
  ],
  "historic.jpg": [
    "File:Palma de Mallorca - Un rincón del Paseo Marítimo - panoramio.jpg",
    "File:18-11-30-Palma de Mallorca-RalfR2-100 0316.jpg",
    "File:Parc de la Mar 01.jpg",
  ],
  "soller.jpg": [
    "File:Panorama Soller and Ofre.jpg",
    "File:Sóller, en Mallorca (Baleares, España).jpg",
    "File:Soller, Mallorca, 1999.jpg",
  ],
  "valldemossa.jpg": [
    "File:Valldemossa.jpg",
  ],
  "tramuntana.jpg": [
    "File:Serra de Tramuntana.jpg",
    "File:Panorama Soller and Ofre.jpg",
  ],
  "caves.jpg": [
    "File:Cuevas del Drach.jpg",
    "File:Coves del Drac 01.jpg",
  ],
  "coast.jpg": [
    "File:Mallorca coast 1.jpg",
    "File:Mallorca coast 4.jpg",
    "File:Mallorca east coast.jpg",
  ],
  "food.jpg": [
    "File:Ensaimadas de Palma de Mallorca.jpg",
    "File:Ensaïmada.jpg",
    "File:Mercat de l'Olivar.JPG",
  ],
  "train.jpg": [
    "File:Sóller Tren de Sóller-4334.jpg",
    "File:Ferrocarril de Sóller in Palma de Mallorca.jpg",
    "File:Tren de Soller 1.jpg",
  ],
  "cycling.jpg": [
    "File:Cycle Path in North Mallorca.JPG",
    "File:Palma de Mallorca - Un rincón del Paseo Marítimo - panoramio.jpg",
  ],
  "private.jpg": [
    "File:Serra de Tramuntana.jpg",
    "File:Valldemossa.jpg",
    "File:Panorama Soller and Ofre.jpg",
  ],
  "active.jpg": [
    "File:Mallorca coast 2.jpg",
    "File:Cycle Path in North Mallorca.JPG",
    "File:Serra de Tramuntana.jpg",
  ],
  "compare.jpg": [
    "File:Catedral de Palma de Mallorca 01.jpg",
    "File:Panorama Soller and Ofre.jpg",
    "File:Cuevas del Drach.jpg",
  ],
  "walking.jpg": [
    "File:Parc de la Mar 02.jpg",
    "File:18-11-30-Palma de Mallorca-RalfR2-100 0316.jpg",
    "File:Palma Cathedral (La Seu) from Parc de la Mar.jpg",
  ],
  "photography.jpg": [
    "File:Palma Cathedral (La Seu) and reflection at Parc de la Mar.jpg",
    "File:Parc de la Mar 01.jpg",
    "File:Serra de Tramuntana.jpg",
  ],
  "family.jpg": [
    "File:Parc de la Mar 02.jpg",
    "File:Palma Cathedral.jpg",
    "File:Port of Palma de Mallorca.jpg",
  ],
  "market.jpg": [
    "File:Mercat de l'Olivar.JPG",
    "File:Ensaimadas de Palma de Mallorca.jpg",
    "File:Ensaïmada.jpg",
  ],
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveAndSave(filename, candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (!url) {
        console.warn(`  no url: ${title}`);
        continue;
      }
      const outPath = join(OUT, filename);
      const srcPath = join(SOURCE, filename);
      const bytes = await download(url, outPath);
      copyFileSync(outPath, srcPath);
      console.log(`✓ ${filename} ← ${title} (${Math.round(bytes / 1024)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  fail ${title}: ${err.message}`);
    }
  }
  console.error(`✗ FAILED ${filename}`);
  return false;
}

mkdirSync(OUT, { recursive: true });
mkdirSync(SOURCE, { recursive: true });

let ok = 0;
for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
  if (await resolveAndSave(file, candidates)) ok++;
  await new Promise((r) => setTimeout(r, 800));
}
console.log(`\nDownloaded ${ok}/${Object.keys(IMAGE_FILES).length} images`);
if (ok < Object.keys(IMAGE_FILES).length) process.exit(1);
