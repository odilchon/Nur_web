import { Eyebrow } from "../ui";
import { Reveal } from "../Reveal";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Блок с цифрами проекта. */
export function Traction({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-nur py-20">
      <div className="max-w-2xl">
        <Eyebrow>{dict.traction.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-5xl">
          {dict.traction.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          {dict.traction.subtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-royal-100 bg-royal-100 md:grid-cols-4">
        {dict.traction.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="bg-cream-card px-6 py-9"
          >
            <p className="text-4xl font-extrabold tracking-tight text-royal-600 md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-ink-soft">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
