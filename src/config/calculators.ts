/**
 * Calculator configuration
 *
 * This file defines all available calculators in the application.
 * Each calculator ID must have:
 * - A corresponding component in src/components/calculators/{ID}Calculator.astro
 * - A corresponding utility in src/utils/calculators/{ID}.ts
 * - Translation files in public/locales/{lang}/calculators/{ID}.json for each language
 * - MDX content files in src/content/calculators/{lang}/{ID}.mdx for each language
 */

export type CalculatorId =
  | 'age'
  | 'army-body-fat'
  | 'bac'
  | 'bmi'
  | 'bmr'
  | 'blood-type'
  | 'body-fat'
  | 'body-frame'
  | 'body-type'
  | 'bsa'
  | 'calorie'
  | 'calories-burned'
  | 'carbohydrate'
  | 'date'
  | 'due-date'
  | 'fat-intake'
  | 'gfr'
  | 'healthy-weight'
  | 'heart-rate'
  | 'ideal-weight'
  | 'lean-body-mass'
  | 'macro'
  | 'one-rep-max'
  | 'ovulation'
  | 'pace'
  | 'percentage'
  | 'period'
  | 'pregnancy'
  | 'pregnancy-conception'
  | 'pregnancy-weight-gain'
  | 'protein'
  | 'sleep'
  | 'tdee'
  | 'tip'
  | 'waist-hip'
  | 'weight-watchers';

/**
 * List of all calculator IDs
 */
export const calculators: CalculatorId[] = [
  'age',
  'army-body-fat',
  'bac',
  'bmi',
  'bmr',
  'blood-type',
  'body-fat',
  'body-frame',
  'body-type',
  'bsa',
  'calorie',
  'calories-burned',
  'carbohydrate',
  'date',
  'due-date',
  'fat-intake',
  'gfr',
  'healthy-weight',
  'heart-rate',
  'ideal-weight',
  'lean-body-mass',
  'macro',
  'one-rep-max',
  'ovulation',
  'pace',
  'percentage',
  'period',
  'pregnancy',
  'pregnancy-conception',
  'pregnancy-weight-gain',
  'protein',
  'sleep',
  'tdee',
  'tip',
  'waist-hip',
  'weight-watchers'
];

/**
 * Acronyms that should be uppercased in component names
 */
const ACRONYMS = new Set(['bmi', 'bmr', 'bsa', 'gfr', 'tdee', 'bac']);

/**
 * Convert calculator ID to component name
 * Example: 'bmi' -> 'BMICalculator', 'one-rep-max' -> 'OneRepMaxCalculator'
 */
export function getCalculatorComponentName(calculatorId: CalculatorId): string {
  // Convert kebab-case to PascalCase, handling acronyms
  return calculatorId
    .split('-')
    .map(word => {
      // Check if this word is an acronym
      if (ACRONYMS.has(word)) {
        return word.toUpperCase();
      }
      // Otherwise, capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('') + 'Calculator';
}

/**
 * Check if a calculator ID is valid
 */
export function isValidCalculator(id: string): id is CalculatorId {
  return calculators.includes(id as CalculatorId);
}
