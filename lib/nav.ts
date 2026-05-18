import type { Locale } from "./i18n";

/** Пункты навигации в шапке и подвале (ключи совпадают с dict.nav). */
export const navItems = [
  { key: "about", path: "about" },
  { key: "categories", path: "categories" },
  { key: "partners", path: "partners" },
  { key: "couriers", path: "couriers" },
  { key: "contacts", path: "contacts" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];

/** Строит локализованный путь: href("ru", "about") -> "/ru/about". */
export function href(lang: Locale | string, path = ""): string {
  return path ? `/${lang}/${path}` : `/${lang}`;
}
