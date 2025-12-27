/**
 * Body Fat Calculator Utilities
 * Calculates body fat percentage using US Navy Method and BMI-based methods
 */

export type Gender = 'male' | 'female';
export type CalculationMethod = 'navy' | 'bmi';

export interface BodyFatInput {
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  neckCm?: number; // Required for Navy method
  waistCm?: number; // Required for Navy method
  hipCm?: number; // Required for Navy method (females only)
  method: CalculationMethod;
}

export interface BodyFatResult {
  bodyFatPercentage: number;
  category: string;
  bodyFatMass: number; // kg
  leanBodyMass: number; // kg
  idealBodyFat?: number; // Ideal for age
  fatToLose?: number; // kg to reach ideal
  method: CalculationMethod;
}

/**
 * Body fat categories based on American Council on Exercise (ACE)
 */
const BODY_FAT_CATEGORIES = {
  male: [
    { max: 5, category: 'Essential Fat' },
    { max: 13, category: 'Athletes' },
    { max: 17, category: 'Fitness' },
    { max: 24, category: 'Average' },
    { max: 100, category: 'Obese' },
  ],
  female: [
    { max: 13, category: 'Essential Fat' },
    { max: 20, category: 'Athletes' },
    { max: 24, category: 'Fitness' },
    { max: 31, category: 'Average' },
    { max: 100, category: 'Obese' },
  ],
};

/**
 * Ideal body fat percentages by age (Jackson & Pollock)
 */
const IDEAL_BODY_FAT = {
  male: [
    { maxAge: 20, ideal: 8.5 },
    { maxAge: 25, ideal: 10.5 },
    { maxAge: 30, ideal: 12.7 },
    { maxAge: 35, ideal: 13.7 },
    { maxAge: 40, ideal: 15.3 },
    { maxAge: 45, ideal: 16.4 },
    { maxAge: 50, ideal: 18.9 },
    { maxAge: 55, ideal: 20.9 },
    { maxAge: 100, ideal: 22.0 },
  ],
  female: [
    { maxAge: 20, ideal: 17.7 },
    { maxAge: 25, ideal: 18.4 },
    { maxAge: 30, ideal: 19.3 },
    { maxAge: 35, ideal: 21.5 },
    { maxAge: 40, ideal: 22.2 },
    { maxAge: 45, ideal: 22.9 },
    { maxAge: 50, ideal: 25.2 },
    { maxAge: 55, ideal: 26.3 },
    { maxAge: 100, ideal: 27.0 },
  ],
};

/**
 * Calculate body fat percentage using US Navy Method
 * Uses circumference measurements of neck, waist, and hip (females)
 */
function calculateNavyMethod(
  gender: Gender,
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm?: number
): number {
  if (gender === 'male') {
    // Male formula: 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
    const logWaistNeck = Math.log10(waistCm - neckCm);
    const logHeight = Math.log10(heightCm);
    const bodyDensity = 1.0324 - 0.19077 * logWaistNeck + 0.15456 * logHeight;
    return 495 / bodyDensity - 450;
  } else {
    // Female formula: 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450
    if (!hipCm) {
      throw new Error('Hip circumference is required for females');
    }
    const logWaistHipNeck = Math.log10(waistCm + hipCm - neckCm);
    const logHeight = Math.log10(heightCm);
    const bodyDensity = 1.29579 - 0.35004 * logWaistHipNeck + 0.22100 * logHeight;
    return 495 / bodyDensity - 450;
  }
}

/**
 * Calculate body fat percentage using BMI Method
 * Uses age-adjusted formulas based on BMI
 */
function calculateBMIMethod(
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number
): number {
  // Calculate BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  // Apply age and gender-specific formulas
  if (gender === 'male') {
    if (age < 18) {
      // Boys: 1.51 × BMI - 0.70 × Age - 3.6
      return 1.51 * bmi - 0.70 * age - 3.6;
    } else {
      // Adult males: 1.20 × BMI + 0.23 × Age - 16.2
      return 1.20 * bmi + 0.23 * age - 16.2;
    }
  } else {
    if (age < 18) {
      // Girls: 1.51 × BMI - 0.70 × Age - 1.4
      return 1.51 * bmi - 0.70 * age - 1.4;
    } else {
      // Adult females: 1.20 × BMI + 0.23 × Age - 5.4
      return 1.20 * bmi + 0.23 * age - 5.4;
    }
  }
}

/**
 * Get body fat category based on percentage
 */
function getBodyFatCategory(gender: Gender, bodyFatPercentage: number): string {
  const categories = BODY_FAT_CATEGORIES[gender];
  for (const cat of categories) {
    if (bodyFatPercentage <= cat.max) {
      return cat.category;
    }
  }
  return categories[categories.length - 1].category;
}

/**
 * Get ideal body fat percentage for age and gender
 */
function getIdealBodyFat(gender: Gender, age: number): number {
  const ideals = IDEAL_BODY_FAT[gender];
  for (const ideal of ideals) {
    if (age <= ideal.maxAge) {
      return ideal.ideal;
    }
  }
  return ideals[ideals.length - 1].ideal;
}

/**
 * Main function to calculate body fat percentage and related metrics
 */
export function calculateBodyFat(input: BodyFatInput): BodyFatResult {
  const { age, gender, heightCm, weightKg, neckCm, waistCm, hipCm, method } = input;

  let bodyFatPercentage: number;

  // Calculate based on selected method
  if (method === 'navy') {
    if (!neckCm || !waistCm) {
      throw new Error('Neck and waist measurements are required for Navy method');
    }
    if (gender === 'female' && !hipCm) {
      throw new Error('Hip measurement is required for females using Navy method');
    }
    bodyFatPercentage = calculateNavyMethod(gender, heightCm, neckCm, waistCm, hipCm);
  } else {
    bodyFatPercentage = calculateBMIMethod(gender, age, heightCm, weightKg);
  }

  // Ensure percentage is within valid range
  bodyFatPercentage = Math.max(2, Math.min(70, bodyFatPercentage));

  // Calculate body composition
  const bodyFatMass = (weightKg * bodyFatPercentage) / 100;
  const leanBodyMass = weightKg - bodyFatMass;

  // Get category
  const category = getBodyFatCategory(gender, bodyFatPercentage);

  // Get ideal body fat for age
  const idealBodyFat = getIdealBodyFat(gender, age);

  // Calculate fat to lose to reach ideal
  const fatToLose = bodyFatPercentage > idealBodyFat
    ? ((bodyFatPercentage - idealBodyFat) * weightKg) / 100
    : 0;

  return {
    bodyFatPercentage: Math.round(bodyFatPercentage * 10) / 10,
    category,
    bodyFatMass: Math.round(bodyFatMass * 10) / 10,
    leanBodyMass: Math.round(leanBodyMass * 10) / 10,
    idealBodyFat: Math.round(idealBodyFat * 10) / 10,
    fatToLose: Math.round(fatToLose * 10) / 10,
    method,
  };
}

// Unit conversion utilities
export function poundsToKg(pounds: number): number {
  return pounds * 0.453592;
}

export function kgToPounds(kg: number): number {
  return kg / 0.453592;
}

export function inchesToCm(inches: number): number {
  return inches * 2.54;
}

export function cmToInches(cm: number): number {
  return cm / 2.54;
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
