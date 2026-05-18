import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, getDictionary } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type LangParams = { params: { lang: string } };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: LangParams): Metadata {
  if (!isLocale(params.lang)) return {};
  const dict = getDictionary(params.lang);
  return {
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
  };
}

export default function LangLayout({
  children,
  params,
}: LangParams & { children: React.ReactNode }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);

  return (
    <div lang={lang} className="flex min-h-[100dvh] flex-col">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
