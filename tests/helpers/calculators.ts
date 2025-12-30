/**
 * Calculator configuration for tests
 *
 * This file exports all available calculators for testing.
 * It mirrors the configuration from src/config/calculators.ts
 *
 * When adding a new calculator:
 * 1. Add the calculator ID to the CalculatorId type
 * 2. Add the ID to the allCalculators array
 * 3. Update the routes.ts file with slugs for all languages
 * 4. Create corresponding test cases
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
 * All calculator IDs as an array
 * Use this for iterating over all calculators in tests
 */
export const allCalculators: CalculatorId[] = [
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
 * Total number of calculators
 */
export const totalCalculators = allCalculators.length;
