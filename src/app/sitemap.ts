import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs } from "@/lib/guides";
import { getAllComparisonSlugs } from "@/data/comparisons";
import {
  getAllSchedulePortSlugs,
  getVerifiedMonthKeys,
  getScheduleEntriesForYear,
} from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath } from "@/lib/schedule-utils";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/guides",
    "/palma-cruise-port",
    "/things-to-do-in-palma-from-a-cruise-ship",
    "/palma-cruise-ship-schedule",
    "/affiliate-disclosure",
    "/cruise-planner",
    "/faq",
    "/enquire",
    "/about",
    "/signature-mallorca-experience",
    "/wow-collection",
    "/compare",
  ];

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...getAllGuideSlugs().map((s) => `/guides/${s}`),
    ...getAllComparisonSlugs().map((s) => `/compare/${s}`),
    // Nested schedule year/month pages only when verified data exists
    ...getAllSchedulePortSlugs().flatMap((s) =>
      SCHEDULE_YEARS.filter((y) => getScheduleEntriesForYear(s, y).length > 0).map((y) =>
        portYearPath(s, y),
      ),
    ),
    ...getAllSchedulePortSlugs().flatMap((s) =>
      getVerifiedMonthKeys(s).map((mk) => portMonthPath(s, mk)),
    ),
  ];

  const all = [...staticPages, ...dynamicPages].filter((path) => !NOINDEX_PATHS.has(path));

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    };
  });
}
