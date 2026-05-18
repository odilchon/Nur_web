import Link from "next/link";
import {
  InstagramLogo,
  Phone,
  Clock,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { StoreBadges } from "./OrderButtons";
import { navItems, href } from "@/lib/nav";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-24 bg-royal-800 text-cream/80">
      <div className="container-nur grid gap-12 py-16 md:grid-cols-12">
        {/* Бренд */}
        <div className="md:col-span-4">
          <Logo lang={lang} variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
            {dict.footer.tagline}
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream
              transition-colors hover:text-glow-coral"
          >
            <InstagramLogo size={20} weight="fill" />@{site.instagramHandle}
          </a>
        </div>

        {/* Навигация */}
        <nav className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/45">
            {dict.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href={href(lang)} className="link-underline hover:text-cream">
                {dict.nav.home}
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={href(lang, item.path)}
                  className="link-underline hover:text-cream"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Контакты */}
        <div className="md:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/45">
            {dict.footer.contactsTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <Phone size={16} weight="fill" />
                {site.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock size={16} weight="fill" />
              {site.workingHours}
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} weight="fill" />
              {site.city[lang]}
            </li>
          </ul>
        </div>

        {/* Заказ */}
        <div className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/45">
            {dict.footer.orderTitle}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/65">
            {dict.footer.orderText}
          </p>
          <StoreBadges dict={dict} className="mt-4" />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-nur flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {site.foundedYear} Nur Delivery. {dict.footer.rights}
          </p>
          <p className="max-w-md sm:text-right">{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
