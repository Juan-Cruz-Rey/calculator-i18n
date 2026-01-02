/**
 * Calculator category configuration
 *
 * This file defines all calculator categories and their mappings.
 * Categories help organize calculators by their primary purpose.
 *
 * Category names are stored directly in MDX frontmatter and should be
 * translated for each language.
 */

import type { CalculatorId } from './calculators';
import type { Locale } from './languages';

/**
 * Available calculator category IDs (internal use)
 */
export type CategoryId =
  | 'health-fitness'
  | 'pregnancy'
  | 'nutrition'
  | 'body-composition'
  | 'date-time'
  | 'financial'
  | 'general';

/**
 * Category display names by language
 */
export const categoryNames: Record<CategoryId, Record<Locale, string>> = {
  'health-fitness': {
    'en': 'Health & Fitness',
    'es': 'Salud y Fitness',
    'pt': 'Saúde e Fitness',
    'fr': 'Santé et Fitness',
    'hi': 'स्वास्थ्य और फिटनेस',
    'de': 'Gesundheit und Fitness',
    'it': 'Salute e Fitness',
    'pl': 'Zdrowie i Fitness',
    'nl': 'Gezondheid en Fitness',
    'tr': 'Sağlık ve Fitness',
    'sv': 'Hälsa och Fitness',
    'ru': 'Здоровье и Фитнес'
  },
  'pregnancy': {
    'en': 'Pregnancy',
    'es': 'Embarazo',
    'pt': 'Gravidez',
    'fr': 'Grossesse',
    'hi': 'गर्भावस्था',
    'de': 'Schwangerschaft',
    'it': 'Gravidanza',
    'pl': 'Ciąża',
    'nl': 'Zwangerschap',
    'tr': 'Hamilelik',
    'sv': 'Graviditet',
    'ru': 'Беременность'
  },
  'nutrition': {
    'en': 'Nutrition',
    'es': 'Nutrición',
    'pt': 'Nutrição',
    'fr': 'Nutrition',
    'hi': 'पोषण',
    'de': 'Ernährung',
    'it': 'Nutrizione',
    'pl': 'Odżywianie',
    'nl': 'Voeding',
    'tr': 'Beslenme',
    'sv': 'Näring',
    'ru': 'Питание'
  },
  'body-composition': {
    'en': 'Body Composition',
    'es': 'Composición Corporal',
    'pt': 'Composição Corporal',
    'fr': 'Composition Corporelle',
    'hi': 'शारीरिक संरचना',
    'de': 'Körperzusammensetzung',
    'it': 'Composizione Corporea',
    'pl': 'Skład Ciała',
    'nl': 'Lichaamssamenstelling',
    'tr': 'Vücut Kompozisyonu',
    'sv': 'Kroppssammansättning',
    'ru': 'Состав Тела'
  },
  'date-time': {
    'en': 'Date & Time',
    'es': 'Fecha y Hora',
    'pt': 'Data e Hora',
    'fr': 'Date et Heure',
    'hi': 'तारीख और समय',
    'de': 'Datum und Zeit',
    'it': 'Data e Ora',
    'pl': 'Data i Czas',
    'nl': 'Datum en Tijd',
    'tr': 'Tarih ve Saat',
    'sv': 'Datum och Tid',
    'ru': 'Дата и Время'
  },
  'financial': {
    'en': 'Financial',
    'es': 'Financiero',
    'pt': 'Financeiro',
    'fr': 'Financier',
    'hi': 'वित्तीय',
    'de': 'Finanziell',
    'it': 'Finanziario',
    'pl': 'Finansowy',
    'nl': 'Financieel',
    'tr': 'Finansal',
    'sv': 'Finansiellt',
    'ru': 'Финансовый'
  },
  'general': {
    'en': 'General',
    'es': 'General',
    'pt': 'Geral',
    'fr': 'Général',
    'hi': 'सामान्य',
    'de': 'Allgemein',
    'it': 'Generale',
    'pl': 'Ogólny',
    'nl': 'Algemeen',
    'tr': 'Genel',
    'sv': 'Allmänt',
    'ru': 'Общий'
  }
};

/**
 * Mapping of calculator IDs to their categories
 */
export const calculatorCategories: Record<CalculatorId, CategoryId> = {
  // Health & Fitness
  'bmi': 'health-fitness',
  'bmr': 'health-fitness',
  'tdee': 'health-fitness',
  'heart-rate': 'health-fitness',
  'gfr': 'health-fitness',
  'bac': 'health-fitness',
  'sleep': 'health-fitness',
  'calories-burned': 'health-fitness',
  'one-rep-max': 'health-fitness',
  'pace': 'health-fitness',

  // Pregnancy
  'pregnancy': 'pregnancy',
  'due-date': 'pregnancy',
  'pregnancy-conception': 'pregnancy',
  'pregnancy-weight-gain': 'pregnancy',
  'ovulation': 'pregnancy',
  'period': 'pregnancy',

  // Nutrition
  'calorie': 'nutrition',
  'protein': 'nutrition',
  'carbohydrate': 'nutrition',
  'macro': 'nutrition',
  'fat-intake': 'nutrition',
  'weight-watchers': 'nutrition',

  // Body Composition
  'body-fat': 'body-composition',
  'army-body-fat': 'body-composition',
  'body-frame': 'body-composition',
  'body-type': 'body-composition',
  'bsa': 'body-composition',
  'lean-body-mass': 'body-composition',
  'ideal-weight': 'body-composition',
  'healthy-weight': 'body-composition',
  'waist-hip': 'body-composition',

  // Date & Time
  'age': 'date-time',
  'date': 'date-time',

  // Financial
  'tip': 'financial',

  // General
  'percentage': 'general',
  'blood-type': 'general'
};

/**
 * Get category for a calculator
 */
export function getCalculatorCategory(calculatorId: CalculatorId): CategoryId {
  return calculatorCategories[calculatorId];
}

/**
 * Get all calculators in a category
 */
export function getCalculatorsByCategory(categoryId: CategoryId): CalculatorId[] {
  return Object.entries(calculatorCategories)
    .filter(([_, category]) => category === categoryId)
    .map(([calcId]) => calcId as CalculatorId);
}

/**
 * Get the translated category name for a calculator
 */
export function getCategoryName(calculatorId: CalculatorId, locale: Locale): string {
  const categoryId = calculatorCategories[calculatorId];
  return categoryNames[categoryId][locale];
}
