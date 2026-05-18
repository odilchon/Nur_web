import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  InstagramLogo,
  WhatsappLogo,
  Clock,
  MapPin,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { isLocale, getDictionary } from "@/lib/i18n";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { InstagramButton } from "@/components/OrderButtons";
import { site } from "@/lib/site";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  return { title: getDictionary(params.lang).contactsPage.title };
}

export default function ContactsPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);
  const c = dict.contactsPage;

  const cards = [
    {
      icon: Phone,
      label: c.phoneLabel,
      value: site.phone,
      href: site.phoneHref,
      external: false,
    },
    {
      icon: InstagramLogo,
      label: c.instagramLabel,
      value: `@${site.instagramHandle}`,
      href: site.instagramUrl,
      external: true,
    },
    {
      icon: WhatsappLogo,
      label: c.whatsappLabel,
      value: site.phone,
      href: site.whatsappUrl,
      external: true,
    },
    {
      icon: Clock,
      label: c.hoursLabel,
      value: site.workingHours,
      href: null,
      external: false,
    },
    {
      icon: MapPin,
      label: c.cityLabel,
      value: site.address[lang],
      href: null,
      external: false,
    },
  ];

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="container-nur py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-500">
                  <Icon size={24} weight="duotone" />
                </span>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                    {card.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-royal-800">
                    {card.value}
                  </p>
                </div>
                {card.href && (
                  <ArrowUpRight
                    size={18}
                    weight="bold"
                    className="absolute right-6 top-6 text-royal-300 transition-colors group-hover:text-royal-500"
                  />
                )}
              </>
            );
            const cls =
              "group surface relative p-6 transition-all duration-200";
            return (
              <Reveal key={card.label} delay={i * 60}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`${cls} block hover:-translate-y-1 hover:border-royal-300 hover:shadow-card`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}

          {/* Как сделать заказ */}
          <Reveal
            delay={cards.length * 60}
            className="grain relative flex flex-col justify-between overflow-hidden rounded-4xl bg-gradient-to-br from-glow-coral via-glow-violet to-glow-blue p-7 sm:col-span-2 lg:col-span-1"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-extrabold text-cream">
                {c.orderTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">
                {c.orderText}
              </p>
            </div>
            <InstagramButton dict={dict} className="relative z-10 mt-5 self-start" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
