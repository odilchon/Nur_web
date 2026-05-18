import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-cream px-6">
      <div className="text-center">
        <p className="text-6xl font-extrabold tracking-tight text-royal-200">
          404
        </p>
        <h1 className="mt-4 text-2xl font-extrabold text-royal-800">
          Страница не найдена
        </h1>
        <p className="mt-2 text-ink-soft">
          Похоже, такой страницы не существует.
        </p>
        <Link href={`/${defaultLocale}`} className="btn-primary mt-6">
          На главную
        </Link>
      </div>
    </main>
  );
}
