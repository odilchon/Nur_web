import { ru } from "./dictionaries/ru";
import { en } from "./dictionaries/en";
import { tg } from "./dictionaries/tg";

export const locales = ["ru", "en", "tg"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  tg: "Тоҷикӣ",
};

export const localeShort: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  tg: "TJ",
};

const dictionaries = { ru, en, tg };

export type Dictionary = typeof ru;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
