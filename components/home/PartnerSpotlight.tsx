import Image from "next/image";
import { PhoneCall, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Видимый промо-блок партнёрской доставки после бегущей строки категорий. */
export function PartnerSpotlight({ dict }: { dict: Dictionary }) {
  const p = dict.partnerSpotlight;

  return (
    <section className="container-nur pt-14">
      <Reveal className="grain relative overflow-hidden rounded-4xl bg-royal-800 text-cream shadow-soft">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-glow-coral/35 blur-3xl"
        />
        <div className="relative grid min-h-[25rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/15 bg-cream/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cream/80">
              <Sparkle size={16} weight="fill" className="text-glow-coral" />
              {p.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
              {p.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              {p.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="btn bg-cream text-royal-800 hover:bg-cream-deep active:translate-y-px"
              >
                <PhoneCall size={20} weight="bold" />
                {p.cta}
              </a>
              <span className="text-sm font-semibold text-cream/70">
                {site.phone}
              </span>
            </div>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden lg:min-h-full">
            <Image
              src="/foodchaqchaq.jpg"
              alt="CHAQ CHAQ"
              width={1770}
              height={888}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-900/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-royal-800/30 lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-3xl border border-cream/20 bg-cream/90 p-4 text-royal-800 shadow-card backdrop-blur md:left-7 md:right-auto md:min-w-[20rem]">
              <Image
                src="/chaqchaq.png"
                alt="CHAQ CHAQ"
                width={600}
                height={600}
                className="h-16 w-16 shrink-0 rounded-2xl object-contain"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-royal-500">
                  {p.badge}
                </p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">
                  CHAQ CHAQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
