/**
 * Calculator Rendering Tests
 *
 * Smart sampling approach: Instead of testing all 36 calculators × 12 languages,
 * we test a representative sample to verify the rendering system works.
 *
 * Coverage: ~40 tests (sample of calculators in sample of languages)
 */

import { test, expect } from '@playwright/test';
import { calculators } from '../../src/config/calculators';
import { getCalculatorUrl } from '../helpers/url-builder';

// Sample calculators to test (representative sample, not all 36)
const sampleCalculators = [
  'bmi',           // Most common
  'army-body-fat', // Recently created (Batch 1-3)
  'bmr',           // Recently created (Batch 1-3)
  'calorie',       // Different category
  'age',           // Simple calculator
  'pregnancy',     // Complex calculator
];

// Sample languages (representative, not all 12)
const sampleLanguages = ['en', 'es', 'de', 'pt'];

test.describe('Calculator Rendering', () => {
  for (const calculatorId of sampleCalculators) {
    for (const lang of sampleLanguages) {
      test(`[${calculatorId}] renders correctly in [${lang}]`, async ({ page }) => {
        const url = getCalculatorUrl(calculatorId as any, lang as any);

        // Navigate to calculator page
        const response = await page.goto(url);

        // Verify page loads successfully
        expect(response?.status()).toBe(200);

        // Verify calculator wrapper exists (with .calculator class)
        const calculatorWrapper = page.locator('.calculator');
        await expect(calculatorWrapper).toBeVisible();

        // Verify page has substantive content
        const bodyText = await page.locator('body').innerText();
        expect(bodyText.length).toBeGreaterThan(300);

        // Verify no translation keys are showing (like "bmi.title")
        expect(bodyText).not.toMatch(/\w+\.(title|description|label|placeholder)/);

        // Verify calculator form exists
        const form = page.locator('form');
        await expect(form.first()).toBeVisible();
      });
    }
  }
});

test.describe('Calculator Functionality Smoke Test', () => {
  test('BMI calculator can calculate result', async ({ page }) => {
    await page.goto(getCalculatorUrl('bmi', 'en'));

    // Fill in form (all required fields)
    await page.fill('input[name="age"]', '30');
    await page.selectOption('select[name="gender"]', 'male');
    await page.fill('input[name="height"]', '170');
    await page.fill('input[name="weight"]', '70');

    // Submit
    await page.click('button[type="submit"]');

    // Wait for results
    await page.waitForSelector('#results', { state: 'visible', timeout: 5000 });

    // Verify result is displayed
    const results = page.locator('#results');
    await expect(results).toBeVisible();

    // Verify result contains numbers
    const resultsText = await results.innerText();
    expect(resultsText).toMatch(/\d+/);
  });
});
