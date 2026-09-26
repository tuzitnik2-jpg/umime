// Centrální definice sekcí webu a jazyků/předmětů. Přidání nové položky
// (např. nový jazyk nebo sekci) stačí udělat na jednom místě zde
// (a v prisma/schema.prisma u odpovídajícího enumu).

export type CategorySlug = "zakladni" | "stredni" | "prijimacky" | "maturita";

export const CATEGORIES: {
  slug: CategorySlug;
  value: "ZAKLADNI" | "STREDNI" | "PRIJIMACKY" | "MATURITA";
  label: string;
  description: string;
}[] = [
  {
    slug: "zakladni",
    value: "ZAKLADNI",
    label: "Základní škola",
    description: "Kurzy a procvičování pro žáky základních škol.",
  },
  {
    slug: "stredni",
    value: "STREDNI",
    label: "Střední škola",
    description: "Látka a příprava pro studenty středních škol.",
  },
  {
    slug: "prijimacky",
    value: "PRIJIMACKY",
    label: "Přijímačky",
    description: "Příprava na přijímací zkoušky na střední školy.",
  },
  {
    slug: "maturita",
    value: "MATURITA",
    label: "Maturita",
    description: "Příprava na maturitní zkoušku ze všech předmětů.",
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export type LanguageCode = "CJ" | "NJ" | "RS" | "AJ";

export const LANGUAGES: { value: LanguageCode; label: string }[] = [
  { value: "CJ", label: "ČJ" },
  { value: "NJ", label: "NJ" },
  { value: "RS", label: "RS" },
  { value: "AJ", label: "AJ" },
];
