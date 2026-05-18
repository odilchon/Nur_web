import {
  Storefront,
  Basket,
  ForkKnife,
  Pill,
  Flower,
  Package,
  House,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

/**
 * Иконки категорий доставки — порядок совпадает с dict.categories.items
 * и dict.categoriesPage.base.
 */
export const categoryIcons: Icon[] = [
  Storefront, // Магазины и кондитерская
  Basket, // Базар
  ForkKnife, // Рестораны и кафе
  Pill, // Аптека
  Flower, // Цветы
  Package, // Карго до 5 кг
  House, // От двери до двери
];
