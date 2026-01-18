export type Locale = "fr" | "en";

export type I18nText = {
  fr: string;
  en: string;
};

export const pick = <T extends I18nText>(obj: T, locale: Locale) => obj[locale] ?? obj.fr;
