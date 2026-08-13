import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Handshake,
  Lightning,
  CheckCircle,
  TrendUp,
  Warning,
  Lightbulb,
} from "@phosphor-icons/react/dist/ssr";
import { isLocale, getDictionary } from "@/lib/i18n";
import { PageHeader, Eyebrow, CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const valueIcons = [Handshake, Lightning, CheckCircle, TrendUp];

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  return { title: getDictionary(params.lang).about.eyebrow };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const dict = getDictionary(params.lang);
  const a = dict.about;

  return (
    <>
      <PageHeader
        eyebrow={a.eyebrow}
        title={a.title}
        subtitle={a.subtitle}
        media={
          <div className="relative grid h-56 w-56 place-items-center md:h-72 md:w-72">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-nur-glow opacity-50 blur-2xl"
            />
            <div className="relative grid h-44 w-44 animate-float place-items-center rounded-full
              border border-royal-100 bg-cream-card shadow-soft md:h-56 md:w-56">
              <Image
                src="/nur-logo.png"
                alt="Nur Delivery"
                width={1020}
                height={896}
                priority
                className="h-24 w-auto md:h-28"
              />
            </div>
          </div>
        }
      />

      {/* Миссия */}
      <section className="container-nur py-20">
        <div className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-glow-coral via-glow-violet to-glow-blue px-6 py-14 md:px-16 md:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/75">
              {a.missionTitle}
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug text-cream md:text-3xl">
              {a.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="container-nur pb-20">
        <Eyebrow>{a.valuesTitle}</Eyebrow>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={value.title} delay={i * 70} className="surface p-7">
                <Icon size={26} weight="duotone" className="text-royal-500" />
                <h3 className="mt-4 text-lg font-bold text-royal-800">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {value.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Путь проекта */}
      <section className="container-nur grid gap-8 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start">
        <div>
          <Eyebrow>{a.journeyTitle}</Eyebrow>
          <ol className="mt-8 border-l border-royal-200 pl-6 md:pl-8">
            {a.journey.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 80}
                className="relative pb-9 last:pb-0"
              >
                <span className="absolute -left-[1.92rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-cream md:-left-[2.42rem]">
                  <span className="h-2.5 w-2.5 rounded-full bg-royal-500" />
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-royal-500">
                  {item.date}
                </p>
                <h3 className="mt-1 text-xl font-bold text-royal-800">
                  {item.title}
                </h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{item.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Проблема и решение */}
        <aside className="grid gap-5 lg:pt-9">
          <Reveal className="surface p-7">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-glow-coral/15 text-glow-coral">
              <Warning size={23} weight="duotone" />
            </span>
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-royal-800">
              {a.problemTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {a.problemText}
            </p>
          </Reveal>
          <Reveal delay={100} className="surface p-7">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-royal-50 text-royal-500">
              <Lightbulb size={23} weight="duotone" />
            </span>
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-royal-800">
              {a.solutionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {a.solutionText}
            </p>
          </Reveal>
        </aside>
      </section>

      {/* Логотип бренда */}
      <section className="container-nur pb-20">
        <Reveal className="surface grain relative grid place-items-center overflow-hidden px-6 py-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-nur-glow opacity-25"
          />
          <Image
            src="/nur-full-logo.png"
            alt="Nur Delivery"
            width={3240}
            height={956}
            className="relative w-auto max-w-full"
            style={{ height: "clamp(3rem, 7vw, 5rem)" }}
          />
        </Reveal>
      </section>

      {/* Команда */}
      <section className="container-nur pb-4">
        <Eyebrow>{a.teamTitle}</Eyebrow>
        <p className="mt-3 max-w-xl text-ink-soft">{a.teamSubtitle}</p>
        {/* TODO: заменить инициалы на реальные фото команды */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {a.team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={i * 90}
              className="surface flex items-center gap-5 p-6"
            >
              <span className="grain grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cream-deep via-glow-coral to-glow-blue ring-1 ring-black/5">
                <span className="relative z-10 text-lg font-extrabold text-cream">
                  {initials(member.name)}
                </span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-royal-800">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-royal-500">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title={dict.appCta.title} text={dict.appCta.subtitle} dict={dict} />
    </>
  );
}
