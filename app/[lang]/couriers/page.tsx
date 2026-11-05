import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CalendarCheck,
  Coins,
  Headset,
  CheckCircle,
  Moped,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { isLocale, getDictionary } from "@/lib/i18n";
import { PageHeader, Eyebrow, CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const benefitIcons = [CalendarCheck, Coins, Headset];

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  return { title: getDictionary(params.lang).couriersPage.eyebrow };
}

export default function CouriersPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const c = dict.couriersPage;

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} media={
        <div className="glass-card relative flex min-h-[290px] w-full max-w-[390px] flex-col justify-between overflow-hidden rounded-[2.5rem] p-7 md:p-9">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(235,124,116,.28),transparent_48%),radial-gradient(circle_at_15%_85%,rgba(104,115,208,.28),transparent_45%)]" />
          <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-nur-brand text-white shadow-coral"><Moped size={35} weight="duotone" /></span>
          <div className="relative">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.15em] text-royal-600"><MapPin size={18} weight="fill" />{dict.contactsPage.cityLabel}</p>
            <p className="mt-2 text-2xl font-extrabold leading-tight text-royal-800">{c.benefits[0].title}<br />{c.benefits[1].title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.benefits[2].desc}</p>
          </div>
        </div>
      } />

      <section className="container-nur py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Преимущества */}
          <div className="lg:col-span-7">
            <Eyebrow>{c.benefitsTitle}</Eyebrow>
            <ul className="mt-6 divide-y divide-royal-100 border-y border-royal-100">
              {c.benefits.map((benefit, i) => {
                const Icon = benefitIcons[i];
                return (
                  <Reveal
                    as="li"
                    key={benefit.title}
                    delay={i * 70}
                    className="flex gap-5 py-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-royal-50 text-royal-500">
                      <Icon size={24} weight="duotone" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-royal-800">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 leading-relaxed text-ink-soft">
                        {benefit.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Требования */}
          <div className="lg:col-span-5">
            <Reveal className="surface p-8">
              <Eyebrow>{c.requirementsTitle}</Eyebrow>
              <ul className="mt-5 space-y-3.5">
                {c.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-royal-500"
                    />
                    <span className="leading-relaxed text-ink-soft">{req}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} text={c.ctaText} dict={dict} steps={{ title: c.ctaStepsTitle, items: c.ctaSteps }} />
    </>
  );
}
