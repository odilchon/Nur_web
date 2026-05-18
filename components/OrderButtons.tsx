import {
  InstagramLogo,
  AppleLogo,
  GooglePlayLogo,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/dictionaries/ru";

/** Бейдж магазина приложений. Ссылки — TODO, пока приложение в разработке. */
function StoreBadge({
  url,
  store,
  caption,
  icon: Icon,
}: {
  url: string;
  store: string;
  caption: string;
  icon: typeof AppleLogo;
}) {
  return (
    <a
      href={url}
      className="group inline-flex items-center gap-3 rounded-2xl bg-royal-800 px-4 py-2.5
        text-cream transition-all duration-200 hover:bg-royal-900 active:translate-y-px"
    >
      <Icon size={24} weight="fill" className="shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-cream/60">
          {caption}
        </span>
        <span className="text-sm font-bold">{store}</span>
      </span>
    </a>
  );
}

/** Магазины приложений — две кнопки App Store / Google Play. */
export function StoreBadges({
  dict,
  className,
}: {
  dict: Dictionary;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <StoreBadge
        url={site.appStoreUrl}
        store="App Store"
        caption={dict.cta.appSoon}
        icon={AppleLogo}
      />
      <StoreBadge
        url={site.googlePlayUrl}
        store="Google Play"
        caption={dict.cta.appSoon}
        icon={GooglePlayLogo}
      />
    </div>
  );
}

/** Главный CTA — заказ в Instagram. `brand` — кнопка в фирменном градиенте. */
export function InstagramButton({
  dict,
  className,
  brand = false,
}: {
  dict: Dictionary;
  className?: string;
  brand?: boolean;
}) {
  return (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(brand ? "btn-brand" : "btn-primary", className)}
    >
      <InstagramLogo size={20} weight="bold" />
      {dict.cta.instagram}
    </a>
  );
}
