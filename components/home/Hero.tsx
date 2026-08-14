import Image from "next/image";
import { Clock, CreditCard, Lightning, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "../ui";
import { InstagramButton } from "../OrderButtons";
import { categoryIcons } from "../Icons";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Мокап телефона с превью приложения Nur Delivery. */
function PhoneMock({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const tiles = dict.categories.items.slice(0, 6);

  return (
    <div className="relative mx-auto w-[300px] animate-float sm:w-[340px]">
      <div className="relative rounded-[2.6rem] border border-royal-200 bg-royal-800 p-2.5 shadow-soft">
        <div className="overflow-hidden rounded-[2.1rem] bg-cream">
          {/* Статус-бар */}
          <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-semibold text-ink-muted">
            <span>09:41</span>
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-royal-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-royal-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-royal-500" />
            </span>
          </div>
          {/* Шапка приложения */}
          <div className="px-5 pt-3">
            <p className="text-lg font-extrabold tracking-tight text-royal-800">
              <span className="font-light">Nur</span> Delivery
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-muted">
              <MapPin size={12} weight="fill" />
              {site.city[lang]}
            </p>
          </div>
          {/* Категории */}
          <div className="grid grid-cols-3 gap-2 p-4">
            {tiles.map((tile, i) => {
              const Icon = categoryIcons[i];
              return (
                <div
                  key={tile.name}
                  className="flex flex-col items-center gap-1.5 rounded-2xl border border-royal-100
                    bg-cream-card px-1.5 py-3 text-center"
                >
                  <Icon size={20} weight="duotone" className="text-royal-500" />
                  <span className="text-[9px] font-semibold leading-tight text-ink-soft">
                    {tile.name}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Нижняя плашка */}
          <div className="px-4 pb-5">
            <div className="flex items-center justify-between rounded-2xl bg-royal-500 px-4 py-3">
              <span className="text-xs font-bold text-cream">
                {dict.cta.instagram}
              </span>
              <Lightning size={16} weight="fill" className="text-cream" />
            </div>
          </div>
        </div>
      </div>
      {/* Значок Nur Delivery */}
      <div className="absolute -left-6 -top-6 grid h-20 w-20 place-items-center rounded-3xl bg-cream-card p-[3px] shadow-coral">
        <div className="grid h-full w-full place-items-center rounded-[1.1rem] bg-nur-brand">
          <div className="grid h-[3.4rem] w-[3.4rem] place-items-center rounded-[0.9rem] bg-cream-card">
            <Image
              src="/nur-logo.png"
              alt=""
              width={1020}
              height={896}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
      {/* Тёплый акцент скорости */}
      <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl
        bg-coral-500 px-4 py-2.5 text-cream shadow-coral">
        <Lightning size={16} weight="fill" />
        <span className="text-xs font-bold">{dict.hero.chip1}</span>
      </div>
    </div>
  );
}

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict;
  const chips = [
    { icon: Lightning, text: hero.chip1 },
    { icon: Clock, text: hero.chip2 },
    { icon: CreditCard, text: hero.chip3 },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Фирменный фон-градиент */}
      <Image
        src="/nur-background.png"
        alt=""
        aria-hidden
        width={1200}
        height={675}
        priority
        className="pointer-events-none absolute -right-24 -top-24 h-[42rem] w-auto
          select-none opacity-60 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem]
          rounded-full bg-nur-glow opacity-40 blur-3xl"
      />
      <div className="container-nur relative pt-8 md:pt-12">
        <div className="surface grain relative mx-auto grid max-w-3xl place-items-center overflow-hidden px-6 py-6 shadow-soft md:px-10 md:py-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-nur-glow opacity-20"
          />
          <Image
            src="/nur-full-logo.png"
            alt="Nur Delivery"
            width={3240}
            height={956}
            priority
            className="relative h-auto w-full max-w-[24rem] sm:max-w-[30rem]"
          />
        </div>
      </div>
      <div className="container-nur relative grid items-center gap-12 py-12 md:py-16 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight
            text-royal-800 sm:text-5xl lg:text-6xl">
            {hero.titleTop}{" "}
            <span className="text-brand-gradient">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <InstagramButton dict={dict} brand />
            <a href="#how" className="btn-ghost">
              {hero.secondary}
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
            {chips.map((chip) => (
              <li
                key={chip.text}
                className="flex items-center gap-2 text-sm font-medium text-ink-soft"
              >
                <chip.icon size={16} weight="fill" className="text-royal-500" />
                {chip.text}
              </li>
            ))}
          </ul>
          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-royal-200
            bg-cream-card px-4 py-2 text-xs font-semibold text-royal-700">
            <span className="h-2 w-2 rounded-full bg-glow-coral" aria-hidden />
            {dict.badge.orderChannel}
          </p>
        </div>

        <div className="animate-fade-up lg:col-span-6" style={{ animationDelay: "120ms" }}>
          <PhoneMock lang={lang} dict={dict} />
        </div>
      </div>
    </section>
  );
}
