/**
 * Глобальные настройки сайта Nur Delivery.
 * Реальные данные взяты из презентации проекта и Instagram.
 * TODO-поля заполните, когда появятся ссылки на приложение, email и точный адрес.
 */
export const site = {
  name: "Nur Delivery",
  // Приложение в разработке — TODO: вставьте ссылки, когда приложение выйдет.
  appStoreUrl: "#", // TODO: App Store
  googlePlayUrl: "#", // TODO: Google Play
  // Instagram — основной канал заказа
  instagramUrl: "https://instagram.com/nurdelivery2026",
  instagramHandle: "nurdelivery2026",
  // Контакты
  phone: "+992 93 522 2899",
  phoneHref: "tel:+992935222899",
  whatsappUrl: "https://wa.me/992935222899",
  email: "hello@nurdelivery.tj", // TODO: укажите реальный email
  // Локация
  city: {
    ru: "Хорог",
    en: "Khorog",
    tg: "Хоруғ",
  },
  address: {
    ru: "г. Хорог, Таджикистан", // TODO: уточните адрес dark store
    en: "Khorog, Tajikistan",
    tg: "ш. Хоруғ, Тоҷикистон",
  },
  workingHours: "09:00 — 17:00",
  launchDate: "26.01.2026",
  foundedYear: 2026,
} as const;
