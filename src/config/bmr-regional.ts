/**
 * Regional BMR Configuration
 *
 * This file contains regional adaptations for the BMR calculator based on
 * competitive analysis of 40+ top calculators across 12 supported languages.
 *
 * Key Regional Differences:
 * - Formula preferences (Mifflin-St Jeor, Harris-Benedict, WHO/FAO, Ten Haaf)
 * - Terminology variations (BMR, TMB, PPM, BMH, Grundumsatz, etc.)
 * - Visual presentation (single formula vs multi-formula comparison)
 * - Feature preferences (calorie deficit tables, athlete profiles, privacy notes)
 * - TDEE integration levels
 */

import type { Locale } from '@/utils/i18n';

export type BMRFormula =
  | 'MIFFLIN_ST_JEOR'    // Most accurate modern formula (1990)
  | 'HARRIS_BENEDICT'     // Traditional revised formula (1984)
  | 'KATCH_MCARDLE'       // Uses body fat percentage
  | 'WHO_FAO'             // Age-group specific (popular in Brazil)
  | 'TEN_HAAF'            // Dutch-specific formula
  | 'SCHOFIELD';          // UK/Europe alternative

export type FormulaDisplay =
  | 'single'              // Show only recommended formula
  | 'comparison'          // Show 2-3 formulas side-by-side
  | 'multi_comparison';   // Show 4+ formulas with graph (RU, PL, NL)

export type TDEEIntegration =
  | 'optional'            // Show as expandable section
  | 'integrated'          // Always visible below BMR
  | 'prominent';          // Equal prominence to BMR (Poland: PPM+CPM)

export interface BMRRegionalConfig {
  /** Default unit system for this region */
  defaultUnit: 'metric' | 'imperial';

  /** Primary recommended formula for this market */
  primaryFormula: BMRFormula;

  /** Additional formulas to show (if any) */
  secondaryFormulas: BMRFormula[];

  /** How to display multiple formulas */
  formulaDisplay: FormulaDisplay;

  /** How prominently to integrate TDEE */
  tdeeIntegration: TDEEIntegration;

  /** Local terminology for BMR */
  terminology: string;

  /** Terminology for TDEE */
  tdeeName: string;

  /** Optional regional features */
  features: {
    /** Show calorie deficit table (ES) */
    deficitTable?: boolean;
    /** Show athlete profile selector (FR) */
    athleteProfiles?: boolean;
    /** Show privacy note (SE) */
    privacyNote?: boolean;
    /** Show age-group formulas (BR) */
    ageGroupFormulas?: boolean;
    /** Show macro calculator link */
    macroLink?: boolean;
    /** Show graph comparison */
    graphComparison?: boolean;
    /** Show body fat % field */
    bodyFatField?: boolean;
  };

  /** Local health authority reference */
  healthAuthority: string;

  /** UI complexity preference */
  uiStyle: 'simple' | 'moderate' | 'detailed' | 'professional';

  /** Default activity level (most common in market) */
  defaultActivityLevel: 'sedentary' | 'light' | 'moderate';
}

/**
 * Regional configuration for each supported language
 * Based on analysis of 40+ competitor sites (Jan 2025)
 */
export const BMR_REGIONAL_CONFIG: Record<Locale, BMRRegionalConfig> = {
  // Spanish - Spain & Latin America
  // Research: Calculatodo, Calculadoras.uno, Mundodeportivo
  // Key feature: Calorie deficit table highly valued
  es: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'TMB', // Tasa Metabólica Basal
    tdeeName: 'GET', // Gasto Energético Total
    features: {
      deficitTable: true, // Unique to Spanish market
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'OMS, Ministerio de Sanidad',
    uiStyle: 'detailed',
    defaultActivityLevel: 'sedentary',
  },

  // English - US, UK, International
  // Research: Calculator.net, Omnicalculator, BMI-Calculator.net
  // Key feature: Educational content, simple presentation
  en: {
    defaultUnit: 'imperial', // US market preference
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'KATCH_MCARDLE'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'BMR', // Basal Metabolic Rate
    tdeeName: 'TDEE', // Total Daily Energy Expenditure
    features: {
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'WHO, NIH, USDA',
    uiStyle: 'moderate',
    defaultActivityLevel: 'sedentary',
  },

  // Portuguese - Brazil & Portugal
  // Research: Tua Saúde, MD.Saúde, GSupplementos
  // Key feature: WHO/FAO age-group formulas popular
  pt: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'WHO_FAO'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'TMB', // Taxa Metabólica Basal
    tdeeName: 'GET', // Gasto Energético Total
    features: {
      ageGroupFormulas: true, // WHO/FAO by age group
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'OMS, Ministério da Saúde',
    uiStyle: 'detailed',
    defaultActivityLevel: 'sedentary',
  },

  // French - France, Belgium, Switzerland
  // Research: ToutPourMaSante, Nutriandco, IMC.fr
  // Key feature: 4 formulas by athlete profile
  fr: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'KATCH_MCARDLE'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'MB', // Métabolisme de Base
    tdeeName: 'DET', // Dépense Énergétique Totale
    features: {
      athleteProfiles: true, // Sédentaire/Actif/Sportif/Athlète
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'OMS, ANSES, Ministère de la Santé',
    uiStyle: 'detailed',
    defaultActivityLevel: 'moderate',
  },

  // Hindi - India
  // Research: Steadfast Nutrition, Amarujala, ICICI Prudential
  // Key feature: Simple presentation, professional referral
  hi: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'optional',
    terminology: 'BMR', // Medical terms often in English
    tdeeName: 'TDEE',
    features: {
      bodyFatField: false, // Simpler input
    },
    healthAuthority: 'WHO, ICMR, NIN',
    uiStyle: 'simple',
    defaultActivityLevel: 'moderate',
  },

  // German - Germany, Austria, Switzerland
  // Research: Rechnerplus, Stiftung-Gesundheitswissen, IKK-Classic
  // Key feature: Detailed scientific approach
  de: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'Grundumsatz',
    tdeeName: 'Gesamtumsatz',
    features: {
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'WHO, DGE, Robert Koch Institut',
    uiStyle: 'detailed',
    defaultActivityLevel: 'moderate',
  },

  // Italian - Italy
  // Research: Fitnesspassion, Educazione Nutrizionale, BestBody
  // Key feature: Professional nutrition focus
  it: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'MB', // Metabolismo Basale
    tdeeName: 'TDEE', // Often kept in English
    features: {
      bodyFatField: true,
      macroLink: true,
    },
    healthAuthority: 'OMS, Ministero della Salute, SINU',
    uiStyle: 'detailed',
    defaultActivityLevel: 'moderate',
  },

  // Polish - Poland
  // Research: Dieta.pl, Kalkulatory.gofin.pl, MaximalHealth
  // Key feature: CRITICAL - Use "PPM" not "BMR", always show CPM (TDEE)
  pl: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'KATCH_MCARDLE'],
    formulaDisplay: 'multi_comparison', // Polish market prefers detailed comparison
    tdeeIntegration: 'prominent', // PPM + CPM always equal prominence
    terminology: 'PPM', // ⚠️ CRITICAL - Podstawowa Przemiana Materii
    tdeeName: 'CPM', // Całkowita Przemiana Materii
    features: {
      bodyFatField: true,
      graphComparison: true,
      macroLink: true,
    },
    healthAuthority: 'WHO, NFZ, IŻŻ',
    uiStyle: 'professional',
    defaultActivityLevel: 'moderate',
  },

  // Dutch - Netherlands, Belgium
  // Research: Voedingswaardetabel, Berekenen.nl, HappyHealthy
  // Key feature: 7 formulas including Ten Haaf (Dutch-specific)
  nl: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'TEN_HAAF', 'WHO_FAO'],
    formulaDisplay: 'multi_comparison', // Dutch prefer comprehensive comparison
    tdeeIntegration: 'integrated',
    terminology: 'BMR', // Basaal Metabolisme
    tdeeName: 'TDEE',
    features: {
      bodyFatField: true,
      graphComparison: true, // Visual comparison popular
      macroLink: true,
    },
    healthAuthority: 'WHO, RIVM, Voedingscentrum',
    uiStyle: 'professional',
    defaultActivityLevel: 'moderate',
  },

  // Turkish - Turkey
  // Research: Diyetkolik, Cerrahi.com.tr, Medicana
  // Key feature: Simple calculator, professional referral
  tr: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'integrated',
    terminology: 'BMH', // Bazal Metabolizma Hızı
    tdeeName: 'TDEE', // Often kept in English
    features: {
      bodyFatField: false, // Simpler input
    },
    healthAuthority: 'WHO, Türkiye Sağlık Bakanlığı',
    uiStyle: 'moderate',
    defaultActivityLevel: 'sedentary',
  },

  // Swedish - Sweden
  // Research: Kalkylator.org, Vikt.nu, Hälsoliv
  // Key feature: Privacy note, simple minimalist design
  sv: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT'],
    formulaDisplay: 'comparison',
    tdeeIntegration: 'optional',
    terminology: 'Basalmetabolism',
    tdeeName: 'Total energiförbrukning',
    features: {
      privacyNote: true, // Important for Swedish market
      bodyFatField: true,
    },
    healthAuthority: 'WHO, Folkhälsomyndigheten, Livsmedelsverket',
    uiStyle: 'simple',
    defaultActivityLevel: 'moderate',
  },

  // Russian - Russia, ex-Soviet states
  // Research: Beregifiguru, Kalkulyator-onlayn, Hudeemz
  // Key feature: 5 formulas with graphical comparison
  ru: {
    defaultUnit: 'metric',
    primaryFormula: 'MIFFLIN_ST_JEOR',
    secondaryFormulas: ['HARRIS_BENEDICT', 'KATCH_MCARDLE', 'WHO_FAO'],
    formulaDisplay: 'multi_comparison', // Russian market loves detailed comparison
    tdeeIntegration: 'integrated',
    terminology: 'БМО', // Базальный метаболизм отдыха
    tdeeName: 'СДКК', // Суточная доза калорий
    features: {
      bodyFatField: true,
      graphComparison: true, // Visual comparison very popular
      macroLink: true,
    },
    healthAuthority: 'ВОЗ, Минздрав России, НИИ питания РАМН',
    uiStyle: 'professional',
    defaultActivityLevel: 'sedentary',
  },
};

/**
 * Get regional configuration for a specific language
 */
export function getBMRRegionalConfig(lang: Locale): BMRRegionalConfig {
  return BMR_REGIONAL_CONFIG[lang] || BMR_REGIONAL_CONFIG.en;
}

/**
 * Check if a language uses multi-formula comparison
 */
export function usesMultiFormulaComparison(lang: Locale): boolean {
  const config = getBMRRegionalConfig(lang);
  return config.formulaDisplay === 'multi_comparison';
}

/**
 * Get formulas to display for a language (primary + secondary)
 */
export function getFormulasForLang(lang: Locale): BMRFormula[] {
  const config = getBMRRegionalConfig(lang);
  return [config.primaryFormula, ...config.secondaryFormulas];
}

/**
 * Get local terminology for BMR
 */
export function getBMRTerminology(lang: Locale): string {
  return getBMRRegionalConfig(lang).terminology;
}

/**
 * Get local terminology for TDEE
 */
export function getTDEETerminology(lang: Locale): string {
  return getBMRRegionalConfig(lang).tdeeName;
}

/**
 * Check if calorie deficit table should be shown
 */
export function showDeficitTable(lang: Locale): boolean {
  return getBMRRegionalConfig(lang).features.deficitTable === true;
}

/**
 * Check if athlete profiles should be shown (French market)
 */
export function showAthleteProfiles(lang: Locale): boolean {
  return getBMRRegionalConfig(lang).features.athleteProfiles === true;
}

/**
 * Check if privacy note should be shown (Swedish market)
 */
export function showPrivacyNote(lang: Locale): boolean {
  return getBMRRegionalConfig(lang).features.privacyNote === true;
}

/**
 * Check if body fat field should be shown
 */
export function showBodyFatField(lang: Locale): boolean {
  return getBMRRegionalConfig(lang).features.bodyFatField !== false;
}

/**
 * Check if graph comparison should be shown
 */
export function showGraphComparison(lang: Locale): boolean {
  return getBMRRegionalConfig(lang).features.graphComparison === true;
}

/**
 * Get default unit system for a language
 */
export function getDefaultUnitSystem(lang: Locale): 'metric' | 'imperial' {
  return getBMRRegionalConfig(lang).defaultUnit;
}

/**
 * Get TDEE integration level
 */
export function getTDEEIntegration(lang: Locale): TDEEIntegration {
  return getBMRRegionalConfig(lang).tdeeIntegration;
}

/**
 * Get UI style preference for a language
 */
export function getUIStyle(lang: Locale): 'simple' | 'moderate' | 'detailed' | 'professional' {
  return getBMRRegionalConfig(lang).uiStyle;
}
