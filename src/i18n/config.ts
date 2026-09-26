export const locales = ["cs", "en", "de", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "cs";

export const localeNames: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

export const localeFlags: Record<Locale, string> = {
  cs: "🇨🇿",
  en: "🇬🇧",
  de: "🇩🇪",
  ru: "🇷🇺",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
