# Nur Delivery — информационный сайт

Информационный сайт службы доставки **Nur Delivery** (г. Хорог, Таджикистан).
Заказы оформляются только через Instagram и приложение — на сайте функции заказа нет.

## Стек

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS v3**
- Шрифт **Manrope** (`next/font`), иконки **@phosphor-icons/react**
- Языки: русский, английский, таджикский (`/ru`, `/en`, `/tg`)

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000  (редирект на /ru)
npm run build    # продакшен-сборка
npm run start    # запуск собранного сайта
```

## Структура

- `app/[lang]/` — страницы: главная, `about`, `categories`, `contacts`, `partners`, `couriers`
- `components/` — общие компоненты и секции (`components/home/`)
- `lib/dictionaries/` — тексты на ru/en/tg
- `lib/site.ts` — контакты, ссылки, настройки бренда

## TODO перед публикацией

В коде помечены комментариями `TODO`. Заполните в `lib/site.ts`:

- ссылки App Store / Google Play (приложение в разработке);
- реальный email;
- точный адрес dark store.

Также: реальные фото команды на странице `about` (сейчас — инициалы в фирменном круге).
