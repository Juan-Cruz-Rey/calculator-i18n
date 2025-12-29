export type UnitSystem = 'metric' | 'imperial';

export interface OneRepMaxInput {
  weight: number; // kg or lbs
  reps: number; // number of repetitions performed
  unitSystem: UnitSystem;
}

export interface FormulaResults {
  epley: number;
  brzycki: number;
  lander: number;
  lombardi: number;
  mayhew: number;
  oconner: number;
  wathan: number;
}

export interface OneRepMaxResult {
  average: number;
  formulas: FormulaResults;
  unitSystem: UnitSystem;
}

/**
 * Epley Formula: 1RM = weight × (1 + reps/30)
 */
export function calculateEpley(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

/**
 * Brzycki Formula: 1RM = weight × (36/(37 - reps))
 * Valid for reps < 37
 */
export function calculateBrzycki(weight: number, reps: number): number {
  if (reps === 1) return weight;
  if (reps >= 37) return weight * (1 + reps / 30); // Fallback to Epley
  return weight * (36 / (37 - reps));
}

/**
 * Lander Formula: 1RM = (100 × weight)/(101.3 - 2.67123 × reps)
 */
export function calculateLander(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return (100 * weight) / (101.3 - 2.67123 * reps);
}

/**
 * Lombardi Formula: 1RM = weight × reps^0.10
 */
export function calculateLombardi(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * Math.pow(reps, 0.10);
}

/**
 * Mayhew Formula: 1RM = (100 × weight)/(52.2 + 41.9 × e^(-0.055 × reps))
 */
export function calculateMayhew(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps));
}

/**
 * O'Conner Formula: 1RM = weight × (1 + reps/40)
 */
export function calculateOConner(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (1 + reps / 40);
}

/**
 * Wathan Formula: 1RM = (100 × weight)/(48.8 + 53.8 × e^(-0.075 × reps))
 */
export function calculateWathan(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
}

/**
 * Main function to calculate One Rep Max using all formulas
 */
export function calculateOneRepMax(input: OneRepMaxInput): OneRepMaxResult {
  if (input.weight <= 0 || input.reps <= 0) {
    throw new Error('Weight and reps must be positive numbers');
  }

  if (input.reps > 30) {
    throw new Error('Formulas are most accurate for 1-30 reps');
  }

  const formulas: FormulaResults = {
    epley: parseFloat(calculateEpley(input.weight, input.reps).toFixed(1)),
    brzycki: parseFloat(calculateBrzycki(input.weight, input.reps).toFixed(1)),
    lander: parseFloat(calculateLander(input.weight, input.reps).toFixed(1)),
    lombardi: parseFloat(calculateLombardi(input.weight, input.reps).toFixed(1)),
    mayhew: parseFloat(calculateMayhew(input.weight, input.reps).toFixed(1)),
    oconner: parseFloat(calculateOConner(input.weight, input.reps).toFixed(1)),
    wathan: parseFloat(calculateWathan(input.weight, input.reps).toFixed(1)),
  };

  // Calculate average of all formulas
  const values = Object.values(formulas);
  const average = values.reduce((sum, val) => sum + val, 0) / values.length;

  return {
    average: parseFloat(average.toFixed(1)),
    formulas,
    unitSystem: input.unitSystem,
  };
}
