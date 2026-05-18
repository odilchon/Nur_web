"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShort, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** Переключатель языка — сохраняет текущий путь, меняя только сегмент локали. */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div
      role="group"
      aria-label="Язык сайта"
      className="inline-flex items-center rounded-full border border-royal-200 bg-cream-card p-0.5"
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-bold transition-colors",
              active
                ? "bg-royal-500 text-cream"
                : "text-ink-muted hover:text-royal-600",
            )}
          >
            {localeShort[locale]}
          </Link>
        );
      })}
    </div>
  );
}
