import Image from "next/image";
import { ArrowDown, Clock, CreditCard, Lightning, MapPin } from "@phosphor-icons/react/dist/ssr";
import { InstagramButton } from "../OrderButtons";
import { Eyebrow } from "../ui";
import { categoryIcons } from "../Icons";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ru";

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict;
  const tiles = dict.categories.items.slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-ambient" aria-hidden />
      <div className="container-nur relative z-10 grid min-h-[670px] items-center gap-10 py-16 lg:min-h-[720px] lg:grid-cols-2 lg:gap-4">
        <div className="relative z-10 text-center lg:text-left">
          <Eyebrow className="justify-center !text-[13px] !font-extrabold !tracking-[.1em] lg:justify-start">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-7 text-balance text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[1.01] tracking-[-.065em] text-royal-900">
            {hero.titleTop}
            <span className="mt-1 block text-brand-gradient">{hero.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-[650px] text-base leading-relaxed text-ink-soft sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <InstagramButton dict={dict} brand className="!px-7 !py-4" />
            <a href="#how" className="btn-ghost !border-royal-800/20 !bg-white/80 !px-7 !py-4">
              {hero.secondary}<ArrowDown size={17} weight="bold" />
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
            {[
              { Icon: Lightning, text: hero.chip1 },
              { Icon: Clock, text: hero.chip2 },
              { Icon: CreditCard, text: hero.chip3 },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs font-semibold text-royal-800 sm:text-sm">
                <Icon size={16} weight="fill" className="text-coral-500" />{text}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-product relative mx-auto flex min-h-[430px] w-full max-w-[650px] items-center justify-center sm:min-h-[520px]">
          <div className="hero-product-glow" aria-hidden />
          <div className="glass-card absolute bottom-[12%] left-[2%] z-20 rounded-2xl px-4 py-3 sm:left-[4%]">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-coral-500">Nur Delivery</span>
            <span className="mt-1 block text-sm font-bold text-royal-800">{hero.chip1}</span>
          </div>
          <div className="glass-card absolute right-[1%] top-[12%] z-20 rounded-2xl px-4 py-3 sm:right-[4%]">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-royal-500">{hero.chip3}</span>
            <span className="mt-1 flex items-center gap-1.5 text-sm font-bold text-royal-800"><MapPin size={16} weight="fill" className="text-coral-500" />{site.city[lang]}</span>
          </div>
          <div className="relative z-10 w-[260px] rotate-[-7deg] rounded-[2.7rem] border-[5px] border-white/90 bg-royal-900 p-2 shadow-[0_35px_80px_-18px_rgba(39,37,70,.38)] sm:w-[300px]">
            <div className="overflow-hidden rounded-[2.1rem] bg-cream">
              <div className="flex justify-between px-5 pt-4 text-[10px] font-semibold text-ink-muted"><span>09:41</span><span className="text-royal-400">● ● ●</span></div>
              <div className="px-5 pt-3">
                <p className="text-lg font-extrabold tracking-tight text-royal-800"><span className="font-light">Nur</span> Delivery</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-muted"><MapPin size={12} weight="fill" />{site.city[lang]}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                {tiles.map((tile, i) => {
                  const Icon = categoryIcons[i];
                  return <div key={tile.name} className="flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-2xl border border-royal-100 bg-white/80 px-1 py-2 text-center"><Icon size={19} weight="duotone" className="text-royal-500" /><span className="text-[9px] font-semibold leading-tight text-ink-soft">{tile.name}</span></div>;
                })}
              </div>
              <div className="px-4 pb-5"><div className="flex items-center justify-between rounded-2xl bg-royal-500 px-4 py-3"><span className="text-xs font-bold text-white">{dict.cta.instagram}</span><Lightning size={16} weight="fill" className="text-white" /></div></div>
            </div>
            <div className="glass-card absolute -left-9 top-20 grid h-16 w-16 place-items-center rounded-2xl p-2"><Image src="/nur-logo.png" alt="" width={1020} height={896} className="h-11 w-auto" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
