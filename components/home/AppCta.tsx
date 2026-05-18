import { Eyebrow } from "../ui";
import { InstagramButton, StoreBadges } from "../OrderButtons";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Блок «заказывайте в Instagram или приложении». */
export function AppCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-nur py-20">
      <div className="surface grid gap-8 p-8 md:grid-cols-2 md:items-center md:p-14">
        <div>
          <Eyebrow>Nur Delivery</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {dict.appCta.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {dict.appCta.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <InstagramButton dict={dict} />
          <StoreBadges dict={dict} />
          <p className="text-xs text-ink-muted md:text-right">
            {dict.appCta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
