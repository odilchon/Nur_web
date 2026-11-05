"use client";

import { usePathname } from "next/navigation";
import { locales, localeShort, type Locale } from "@/lib/i18n";
import { SlidingNavigation } from "./SlidingNavigation";

/** Переключатель языка — сохраняет текущий путь, меняя только сегмент локали. */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return <SlidingNavigation compact label="Язык сайта" activeHref={`/${current}${rest ? `/${rest}` : ""}`} items={locales.map((locale) => ({ href: `/${locale}${rest ? `/${rest}` : ""}`, label: localeShort[locale] }))} />;
}
