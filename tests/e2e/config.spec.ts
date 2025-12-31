/**
 * Configuration Validation Tests
 *
 * These tests verify that the core configuration is correct:
 * - All calculators in config have routes
 * - All calculators have translation files
 * - All calculator components exist as files
 *
 * Coverage: ~10 tests (fast, no browser navigation)
 */

import { test, expect } from '@playwright/test';
import { calculators } from '../../src/config/calculators';
import { languages } from '../../src/config/languages';
import { getSlug } from '../../src/config/routes';
import { existsSync } from 'fs';
import { join } from 'path';

test.describe('Configuration Validation', () => {
  test('All calculators have component files', () => {
    for (const calculatorId of calculators) {
      // Convert calculator-id to CalculatorIdCalculator.astro format
      const componentName = calculatorId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Calculator.astro';

      const componentPath = join(process.cwd(), 'src', 'components', 'calculators', componentName);
      expect(existsSync(componentPath), `Component file should exist: ${componentPath}`).toBe(true);
    }
  });

  test('All calculators have route configurations', () => {
    for (const calculatorId of calculators) {
      for (const lang of Object.keys(languages)) {
        const slug = getSlug(calculatorId, lang as any);
        expect(slug, `Calculator ${calculatorId} should have a slug for language ${lang}`).toBeTruthy();
        expect(slug.length, `Slug for ${calculatorId} in ${lang} should not be empty`).toBeGreaterThan(0);
      }
    }
  });

  test('All calculators have translation files for all languages', () => {
    for (const calculatorId of calculators) {
      for (const lang of Object.keys(languages)) {
        const translationPath = join(process.cwd(), 'public', 'locales', lang, 'calculators', `${calculatorId}.json`);
        expect(existsSync(translationPath), `Translation file should exist: ${translationPath}`).toBe(true);
      }
    }
  });

  test('No duplicate calculator IDs', () => {
    const uniqueIds = new Set(calculators);
    expect(uniqueIds.size, 'All calculator IDs should be unique').toBe(calculators.length);
  });
});
