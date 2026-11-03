import "server-only";
import { notFound } from "next/navigation";

const dictionaries = {
  en: () =>
    import("./en.json").then((m) => m.default),
  es: () =>
    import("./es.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<typeof getDictionaryByLocale>>;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionaryByLocale = async (locale: string) => {
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};
