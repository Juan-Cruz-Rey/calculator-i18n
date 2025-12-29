/**
 * GFR (Glomerular Filtration Rate) Calculator
 *
 * Implements CKD-EPI equations for estimating kidney function:
 * - CKD-EPI 2021 (without race) - recommended
 * - CKD-EPI 2009 (with race) - legacy
 */

export interface GFRInput {
  age: number;
  gender: 'male' | 'female';
  serumCreatinine: number;
  creatinineUnit: 'mg/dL' | 'μmol/L';
  race?: 'african-american' | 'other';
  equation?: 'ckd-epi-2021' | 'ckd-epi-2009';
}

export interface GFRResult {
  gfr: number;
  stage: number;
  stageName: string;
  interpretation: string;
  equation: string;
}

/**
 * Convert serum creatinine from μmol/L to mg/dL
 */
function convertCreatinineToMgDl(value: number, unit: 'mg/dL' | 'μmol/L'): number {
  if (unit === 'μmol/L') {
    return value / 88.42; // 1 mg/dL = 88.42 μmol/L
  }
  return value;
}

/**
 * Calculate GFR using CKD-EPI 2021 equation (without race)
 * Reference: Inker LA, et al. NEJM 2021
 */
function calculateCKDEPI2021(age: number, gender: 'male' | 'female', creatinineMgDl: number): number {
  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.241 : -0.302;
  const genderFactor = gender === 'female' ? 1.012 : 1.0;

  const ratio = creatinineMgDl / kappa;
  const minRatio = Math.min(ratio, 1);
  const maxRatio = Math.max(ratio, 1);

  const gfr = 142 * Math.pow(minRatio, alpha) * Math.pow(maxRatio, -1.200) * Math.pow(0.9938, age) * genderFactor;

  return Math.round(gfr * 10) / 10;
}

/**
 * Calculate GFR using CKD-EPI 2009 equation (with race)
 * Reference: Levey AS, et al. Ann Intern Med 2009
 */
function calculateCKDEPI2009(
  age: number,
  gender: 'male' | 'female',
  creatinineMgDl: number,
  race: 'african-american' | 'other' = 'other'
): number {
  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.329 : -0.411;
  const genderFactor = gender === 'female' ? 1.018 : 1.0;
  const raceFactor = race === 'african-american' ? 1.159 : 1.0;

  const ratio = creatinineMgDl / kappa;
  const minRatio = Math.min(ratio, 1);
  const maxRatio = Math.max(ratio, 1);

  const gfr = 141 * Math.pow(minRatio, alpha) * Math.pow(maxRatio, -1.209) * Math.pow(0.993, age) * genderFactor * raceFactor;

  return Math.round(gfr * 10) / 10;
}

/**
 * Determine CKD stage based on GFR value
 */
function determineStage(gfr: number): { stage: number; stageName: string; interpretation: string } {
  if (gfr >= 90) {
    return {
      stage: 1,
      stageName: 'Stage 1',
      interpretation: 'normal_or_high'
    };
  } else if (gfr >= 60) {
    return {
      stage: 2,
      stageName: 'Stage 2',
      interpretation: 'mildly_decreased'
    };
  } else if (gfr >= 45) {
    return {
      stage: 3,
      stageName: 'Stage 3a',
      interpretation: 'mild_to_moderate'
    };
  } else if (gfr >= 30) {
    return {
      stage: 3,
      stageName: 'Stage 3b',
      interpretation: 'moderate_to_severe'
    };
  } else if (gfr >= 15) {
    return {
      stage: 4,
      stageName: 'Stage 4',
      interpretation: 'severely_decreased'
    };
  } else {
    return {
      stage: 5,
      stageName: 'Stage 5',
      interpretation: 'kidney_failure'
    };
  }
}

/**
 * Calculate GFR (Glomerular Filtration Rate)
 */
export function calculateGFR(input: GFRInput): GFRResult {
  // Validate inputs
  if (input.age < 18 || input.age > 120) {
    throw new Error('Age must be between 18 and 120 years');
  }

  if (input.serumCreatinine <= 0) {
    throw new Error('Serum creatinine must be greater than 0');
  }

  // Convert creatinine to mg/dL if needed
  const creatinineMgDl = convertCreatinineToMgDl(input.serumCreatinine, input.creatinineUnit);

  // Validate creatinine range (typical range: 0.5-15 mg/dL)
  if (creatinineMgDl < 0.1 || creatinineMgDl > 20) {
    throw new Error('Serum creatinine value is outside valid range');
  }

  // Determine which equation to use
  const equation = input.equation || 'ckd-epi-2021';

  let gfr: number;

  if (equation === 'ckd-epi-2021') {
    gfr = calculateCKDEPI2021(input.age, input.gender, creatinineMgDl);
  } else {
    gfr = calculateCKDEPI2009(input.age, input.gender, creatinineMgDl, input.race);
  }

  const stageInfo = determineStage(gfr);

  return {
    gfr,
    stage: stageInfo.stage,
    stageName: stageInfo.stageName,
    interpretation: stageInfo.interpretation,
    equation: equation === 'ckd-epi-2021' ? 'CKD-EPI 2021' : 'CKD-EPI 2009'
  };
}

/**
 * Validate GFR input
 */
export function validateGFRInput(input: Partial<GFRInput>): string[] {
  const errors: string[] = [];

  if (!input.age) {
    errors.push('Age is required');
  } else if (input.age < 18 || input.age > 120) {
    errors.push('Age must be between 18 and 120 years');
  }

  if (!input.gender) {
    errors.push('Gender is required');
  }

  if (!input.serumCreatinine) {
    errors.push('Serum creatinine is required');
  } else if (input.serumCreatinine <= 0) {
    errors.push('Serum creatinine must be greater than 0');
  }

  if (!input.creatinineUnit) {
    errors.push('Creatinine unit is required');
  }

  return errors;
}
