import { notFound } from "next/navigation";
import { isLocale, getDictionary } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { Categories } from "@/components/home/Categories";
import { HowToOrder } from "@/components/home/HowToOrder";
import { WhyNur } from "@/components/home/WhyNur";
import { Traction } from "@/components/home/Traction";
import { MissionTeaser } from "@/components/home/MissionTeaser";
import { AppCta } from "@/components/home/AppCta";
import { Faq } from "@/components/home/Faq";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <CategoryStrip dict={dict} />
      <Categories lang={lang} dict={dict} />
      <HowToOrder dict={dict} />
      <WhyNur dict={dict} />
      <Traction dict={dict} />
      <MissionTeaser lang={lang} dict={dict} />
      <AppCta dict={dict} />
      <Faq dict={dict} />
    </>
  );
}
