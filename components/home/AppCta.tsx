import { Eyebrow } from "../ui";
import { InstagramButton, StoreBadges } from "../OrderButtons";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Блок «заказывайте в Instagram или приложении». */
export function AppCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-nur py-20">
      <div className="glass-card relative grid gap-8 overflow-hidden rounded-[2.5rem] p-8 md:grid-cols-2 md:items-center md:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_80%,rgba(226,110,160,.20),transparent_46%),radial-gradient(ellipse_at_22%_15%,rgba(255,193,128,.20),transparent_45%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full
            bg-nur-glow opacity-40 blur-3xl"
        />
        <div className="relative">
          <Eyebrow>Nur Delivery</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {dict.appCta.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {dict.appCta.subtitle}
          </p>
        </div>
        <div className="relative flex flex-col gap-4 md:items-end">
          <InstagramButton dict={dict} brand />
          <StoreBadges dict={dict} />
          <p className="text-xs text-ink-muted md:text-right">
            {dict.appCta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
