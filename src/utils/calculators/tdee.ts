/**
 * TDEE Calculator Utilities
 * Calculates Total Daily Energy Expenditure based on BMR and activity level
 */

export type Gender = 'male' | 'female';

export type ActivityLevel =
  | 'sedentary'      // Little or no exercise
  | 'light'          // Exercise 1-3 times/week
  | 'moderate'       // Exercise 4-5 times/week
  | 'active'         // Daily exercise or intense exercise 3-4 times/week
  | 'very-active'    // Intense exercise 6-7 times/week
  | 'extra-active';  // Very intense exercise daily & physical job

export type BMRFormula = 'mifflin' | 'harris' | 'katch';

export interface TDEEInput {
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  bodyFatPercentage?: number; // Optional, for Katch-McArdle formula
}

export interface TDEEResult {
  bmr: number; // Basal Metabolic Rate
  tdee: number; // Total Daily Energy Expenditure
  maintenance: number; // Same as TDEE (for consistency)
  mildWeightLoss: number; // 0.25 kg/week
  weightLoss: number; // 0.5 kg/week
  extremeWeightLoss: number; // 1 kg/week
  mildWeightGain: number; // 0.25 kg/week
  weightGain: number; // 0.5 kg/week
  extremeWeightGain: number; // 1 kg/week
  formula: BMRFormula;
  macros: {
    protein: { grams: number; calories: number };
    carbs: { grams: number; calories: number };
    fats: { grams: number; calories: number };
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
function calculateMifflinStJeor(
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
function calculateHarrisBenedict(
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
 */
function calculateKatchMcArdle(
  weightKg: number,
  bodyFatPercentage: number
): number {
  const leanBodyMass = weightKg * (1 - bodyFatPercentage / 100);
  return 370 + 21.6 * leanBodyMass;
}

/**
 * Calculate macronutrient recommendations
 * Balanced macro split: 30% protein, 40% carbs, 30% fats
 */
function calculateMacros(tdee: number) {
  const proteinCalories = tdee * 0.30;
  const carbsCalories = tdee * 0.40;
  const fatsCalories = tdee * 0.30;

  return {
    protein: {
      grams: Math.round(proteinCalories / 4), // 4 cal/g
      calories: Math.round(proteinCalories),
    },
    carbs: {
      grams: Math.round(carbsCalories / 4), // 4 cal/g
      calories: Math.round(carbsCalories),
    },
    fats: {
      grams: Math.round(fatsCalories / 9), // 9 cal/g
      calories: Math.round(fatsCalories),
    },
  };
}

/**
 * Main function to calculate TDEE
 */
export function calculateTDEE(input: TDEEInput): TDEEResult {
  const { age, gender, heightCm, weightKg, activityLevel, bodyFatPercentage } = input;

  // Calculate BMR using Mifflin-St Jeor (default, most accurate)
  let bmr = calculateMifflinStJeor(weightKg, heightCm, age, gender);
  let formula: BMRFormula = 'mifflin';

  // Use Katch-McArdle if body fat percentage is provided
  if (bodyFatPercentage !== undefined && bodyFatPercentage > 0 && bodyFatPercentage < 100) {
    bmr = calculateKatchMcArdle(weightKg, bodyFatPercentage);
    formula = 'katch';
  }

  // Calculate TDEE (BMR × activity multiplier)
  const activityMultiplier = ACTIVITY_MULTIPLIERS[activityLevel];
  const tdee = bmr * activityMultiplier;

  // Calculate weight loss/gain scenarios
  // 1 kg of fat ≈ 7700 calories
  // 0.25 kg/week = 275 cal/day deficit
  // 0.5 kg/week = 550 cal/day deficit
  // 1 kg/week = 1100 cal/day deficit

  const macros = calculateMacros(tdee);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    maintenance: Math.round(tdee),
    mildWeightLoss: Math.round(tdee - 275),
    weightLoss: Math.round(tdee - 550),
    extremeWeightLoss: Math.round(tdee - 1100),
    mildWeightGain: Math.round(tdee + 275),
    weightGain: Math.round(tdee + 550),
    extremeWeightGain: Math.round(tdee + 1100),
    formula,
    macros,
  };
}

/**
 * Calculate BMR using all three formulas for comparison
 */
export function calculateAllBMRFormulas(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender,
  bodyFatPercentage?: number
): Record<BMRFormula, number> {
  const result: Record<BMRFormula, number> = {
    mifflin: Math.round(calculateMifflinStJeor(weightKg, heightCm, age, gender)),
    harris: Math.round(calculateHarrisBenedict(weightKg, heightCm, age, gender)),
    katch: 0,
  };

  if (bodyFatPercentage !== undefined && bodyFatPercentage > 0 && bodyFatPercentage < 100) {
    result.katch = Math.round(calculateKatchMcArdle(weightKg, bodyFatPercentage));
  }

  return result;
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
