export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
export type Gender = 'male' | 'female';

export interface FoodPointsInput {
  calories: number;
  saturatedFat: number; // grams
  sugar: number; // grams
  protein: number; // grams
}

export interface DailyBudgetInput {
  age: number;
  gender: Gender;
  weight: number; // kg
  height: number; // cm
  activityLevel: ActivityLevel;
}

export interface FoodPointsResult {
  points: number;
  calories: number;
  saturatedFat: number;
  sugar: number;
  protein: number;
}

export interface DailyBudgetResult {
  dailyPoints: number;
  basePoints: number;
  activityBonus: number;
  weeklyPoints: number;
}

/**
 * Calculate WW SmartPoints for food
 * Formula: Points = (calories × 0.0305) + (saturated fat × 0.275) + (sugar × 0.12) - (protein × 0.098)
 * Rounded to nearest integer, minimum 0
 */
export function calculateFoodPoints(input: FoodPointsInput): FoodPointsResult {
  const { calories, saturatedFat, sugar, protein } = input;

  // Validate inputs
  if (calories < 0 || saturatedFat < 0 || sugar < 0 || protein < 0) {
    throw new Error('All nutritional values must be positive numbers');
  }

  // SmartPoints formula
  const rawPoints =
    (calories * 0.0305) +
    (saturatedFat * 0.275) +
    (sugar * 0.12) -
    (protein * 0.098);

  // Round to nearest integer and ensure minimum of 0
  const points = Math.max(0, Math.round(rawPoints));

  return {
    points,
    calories,
    saturatedFat,
    sugar,
    protein
  };
}

/**
 * Calculate daily SmartPoints budget based on personal information
 * This is a simplified approximation of the WW system
 */
export function calculateDailyBudget(input: DailyBudgetInput): DailyBudgetResult {
  const { age, gender, weight, height, activityLevel } = input;

  // Validate inputs
  if (age < 18 || age > 100) {
    throw new Error('Age must be between 18 and 100');
  }
  if (weight <= 0 || height <= 0) {
    throw new Error('Weight and height must be positive numbers');
  }

  // Base points calculation (simplified WW-style formula)
  let basePoints = 0;

  // Gender base
  basePoints += gender === 'male' ? 23 : 18;

  // Age adjustment
  if (age >= 18 && age <= 20) {
    basePoints += 7;
  } else if (age >= 21 && age <= 35) {
    basePoints += 4;
  } else if (age >= 36 && age <= 50) {
    basePoints += 3;
  } else if (age >= 51 && age <= 65) {
    basePoints += 2;
  } else {
    basePoints += 1;
  }

  // Height adjustment (for every 2.54cm over 157cm, add 1 point)
  if (height > 157) {
    basePoints += Math.floor((height - 157) / 2.54);
  }

  // Weight adjustment (simplified - add points based on weight brackets)
  if (weight < 54) {
    basePoints += 0;
  } else if (weight <= 68) {
    basePoints += 1;
  } else if (weight <= 82) {
    basePoints += 2;
  } else if (weight <= 95) {
    basePoints += 3;
  } else if (weight <= 109) {
    basePoints += 4;
  } else if (weight <= 122) {
    basePoints += 5;
  } else {
    basePoints += 6;
  }

  // Activity level bonus points
  const activityBonus = getActivityBonus(activityLevel);

  // Total daily points
  const dailyPoints = basePoints + activityBonus;

  // Weekly extra points (typically 30-35 based on WW system)
  const weeklyPoints = 35;

  return {
    dailyPoints,
    basePoints,
    activityBonus,
    weeklyPoints
  };
}

/**
 * Get activity bonus points based on activity level
 */
function getActivityBonus(activityLevel: ActivityLevel): number {
  const bonusMap: Record<ActivityLevel, number> = {
    'sedentary': 0,
    'light': 1,
    'moderate': 2,
    'active': 4,
    'very-active': 6
  };
  return bonusMap[activityLevel];
}

/**
 * Calculate both food points and daily budget in one call
 */
export function calculateWeightWatchersMetrics(
  foodInput?: FoodPointsInput,
  budgetInput?: DailyBudgetInput
) {
  return {
    foodPoints: foodInput ? calculateFoodPoints(foodInput) : null,
    dailyBudget: budgetInput ? calculateDailyBudget(budgetInput) : null
  };
}

/**
 * Estimate points for common foods (helper function)
 */
export function estimatePointsForFood(
  calories: number,
  saturatedFat: number = 0,
  sugar: number = 0,
  protein: number = 0
): number {
  return calculateFoodPoints({ calories, saturatedFat, sugar, protein }).points;
}
