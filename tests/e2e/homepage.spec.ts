/**
 * Homepage Translation Tests
 *
 * These tests verify that all calculator cards on the homepage
 * are properly translated and don't show translation keys
 * like "sleep.title" or "oneRepMax.description"
 *
 * Coverage: 12 tests (one per language)
 */

import { test, expect } from '@playwright/test';
import { allLocales } from '../helpers/languages';
import { getHomepageUrl } from '../helpers/url-builder';

test.describe('Homepage Translation Verification', () => {
  // Test each language's homepage
  for (const locale of allLocales) {
    test(`Homepage [${locale}] - All cards are properly translated`, async ({ page }) => {
      // Navigate to the homepage for this language
      const url = getHomepageUrl(locale);
      await page.goto(url);

      // Get all calculator cards on the homepage
      const cards = page.locator('.calculator-card');
      const cardCount = await cards.count();

      // Verify we have calculator cards on the page
      expect(cardCount).toBeGreaterThan(0);

      // Check each card for proper translations
      for (let i = 0; i < cardCount; i++) {
        const card = cards.nth(i);

        // Check title (h3) - should not contain translation keys
        const title = card.locator('h3');
        const titleText = await title.textContent();

        // Verify title exists and is not empty
        expect(titleText).toBeTruthy();
        expect(titleText!.trim().length).toBeGreaterThan(0);

        // Verify title doesn't contain untranslated keys like "sleep.title"
        expect(titleText).not.toMatch(/\w+\.(title|description|category)/);

        // Check description (paragraph) - should not contain translation keys
        const description = card.locator('p').first();
        const descriptionText = await description.textContent();

        // Verify description exists and is not empty
        expect(descriptionText).toBeTruthy();
        expect(descriptionText!.trim().length).toBeGreaterThan(0);

        // Verify description doesn't contain untranslated keys
        expect(descriptionText).not.toMatch(/\w+\.(title|description|category)/);

        // Check category - should not contain translation keys
        const category = card.locator('.category');
        const categoryCount = await category.count();

        if (categoryCount > 0) {
          const categoryText = await category.textContent();

          // Verify category exists and is not empty
          expect(categoryText).toBeTruthy();
          expect(categoryText!.trim().length).toBeGreaterThan(0);

          // Verify category doesn't contain untranslated keys
          expect(categoryText).not.toMatch(/\w+\.(title|description|category)/);
        }
      }
    });
  }
});
