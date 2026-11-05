import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "../ui";
import { href } from "@/lib/nav";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Тизер миссии со ссылкой на страницу «О нас». */
export function MissionTeaser({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="container-nur py-20">
      <div className="grid items-stretch gap-5 lg:grid-cols-12">
        <div className="surface flex flex-col justify-center p-8 md:p-12 lg:col-span-7">
          <Eyebrow>{dict.missionTeaser.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {dict.missionTeaser.title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            {dict.missionTeaser.text}
          </p>
          <Link
            href={href(lang, "about")}
            className="btn-dark mt-8 self-start"
          >
            {dict.missionTeaser.cta}
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>

        <div className="grain relative flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-4xl bg-gradient-to-br from-glow-coral via-glow-violet to-glow-blue p-8 md:p-12 lg:col-span-5">
          <Image src="/khorog.png" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-50 mix-blend-luminosity" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-royal-900/75 via-glow-violet/30 to-glow-coral/30" />
          <span aria-hidden />
          <div className="relative z-10">
            <p className="flex items-center gap-2 text-3xl font-extrabold tracking-tight text-cream">
              <MapPin size={25} weight="fill" />
              {site.city[lang]}
            </p>
            <p className="mt-1.5 text-sm font-medium text-cream/80">
              Nur Delivery · {site.launchDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
