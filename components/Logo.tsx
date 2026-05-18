import Link from "next/link";
import { cn } from "@/lib/cn";
import { href } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";

type LogoProps = {
  lang: Locale;
  variant?: "dark" | "light";
  withWordmark?: boolean;
  className?: string;
};

/** Логотип Nur Delivery: монограмма «ND» в фирменном градиентном круге + вордмарк. */
export function Logo({
  lang,
  variant = "dark",
  withWordmark = true,
  className,
}: LogoProps) {
  return (
    <Link
      href={href(lang)}
      aria-label="Nur Delivery"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span className="grain relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-cream-deep via-glow-coral to-glow-blue shadow-sm ring-1 ring-black/5">
        <span className="relative z-10 text-[11px] font-extrabold tracking-tight text-cream">
          ND
        </span>
      </span>
      {withWordmark && (
        <span
          className={cn(
            "text-lg leading-none tracking-tight",
            variant === "light" ? "text-cream" : "text-royal-800",
          )}
        >
          <span className="font-light">Nur</span>
          <span className="font-extrabold">Delivery</span>
        </span>
      )}
    </Link>
  );
}
