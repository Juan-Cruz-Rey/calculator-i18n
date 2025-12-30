/**
 * Language configuration for tests
 *
 * This file exports all supported languages for testing.
 * It mirrors the configuration from src/config/languages.ts
 *
 * When adding a new language:
 * 1. Add the locale to the Locale type
 * 2. Add the language config to the languages object
 * 3. Add the locale to allLocales array
 */

export type Locale =
  | 'es'
  | 'en'
  | 'pt'
  | 'fr'
  | 'hi'
  | 'de'
  | 'it'
  | 'pl'
  | 'nl'
  | 'tr'
  | 'sv'
  | 'ru';

export interface LanguageConfig {
  name: string;
  folder: string; // URL path for calculator listings
  dir: 'ltr' | 'rtl';
}

export const languages: Record<Locale, LanguageConfig> = {
  es: { name: 'Español', folder: 'calculadoras', dir: 'ltr' },
  en: { name: 'English', folder: 'calculators', dir: 'ltr' },
  pt: { name: 'Português', folder: 'calculadoras', dir: 'ltr' },
  fr: { name: 'Français', folder: 'calculatrices', dir: 'ltr' },
  hi: { name: 'हिन्दी', folder: 'calculators', dir: 'ltr' },
  de: { name: 'Deutsch', folder: 'rechner', dir: 'ltr' },
  it: { name: 'Italiano', folder: 'calcolatrici', dir: 'ltr' },
  pl: { name: 'Polski', folder: 'kalkulatory', dir: 'ltr' },
  nl: { name: 'Nederlands', folder: 'rekenmachines', dir: 'ltr' },
  tr: { name: 'Türkçe', folder: 'hesap-makineleri', dir: 'ltr' },
  sv: { name: 'Svenska', folder: 'kalkylatorer', dir: 'ltr' },
  ru: { name: 'Русский', folder: 'kalkulyatory', dir: 'ltr' }
};

export const defaultLocale: Locale = 'en';

/**
 * All supported locales as an array
 * Use this for iterating over all languages in tests
 */
export const allLocales: Locale[] = [
  'es', 'en', 'pt', 'fr', 'hi', 'de',
  'it', 'pl', 'nl', 'tr', 'sv', 'ru'
];

/**
 * Get locales other than the specified one
 * Useful for testing language selector links
 */
export function getOtherLocales(currentLocale: Locale): Locale[] {
  return allLocales.filter(locale => locale !== currentLocale);
}
