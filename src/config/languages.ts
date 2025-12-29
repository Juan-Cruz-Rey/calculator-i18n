/**
 * Language configuration for all supported locales
 *
 * This file defines all supported languages in the application.
 * Each language includes:
 * - name: Native language name
 * - folder: URL path segment for calculator listings (e.g., /calculators/, /calculadoras/)
 * - dir: Text direction (ltr or rtl)
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
  folder: string;
  dir: 'ltr' | 'rtl';
}

export const languages: Record<Locale, LanguageConfig> = {
  es: {
    name: 'Español',
    folder: 'calculadoras',
    dir: 'ltr'
  },
  en: {
    name: 'English',
    folder: 'calculators',
    dir: 'ltr'
  },
  pt: {
    name: 'Português',
    folder: 'calculadoras',
    dir: 'ltr'
  },
  fr: {
    name: 'Français',
    folder: 'calculatrices',
    dir: 'ltr'
  },
  hi: {
    name: 'हिन्दी',
    folder: 'calculators',
    dir: 'ltr'
  },
  de: {
    name: 'Deutsch',
    folder: 'rechner',
    dir: 'ltr'
  },
  it: {
    name: 'Italiano',
    folder: 'calcolatrici',
    dir: 'ltr'
  },
  pl: {
    name: 'Polski',
    folder: 'kalkulatory',
    dir: 'ltr'
  },
  nl: {
    name: 'Nederlands',
    folder: 'rekenmachines',
    dir: 'ltr'
  },
  tr: {
    name: 'Türkçe',
    folder: 'hesap-makineleri',
    dir: 'ltr'
  },
  sv: {
    name: 'Svenska',
    folder: 'kalkylatorer',
    dir: 'ltr'
  },
  ru: {
    name: 'Русский',
    folder: 'kalkulyatory',
    dir: 'ltr'
  }
};

export const defaultLocale: Locale = 'es';

/**
 * Get list of all supported locale codes
 */
export function getSupportedLocales(): Locale[] {
  return Object.keys(languages) as Locale[];
}

/**
 * Check if a locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale in languages;
}
