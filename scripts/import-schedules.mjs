#!/usr/bin/env node
/**
 * Import Palma cruise ship schedules from CSV into the site's JSON data file.
 *
 * Usage:  node scripts/import-schedules.mjs
 *
 * Source:  data/schedule-sources/palma.csv
 * Output:  src/data/imported-schedules/palma.json
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCE = resolve(ROOT, "data/schedule-sources/palma.csv");
const OUTPUT = resolve(ROOT, "src/data/imported-schedules/palma.json");

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Missing schedule CSV: ${SOURCE}`);
    console.error("Add a verified Palma CSV (date,ship,cruiseLine,arrive,depart,berth columns) before importing.");
    process.exit(1);
  }

  const text = readFileSync(SOURCE, "utf8").trim();
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) {
    writeFileSync(OUTPUT, "[]\n");
    console.log(`Wrote empty schedule to ${OUTPUT}`);
    return;
  }

  const headers = parseCsvLine(lines[0]).map((h) => h.trim().toLowerCase());
  const entries = [];

  for (const line of lines.slice(1)) {
    const cols = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((h, i) => [h, (cols[i] ?? "").trim()]));
    if (!row.date || !row.ship) continue;
    entries.push({
      date: row.date,
      ship: row.ship,
      cruiseLine: row.cruiseline || row.cruise_line || row.line || "",
      arrive: row.arrive || row.arrival || "",
      depart: row.depart || row.departure || "",
      berth: row.berth || row.terminal || "",
    });
  }

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(entries, null, 2)}\n`);
  console.log(`Imported ${entries.length} Palma schedule entries → ${OUTPUT}`);
}

main();
