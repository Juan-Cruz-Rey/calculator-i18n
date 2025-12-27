/**
 * BMR Calculator Utilities
 * Calculates Basal Metabolic Rate using multiple formulas
 */

export type Gender = 'male' | 'female';

export type BMRFormula = 'mifflin' | 'harris' | 'katch';

export type ActivityLevel =
  | 'sedentary'      // Little or no exercise
  | 'light'          // Exercise 1-3 times/week
  | 'moderate'       // Exercise 4-5 times/week
  | 'active'         // Daily exercise or intense exercise 3-4 times/week
  | 'very-active'    // Intense exercise 6-7 times/week
  | 'extra-active';  // Very intense exercise daily & physical job

export interface BMRInput {
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  bodyFatPercentage?: number; // Optional, for Katch-McArdle formula
}

export interface BMRResult {
  mifflin: number;
  harris: number;
  katch: number | null;
  recommended: number;
  recommendedFormula: BMRFormula;
  calorieNeeds: {
    sedentary: number;
    light: number;
    moderate: number;
    active: number;
    veryActive: number;
    extraActive: number;
  };
}

// Activity level multipliers
const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  'sedentary': 1.2,
  'light': 1.375,
  'moderate': 1.55,
  'active': 1.725,
  'very-active': 1.9,
  'extra-active': 1.95,
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation (most accurate)
 * Men: BMR = 10W + 6.25H - 5A + 5
 * Women: BMR = 10W + 6.25H - 5A - 161
 */
export function calculateMifflinStJeor(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === 'male' ? base + 5 : base - 161;
}

/**
 * Calculate BMR using Revised Harris-Benedict Equation
 * Men: BMR = 13.397W + 4.799H - 5.677A + 88.362
 * Women: BMR = 9.247W + 3.098H - 4.330A + 447.593
 */
export function calculateHarrisBenedict(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender
): number {
  if (gender === 'male') {
    return 13.397 * weightKg + 4.799 * heightCm - 5.677 * age + 88.362;
  } else {
    return 9.247 * weightKg + 3.098 * heightCm - 4.330 * age + 447.593;
  }
}

/**
 * Calculate BMR using Katch-McArdle Formula
 * BMR = 370 + 21.6(1 - F)W
 * Requires body fat percentage
 * More accurate for lean individuals who know their body fat percentage
 */
export function calculateKatchMcArdle(
  weightKg: number,
  bodyFatPercentage: number
): number {
  const leanBodyMass = weightKg * (1 - bodyFatPercentage / 100);
  return 370 + 21.6 * leanBodyMass;
}

/**
 * Main function to calculate BMR using all available formulas
 */
export function calculateBMR(input: BMRInput): BMRResult {
  const { age, gender, heightCm, weightKg, bodyFatPercentage } = input;

  // Calculate BMR using Mifflin-St Jeor (recommended)
  const mifflin = Math.round(calculateMifflinStJeor(weightKg, heightCm, age, gender));

  // Calculate BMR using Revised Harris-Benedict
  const harris = Math.round(calculateHarrisBenedict(weightKg, heightCm, age, gender));

  // Calculate BMR using Katch-McArdle if body fat percentage is provided
  let katch: number | null = null;
  if (bodyFatPercentage !== undefined && bodyFatPercentage > 0 && bodyFatPercentage < 100) {
    katch = Math.round(calculateKatchMcArdle(weightKg, bodyFatPercentage));
  }

  // Determine recommended BMR
  // Use Katch-McArdle if available (most accurate for those with known body fat %)
  // Otherwise use Mifflin-St Jeor (most accurate general formula)
  let recommended: number;
  let recommendedFormula: BMRFormula;

  if (katch !== null) {
    recommended = katch;
    recommendedFormula = 'katch';
  } else {
    recommended = mifflin;
    recommendedFormula = 'mifflin';
  }

  // Calculate calorie needs for different activity levels
  const calorieNeeds = {
    sedentary: Math.round(recommended * ACTIVITY_MULTIPLIERS.sedentary),
    light: Math.round(recommended * ACTIVITY_MULTIPLIERS.light),
    moderate: Math.round(recommended * ACTIVITY_MULTIPLIERS.moderate),
    active: Math.round(recommended * ACTIVITY_MULTIPLIERS.active),
    veryActive: Math.round(recommended * ACTIVITY_MULTIPLIERS['very-active']),
    extraActive: Math.round(recommended * ACTIVITY_MULTIPLIERS['extra-active']),
  };

  return {
    mifflin,
    harris,
    katch,
    recommended,
    recommendedFormula,
    calorieNeeds,
  };
}

// Unit conversion utilities
export function poundsToKg(pounds: number): number {
  return pounds * 0.453592;
}

export function kgToPounds(kg: number): number {
  return kg / 0.453592;
}

export function feetInchesToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}

export function caloriesToKJ(calories: number): number {
  return calories * 4.184;
}

export function kjToCalories(kj: number): number {
  return kj / 4.184;
}
