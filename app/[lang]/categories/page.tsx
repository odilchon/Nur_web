import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "@phosphor-icons/react/dist/ssr";
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
}: {
  title: string;
  rows: { label: string; price: string }[];
}) {
  return (
    <div className="surface p-7 md:p-8">
      <h3 className="text-lg font-bold text-royal-800">{title}</h3>
      <ul className="mt-4 divide-y divide-royal-100">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-6 py-3.5"
          >
            <span className="text-sm leading-snug text-ink-soft">
              {row.label}
            </span>
            <span className="shrink-0 rounded-full bg-royal-50 px-3 py-1 text-sm font-bold text-royal-600">
              {row.price}
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

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      {/* Категории */}
      <section className="container-nur py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* Цены */}
      <section className="border-t border-royal-100 bg-royal-50/50">
        <div className="container-nur py-20">
          <Eyebrow>{c.pricingTitle}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {c.pricingTitle}
          </h2>
          <p className="mt-3 text-ink-soft">{c.pricingSubtitle}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <PriceList title={c.baseTitle} rows={c.base} />
            <PriceList title={c.extraTitle} rows={c.extra} />
          </div>

          <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
            <Info size={18} weight="fill" className="mt-0.5 shrink-0 text-royal-400" />
            {c.disclaimer}
          </p>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} text={c.ctaText} dict={dict} />
    </>
  );
}
