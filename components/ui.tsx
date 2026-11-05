import { cn } from "@/lib/cn";
import { ArrowUpRight, ChatCircleDots, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Надзаголовок секции — короткая метка с линией. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      <span className="h-[3px] w-7 rounded-full bg-nur-brand" aria-hidden />
      {children}
    </p>
  );
}

/** Шапка внутренней страницы: метка, заголовок, подзаголовок. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  media,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Декоративный элемент справа (напр. логотип). */
  media?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-royal-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-44 h-[28rem] w-[28rem]
          rounded-full bg-nur-glow opacity-40 blur-3xl"
      />
      <div className="container-nur relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className={media ? "lg:col-span-7" : "lg:col-span-12"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05]
            tracking-tight text-royal-800 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {subtitle}
          </p>
        </div>
        {media && (
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            {media}
          </div>
        )}
      </div>
    </section>
  );
}

/** Призыв к действию: тёмная плашка с кнопкой заказа в Instagram. */
export function CtaBand({
  title,
  text,
  dict,
  steps,
}: {
  title: string;
  text: string;
  dict: Dictionary;
  steps?: { title: string; items: string[] };
}) {
  return (
    <section className="container-nur py-20">
      <div className="grain relative overflow-hidden rounded-5xl bg-royal-800 px-6 py-14 md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-nur-glow opacity-50"
        />
        <div className={cn("relative grid items-center gap-10", steps && "lg:grid-cols-[1fr_0.75fr] lg:gap-16")}>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-cream md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-relaxed text-cream/70">{text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
              <InstagramLogo size={19} weight="bold" />
              {dict.cta.contactUs}
              <ArrowUpRight size={18} weight="bold" />
            </a>
          </div>
        </div>
        {steps && (
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.14em] text-cream/80">
              <ChatCircleDots size={21} weight="duotone" />{steps.title}
            </p>
            <ol className="mt-5 space-y-4">
              {steps.items.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream/90">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-xs font-bold">{i + 1}</span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
