/**
 * Language Selector Tests
 *
 * These tests verify that language selector links in the footer
 * work correctly for ALL calculators in ALL languages.
 *
 * For each calculator page, we verify:
 * - All 12 language links exist in the footer
 * - Each link has the correct href
 * - Each link navigates successfully (no 404)
 * - Links don't incorrectly redirect to homepage
 *
 * Coverage: 432 tests with ~5000 link verifications
 */

import { test, expect } from '@playwright/test';
import { allLocales, getOtherLocales } from '../helpers/languages';
import { allCalculators } from '../helpers/calculators';
import { getCalculatorUrl } from '../helpers/url-builder';

test.describe('Language Selector Tests', () => {
  // Test each calculator's language selector
  for (const calculatorId of allCalculators) {
    test.describe(`Language Selector - ${calculatorId}`, () => {
      // For each source language
      for (const sourceLocale of allLocales) {
        test(`[${calculatorId}] from [${sourceLocale}] - All language links work`, async ({ page }) => {
          // Navigate to the calculator page in the source language
          const sourceUrl = getCalculatorUrl(calculatorId, sourceLocale);
          const response = await page.goto(sourceUrl);

          // Verify the source page loads successfully
          expect(response?.status()).toBe(200);

          // Find all language selector links in the footer
          // They should have lang attribute or be in .lang-switch container
          const languageLinks = page.locator('footer a[lang], footer .lang-switch a');
          const linkCount = await languageLinks.count();

          // Should have exactly 12 language links (one for each supported language)
          expect(linkCount).toBe(12);

          // Test each language link
          for (const targetLocale of allLocales) {
            // Get the expected target URL
            const expectedUrl = getCalculatorUrl(calculatorId, targetLocale);

            // Find the link for this specific language
            // Look for the link with matching lang attribute or text content
            const languageLink = page.locator(
              `footer a[lang="${targetLocale}"], footer .lang-switch a:has-text("${targetLocale.toUpperCase()}")`
            ).first();

            // Verify the link exists
            await expect(languageLink).toBeVisible();

            // Verify the href is correct
            const href = await languageLink.getAttribute('href');
            expect(href).toBe(expectedUrl);

            // Click the link and navigate
            await languageLink.click();
            await page.waitForLoadState('domcontentloaded');

            // Verify the new page loads successfully
            const currentUrl = page.url();
            expect(currentUrl).toContain(expectedUrl);

            // Verify we didn't get redirected to homepage incorrectly
            // Homepage would be just "/" or "/es/", "/de/", etc.
            const urlParts = currentUrl.split('/').filter(part => part.length > 0);

            // A calculator URL should have at least 2 parts: folder + slug
            // Example: /calculators/bmi/ has ["calculators", "bmi"]
            // Example: /es/calculadoras/imc/ has ["es", "calculadoras", "imc"]
            const hasCalculatorPath = urlParts.length >= 2;
            expect(hasCalculatorPath).toBe(true);

            // Verify the page loaded successfully (check for calculator component)
            const hasCalculatorElement = (await page.locator('.calculator-wrapper, .calculator, form').count()) > 0;
            expect(hasCalculatorElement).toBe(true);

            // Navigate back to the source page to continue testing other links
            await page.goto(sourceUrl);
            await page.waitForLoadState('domcontentloaded');
          }
        });
      }
    });
  }
});

// Smoke test to verify language selector is present
test.describe('Language Selector - Basic Presence', () => {
  test('Footer should have language selector on BMI page', async ({ page }) => {
    await page.goto(getCalculatorUrl('bmi', 'en'));

    // Verify footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Verify language selector exists in footer
    const langSwitch = page.locator('footer .lang-switch, footer nav[aria-label*="Language"]');
    await expect(langSwitch).toBeVisible();

    // Verify it has multiple language links
    const links = page.locator('footer .lang-switch a, footer a[lang]');
    const count = await links.count();
    expect(count).toBeGreaterThan(1);
  });
});
