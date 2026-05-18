import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ChartLineUp,
  Moped,
  PlugsConnected,
  Megaphone,
} from "@phosphor-icons/react/dist/ssr";
import { isLocale, getDictionary } from "@/lib/i18n";
import { PageHeader, Eyebrow, CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const benefitIcons = [ChartLineUp, Moped, PlugsConnected, Megaphone];

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  return { title: getDictionary(params.lang).partnersPage.eyebrow };
}

export default function PartnersPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const p = dict.partnersPage;

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="container-nur py-20">
        <Eyebrow>{p.benefitsTitle}</Eyebrow>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {p.benefits.map((benefit, i) => {
            const Icon = benefitIcons[i];
            return (
              <Reveal
                key={benefit.title}
                delay={i * 70}
                className="surface flex gap-5 p-7 md:p-8"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-royal-50 text-royal-500">
                  <Icon size={24} weight="duotone" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-royal-800">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand title={p.ctaTitle} text={p.ctaText} dict={dict} />
    </>
  );
}
