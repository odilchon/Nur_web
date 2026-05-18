"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { Eyebrow } from "../ui";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Аккордеон с частыми вопросами. Открыт один пункт за раз. */
export function Faq({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="container-nur py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>{dict.faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-5xl">
            {dict.faq.title}
          </h2>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-royal-100 border-y border-royal-100">
            {dict.faq.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg font-bold text-royal-800">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-royal-200 text-royal-500 transition-transform duration-300",
                        open && "rotate-45 bg-royal-500 text-cream",
                      )}
                    >
                      <Plus size={16} weight="bold" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
