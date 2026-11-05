import type { Dictionary } from "@/lib/dictionaries/ru";

/** Бегущая строка с направлениями доставки. */
export function CategoryStrip({ dict }: { dict: Dictionary }) {
  const items = dict.marquee;

  return (
    <section className="overflow-hidden border-y border-royal-100/70 bg-white/65 py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xs font-bold uppercase tracking-[.18em] text-royal-800/70"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-coral-400" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
