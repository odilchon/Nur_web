import type { Dictionary } from "@/lib/dictionaries/ru";

/** Бегущая строка с направлениями доставки. */
export function CategoryStrip({ dict }: { dict: Dictionary }) {
  const items = dict.marquee;

  return (
    <section className="overflow-hidden border-y border-royal-100 bg-royal-800 py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-cream/85"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-glow-coral" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
