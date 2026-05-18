import { Lightning, Tag, MapPinLine, HandHeart } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "../ui";
import { Reveal } from "../Reveal";
import type { Dictionary } from "@/lib/dictionaries/ru";

const whyIcons = [Lightning, Tag, MapPinLine, HandHeart];

/** «Почему Nur Delivery» — заголовок слева, список преимуществ справа. */
export function WhyNur({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-nur py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow>{dict.why.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-royal-800 md:text-4xl">
            {dict.why.title}
          </h2>
        </div>

        <ul className="divide-y divide-royal-100 lg:col-span-8">
          {dict.why.items.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 70}
                className="flex gap-5 py-6 first:pt-0"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-royal-50 text-royal-500">
                  <Icon size={24} weight="duotone" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-royal-800">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
