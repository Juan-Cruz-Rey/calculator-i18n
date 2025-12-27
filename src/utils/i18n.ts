export type Locale = 'es' | 'en' | 'pt' | 'fr' | 'hi' | 'de' | 'it';

// Import common translations
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';
import ptCommon from '../../public/locales/pt/common.json';
import frCommon from '../../public/locales/fr/common.json';
import hiCommon from '../../public/locales/hi/common.json';
import deCommon from '../../public/locales/de/common.json';
import itCommon from '../../public/locales/it/common.json';

// Import categories translations
import esCategories from '../../public/locales/es/categories.json';
import enCategories from '../../public/locales/en/categories.json';
import ptCategories from '../../public/locales/pt/categories.json';
import frCategories from '../../public/locales/fr/categories.json';
import hiCategories from '../../public/locales/hi/categories.json';
import deCategories from '../../public/locales/de/categories.json';
import itCategories from '../../public/locales/it/categories.json';

// Import calculator-specific translations
import esBMI from '../../public/locales/es/calculators/bmi.json';
import enBMI from '../../public/locales/en/calculators/bmi.json';
import ptBMI from '../../public/locales/pt/calculators/bmi.json';
import frBMI from '../../public/locales/fr/calculators/bmi.json';
import hiBMI from '../../public/locales/hi/calculators/bmi.json';
import deBMI from '../../public/locales/de/calculators/bmi.json';
import itBMI from '../../public/locales/it/calculators/bmi.json';

interface Translations {
  [key: string]: any;
}

const translations: Record<Locale, Translations> = {
  es: {
    ...esCommon,
    categories: esCategories,
    bmi: esBMI,
  },
  en: {
    ...enCommon,
    categories: enCategories,
    bmi: enBMI,
  },
  pt: {
    ...ptCommon,
    categories: ptCategories,
    bmi: ptBMI,
  },
  fr: {
    ...frCommon,
    categories: frCategories,
    bmi: frBMI,
  },
  hi: {
    ...hiCommon,
    categories: hiCategories,
    bmi: hiBMI,
  },
  de: {
    ...deCommon,
    categories: deCategories,
    bmi: deBMI,
  },
  it: {
    ...itCommon,
    categories: itCategories,
    bmi: itBMI,
  },
};

/**
 * Get translation for a key
 * @param key - Translation key (e.g., 'site.title' or 'bmi:form.title')
 * @param locale - Language locale
 */
export function t(key: string, locale: Locale = 'es'): string {
  const parts = key.split(':');
  let namespace = '';
  let path = '';

  if (parts.length === 2) {
    namespace = parts[0];
    path = parts[1];
  } else {
    path = key;
  }

  const keys = path.split('.');
  let value: any = namespace ? translations[locale][namespace] : translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Language configuration
 */
export const languageConfig: Record<Locale, { name: string; nativeName: string; path: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', path: '' },
  en: { name: 'English', nativeName: 'English', path: '/en' },
  pt: { name: 'Portuguese', nativeName: 'Português', path: '/pt' },
  fr: { name: 'French', nativeName: 'Français', path: '/fr' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', path: '/hi' },
  de: { name: 'German', nativeName: 'Deutsch', path: '/de' },
  it: { name: 'Italian', nativeName: 'Italiano', path: '/it' },
};

/**
 * Get locale-specific URL
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'es') {
    // Spanish is default, no prefix
    return path;
  }

  const langPath = languageConfig[locale].path;
  if (path === '/') return langPath || '/';
  return `${langPath}${path}`;
}

/**
 * Get alternate locale path for a given calculator
 */
export function getAlternatePath(currentPath: string, targetLocale: Locale, calculator?: string): string {
  // Remove leading/trailing slashes for processing
  const normalized = currentPath.replace(/^\/|\/$/g, '');

  // Base paths mapping
  const basePaths: Record<string, Record<Locale, string>> = {
    '': {
      es: '/',
      en: '/en/',
      pt: '/pt/',
      fr: '/fr/',
      hi: '/hi/',
      de: '/de/',
      it: '/it/',
    },
  };

  // Calculator paths (can be extended for each calculator)
  const calculatorPaths = {
    bmi: {
      es: '/calculadoras/imc/',
      en: '/en/calculators/bmi/',
      pt: '/pt/calculators/bmi/',
      fr: '/fr/calculators/bmi/',
      hi: '/hi/calculators/bmi/',
      de: '/de/calculators/bmi/',
      it: '/it/calculators/bmi/',
    },
  };

  // Check if it's a calculator page
  if (calculator && calculatorPaths[calculator as keyof typeof calculatorPaths]) {
    return calculatorPaths[calculator as keyof typeof calculatorPaths][targetLocale];
  }

  // Check base paths
  if (basePaths[normalized]) {
    return basePaths[normalized][targetLocale];
  }

  // Fallback to language root
  return languageConfig[targetLocale].path || '/';
}
