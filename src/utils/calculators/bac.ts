/**
 * BAC (Blood Alcohol Content) Calculator
 * Uses the Widmark formula to estimate blood alcohol concentration
 */

export interface BACInput {
  weight: number;
  weightUnit: 'kg' | 'lb';
  gender: 'male' | 'female';
  drinks: number;
  alcoholContent: number; // percentage
  drinkVolume: number;
  volumeUnit: 'ml' | 'oz';
  hoursDrinking: number;
}

export interface BACResult {
  bac: number; // BAC percentage
  bacFormatted: string; // formatted as "0.05%"
  timeUntilSober: number; // hours
  impairmentLevel: string;
  impairmentDescription: string;
  isOverLegalLimit: boolean; // assuming 0.08% limit
  warnings: string[];
}

const ALCOHOL_ELIMINATION_RATE = 0.015; // BAC decrease per hour
const WIDMARK_R_MALE = 0.68;
const WIDMARK_R_FEMALE = 0.55;
const GRAMS_PER_STANDARD_DRINK = 14; // US standard
const LEGAL_LIMIT_US = 0.08; // 0.08% BAC

/**
 * Convert weight to grams
 */
function convertWeightToGrams(weight: number, unit: 'kg' | 'lb'): number {
  if (unit === 'kg') {
    return weight * 1000;
  }
  // Convert pounds to grams (1 lb = 453.592 g)
  return weight * 453.592;
}

/**
 * Convert volume to milliliters
 */
function convertVolumeToML(volume: number, unit: 'ml' | 'oz'): number {
  if (unit === 'ml') {
    return volume;
  }
  // Convert oz to ml (1 oz = 29.5735 ml)
  return volume * 29.5735;
}

/**
 * Calculate total alcohol consumed in grams
 */
function calculateAlcoholGrams(
  drinks: number,
  alcoholContent: number,
  drinkVolume: number,
  volumeUnit: 'ml' | 'oz'
): number {
  const volumeML = convertVolumeToML(drinkVolume, volumeUnit);
  const alcoholVolumeML = (volumeML * alcoholContent) / 100;
  // Alcohol density = 0.789 g/ml
  const gramsPerDrink = alcoholVolumeML * 0.789;
  return drinks * gramsPerDrink;
}

/**
 * Get Widmark r value based on gender
 */
function getWidmarkR(gender: 'male' | 'female'): number {
  return gender === 'male' ? WIDMARK_R_MALE : WIDMARK_R_FEMALE;
}

/**
 * Get impairment level based on BAC
 */
function getImpairmentLevel(bac: number): {
  level: string;
  description: string;
} {
  if (bac <= 0.02) {
    return {
      level: 'minimal',
      description: 'Minimal effects, slight mood elevation',
    };
  } else if (bac <= 0.05) {
    return {
      level: 'mild',
      description: 'Mild impairment, relaxation, reduced coordination',
    };
  } else if (bac <= 0.09) {
    return {
      level: 'moderate',
      description: 'Moderate impairment, reduced reaction time, impaired judgment',
    };
  } else if (bac <= 0.15) {
    return {
      level: 'significant',
      description: 'Significant impairment, difficulty walking, slurred speech',
    };
  } else {
    return {
      level: 'severe',
      description: 'Severe impairment, risk of alcohol poisoning',
    };
  }
}

/**
 * Calculate BAC using Widmark formula
 */
export function calculateBAC(input: BACInput): BACResult {
  // Convert inputs to standard units
  const weightGrams = convertWeightToGrams(input.weight, input.weightUnit);
  const alcoholGrams = calculateAlcoholGrams(
    input.drinks,
    input.alcoholContent,
    input.drinkVolume,
    input.volumeUnit
  );

  // Get Widmark r value
  const r = getWidmarkR(input.gender);

  // Calculate BAC using Widmark formula
  // BAC = (Alcohol in grams / (Body Weight in grams × r)) - (0.015 × Hours)
  const bacBeforeMetabolism = (alcoholGrams / (weightGrams * r)) * 100;
  const bacMetabolized = ALCOHOL_ELIMINATION_RATE * input.hoursDrinking;
  const currentBAC = Math.max(0, bacBeforeMetabolism - bacMetabolized);

  // Calculate time until sober
  const timeUntilSober = currentBAC > 0 ? currentBAC / ALCOHOL_ELIMINATION_RATE : 0;

  // Get impairment level
  const impairment = getImpairmentLevel(currentBAC);

  // Generate warnings
  const warnings: string[] = [];
  if (currentBAC > LEGAL_LIMIT_US) {
    warnings.push('Above legal driving limit in most jurisdictions');
  }
  if (currentBAC > 0.15) {
    warnings.push('Risk of alcohol poisoning - seek medical attention');
  }
  if (currentBAC > 0) {
    warnings.push('Do not drive or operate machinery');
  }

  return {
    bac: currentBAC,
    bacFormatted: `${(currentBAC * 100).toFixed(3)}%`,
    timeUntilSober: parseFloat(timeUntilSober.toFixed(1)),
    impairmentLevel: impairment.level,
    impairmentDescription: impairment.description,
    isOverLegalLimit: currentBAC >= LEGAL_LIMIT_US,
    warnings,
  };
}

/**
 * Preset drink types with standard measurements
 */
export const DRINK_PRESETS = {
  beer: {
    volume: 12,
    volumeUnit: 'oz' as const,
    alcoholContent: 5,
  },
  wine: {
    volume: 5,
    volumeUnit: 'oz' as const,
    alcoholContent: 12,
  },
  liquor: {
    volume: 1.5,
    volumeUnit: 'oz' as const,
    alcoholContent: 40,
  },
  custom: {
    volume: 0,
    volumeUnit: 'oz' as const,
    alcoholContent: 0,
  },
};
