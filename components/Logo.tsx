import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { href } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";

type LogoProps = {
  lang: Locale;
  /** Цвет вордмарка в составном режиме (на тёмном фоне — "light"). */
  variant?: "dark" | "light";
  /** Показать готовый полный логотип (иконка + вордмарк одним изображением). */
  full?: boolean;
  withWordmark?: boolean;
  className?: string;
};

/**
 * Логотип Nur Delivery.
 * `full` — цельное изображение полного логотипа (для светлого фона, напр. шапка).
 * Иначе — иконка-локатор + текстовый вордмарк (работает и на тёмном фоне).
 */
export function Logo({
  lang,
  variant = "dark",
  full = false,
  withWordmark = true,
  className,
}: LogoProps) {
  if (full) {
    return (
      <Link
        href={href(lang)}
        aria-label="Nur Delivery"
        className={cn("inline-flex items-center", className)}
      >
        <Image
          src="/nur-full-logo.png"
          alt="Nur Delivery"
          width={3240}
          height={956}
          priority
          className="h-11 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href(lang)}
      aria-label="Nur Delivery"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/nur-logo.png"
        alt=""
        width={1020}
        height={896}
        priority
        className="h-9 w-auto"
      />
      {withWordmark && (
        <span
          className={cn(
            "text-lg leading-none tracking-tight",
            variant === "light" ? "text-cream" : "text-royal-800",
          )}
        >
          <span className="font-light">Nur</span>
          <span className="font-extrabold"> Delivery</span>
        </span>
      )}
    </Link>
  );
}
