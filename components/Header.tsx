"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SlidingNavigation } from "./SlidingNavigation";
import { navItems, href } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === href(lang, path);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="container-nur nav-glass flex h-[68px] items-center justify-between gap-3 rounded-full px-4 sm:px-6">
        <Logo lang={lang} className="shrink-0" />

        <nav className="hidden shrink-0 items-center gap-0.5 xl:flex">
          <SlidingNavigation label="Навигация" activeHref={pathname} items={[
            { href: href(lang), label: dict.nav.home },
            ...navItems.map((item) => ({ href: href(lang, item.path), label: dict.nav[item.key] })),
          ]} />
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageSwitcher current={lang} />
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark !px-5 !py-2.5"
          >
            {dict.cta.instagram}
            <ArrowUpRight size={17} weight="bold" className="text-coral-300" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Меню"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/70
            bg-white/70 text-royal-800 xl:hidden"
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="nav-glass mx-2 mt-2 rounded-[28px] xl:hidden">
          <nav className="container-nur flex flex-col gap-1 py-4">
            <Link
              href={href(lang)}
              onClick={() => setOpen(false)}
              aria-current={isActive("") ? "page" : undefined}
              className={cn("mobile-nav-link", isActive("") && "is-selected")}
            >
              {dict.nav.home}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={href(lang, item.path)}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={cn(
                  "mobile-nav-link",
                  isActive(item.path) && "is-selected",
                )}
              >
                {dict.nav[item.key]}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LanguageSwitcher current={lang} />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark flex-1 !py-3"
                onClick={() => setOpen(false)}
              >
                {dict.cta.instagram}
                <ArrowUpRight size={17} weight="bold" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
