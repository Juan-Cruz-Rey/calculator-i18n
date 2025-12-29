/**
 * Static imports of all calculator components
 *
 * This file imports all calculator components statically and exports them
 * as a map. This is necessary because Astro cannot do dynamic imports of
 * components at render time.
 */

import type { CalculatorId } from '@/config/calculators';

// Import all calculator components
import AgeCalculator from '@/components/calculators/AgeCalculator.astro';
import ArmyBodyFatCalculator from '@/components/calculators/ArmyBodyFatCalculator.astro';
import BACCalculator from '@/components/calculators/BACCalculator.astro';
import BloodTypeCalculator from '@/components/calculators/BloodTypeCalculator.astro';
import BMICalculator from '@/components/calculators/BMICalculator.astro';
import BMRCalculator from '@/components/calculators/BMRCalculator.astro';
import BodyFatCalculator from '@/components/calculators/BodyFatCalculator.astro';
import BodyFrameCalculator from '@/components/calculators/BodyFrameCalculator.astro';
import BodyTypeCalculator from '@/components/calculators/BodyTypeCalculator.astro';
import BSACalculator from '@/components/calculators/BSACalculator.astro';
import CalorieCalculator from '@/components/calculators/CalorieCalculator.astro';
import CaloriesBurnedCalculator from '@/components/calculators/CaloriesBurnedCalculator.astro';
import CarbohydrateCalculator from '@/components/calculators/CarbohydrateCalculator.astro';
import DateCalculator from '@/components/calculators/DateCalculator.astro';
import DueDateCalculator from '@/components/calculators/DueDateCalculator.astro';
import FatIntakeCalculator from '@/components/calculators/FatIntakeCalculator.astro';
import GFRCalculator from '@/components/calculators/GFRCalculator.astro';
import HealthyWeightCalculator from '@/components/calculators/HealthyWeightCalculator.astro';
import HeartRateCalculator from '@/components/calculators/HeartRateCalculator.astro';
import IdealWeightCalculator from '@/components/calculators/IdealWeightCalculator.astro';
import LeanBodyMassCalculator from '@/components/calculators/LeanBodyMassCalculator.astro';
import MacroCalculator from '@/components/calculators/MacroCalculator.astro';
import OneRepMaxCalculator from '@/components/calculators/OneRepMaxCalculator.astro';
import OvulationCalculator from '@/components/calculators/OvulationCalculator.astro';
import PaceCalculator from '@/components/calculators/PaceCalculator.astro';
import PercentageCalculator from '@/components/calculators/PercentageCalculator.astro';
import PeriodCalculator from '@/components/calculators/PeriodCalculator.astro';
import PregnancyCalculator from '@/components/calculators/PregnancyCalculator.astro';
import PregnancyConceptionCalculator from '@/components/calculators/PregnancyConceptionCalculator.astro';
import PregnancyWeightGainCalculator from '@/components/calculators/PregnancyWeightGainCalculator.astro';
import ProteinCalculator from '@/components/calculators/ProteinCalculator.astro';
import SleepCalculator from '@/components/calculators/SleepCalculator.astro';
import TDEECalculator from '@/components/calculators/TDEECalculator.astro';
import TipCalculator from '@/components/calculators/TipCalculator.astro';
import WaistHipCalculator from '@/components/calculators/WaistHipCalculator.astro';
import WeightWatchersCalculator from '@/components/calculators/WeightWatchersCalculator.astro';

// Map of calculator IDs to their components
export const calculatorComponents: Record<CalculatorId, any> = {
  'age': AgeCalculator,
  'army-body-fat': ArmyBodyFatCalculator,
  'bac': BACCalculator,
  'blood-type': BloodTypeCalculator,
  'bmi': BMICalculator,
  'bmr': BMRCalculator,
  'body-fat': BodyFatCalculator,
  'body-frame': BodyFrameCalculator,
  'body-type': BodyTypeCalculator,
  'bsa': BSACalculator,
  'calorie': CalorieCalculator,
  'calories-burned': CaloriesBurnedCalculator,
  'carbohydrate': CarbohydrateCalculator,
  'date': DateCalculator,
  'due-date': DueDateCalculator,
  'fat-intake': FatIntakeCalculator,
  'gfr': GFRCalculator,
  'healthy-weight': HealthyWeightCalculator,
  'heart-rate': HeartRateCalculator,
  'ideal-weight': IdealWeightCalculator,
  'lean-body-mass': LeanBodyMassCalculator,
  'macro': MacroCalculator,
  'one-rep-max': OneRepMaxCalculator,
  'ovulation': OvulationCalculator,
  'pace': PaceCalculator,
  'percentage': PercentageCalculator,
  'period': PeriodCalculator,
  'pregnancy': PregnancyCalculator,
  'pregnancy-conception': PregnancyConceptionCalculator,
  'pregnancy-weight-gain': PregnancyWeightGainCalculator,
  'protein': ProteinCalculator,
  'sleep': SleepCalculator,
  'tdee': TDEECalculator,
  'tip': TipCalculator,
  'waist-hip': WaistHipCalculator,
  'weight-watchers': WeightWatchersCalculator,
};

/**
 * Get a calculator component by ID
 */
export function getCalculatorComponent(calculatorId: CalculatorId) {
  return calculatorComponents[calculatorId];
}
