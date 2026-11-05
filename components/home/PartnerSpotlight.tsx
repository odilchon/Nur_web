"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Clock, Flower, InstagramLogo, PhoneCall, Pizza, Sparkle, WhatsappLogo } from "@phosphor-icons/react";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

const flowerCopy = {
  ru: {
    title: "Цветы от Arichoco — с заботой до вашей двери",
    text: "Живые и шоколадные букеты из цветочного магазина «Гулканд». Выберите подарок в Instagram или напишите в WhatsApp — согласуйте букет и доставку с магазином.",
    cta: "Выбрать букет", hours: "Пн–Сб · 09:00–18:00", badge: "Цветы и подарки",
    previous: "Предыдущий партнёр", next: "Следующий партнёр", pause: "Остановить слайдер", play: "Запустить слайдер",
  },
  en: {
    title: "Flowers from Arichoco — delivered with care",
    text: "Fresh and chocolate bouquets from Gulkand flower shop. Choose a gift on Instagram or message the shop on WhatsApp to arrange your bouquet and delivery.",
    cta: "Choose a bouquet", hours: "Mon–Sat · 09:00–18:00", badge: "Flowers and gifts",
    previous: "Previous partner", next: "Next partner", pause: "Pause slideshow", play: "Play slideshow",
  },
  tg: {
    title: "Гулҳо аз Arichoco — бо ғамхорӣ то дари шумо",
    text: "Гулдастаҳои зинда ва шоколадӣ аз мағозаи «Гулканд». Тӯҳфаро дар Instagram интихоб кунед ё ба WhatsApp нависед — гулдаста ва расониданро бо мағоза мувофиқа кунед.",
    cta: "Интихоби гулдаста", hours: "Дш–Шб · 09:00–18:00", badge: "Гулҳо ва тӯҳфаҳо",
    previous: "Шарики қаблӣ", next: "Шарики навбатӣ", pause: "Боздоштани слайдер", play: "Оғози слайдер",
  },
};

const joyCopy = {
  ru: { title: "Cafe Joy — вкусные моменты в Хороге", text: "Пицца, десерты и кофе — выбирайте любимые блюда Cafe Joy.", badge: "Кафе и доставка" },
  en: { title: "Cafe Joy — delicious moments in Khorog", text: "Pizza, desserts and coffee — discover your favourites at Cafe Joy.", badge: "Cafe and delivery" },
  tg: { title: "Cafe Joy — лаҳзаҳои болаззат дар Хоруғ", text: "Питса, шириниҳо ва қаҳва — хӯрокҳои дӯстдоштаатонро дар Cafe Joy интихоб кунед.", badge: "Кафе ва расонидан" },
};

const worldCopy = {
  ru: { title: "World Cuisine — вкусы всего мира в Хороге", text: "Блюда разных кухонь мира для уютного обеда с семьёй и друзьями.", badge: "Ресторан и доставка" },
  en: { title: "World Cuisine — flavours of the world in Khorog", text: "Dishes from around the world for a meal with family and friends.", badge: "Restaurant and delivery" },
  tg: { title: "World Cuisine — таъми ҷаҳон дар Хоруғ", text: "Таомҳои гуногуни ҷаҳон барои дастархон бо оила ва дӯстон.", badge: "Тарабхона ва расонидан" },
};

const kfkCopy = {
  ru: { title: "Khorog Fried Kitchen — любимые блюда в Хороге", text: "Хрустящая курица, роллы и картофель фри — выбирайте то, что нравится.", badge: "Кафе и доставка" },
  en: { title: "Khorog Fried Kitchen — favourites in Khorog", text: "Crispy chicken, wraps and fries — choose your favourites.", badge: "Cafe and delivery" },
  tg: { title: "Khorog Fried Kitchen — таомҳои дӯстдошта дар Хоруғ", text: "Мурғи бирён, ролл ва картошкаи фри — таоми дӯстдоштаатонро интихоб кунед.", badge: "Кафе ва расонидан" },
};

const luniCopy = {
  ru: { title: "Luni Coffee Shop — первая кофейня Хорога", text: "Кофе, десерты и выпечка от Luni. Ежедневно с 08:00 до 22:00.", badge: "Кофейня и доставка" },
  en: { title: "Luni Coffee Shop — Khorog’s first coffee shop", text: "Coffee, desserts and pastries from Luni. Open daily from 08:00 to 22:00.", badge: "Coffee shop and delivery" },
  tg: { title: "Luni Coffee Shop — аввалин қаҳвахонаи Хоруғ", text: "Қаҳва, шириниҳо ва нонпазӣ аз Luni. Ҳар рӯз аз 08:00 то 22:00.", badge: "Қаҳвахона ва расонидан" },
};

const davoCopy = {
  ru: { title: "Аптека «Даво» — забота о здоровье рядом", text: "Лекарства, витамины и медицинские товары в аптеке «Даво» в Хороге.", badge: "Аптека и доставка" },
  en: { title: "Davo Pharmacy — care close to home", text: "Medicines, vitamins and medical supplies at Davo Pharmacy in Khorog.", badge: "Pharmacy and delivery" },
  tg: { title: "Дорухонаи «Даво» — ғамхорӣ ба саломатӣ", text: "Доруҳо, витаминҳо ва молҳои тиббӣ дар дорухонаи «Даво» дар Хоруғ.", badge: "Дорухона ва расонидан" },
};

const instagram = "https://www.instagram.com/arichoco_bouquet_khorog/";
const whatsapp = "https://wa.me/992933340040";

/** Displays the original profile avatar from the supplied screenshot. */
function ArichocoLogo() {
  return <svg viewBox="124 184 300 300" aria-hidden className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white"><image href="/arichoco-profile.png" width="1652" height="1182" /></svg>;
}

export function PartnerSpotlight({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const p = dict.partnerSpotlight;
  const f = flowerCopy[lang];
  const j = joyCopy[lang];
  const w = worldCopy[lang];
  const k = kfkCopy[lang];
  const l = luniCopy[lang];
  const d = davoCopy[lang];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const change = (delta: number) => setActive((current) => (current + delta + 7) % 7);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!reduced.matches);
    const update = () => { if (reduced.matches) setPlaying(false); };
    reduced.addEventListener("change", update);
    return () => reduced.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") setActive((current) => (current + 1) % 7);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, active]);

  return (
    <section className="container-nur pt-14" aria-label={p.eyebrow}>
      <div className="partner-carousel relative isolate overflow-hidden rounded-[2rem] bg-royal-800 text-cream shadow-soft"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={(event) => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          const start = touch.current;
          touch.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) change(dx < 0 ? 1 : -1);
        }}>
        <div className="partner-track flex items-stretch" style={{ transform: `translateX(-${active * 100}%)` }}>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => {
            const floral = index === 1;
            const joy = index === 2;
            const world = index === 3;
            const kfk = index === 4;
            const luni = index === 5;
            const davo = index === 6;
            const hidden = active !== index;
            return (
              <article key={index} aria-hidden={hidden} className={`relative grid w-full shrink-0 overflow-hidden lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] ${floral ? "bg-[#263d3d]" : joy ? "bg-[#073634]" : world ? "bg-[#49312b]" : kfk ? "bg-[#652521]" : luni ? "bg-[#49352d]" : davo ? "bg-[#193e58]" : "bg-royal-800"}`}>
                <div aria-hidden className={`pointer-events-none absolute inset-0 ${floral ? "bg-[radial-gradient(ellipse_at_12%_12%,rgba(222,158,165,.32),transparent_70%)]" : "bg-[radial-gradient(ellipse_at_12%_12%,rgba(222,82,70,.32),transparent_70%)]"}`} />
                <div className="relative flex flex-col justify-center px-14 py-9 sm:px-16 lg:py-12">
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.15em] text-cream/90">
                    {davo ? <span aria-hidden="true" className="text-lg font-bold leading-none text-red-400">✚</span> : floral ? <Flower size={17} className="text-[#efbdc3]" /> : world ? <span aria-hidden="true" className="text-base leading-none">🥟</span> : joy ? <Pizza size={17} className="text-amber-400" /> : <Sparkle size={17} weight="fill" className="text-coral-400" />}{p.eyebrow}
                  </p>
                  <h2 className="mt-5 max-w-xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">{floral ? f.title : joy ? j.title : world ? w.title : kfk ? k.title : luni ? l.title : davo ? d.title : p.title}</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">{floral ? f.text : joy ? j.text : world ? w.text : kfk ? k.text : luni ? l.text : davo ? d.text : p.text}</p>
                  {!joy && !world && !kfk && !luni && !davo && <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a href={floral ? instagram : site.phoneHref} tabIndex={hidden ? -1 : 0} target={floral ? "_blank" : undefined} rel={floral ? "noopener noreferrer" : undefined} className="btn bg-cream text-royal-800 hover:bg-white active:translate-y-px">
                      {floral ? <InstagramLogo size={20} weight="bold" /> : <PhoneCall size={20} weight="bold" />}{floral ? f.cta : p.cta}
                    </a>
                    {floral ? <a href={whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : 0} className="flex items-center gap-2 text-sm font-semibold text-cream/85 hover:text-white"><WhatsappLogo size={19} />+992 93 334 0040</a> : <span className="text-sm font-semibold text-cream/70">{site.phone}</span>}
                  </div>}
                  {floral && <p className="mt-5 flex items-center gap-2 text-xs text-cream/65"><Clock size={15} />{f.hours}</p>}
                </div>
                <div className="relative min-h-[19rem] overflow-hidden lg:min-h-[31rem]">
                  {floral ? (
                    <Image src="/arichoco-banner-v3.png" alt={f.badge} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  ) : davo ? <Image src="/davo-pharmacy.png" alt="Аптека Даво" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /> : luni ? <Image src="/luni-food.png" alt="Luni Coffee Shop" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /> : kfk ? <Image src="/kfk-food.png" alt="Khorog Fried Kitchen" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /> : world ? <Image src="/world-cuisine-food.png" alt="World Cuisine" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /> : joy ? <Image src="/cafe-joy-food.png" alt="Пицца, десерт и кофе Cafe Joy" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /> : <Image src="/foodchaqchaq.jpg" alt="CHAQ CHAQ" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />}
                  <div aria-hidden className={`absolute inset-0 bg-gradient-to-t ${floral ? "from-[#18302f]/75" : "from-royal-900/70"} via-transparent to-transparent`} />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-3xl border border-white/60 bg-cream/85 p-4 text-royal-800 shadow-card backdrop-blur-xl sm:left-6 sm:right-6">
                    {floral ? <ArichocoLogo /> : davo ? <Image src="/davo-logo.png" alt="" width={128} height={128} className="h-16 w-16 shrink-0 rounded-full bg-white object-contain" /> : luni ? <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eee9e2]"><Image src="/luni-logo.png" alt="" width={398} height={338} className="h-full w-full object-contain" /></span> : kfk ? <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"><Image src="/kfk-logo.png" alt="" width={744} height={456} className="w-full object-contain" /></span> : world ? <svg viewBox="424 73 150 150" aria-hidden className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white"><image href="/world-cuisine-profile.png" width="1566" height="1648" /></svg> : joy ? <Image src="/cafe-joy-logo.png" alt="" width={150} height={150} className="h-16 w-16 shrink-0 rounded-full object-cover" /> : <Image src="/chaqchaq.png" alt="" width={600} height={600} className="h-16 w-16 shrink-0 rounded-2xl object-contain" />}
                    <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-royal-500">{floral ? f.badge : joy ? j.badge : world ? w.badge : kfk ? k.badge : luni ? l.badge : davo ? d.badge : p.badge}</p><p className="mt-1 text-2xl font-extrabold tracking-tight">{floral ? "Arichoco" : joy ? "Cafe Joy" : world ? "World Cuisine" : kfk ? "Khorog Fried Kitchen" : luni ? "Luni Coffee Shop" : davo ? "Даво" : "CHAQ CHAQ"}</p></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button type="button" onClick={() => change(-1)} aria-label={f.previous} className="absolute left-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-white drop-shadow-lg transition-colors hover:bg-black/20 sm:left-4"><ArrowLeft size={19} /></button>
        <button type="button" onClick={() => change(1)} aria-label={f.next} className="absolute right-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-white drop-shadow-lg transition-colors hover:bg-black/20 sm:right-4"><ArrowRight size={19} /></button>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {["CHAQ CHAQ", "Arichoco", "Cafe Joy", "World Cuisine", "Khorog Fried Kitchen", "Luni Coffee Shop", "Даво"].map((name, index) => <button key={name} type="button" onClick={() => setActive(index)} aria-label={name} aria-pressed={active === index} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${active === index ? "bg-royal-800 text-white" : "bg-white/70 text-ink-soft hover:bg-royal-50"}`}>{name}</button>)}
        </div>
      </div>
    </section>
  );
}
