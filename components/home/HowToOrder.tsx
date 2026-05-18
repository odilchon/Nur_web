import { ChatCircleDots, ListChecks, Moped } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "../ui";
import { Reveal } from "../Reveal";
import type { Dictionary } from "@/lib/dictionaries/ru";

const stepIcons = [ChatCircleDots, ListChecks, Moped];

/** «Как заказать» — нумерованный процесс из трёх шагов. */
export function HowToOrder({ dict }: { dict: Dictionary }) {
  return (
    <section id="how" className="border-y border-royal-100 bg-royal-50/50">
      <div className="container-nur py-20">
        <div className="max-w-2xl">
          <Eyebrow>{dict.howToOrder.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-5xl">
            {dict.howToOrder.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {dict.howToOrder.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {dict.howToOrder.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal as="li" key={step.title} delay={i * 100} className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-extrabold tracking-tight text-royal-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-royal-500 text-cream">
                    <Icon size={22} weight="duotone" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-royal-800">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{step.desc}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
