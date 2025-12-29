/**
 * Fat Intake Calculator Utilities
 * Calculates recommended daily fat intake based on TDEE and goals
 */

export type Gender = 'male' | 'female';

export type ActivityLevel =
  | 'sedentary'      // Little or no exercise
  | 'light'          // Exercise 1-3 times/week
  | 'moderate'       // Exercise 4-5 times/week
  | 'active'         // Daily exercise or intense exercise 3-4 times/week
  | 'very-active'    // Intense exercise 6-7 times/week
  | 'extra-active';  // Very intense exercise daily & physical job

export type Goal = 'lose-weight' | 'maintain' | 'gain-muscle';

export interface FatIntakeInput {
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface FatIntakeResult {
  tdee: number; // Total Daily Energy Expenditure
  bmr: number; // Basal Metabolic Rate
  dailyCalories: number; // Adjusted for goal
  recommendedFatGrams: number; // Recommended daily fat intake in grams
  fatCalories: number; // Calories from fat
  fatPercentage: number; // Percentage of total calories from fat
  minFatGrams: number; // Minimum recommended fat grams
  maxFatGrams: number; // Maximum recommended fat grams
  goal: Goal;
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

// Fat percentage recommendations based on goal
const FAT_PERCENTAGES: Record<Goal, { min: number; max: number; recommended: number }> = {
  'lose-weight': { min: 20, max: 30, recommended: 25 },
  'maintain': { min: 25, max: 35, recommended: 30 },
  'gain-muscle': { min: 20, max: 30, recommended: 25 },
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation (most accurate)
 * Men: BMR = 10W + 6.25H - 5A + 5
 * Women: BMR = 10W + 6.25H - 5A - 161
 */
function calculateBMR(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === 'male' ? base + 5 : base - 161;
}

/**
 * Calculate TDEE based on BMR and activity level
 */
function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const activityMultiplier = ACTIVITY_MULTIPLIERS[activityLevel];
  return bmr * activityMultiplier;
}

/**
 * Calculate adjusted daily calories based on goal
 */
function calculateDailyCalories(tdee: number, goal: Goal): number {
  switch (goal) {
    case 'lose-weight':
      // 500 calorie deficit for weight loss (approximately 0.5 kg per week)
      return tdee - 500;
    case 'maintain':
      // Maintenance calories
      return tdee;
    case 'gain-muscle':
      // 300 calorie surplus for muscle gain
      return tdee + 300;
  }
}

/**
 * Main function to calculate fat intake recommendations
 */
export function calculateFatIntake(input: FatIntakeInput): FatIntakeResult {
  const { age, gender, heightCm, weightKg, activityLevel, goal } = input;

  // Calculate BMR and TDEE
  const bmr = calculateBMR(weightKg, heightCm, age, gender);
  const tdee = calculateTDEE(bmr, activityLevel);
  const dailyCalories = calculateDailyCalories(tdee, goal);

  // Get fat percentage recommendations for the goal
  const fatPercentages = FAT_PERCENTAGES[goal];

  // Calculate fat intake
  const fatPercentage = fatPercentages.recommended;
  const fatCalories = dailyCalories * (fatPercentage / 100);
  const recommendedFatGrams = fatCalories / 9; // 9 calories per gram of fat

  // Calculate min and max recommendations
  const minFatCalories = dailyCalories * (fatPercentages.min / 100);
  const maxFatCalories = dailyCalories * (fatPercentages.max / 100);
  const minFatGrams = minFatCalories / 9;
  const maxFatGrams = maxFatCalories / 9;

  return {
    tdee: Math.round(tdee),
    bmr: Math.round(bmr),
    dailyCalories: Math.round(dailyCalories),
    recommendedFatGrams: Math.round(recommendedFatGrams),
    fatCalories: Math.round(fatCalories),
    fatPercentage,
    minFatGrams: Math.round(minFatGrams),
    maxFatGrams: Math.round(maxFatGrams),
    goal,
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
