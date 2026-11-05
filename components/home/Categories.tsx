import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "../ui";
import { Reveal } from "../Reveal";
import { categoryIcons } from "../Icons";
import { href } from "@/lib/nav";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Бенто-сетка категорий доставки на главной. */
export function Categories({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const items = dict.categories.items;
  // Асимметричная раскладка на широких экранах (12-колоночная сетка).
  const spans = [
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-5",
    "lg:col-span-4",
    "md:col-span-2 lg:col-span-12",
  ];

  return (
    <section className="container-nur py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>{dict.categories.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-5xl">
            {dict.categories.title}
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">{dict.categories.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {items.map((item, i) => {
          const Icon = categoryIcons[i];
          const wide = spans[i].includes("col-span-12");
          return (
            <Reveal
              key={item.name}
              delay={i * 60}
              className={`group surface flex gap-5 p-6 transition-all duration-300
                hover:-translate-y-1 hover:border-coral-200 hover:shadow-card
                ${spans[i]} ${wide ? "items-center" : "flex-col"}`}
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#fff0de,#f9e4f2_60%,#e7e9fa)]
                  text-royal-700 transition-colors group-hover:text-coral-600"
              >
                <Icon size={24} weight="duotone" />
              </span>
              <div className={wide ? "flex-1" : ""}>
                <h3 className="text-lg font-bold text-royal-800">{item.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href={href(lang, "categories")} className="btn-ghost">
          {dict.cta.allCategories}
          <ArrowRight size={18} weight="bold" />
        </Link>
        <p className="text-sm text-ink-muted">{dict.categories.note}</p>
      </div>
    </section>
  );
}
