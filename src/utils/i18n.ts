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

import esCalorie from '../../public/locales/es/calculators/calorie.json';
import enCalorie from '../../public/locales/en/calculators/calorie.json';
import ptCalorie from '../../public/locales/pt/calculators/calorie.json';
import frCalorie from '../../public/locales/fr/calculators/calorie.json';
import hiCalorie from '../../public/locales/hi/calculators/calorie.json';
import deCalorie from '../../public/locales/de/calculators/calorie.json';
import itCalorie from '../../public/locales/it/calculators/calorie.json';

import esIdealWeight from '../../public/locales/es/calculators/idealWeight.json';
import enIdealWeight from '../../public/locales/en/calculators/idealWeight.json';
import ptIdealWeight from '../../public/locales/pt/calculators/idealWeight.json';
import frIdealWeight from '../../public/locales/fr/calculators/idealWeight.json';
import hiIdealWeight from '../../public/locales/hi/calculators/idealWeight.json';
import deIdealWeight from '../../public/locales/de/calculators/idealWeight.json';
import itIdealWeight from '../../public/locales/it/calculators/idealWeight.json';

import esBodyFat from '../../public/locales/es/calculators/bodyFat.json';
import enBodyFat from '../../public/locales/en/calculators/bodyFat.json';
import ptBodyFat from '../../public/locales/pt/calculators/bodyFat.json';
import frBodyFat from '../../public/locales/fr/calculators/bodyFat.json';
import hiBodyFat from '../../public/locales/hi/calculators/bodyFat.json';
import deBodyFat from '../../public/locales/de/calculators/bodyFat.json';
import itBodyFat from '../../public/locales/it/calculators/bodyFat.json';

import esBMR from '../../public/locales/es/calculators/bmr.json';
import enBMR from '../../public/locales/en/calculators/bmr.json';
import ptBMR from '../../public/locales/pt/calculators/bmr.json';
import frBMR from '../../public/locales/fr/calculators/bmr.json';
import hiBMR from '../../public/locales/hi/calculators/bmr.json';
import deBMR from '../../public/locales/de/calculators/bmr.json';
import itBMR from '../../public/locales/it/calculators/bmr.json';

import esTDEE from '../../public/locales/es/calculators/tdee.json';
import enTDEE from '../../public/locales/en/calculators/tdee.json';
import ptTDEE from '../../public/locales/pt/calculators/tdee.json';
import frTDEE from '../../public/locales/fr/calculators/tdee.json';
import hiTDEE from '../../public/locales/hi/calculators/tdee.json';
import deTDEE from '../../public/locales/de/calculators/tdee.json';
import itTDEE from '../../public/locales/it/calculators/tdee.json';

interface Translations {
  [key: string]: any;
}

const translations: Record<Locale, Translations> = {
  es: {
    ...esCommon,
    categories: esCategories,
    bmi: esBMI,
    calorie: esCalorie,
    idealWeight: esIdealWeight,
    bodyFat: esBodyFat,
    bmr: esBMR,
    tdee: esTDEE,
  },
  en: {
    ...enCommon,
    categories: enCategories,
    bmi: enBMI,
    calorie: enCalorie,
    idealWeight: enIdealWeight,
    bodyFat: enBodyFat,
    bmr: enBMR,
    tdee: enTDEE,
  },
  pt: {
    ...ptCommon,
    categories: ptCategories,
    bmi: ptBMI,
    calorie: ptCalorie,
    idealWeight: ptIdealWeight,
    bodyFat: ptBodyFat,
    bmr: ptBMR,
    tdee: ptTDEE,
  },
  fr: {
    ...frCommon,
    categories: frCategories,
    bmi: frBMI,
    calorie: frCalorie,
    idealWeight: frIdealWeight,
    bodyFat: frBodyFat,
    bmr: frBMR,
    tdee: frTDEE,
  },
  hi: {
    ...hiCommon,
    categories: hiCategories,
    bmi: hiBMI,
    calorie: hiCalorie,
    idealWeight: hiIdealWeight,
    bodyFat: hiBodyFat,
    bmr: hiBMR,
    tdee: hiTDEE,
  },
  de: {
    ...deCommon,
    categories: deCategories,
    bmi: deBMI,
    calorie: deCalorie,
    idealWeight: deIdealWeight,
    bodyFat: deBodyFat,
    bmr: deBMR,
    tdee: deTDEE,
  },
  it: {
    ...itCommon,
    categories: itCategories,
    bmi: itBMI,
    calorie: itCalorie,
    idealWeight: itIdealWeight,
    bodyFat: itBodyFat,
    bmr: itBMR,
    tdee: itTDEE,
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
    calorie: {
      es: '/calculadoras/calorias/',
      en: '/en/calculators/calorie/',
      pt: '/pt/calculators/calorie/',
      fr: '/fr/calculators/calorie/',
      hi: '/hi/calculators/calorie/',
      de: '/de/calculators/calorie/',
      it: '/it/calculators/calorie/',
    },
    idealWeight: {
      es: '/calculadoras/peso-ideal/',
      en: '/en/calculators/ideal-weight/',
      pt: '/pt/calculators/ideal-weight/',
      fr: '/fr/calculators/ideal-weight/',
      hi: '/hi/calculators/ideal-weight/',
      de: '/de/calculators/ideal-weight/',
      it: '/it/calculators/ideal-weight/',
    },
    bodyFat: {
      es: '/calculadoras/grasa-corporal/',
      en: '/en/calculators/body-fat/',
      pt: '/pt/calculators/body-fat/',
      fr: '/fr/calculators/body-fat/',
      hi: '/hi/calculators/body-fat/',
      de: '/de/calculators/body-fat/',
      it: '/it/calculators/body-fat/',
    },
    tdee: {
      es: '/calculadoras/gect/',
      en: '/en/calculators/tdee/',
      pt: '/pt/calculators/tdee/',
      fr: '/fr/calculators/tdee/',
      hi: '/hi/calculators/tdee/',
      de: '/de/calculators/tdee/',
      it: '/it/calculators/tdee/',
    },
    bmr: {
      es: '/calculadoras/tmb/',
      en: '/en/calculators/bmr/',
      pt: '/pt/calculators/bmr/',
      fr: '/fr/calculators/bmr/',
      hi: '/hi/calculators/bmr/',
      de: '/de/calculators/bmr/',
      it: '/it/calculators/bmr/',
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
