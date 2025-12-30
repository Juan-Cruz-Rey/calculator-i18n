/**
 * Calculator Display Tests
 *
 * These tests verify that ALL calculators render correctly
 * in ALL languages (36 calculators × 12 languages = 432 tests)
 *
 * For each calculator page, we verify:
 * - Page loads successfully (200 status)
 * - Calculator component renders (has form, inputs, or buttons)
 * - Page has actual content, not just empty shell
 * - No 404 errors
 */

import { test, expect } from '@playwright/test';
import { allLocales } from '../helpers/languages';
import { allCalculators } from '../helpers/calculators';
import { getCalculatorUrl } from '../helpers/url-builder';

test.describe('Calculator Display Tests', () => {
  // Test each calculator across all languages
  for (const calculatorId of allCalculators) {
    test.describe(`Calculator: ${calculatorId}`, () => {
      for (const locale of allLocales) {
        test(`[${calculatorId}] in [${locale}] - Renders correctly`, async ({ page }) => {
          // Build the URL for this calculator and language
          const url = getCalculatorUrl(calculatorId, locale);

          // Navigate to the calculator page
          const response = await page.goto(url);

          // Verify the page loads successfully (200 status)
          expect(response?.status()).toBe(200);

          // Verify the page title exists and is not empty
          const title = await page.title();
          expect(title).toBeTruthy();
          expect(title.length).toBeGreaterThan(0);

          // Verify the calculator component renders by checking for common calculator elements
          // At least one of these should be present on any calculator page
          const hasForm = (await page.locator('form').count()) > 0;
          const hasInput = (await page.locator('input[type="number"], input[type="text"], input[type="date"]').count()) > 0;
          const hasButton = (await page.locator('button').count()) > 0;
          const hasSelect = (await page.locator('select').count()) > 0;

          // At least one interactive element should be present
          const hasInteractiveElement = hasForm || hasInput || hasButton || hasSelect;
          expect(hasInteractiveElement).toBe(true);

          // Verify the page has actual content (not just empty shell)
          // Check for calculator wrapper
          const calculatorWrapper = page.locator('.calculator-wrapper, .calculator-container, .calculator');
          const wrapperCount = await calculatorWrapper.count();
          expect(wrapperCount).toBeGreaterThan(0);

          // Verify there's substantive content (more than just title/description)
          const bodyText = await page.locator('body').innerText();
          expect(bodyText.length).toBeGreaterThan(100); // Reasonable minimum content length

          // Verify no error messages are displayed
          const notFoundHeadings = page.locator('h1:has-text("404"), h1:has-text("Not Found")');
          const notFoundCount = await notFoundHeadings.count();
          expect(notFoundCount).toBe(0);

          // Verify the language is set correctly in the HTML element
          const htmlLang = await page.locator('html').getAttribute('lang');
          expect(htmlLang).toBe(locale);
        });
      }
    });
  }
});

// Smoke test to verify test setup is correct
test.describe('Test Setup Verification', () => {
  test('should have calculators and languages loaded', () => {
    expect(allCalculators.length).toBeGreaterThan(0);
    expect(allLocales.length).toBeGreaterThan(0);

    // Verify expected counts based on project
    // Project currently supports 12 languages and has 36 calculators
    expect(allLocales.length).toBe(12);
    expect(allCalculators.length).toBe(36);
  });

  test('should generate valid URLs', () => {
    const testUrlEs = getCalculatorUrl('bmi', 'es');
    expect(testUrlEs).toBeTruthy();
    expect(testUrlEs).toContain('/calculadoras/');

    const testUrlEn = getCalculatorUrl('bmi', 'en');
    expect(testUrlEn).toContain('/calculators/');
  });
});
