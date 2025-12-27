/**
 * Ideal Weight Calculator Utilities
 * Calculates ideal weight based on multiple formulas: Robinson, Miller, Devine, Hamwi, and BMI-based
 */

export type Gender = 'male' | 'female';

export interface IdealWeightInput {
  heightCm: number;
  gender: Gender;
  age?: number; // Optional, for context
}

export interface IdealWeightResult {
  robinson: number;
  miller: number;
  devine: number;
  hamwi: number;
  bmiRange: {
    min: number; // Weight at BMI 18.5
    max: number; // Weight at BMI 25
  };
  average: number; // Average of all formulas (excluding BMI range)
}

/**
 * Convert height from cm to inches
 */
function cmToInches(cm: number): number {
  return cm / 2.54;
}

/**
 * Calculate ideal weight using Robinson Formula (1983)
 * Male: 52 kg + 1.9 kg per inch over 5 feet
 * Female: 49 kg + 1.7 kg per inch over 5 feet
 */
function calculateRobinson(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = heightInches - 60; // 5 feet = 60 inches

  if (gender === 'male') {
    return 52 + (1.9 * inchesOver5Feet);
  } else {
    return 49 + (1.7 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Miller Formula (1983)
 * Male: 56.2 kg + 1.41 kg per inch over 5 feet
 * Female: 53.1 kg + 1.36 kg per inch over 5 feet
 */
function calculateMiller(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = heightInches - 60; // 5 feet = 60 inches

  if (gender === 'male') {
    return 56.2 + (1.41 * inchesOver5Feet);
  } else {
    return 53.1 + (1.36 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Devine Formula (1974)
 * Male: 50.0 kg + 2.3 kg per inch over 5 feet
 * Female: 45.5 kg + 2.3 kg per inch over 5 feet
 */
function calculateDevine(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = heightInches - 60; // 5 feet = 60 inches

  if (gender === 'male') {
    return 50.0 + (2.3 * inchesOver5Feet);
  } else {
    return 45.5 + (2.3 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Hamwi Formula (1964)
 * Male: 48.0 kg + 2.7 kg per inch over 5 feet
 * Female: 45.5 kg + 2.2 kg per inch over 5 feet
 */
function calculateHamwi(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = heightInches - 60; // 5 feet = 60 inches

  if (gender === 'male') {
    return 48.0 + (2.7 * inchesOver5Feet);
  } else {
    return 45.5 + (2.2 * inchesOver5Feet);
  }
}

/**
 * Calculate healthy weight range based on BMI
 * BMI = weight(kg) / (height(m))^2
 * Healthy BMI range: 18.5 - 25
 */
function calculateBMIRange(heightCm: number): { min: number; max: number } {
  const heightM = heightCm / 100;
  const heightSquared = heightM * heightM;

  return {
    min: 18.5 * heightSquared,
    max: 25 * heightSquared,
  };
}

/**
 * Main function to calculate ideal weight using all formulas
 */
export function calculateIdealWeight(input: IdealWeightInput): IdealWeightResult {
  const { heightCm, gender } = input;

  const robinson = calculateRobinson(heightCm, gender);
  const miller = calculateMiller(heightCm, gender);
  const devine = calculateDevine(heightCm, gender);
  const hamwi = calculateHamwi(heightCm, gender);
  const bmiRange = calculateBMIRange(heightCm);

  // Calculate average of all formulas (excluding BMI range)
  const average = (robinson + miller + devine + hamwi) / 4;

  return {
    robinson: Math.round(robinson * 10) / 10,
    miller: Math.round(miller * 10) / 10,
    devine: Math.round(devine * 10) / 10,
    hamwi: Math.round(hamwi * 10) / 10,
    bmiRange: {
      min: Math.round(bmiRange.min * 10) / 10,
      max: Math.round(bmiRange.max * 10) / 10,
    },
    average: Math.round(average * 10) / 10,
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
