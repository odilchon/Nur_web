import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info, MapPin, Package } from "@phosphor-icons/react/dist/ssr";
import { isLocale, getDictionary } from "@/lib/i18n";
import { PageHeader, Eyebrow, CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { categoryIcons } from "@/components/Icons";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  return { title: getDictionary(params.lang).categoriesPage.title };
}

function PriceList({
  title,
  rows,
  from,
}: {
  title: string;
  rows: { label: string; price: string }[];
  from: string;
}) {
  return (
    <div className="glass-card self-start rounded-[2rem] p-6 md:p-8">
      <h3 className="text-xl font-extrabold text-royal-800">{title}</h3>
      <ul className="mt-5 divide-y divide-royal-100">
        {rows.map((row, i) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-5 py-4"
          >
            <span className="flex items-center gap-3 text-sm font-medium leading-snug text-royal-800">
              <span className="text-xs font-bold text-royal-300">{String(i + 1).padStart(2, "0")}</span>{row.label}
            </span>
            <span className="shrink-0 rounded-full bg-[linear-gradient(120deg,#fff0e8,#f7eafa)] px-3 py-1.5 text-sm font-extrabold text-royal-800">
              {from} {row.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CategoriesPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const c = dict.categoriesPage;
  const from = { ru: "от", en: "from", tg: "аз" }[params.lang];

  return (
    <>
      <PageHeader
        eyebrow={dict.nav.categories}
        title={c.pricingTitle}
        subtitle={c.pricingSubtitle}
        media={<div className="glass-card relative flex min-h-[270px] w-full max-w-[390px] flex-col justify-end overflow-hidden rounded-[2.5rem] p-8">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(238,103,145,.28),transparent_50%),radial-gradient(circle_at_20%_70%,rgba(255,190,113,.28),transparent_48%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-7 top-3 h-[140px]">
            <div className="absolute inset-0 bg-[url('/khorog-map-shape.png')] bg-contain bg-center bg-no-repeat opacity-[.13] mix-blend-multiply" />
            <svg viewBox="0 0 300 120" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
              <path d="M110 66 C140 91 155 54 198 57" stroke="#d65a68" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" opacity=".65" />
            </svg>
            <span className="absolute left-[32%] top-[38%] grid h-7 w-7 place-items-center rounded-full border border-white/80 bg-white/75 text-coral-500 shadow-sm"><Package size={17} weight="duotone" /></span>
            <span className="absolute right-[33%] top-[30%] grid h-7 w-7 place-items-center rounded-full border border-white/80 bg-white/80 text-coral-500 shadow-sm"><MapPin size={20} weight="fill" /></span>
          </div>
          <p className="relative text-xs font-bold uppercase tracking-[.17em] text-royal-600">{c.baseTitle}</p>
          <p className="relative mt-3 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-none tracking-tight text-royal-800">{from} {c.base[0].price}</p>
        </div>}
      />

      {/* Стоимость доставки */}
      <section className="container-nur py-20">
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)]">
          <PriceList title={c.baseTitle} rows={c.base} from={from} />
          <PriceList title={c.extraTitle} rows={c.extra} from={from} />
        </div>

        <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
          <Info size={18} weight="fill" className="mt-0.5 shrink-0 text-royal-400" />
          {c.disclaimer}
        </p>
      </section>

      {/* Категории доставки */}
      <section className="border-t border-royal-100 bg-royal-50/50">
        <div className="container-nur py-20">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {c.title}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{c.subtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.categories.items.map((item, i) => {
              const Icon = categoryIcons[i];
              return (
                <Reveal
                  key={item.name}
                  delay={i * 55}
                  className="group surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-royal-300 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-500 transition-colors group-hover:bg-royal-500 group-hover:text-cream">
                    <Icon size={24} weight="duotone" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-royal-800">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} text={c.ctaText} dict={dict} />
    </>
  );
}
