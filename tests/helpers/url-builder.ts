/**
 * URL builder helpers for tests
 *
 * This file provides utilities to build URLs for different pages
 * across all supported languages and calculators.
 */

import type { Locale } from './languages';
import type { CalculatorId } from './calculators';
import { languages, defaultLocale } from './languages';
import { routes } from './routes';

/**
 * Build homepage URL for a given language
 *
 * @param locale - Language code
 * @returns Homepage URL (e.g., '/' for English, '/es/' for Spanish)
 */
export function getHomepageUrl(locale: Locale): string {
  if (locale === defaultLocale) {
    return '/';
  }
  return `/${locale}/`;
}

/**
 * Build calculator URL for a given calculator and language
 *
 * @param calculatorId - Calculator identifier
 * @param locale - Language code
 * @returns Calculator URL (e.g., '/calculators/bmi/' for English BMI calculator)
 */
export function getCalculatorUrl(calculatorId: CalculatorId, locale: Locale): string {
  const slug = routes[locale][calculatorId];
  const folder = languages[locale].folder;

  if (locale === defaultLocale) {
    return `/${folder}/${slug}/`;
  }
  return `/${locale}/${folder}/${slug}/`;
}

/**
 * Build all calculator URLs for a given language
 *
 * @param locale - Language code
 * @param calculatorIds - Array of calculator IDs
 * @returns Array of calculator URLs
 */
export function getAllCalculatorUrls(locale: Locale, calculatorIds: CalculatorId[]): string[] {
  return calculatorIds.map(id => getCalculatorUrl(id, locale));
}

/**
 * Get expected alternate language URLs for a calculator
 *
 * @param calculatorId - Calculator identifier
 * @param excludeLocale - Locale to exclude (typically the current one)
 * @returns Object mapping locale to URL
 */
export function getAlternateUrls(
  calculatorId: CalculatorId,
  excludeLocale?: Locale
): Record<Locale, string> {
  const allLocales: Locale[] = ['es', 'en', 'pt', 'fr', 'hi', 'de', 'it', 'pl', 'nl', 'tr', 'sv', 'ru'];
  const locales = excludeLocale
    ? allLocales.filter(l => l !== excludeLocale)
    : allLocales;

  const urls: Partial<Record<Locale, string>> = {};

  for (const locale of locales) {
    urls[locale] = getCalculatorUrl(calculatorId, locale);
  }

  return urls as Record<Locale, string>;
}
