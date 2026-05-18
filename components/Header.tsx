"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, InstagramLogo } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
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
    <header className="sticky top-0 z-50 border-b border-royal-100 bg-cream/85 backdrop-blur-md">
      <div className="container-nur flex h-16 items-center justify-between gap-4">
        <Logo lang={lang} full />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={href(lang, item.path)}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.path)
                  ? "bg-royal-50 text-royal-700"
                  : "text-ink-soft hover:text-royal-600",
              )}
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={lang} />
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-5 !py-2.5"
          >
            <InstagramLogo size={18} weight="bold" />
            {dict.cta.instagram}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Меню"
          className="grid h-10 w-10 place-items-center rounded-full border border-royal-200
            bg-cream-card text-royal-700 lg:hidden"
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-royal-100 bg-cream lg:hidden">
          <nav className="container-nur flex flex-col gap-1 py-4">
            <Link
              href={href(lang)}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-royal-50"
            >
              {dict.nav.home}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={href(lang, item.path)}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-royal-50 text-royal-700"
                    : "text-ink-soft hover:bg-royal-50",
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
                className="btn-primary flex-1 !py-3"
                onClick={() => setOpen(false)}
              >
                <InstagramLogo size={18} weight="bold" />
                {dict.cta.instagram}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
