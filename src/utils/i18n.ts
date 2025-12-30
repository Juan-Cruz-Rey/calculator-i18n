export type Locale = 'es' | 'en' | 'pt' | 'fr' | 'hi' | 'de' | 'it' | 'pl' | 'nl' | 'tr' | 'sv' | 'ru';

// Import routing configuration
import { getSlug } from '@/config/routes';
import { languages, defaultLocale, getSupportedLocales } from '@/config/languages';
import type { CalculatorId } from '@/config/calculators';
import { calculators } from '@/config/calculators';

// Import common translations
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';
import ptCommon from '../../public/locales/pt/common.json';
import frCommon from '../../public/locales/fr/common.json';
import hiCommon from '../../public/locales/hi/common.json';
import deCommon from '../../public/locales/de/common.json';
import itCommon from '../../public/locales/it/common.json';
import plCommon from '../../public/locales/pl/common.json';
import nlCommon from '../../public/locales/nl/common.json';
import trCommon from '../../public/locales/tr/common.json';
import svCommon from '../../public/locales/sv/common.json';
import ruCommon from '../../public/locales/ru/common.json';

// Import categories translations
import esCategories from '../../public/locales/es/categories.json';
import enCategories from '../../public/locales/en/categories.json';
import ptCategories from '../../public/locales/pt/categories.json';
import frCategories from '../../public/locales/fr/categories.json';
import hiCategories from '../../public/locales/hi/categories.json';
import deCategories from '../../public/locales/de/categories.json';
import itCategories from '../../public/locales/it/categories.json';
import plCategories from '../../public/locales/pl/categories.json';
import nlCategories from '../../public/locales/nl/categories.json';
import trCategories from '../../public/locales/tr/categories.json';
import svCategories from '../../public/locales/sv/categories.json';
import ruCategories from '../../public/locales/ru/categories.json';

// Import calculator-specific translations
import esBMI from '../../public/locales/es/calculators/bmi.json';
import enBMI from '../../public/locales/en/calculators/bmi.json';
import ptBMI from '../../public/locales/pt/calculators/bmi.json';
import frBMI from '../../public/locales/fr/calculators/bmi.json';
import hiBMI from '../../public/locales/hi/calculators/bmi.json';
import deBMI from '../../public/locales/de/calculators/bmi.json';
import itBMI from '../../public/locales/it/calculators/bmi.json';

import esCalorie from '../../public/locales/es/calculators/calorie.json';
import enCalorie from '../../public/locales/en/calculators/calorie.json';
import ptCalorie from '../../public/locales/pt/calculators/calorie.json';
import frCalorie from '../../public/locales/fr/calculators/calorie.json';
import hiCalorie from '../../public/locales/hi/calculators/calorie.json';
import deCalorie from '../../public/locales/de/calculators/calorie.json';
import itCalorie from '../../public/locales/it/calculators/calorie.json';

import esIdealWeight from '../../public/locales/es/calculators/idealWeight.json';
import enIdealWeight from '../../public/locales/en/calculators/idealWeight.json';
import ptIdealWeight from '../../public/locales/pt/calculators/idealWeight.json';
import frIdealWeight from '../../public/locales/fr/calculators/idealWeight.json';
import hiIdealWeight from '../../public/locales/hi/calculators/idealWeight.json';
import deIdealWeight from '../../public/locales/de/calculators/idealWeight.json';
import itIdealWeight from '../../public/locales/it/calculators/idealWeight.json';

import esBodyFat from '../../public/locales/es/calculators/bodyFat.json';
import enBodyFat from '../../public/locales/en/calculators/bodyFat.json';
import ptBodyFat from '../../public/locales/pt/calculators/bodyFat.json';
import frBodyFat from '../../public/locales/fr/calculators/bodyFat.json';
import hiBodyFat from '../../public/locales/hi/calculators/bodyFat.json';
import deBodyFat from '../../public/locales/de/calculators/bodyFat.json';
import itBodyFat from '../../public/locales/it/calculators/bodyFat.json';

import esBMR from '../../public/locales/es/calculators/bmr.json';
import enBMR from '../../public/locales/en/calculators/bmr.json';
import ptBMR from '../../public/locales/pt/calculators/bmr.json';
import frBMR from '../../public/locales/fr/calculators/bmr.json';
import hiBMR from '../../public/locales/hi/calculators/bmr.json';
import deBMR from '../../public/locales/de/calculators/bmr.json';
import itBMR from '../../public/locales/it/calculators/bmr.json';

import esTDEE from '../../public/locales/es/calculators/tdee.json';
import enTDEE from '../../public/locales/en/calculators/tdee.json';
import ptTDEE from '../../public/locales/pt/calculators/tdee.json';
import frTDEE from '../../public/locales/fr/calculators/tdee.json';
import hiTDEE from '../../public/locales/hi/calculators/tdee.json';
import deTDEE from '../../public/locales/de/calculators/tdee.json';
import itTDEE from '../../public/locales/it/calculators/tdee.json';

import esArmyBodyFat from '../../public/locales/es/calculators/armyBodyFat.json';
import enArmyBodyFat from '../../public/locales/en/calculators/armyBodyFat.json';
import ptArmyBodyFat from '../../public/locales/pt/calculators/armyBodyFat.json';
import frArmyBodyFat from '../../public/locales/fr/calculators/armyBodyFat.json';
import hiArmyBodyFat from '../../public/locales/hi/calculators/armyBodyFat.json';
import deArmyBodyFat from '../../public/locales/de/calculators/armyBodyFat.json';
import itArmyBodyFat from '../../public/locales/it/calculators/armyBodyFat.json';

import esPace from '../../public/locales/es/calculators/pace.json';
import enPace from '../../public/locales/en/calculators/pace.json';
import ptPace from '../../public/locales/pt/calculators/pace.json';
import frPace from '../../public/locales/fr/calculators/pace.json';
import hiPace from '../../public/locales/hi/calculators/pace.json';
import dePace from '../../public/locales/de/calculators/pace.json';
import itPace from '../../public/locales/it/calculators/pace.json';

import esMacro from '../../public/locales/es/calculators/macro.json';
import enMacro from '../../public/locales/en/calculators/macro.json';
import ptMacro from '../../public/locales/pt/calculators/macro.json';
import frMacro from '../../public/locales/fr/calculators/macro.json';
import hiMacro from '../../public/locales/hi/calculators/macro.json';
import deMacro from '../../public/locales/de/calculators/macro.json';
import itMacro from '../../public/locales/it/calculators/macro.json';

import esBAC from '../../public/locales/es/calculators/bac.json';
import enBAC from '../../public/locales/en/calculators/bac.json';
import ptBAC from '../../public/locales/pt/calculators/bac.json';
import frBAC from '../../public/locales/fr/calculators/bac.json';
import hiBAC from '../../public/locales/hi/calculators/bac.json';
import deBAC from '../../public/locales/de/calculators/bac.json';
import itBAC from '../../public/locales/it/calculators/bac.json';

import esPregnancy from '../../public/locales/es/calculators/pregnancy.json';
import enPregnancy from '../../public/locales/en/calculators/pregnancy.json';
import ptPregnancy from '../../public/locales/pt/calculators/pregnancy.json';
import frPregnancy from '../../public/locales/fr/calculators/pregnancy.json';
import hiPregnancy from '../../public/locales/hi/calculators/pregnancy.json';
import dePregnancy from '../../public/locales/de/calculators/pregnancy.json';
import itPregnancy from '../../public/locales/it/calculators/pregnancy.json';

import esPregnancyWeightGain from '../../public/locales/es/calculators/pregnancyWeightGain.json';
import enPregnancyWeightGain from '../../public/locales/en/calculators/pregnancyWeightGain.json';
import ptPregnancyWeightGain from '../../public/locales/pt/calculators/pregnancyWeightGain.json';
import frPregnancyWeightGain from '../../public/locales/fr/calculators/pregnancyWeightGain.json';
import hiPregnancyWeightGain from '../../public/locales/hi/calculators/pregnancyWeightGain.json';
import dePregnancyWeightGain from '../../public/locales/de/calculators/pregnancyWeightGain.json';
import itPregnancyWeightGain from '../../public/locales/it/calculators/pregnancyWeightGain.json';

import esPregnancyConception from '../../public/locales/es/calculators/pregnancyConception.json';
import enPregnancyConception from '../../public/locales/en/calculators/pregnancyConception.json';
import ptPregnancyConception from '../../public/locales/pt/calculators/pregnancyConception.json';
import frPregnancyConception from '../../public/locales/fr/calculators/pregnancyConception.json';
import hiPregnancyConception from '../../public/locales/hi/calculators/pregnancyConception.json';
import dePregnancyConception from '../../public/locales/de/calculators/pregnancyConception.json';
import itPregnancyConception from '../../public/locales/it/calculators/pregnancyConception.json';

import esDueDate from '../../public/locales/es/calculators/dueDate.json';
import enDueDate from '../../public/locales/en/calculators/dueDate.json';
import ptDueDate from '../../public/locales/pt/calculators/dueDate.json';
import frDueDate from '../../public/locales/fr/calculators/dueDate.json';
import hiDueDate from '../../public/locales/hi/calculators/dueDate.json';
import deDueDate from '../../public/locales/de/calculators/dueDate.json';
import itDueDate from '../../public/locales/it/calculators/dueDate.json';

import esCarbohydrate from '../../public/locales/es/calculators/carbohydrate.json';
import enCarbohydrate from '../../public/locales/en/calculators/carbohydrate.json';
import ptCarbohydrate from '../../public/locales/pt/calculators/carbohydrate.json';
import frCarbohydrate from '../../public/locales/fr/calculators/carbohydrate.json';
import hiCarbohydrate from '../../public/locales/hi/calculators/carbohydrate.json';
import deCarbohydrate from '../../public/locales/de/calculators/carbohydrate.json';
import itCarbohydrate from '../../public/locales/it/calculators/carbohydrate.json';

import esLeanBodyMass from '../../public/locales/es/calculators/leanBodyMass.json';
import enLeanBodyMass from '../../public/locales/en/calculators/leanBodyMass.json';
import ptLeanBodyMass from '../../public/locales/pt/calculators/leanBodyMass.json';
import frLeanBodyMass from '../../public/locales/fr/calculators/leanBodyMass.json';
import hiLeanBodyMass from '../../public/locales/hi/calculators/leanBodyMass.json';
import deLeanBodyMass from '../../public/locales/de/calculators/leanBodyMass.json';
import itLeanBodyMass from '../../public/locales/it/calculators/leanBodyMass.json';

import esHealthyWeight from '../../public/locales/es/calculators/healthyWeight.json';
import enHealthyWeight from '../../public/locales/en/calculators/healthyWeight.json';
import ptHealthyWeight from '../../public/locales/pt/calculators/healthyWeight.json';
import frHealthyWeight from '../../public/locales/fr/calculators/healthyWeight.json';
import hiHealthyWeight from '../../public/locales/hi/calculators/healthyWeight.json';
import deHealthyWeight from '../../public/locales/de/calculators/healthyWeight.json';
import itHealthyWeight from '../../public/locales/it/calculators/healthyWeight.json';

import esHeartRate from '../../public/locales/es/calculators/heartRate.json';
import enHeartRate from '../../public/locales/en/calculators/heartRate.json';
import ptHeartRate from '../../public/locales/pt/calculators/heartRate.json';
import frHeartRate from '../../public/locales/fr/calculators/heartRate.json';
import hiHeartRate from '../../public/locales/hi/calculators/heartRate.json';
import deHeartRate from '../../public/locales/de/calculators/heartRate.json';
import itHeartRate from '../../public/locales/it/calculators/heartRate.json';
import esBodyType from '../../public/locales/es/calculators/bodyType.json';
import enBodyType from '../../public/locales/en/calculators/bodyType.json';
import ptBodyType from '../../public/locales/pt/calculators/bodyType.json';
import frBodyType from '../../public/locales/fr/calculators/bodyType.json';
import hiBodyType from '../../public/locales/hi/calculators/bodyType.json';
import deBodyType from '../../public/locales/de/calculators/bodyType.json';
import itBodyType from '../../public/locales/it/calculators/bodyType.json';

import esProtein from '../../public/locales/es/calculators/protein.json';
import enProtein from '../../public/locales/en/calculators/protein.json';
import ptProtein from '../../public/locales/pt/calculators/protein.json';
import frProtein from '../../public/locales/fr/calculators/protein.json';
import hiProtein from '../../public/locales/hi/calculators/protein.json';
import deProtein from '../../public/locales/de/calculators/protein.json';
import itProtein from '../../public/locales/it/calculators/protein.json';

import esCaloriesBurned from '../../public/locales/es/calculators/caloriesBurned.json';
import enCaloriesBurned from '../../public/locales/en/calculators/caloriesBurned.json';
import ptCaloriesBurned from '../../public/locales/pt/calculators/caloriesBurned.json';
import frCaloriesBurned from '../../public/locales/fr/calculators/caloriesBurned.json';
import hiCaloriesBurned from '../../public/locales/hi/calculators/caloriesBurned.json';
import deCaloriesBurned from '../../public/locales/de/calculators/caloriesBurned.json';
import itCaloriesBurned from '../../public/locales/it/calculators/caloriesBurned.json';

import esBSA from '../../public/locales/es/calculators/bsa.json';
import enBSA from '../../public/locales/en/calculators/bsa.json';
import ptBSA from '../../public/locales/pt/calculators/bsa.json';
import frBSA from '../../public/locales/fr/calculators/bsa.json';
import hiBSA from '../../public/locales/hi/calculators/bsa.json';
import deBSA from '../../public/locales/de/calculators/bsa.json';
import itBSA from '../../public/locales/it/calculators/bsa.json';

import esBloodType from '../../public/locales/es/calculators/bloodType.json';
import enBloodType from '../../public/locales/en/calculators/bloodType.json';
import ptBloodType from '../../public/locales/pt/calculators/bloodType.json';
import frBloodType from '../../public/locales/fr/calculators/bloodType.json';
import hiBloodType from '../../public/locales/hi/calculators/bloodType.json';
import deBloodType from '../../public/locales/de/calculators/bloodType.json';
import itBloodType from '../../public/locales/it/calculators/bloodType.json';

import esOvulation from '../../public/locales/es/calculators/ovulation.json';
import enOvulation from '../../public/locales/en/calculators/ovulation.json';
import ptOvulation from '../../public/locales/pt/calculators/ovulation.json';
import frOvulation from '../../public/locales/fr/calculators/ovulation.json';
import hiOvulation from '../../public/locales/hi/calculators/ovulation.json';
import deOvulation from '../../public/locales/de/calculators/ovulation.json';
import itOvulation from '../../public/locales/it/calculators/ovulation.json';

import esPeriod from '../../public/locales/es/calculators/period.json';
import enPeriod from '../../public/locales/en/calculators/period.json';
import ptPeriod from '../../public/locales/pt/calculators/period.json';
import frPeriod from '../../public/locales/fr/calculators/period.json';
import hiPeriod from '../../public/locales/hi/calculators/period.json';
import dePeriod from '../../public/locales/de/calculators/period.json';
import itPeriod from '../../public/locales/it/calculators/period.json';

import esBodyFrame from '../../public/locales/es/calculators/bodyFrame.json';
import enBodyFrame from '../../public/locales/en/calculators/bodyFrame.json';
import ptBodyFrame from '../../public/locales/pt/calculators/bodyFrame.json';
import frBodyFrame from '../../public/locales/fr/calculators/bodyFrame.json';
import hiBodyFrame from '../../public/locales/hi/calculators/bodyFrame.json';
import deBodyFrame from '../../public/locales/de/calculators/bodyFrame.json';
import itBodyFrame from '../../public/locales/it/calculators/bodyFrame.json';

import esWaistHip from '../../public/locales/es/calculators/waistHip.json';
import enWaistHip from '../../public/locales/en/calculators/waistHip.json';
import ptWaistHip from '../../public/locales/pt/calculators/waistHip.json';
import frWaistHip from '../../public/locales/fr/calculators/waistHip.json';
import hiWaistHip from '../../public/locales/hi/calculators/waistHip.json';
import deWaistHip from '../../public/locales/de/calculators/waistHip.json';
import itWaistHip from '../../public/locales/it/calculators/waistHip.json';

import esAge from '../../public/locales/es/calculators/age.json';
import enAge from '../../public/locales/en/calculators/age.json';
import ptAge from '../../public/locales/pt/calculators/age.json';
import frAge from '../../public/locales/fr/calculators/age.json';
import hiAge from '../../public/locales/hi/calculators/age.json';
import deAge from '../../public/locales/de/calculators/age.json';
import itAge from '../../public/locales/it/calculators/age.json';

import esTip from '../../public/locales/es/calculators/tip.json';
import enTip from '../../public/locales/en/calculators/tip.json';
import ptTip from '../../public/locales/pt/calculators/tip.json';
import frTip from '../../public/locales/fr/calculators/tip.json';
import hiTip from '../../public/locales/hi/calculators/tip.json';
import deTip from '../../public/locales/de/calculators/tip.json';
import itTip from '../../public/locales/it/calculators/tip.json';

import esDate from '../../public/locales/es/calculators/date.json';
import enDate from '../../public/locales/en/calculators/date.json';
import ptDate from '../../public/locales/pt/calculators/date.json';
import frDate from '../../public/locales/fr/calculators/date.json';
import hiDate from '../../public/locales/hi/calculators/date.json';
import deDate from '../../public/locales/de/calculators/date.json';
import itDate from '../../public/locales/it/calculators/date.json';

import esPercentage from '../../public/locales/es/calculators/percentage.json';
import enPercentage from '../../public/locales/en/calculators/percentage.json';
import ptPercentage from '../../public/locales/pt/calculators/percentage.json';
import frPercentage from '../../public/locales/fr/calculators/percentage.json';
import hiPercentage from '../../public/locales/hi/calculators/percentage.json';
import dePercentage from '../../public/locales/de/calculators/percentage.json';
import itPercentage from '../../public/locales/it/calculators/percentage.json';

import esSleep from '../../public/locales/es/calculators/sleep.json';
import enSleep from '../../public/locales/en/calculators/sleep.json';
import ptSleep from '../../public/locales/pt/calculators/sleep.json';
import frSleep from '../../public/locales/fr/calculators/sleep.json';
import hiSleep from '../../public/locales/hi/calculators/sleep.json';
import deSleep from '../../public/locales/de/calculators/sleep.json';
import itSleep from '../../public/locales/it/calculators/sleep.json';

import esGFR from '../../public/locales/es/calculators/gfr.json';
import enGFR from '../../public/locales/en/calculators/gfr.json';
import ptGFR from '../../public/locales/pt/calculators/gfr.json';
import frGFR from '../../public/locales/fr/calculators/gfr.json';
import hiGFR from '../../public/locales/hi/calculators/gfr.json';
import deGFR from '../../public/locales/de/calculators/gfr.json';
import itGFR from '../../public/locales/it/calculators/gfr.json';


import plBMI from '../../public/locales/pl/calculators/bmi.json';
import svBMI from '../../public/locales/sv/calculators/bmi.json';
import plCalorie from '../../public/locales/pl/calculators/calorie.json';
import svCalorie from '../../public/locales/sv/calculators/calorie.json';
import plIdealWeight from '../../public/locales/pl/calculators/idealWeight.json';
import svIdealWeight from '../../public/locales/sv/calculators/idealWeight.json';
import plBodyFat from '../../public/locales/pl/calculators/bodyFat.json';
import svBodyFat from '../../public/locales/sv/calculators/bodyFat.json';
import plBMR from '../../public/locales/pl/calculators/bmr.json';
import svBMR from '../../public/locales/sv/calculators/bmr.json';
import plTDEE from '../../public/locales/pl/calculators/tdee.json';
import svTDEE from '../../public/locales/sv/calculators/tdee.json';
import plArmyBodyFat from '../../public/locales/pl/calculators/armyBodyFat.json';
import svArmyBodyFat from '../../public/locales/sv/calculators/armyBodyFat.json';
import plPace from '../../public/locales/pl/calculators/pace.json';
import svPace from '../../public/locales/sv/calculators/pace.json';
import plMacro from '../../public/locales/pl/calculators/macro.json';
import svMacro from '../../public/locales/sv/calculators/macro.json';
import plBAC from '../../public/locales/pl/calculators/bac.json';
import svBAC from '../../public/locales/sv/calculators/bac.json';
import plPregnancy from '../../public/locales/pl/calculators/pregnancy.json';
import svPregnancy from '../../public/locales/sv/calculators/pregnancy.json';
import plPregnancyWeightGain from '../../public/locales/pl/calculators/pregnancyWeightGain.json';
import svPregnancyWeightGain from '../../public/locales/sv/calculators/pregnancyWeightGain.json';
import plPregnancyConception from '../../public/locales/pl/calculators/pregnancyConception.json';
import svPregnancyConception from '../../public/locales/sv/calculators/pregnancyConception.json';
import plDueDate from '../../public/locales/pl/calculators/dueDate.json';
import svDueDate from '../../public/locales/sv/calculators/dueDate.json';
import plCarbohydrate from '../../public/locales/pl/calculators/carbohydrate.json';
import svCarbohydrate from '../../public/locales/sv/calculators/carbohydrate.json';
import plLeanBodyMass from '../../public/locales/pl/calculators/leanBodyMass.json';
import svLeanBodyMass from '../../public/locales/sv/calculators/leanBodyMass.json';
import plHealthyWeight from '../../public/locales/pl/calculators/healthyWeight.json';
import svHealthyWeight from '../../public/locales/sv/calculators/healthyWeight.json';
import plHeartRate from '../../public/locales/pl/calculators/heartRate.json';
import svHeartRate from '../../public/locales/sv/calculators/heartRate.json';
import plBodyType from '../../public/locales/pl/calculators/bodyType.json';
import svBodyType from '../../public/locales/sv/calculators/bodyType.json';
import plProtein from '../../public/locales/pl/calculators/protein.json';
import svProtein from '../../public/locales/sv/calculators/protein.json';
import plCaloriesBurned from '../../public/locales/pl/calculators/caloriesBurned.json';
import svCaloriesBurned from '../../public/locales/sv/calculators/caloriesBurned.json';
import plBSA from '../../public/locales/pl/calculators/bsa.json';
import svBSA from '../../public/locales/sv/calculators/bsa.json';
import plBloodType from '../../public/locales/pl/calculators/bloodType.json';
import svBloodType from '../../public/locales/sv/calculators/bloodType.json';
import plOvulation from '../../public/locales/pl/calculators/ovulation.json';
import svOvulation from '../../public/locales/sv/calculators/ovulation.json';
import plPeriod from '../../public/locales/pl/calculators/period.json';
import svPeriod from '../../public/locales/sv/calculators/period.json';
import plBodyFrame from '../../public/locales/pl/calculators/bodyFrame.json';
import svBodyFrame from '../../public/locales/sv/calculators/bodyFrame.json';
import plWaistHip from '../../public/locales/pl/calculators/waistHip.json';
import svWaistHip from '../../public/locales/sv/calculators/waistHip.json';
import plAge from '../../public/locales/pl/calculators/age.json';
import svAge from '../../public/locales/sv/calculators/age.json';
import plTip from '../../public/locales/pl/calculators/tip.json';
import svTip from '../../public/locales/sv/calculators/tip.json';
import plDate from '../../public/locales/pl/calculators/date.json';
import svDate from '../../public/locales/sv/calculators/date.json';
import plPercentage from '../../public/locales/pl/calculators/percentage.json';
import svPercentage from '../../public/locales/sv/calculators/percentage.json';
import plSleep from '../../public/locales/pl/calculators/sleep.json';
import svSleep from '../../public/locales/sv/calculators/sleep.json';
import plGFR from '../../public/locales/pl/calculators/gfr.json';
import svGFR from '../../public/locales/sv/calculators/gfr.json';


import nlBmi from '../../public/locales/nl/calculators/bmi.json';
import trBmi from '../../public/locales/tr/calculators/bmi.json';
import ruBmi from '../../public/locales/ru/calculators/bmi.json';
import nlCalorie from '../../public/locales/nl/calculators/calorie.json';
import trCalorie from '../../public/locales/tr/calculators/calorie.json';
import ruCalorie from '../../public/locales/ru/calculators/calorie.json';
import nlIdealWeight from '../../public/locales/nl/calculators/idealWeight.json';
import trIdealWeight from '../../public/locales/tr/calculators/idealWeight.json';
import ruIdealWeight from '../../public/locales/ru/calculators/idealWeight.json';
import nlBodyFat from '../../public/locales/nl/calculators/bodyFat.json';
import trBodyFat from '../../public/locales/tr/calculators/bodyFat.json';
import ruBodyFat from '../../public/locales/ru/calculators/bodyFat.json';
import nlBmr from '../../public/locales/nl/calculators/bmr.json';
import trBmr from '../../public/locales/tr/calculators/bmr.json';
import ruBmr from '../../public/locales/ru/calculators/bmr.json';
import nlTdee from '../../public/locales/nl/calculators/tdee.json';
import trTdee from '../../public/locales/tr/calculators/tdee.json';
import ruTdee from '../../public/locales/ru/calculators/tdee.json';
import nlArmyBodyFat from '../../public/locales/nl/calculators/armyBodyFat.json';
import trArmyBodyFat from '../../public/locales/tr/calculators/armyBodyFat.json';
import ruArmyBodyFat from '../../public/locales/ru/calculators/armyBodyFat.json';
import nlPace from '../../public/locales/nl/calculators/pace.json';
import trPace from '../../public/locales/tr/calculators/pace.json';
import ruPace from '../../public/locales/ru/calculators/pace.json';
import nlMacro from '../../public/locales/nl/calculators/macro.json';
import trMacro from '../../public/locales/tr/calculators/macro.json';
import ruMacro from '../../public/locales/ru/calculators/macro.json';
import nlBAC from '../../public/locales/nl/calculators/bac.json';
import trBAC from '../../public/locales/tr/calculators/bac.json';
import ruBAC from '../../public/locales/ru/calculators/bac.json';
import nlPregnancy from '../../public/locales/nl/calculators/pregnancy.json';
import trPregnancy from '../../public/locales/tr/calculators/pregnancy.json';
import ruPregnancy from '../../public/locales/ru/calculators/pregnancy.json';
import nlPregnancyWeightGain from '../../public/locales/nl/calculators/pregnancyWeightGain.json';
import trPregnancyWeightGain from '../../public/locales/tr/calculators/pregnancyWeightGain.json';
import ruPregnancyWeightGain from '../../public/locales/ru/calculators/pregnancyWeightGain.json';
import nlPregnancyConception from '../../public/locales/nl/calculators/pregnancyConception.json';
import trPregnancyConception from '../../public/locales/tr/calculators/pregnancyConception.json';
import ruPregnancyConception from '../../public/locales/ru/calculators/pregnancyConception.json';
import nlDueDate from '../../public/locales/nl/calculators/dueDate.json';
import trDueDate from '../../public/locales/tr/calculators/dueDate.json';
import ruDueDate from '../../public/locales/ru/calculators/dueDate.json';
import nlCarbohydrate from '../../public/locales/nl/calculators/carbohydrate.json';
import trCarbohydrate from '../../public/locales/tr/calculators/carbohydrate.json';
import ruCarbohydrate from '../../public/locales/ru/calculators/carbohydrate.json';
import nlLeanBodyMass from '../../public/locales/nl/calculators/leanBodyMass.json';
import trLeanBodyMass from '../../public/locales/tr/calculators/leanBodyMass.json';
import ruLeanBodyMass from '../../public/locales/ru/calculators/leanBodyMass.json';
import nlHealthyWeight from '../../public/locales/nl/calculators/healthyWeight.json';
import trHealthyWeight from '../../public/locales/tr/calculators/healthyWeight.json';
import ruHealthyWeight from '../../public/locales/ru/calculators/healthyWeight.json';
import nlHeartRate from '../../public/locales/nl/calculators/heartRate.json';
import trHeartRate from '../../public/locales/tr/calculators/heartRate.json';
import ruHeartRate from '../../public/locales/ru/calculators/heartRate.json';
import nlBodyType from '../../public/locales/nl/calculators/bodyType.json';
import trBodyType from '../../public/locales/tr/calculators/bodyType.json';
import ruBodyType from '../../public/locales/ru/calculators/bodyType.json';
import nlProtein from '../../public/locales/nl/calculators/protein.json';
import trProtein from '../../public/locales/tr/calculators/protein.json';
import ruProtein from '../../public/locales/ru/calculators/protein.json';
import nlCaloriesBurned from '../../public/locales/nl/calculators/caloriesBurned.json';
import trCaloriesBurned from '../../public/locales/tr/calculators/caloriesBurned.json';
import ruCaloriesBurned from '../../public/locales/ru/calculators/caloriesBurned.json';
import nlBsa from '../../public/locales/nl/calculators/bsa.json';
import trBsa from '../../public/locales/tr/calculators/bsa.json';
import ruBsa from '../../public/locales/ru/calculators/bsa.json';
import nlBloodType from '../../public/locales/nl/calculators/bloodType.json';
import trBloodType from '../../public/locales/tr/calculators/bloodType.json';
import ruBloodType from '../../public/locales/ru/calculators/bloodType.json';
import nlOvulation from '../../public/locales/nl/calculators/ovulation.json';
import trOvulation from '../../public/locales/tr/calculators/ovulation.json';
import ruOvulation from '../../public/locales/ru/calculators/ovulation.json';
import nlPeriod from '../../public/locales/nl/calculators/period.json';
import trPeriod from '../../public/locales/tr/calculators/period.json';
import ruPeriod from '../../public/locales/ru/calculators/period.json';
import nlBodyFrame from '../../public/locales/nl/calculators/bodyFrame.json';
import trBodyFrame from '../../public/locales/tr/calculators/bodyFrame.json';
import ruBodyFrame from '../../public/locales/ru/calculators/bodyFrame.json';
import nlWaistHip from '../../public/locales/nl/calculators/waistHip.json';
import trWaistHip from '../../public/locales/tr/calculators/waistHip.json';
import ruWaistHip from '../../public/locales/ru/calculators/waistHip.json';
import nlTip from '../../public/locales/nl/calculators/tip.json';
import trTip from '../../public/locales/tr/calculators/tip.json';
import ruTip from '../../public/locales/ru/calculators/tip.json';
import nlDate from '../../public/locales/nl/calculators/date.json';
import trDate from '../../public/locales/tr/calculators/date.json';
import ruDate from '../../public/locales/ru/calculators/date.json';
import nlAge from '../../public/locales/nl/calculators/age.json';
import trAge from '../../public/locales/tr/calculators/age.json';
import ruAge from '../../public/locales/ru/calculators/age.json';
import nlPercentage from '../../public/locales/nl/calculators/percentage.json';
import trPercentage from '../../public/locales/tr/calculators/percentage.json';
import ruPercentage from '../../public/locales/ru/calculators/percentage.json';
import nlSleep from '../../public/locales/nl/calculators/sleep.json';
import trSleep from '../../public/locales/tr/calculators/sleep.json';
import ruSleep from '../../public/locales/ru/calculators/sleep.json';
import nlGFR from '../../public/locales/nl/calculators/gfr.json';
import trGFR from '../../public/locales/tr/calculators/gfr.json';
import ruGFR from '../../public/locales/ru/calculators/gfr.json';


import esOneRepMax from '../../public/locales/es/calculators/oneRepMax.json';
import enOneRepMax from '../../public/locales/en/calculators/oneRepMax.json';
import ptOneRepMax from '../../public/locales/pt/calculators/oneRepMax.json';
import frOneRepMax from '../../public/locales/fr/calculators/oneRepMax.json';
import hiOneRepMax from '../../public/locales/hi/calculators/oneRepMax.json';
import deOneRepMax from '../../public/locales/de/calculators/oneRepMax.json';
import itOneRepMax from '../../public/locales/it/calculators/oneRepMax.json';
import plOneRepMax from '../../public/locales/pl/calculators/oneRepMax.json';
import nlOneRepMax from '../../public/locales/nl/calculators/oneRepMax.json';
import trOneRepMax from '../../public/locales/tr/calculators/oneRepMax.json';
import svOneRepMax from '../../public/locales/sv/calculators/oneRepMax.json';
import ruOneRepMax from '../../public/locales/ru/calculators/oneRepMax.json';

import esWeightWatchers from '../../public/locales/es/calculators/weightWatchers.json';
import enWeightWatchers from '../../public/locales/en/calculators/weightWatchers.json';
import ptWeightWatchers from '../../public/locales/pt/calculators/weightWatchers.json';
import frWeightWatchers from '../../public/locales/fr/calculators/weightWatchers.json';
import hiWeightWatchers from '../../public/locales/hi/calculators/weightWatchers.json';
import deWeightWatchers from '../../public/locales/de/calculators/weightWatchers.json';
import itWeightWatchers from '../../public/locales/it/calculators/weightWatchers.json';
import plWeightWatchers from '../../public/locales/pl/calculators/weightWatchers.json';
import nlWeightWatchers from '../../public/locales/nl/calculators/weightWatchers.json';
import trWeightWatchers from '../../public/locales/tr/calculators/weightWatchers.json';
import svWeightWatchers from '../../public/locales/sv/calculators/weightWatchers.json';
import ruWeightWatchers from '../../public/locales/ru/calculators/weightWatchers.json';

import esFatIntake from '../../public/locales/es/calculators/fatIntake.json';
import enFatIntake from '../../public/locales/en/calculators/fatIntake.json';
import ptFatIntake from '../../public/locales/pt/calculators/fatIntake.json';
import frFatIntake from '../../public/locales/fr/calculators/fatIntake.json';
import hiFatIntake from '../../public/locales/hi/calculators/fatIntake.json';
import deFatIntake from '../../public/locales/de/calculators/fatIntake.json';
import itFatIntake from '../../public/locales/it/calculators/fatIntake.json';
import plFatIntake from '../../public/locales/pl/calculators/fatIntake.json';
import nlFatIntake from '../../public/locales/nl/calculators/fatIntake.json';
import trFatIntake from '../../public/locales/tr/calculators/fatIntake.json';
import svFatIntake from '../../public/locales/sv/calculators/fatIntake.json';
import ruFatIntake from '../../public/locales/ru/calculators/fatIntake.json';

interface Translations {
  [key: string]: any;
}

const translations: Record<Locale, Translations> = {
  es: {
    ...esCommon,
    categories: esCategories,
    bmi: esBMI,
    calorie: esCalorie,
    idealWeight: esIdealWeight,
    bodyFat: esBodyFat,
    bmr: esBMR,
    tdee: esTDEE,
    armyBodyFat: esArmyBodyFat,
    pace: esPace,
    macro: esMacro,
    bac: esBAC,
    pregnancy: esPregnancy,
    pregnancyWeightGain: esPregnancyWeightGain,
    pregnancyConception: esPregnancyConception,
    dueDate: esDueDate,
    carbohydrate: esCarbohydrate,
    leanBodyMass: esLeanBodyMass,
    healthyWeight: esHealthyWeight,
    heartRate: esHeartRate,
    bodyType: esBodyType,
    protein: esProtein,
    caloriesBurned: esCaloriesBurned,
    bsa: esBSA,
    bloodType: esBloodType,
    ovulation: esOvulation,
    period: esPeriod,
    bodyFrame: esBodyFrame,
    waistHip: esWaistHip,
    age: esAge,
    tip: esTip,
    weightWatchers: esWeightWatchers,
    date: esDate,
    percentage: esPercentage,
    sleep: esSleep,
    gfr: esGFR,
    oneRepMax: esOneRepMax,
    fatIntake: esFatIntake,
  },
  en: {
    ...enCommon,
    categories: enCategories,
    bmi: enBMI,
    calorie: enCalorie,
    idealWeight: enIdealWeight,
    bodyFat: enBodyFat,
    bmr: enBMR,
    tdee: enTDEE,
    armyBodyFat: enArmyBodyFat,
    pace: enPace,
    macro: enMacro,
    bac: enBAC,
    pregnancy: enPregnancy,
    pregnancyWeightGain: enPregnancyWeightGain,
    pregnancyConception: enPregnancyConception,
    weightWatchers: enWeightWatchers,
    dueDate: enDueDate,
    carbohydrate: enCarbohydrate,
    leanBodyMass: enLeanBodyMass,
    healthyWeight: enHealthyWeight,
    heartRate: enHeartRate,
    bodyType: enBodyType,
    protein: enProtein,
    caloriesBurned: enCaloriesBurned,
    bsa: enBSA,
    bloodType: enBloodType,
    ovulation: enOvulation,
    period: enPeriod,
    bodyFrame: enBodyFrame,
    waistHip: enWaistHip,
    age: enAge,
    tip: enTip,
    date: enDate,
    percentage: enPercentage,
    sleep: enSleep,
    gfr: enGFR,
    oneRepMax: enOneRepMax,
    fatIntake: enFatIntake,
  },
  pt: {
    ...ptCommon,
    categories: ptCategories,
    bmi: ptBMI,
    calorie: ptCalorie,
    idealWeight: ptIdealWeight,
    bodyFat: ptBodyFat,
    bmr: ptBMR,
    tdee: ptTDEE,
    armyBodyFat: ptArmyBodyFat,
    pace: ptPace,
    macro: ptMacro,
    bac: ptBAC,
    pregnancy: ptPregnancy,
    pregnancyWeightGain: ptPregnancyWeightGain,
    weightWatchers: ptWeightWatchers,
    pregnancyConception: ptPregnancyConception,
    dueDate: ptDueDate,
    carbohydrate: ptCarbohydrate,
    leanBodyMass: ptLeanBodyMass,
    healthyWeight: ptHealthyWeight,
    heartRate: ptHeartRate,
    bodyType: ptBodyType,
    protein: ptProtein,
    caloriesBurned: ptCaloriesBurned,
    bsa: ptBSA,
    bloodType: ptBloodType,
    ovulation: ptOvulation,
    period: ptPeriod,
    bodyFrame: ptBodyFrame,
    waistHip: ptWaistHip,
    age: ptAge,
    tip: ptTip,
    date: ptDate,
    percentage: ptPercentage,
    sleep: ptSleep,
    gfr: ptGFR,
    oneRepMax: ptOneRepMax,
    fatIntake: ptFatIntake,
  },
  fr: {
    ...frCommon,
    categories: frCategories,
    bmi: frBMI,
    calorie: frCalorie,
    idealWeight: frIdealWeight,
    bodyFat: frBodyFat,
    bmr: frBMR,
    tdee: frTDEE,
    armyBodyFat: frArmyBodyFat,
    pace: frPace,
    macro: frMacro,
    bac: frBAC,
    pregnancy: frPregnancy,
    weightWatchers: frWeightWatchers,
    pregnancyWeightGain: frPregnancyWeightGain,
    pregnancyConception: frPregnancyConception,
    dueDate: frDueDate,
    carbohydrate: frCarbohydrate,
    leanBodyMass: frLeanBodyMass,
    healthyWeight: frHealthyWeight,
    heartRate: frHeartRate,
    bodyType: frBodyType,
    protein: frProtein,
    caloriesBurned: frCaloriesBurned,
    bsa: frBSA,
    bloodType: frBloodType,
    ovulation: frOvulation,
    period: frPeriod,
    bodyFrame: frBodyFrame,
    waistHip: frWaistHip,
    age: frAge,
    tip: frTip,
    date: frDate,
    percentage: frPercentage,
    sleep: frSleep,
    gfr: frGFR,
    oneRepMax: frOneRepMax,
    fatIntake: frFatIntake,
  },
  hi: {
    ...hiCommon,
    categories: hiCategories,
    bmi: hiBMI,
    calorie: hiCalorie,
    idealWeight: hiIdealWeight,
    bodyFat: hiBodyFat,
    bmr: hiBMR,
    tdee: hiTDEE,
    armyBodyFat: hiArmyBodyFat,
    pace: hiPace,
    macro: hiMacro,
    bac: hiBAC,
    weightWatchers: hiWeightWatchers,
    pregnancy: hiPregnancy,
    pregnancyWeightGain: hiPregnancyWeightGain,
    pregnancyConception: hiPregnancyConception,
    dueDate: hiDueDate,
    carbohydrate: hiCarbohydrate,
    leanBodyMass: hiLeanBodyMass,
    healthyWeight: hiHealthyWeight,
    heartRate: hiHeartRate,
    bodyType: hiBodyType,
    protein: hiProtein,
    caloriesBurned: hiCaloriesBurned,
    bsa: hiBSA,
    bloodType: hiBloodType,
    ovulation: hiOvulation,
    period: hiPeriod,
    bodyFrame: hiBodyFrame,
    age: hiAge,
    tip: hiTip,
    waistHip: hiWaistHip,
    date: hiDate,
    percentage: hiPercentage,
    sleep: hiSleep,
    gfr: hiGFR,
    oneRepMax: hiOneRepMax,
    fatIntake: hiFatIntake,
  },
  de: {
    ...deCommon,
    categories: deCategories,
    bmi: deBMI,
    calorie: deCalorie,
    idealWeight: deIdealWeight,
    bodyFat: deBodyFat,
    bmr: deBMR,
    tdee: deTDEE,
    armyBodyFat: deArmyBodyFat,
    pace: dePace,
    macro: deMacro,
    weightWatchers: deWeightWatchers,
    bac: deBAC,
    pregnancy: dePregnancy,
    pregnancyWeightGain: dePregnancyWeightGain,
    pregnancyConception: dePregnancyConception,
    dueDate: deDueDate,
    carbohydrate: deCarbohydrate,
    leanBodyMass: deLeanBodyMass,
    healthyWeight: deHealthyWeight,
    heartRate: deHeartRate,
    bodyType: deBodyType,
    protein: deProtein,
    caloriesBurned: deCaloriesBurned,
    bsa: deBSA,
    bloodType: deBloodType,
    ovulation: deOvulation,
    period: dePeriod,
    bodyFrame: deBodyFrame,
    age: deAge,
    tip: deTip,
    waistHip: deWaistHip,
    date: deDate,
    percentage: dePercentage,
    sleep: deSleep,
    gfr: deGFR,
    oneRepMax: deOneRepMax,
    fatIntake: deFatIntake,
  },
  it: {
    ...itCommon,
    categories: itCategories,
    bmi: itBMI,
    calorie: itCalorie,
    idealWeight: itIdealWeight,
    bodyFat: itBodyFat,
    bmr: itBMR,
    tdee: itTDEE,
    armyBodyFat: itArmyBodyFat,
    weightWatchers: itWeightWatchers,
    pace: itPace,
    macro: itMacro,
    bac: itBAC,
    pregnancy: itPregnancy,
    pregnancyWeightGain: itPregnancyWeightGain,
    pregnancyConception: itPregnancyConception,
    dueDate: itDueDate,
    carbohydrate: itCarbohydrate,
    leanBodyMass: itLeanBodyMass,
    healthyWeight: itHealthyWeight,
    heartRate: itHeartRate,
    bodyType: itBodyType,
    protein: itProtein,
    caloriesBurned: itCaloriesBurned,
    bsa: itBSA,
    bloodType: itBloodType,
    ovulation: itOvulation,
    period: itPeriod,
    bodyFrame: itBodyFrame,
    age: itAge,
    tip: itTip,
    waistHip: itWaistHip,
    date: itDate,
    percentage: itPercentage,
    sleep: itSleep,
    gfr: itGFR,
    oneRepMax: itOneRepMax,
    fatIntake: itFatIntake,
  },
  pl: {
    ...plCommon,
    categories: plCategories,
    bmi: plBMI,
    calorie: plCalorie,
    idealWeight: plIdealWeight,
    bodyFat: plBodyFat,
    bmr: plBMR,
    tdee: plTDEE,
    armyBodyFat: plArmyBodyFat,
    weightWatchers: plWeightWatchers,
    pace: plPace,
    macro: plMacro,
    bac: plBAC,
    pregnancy: plPregnancy,
    pregnancyWeightGain: plPregnancyWeightGain,
    pregnancyConception: plPregnancyConception,
    dueDate: plDueDate,
    carbohydrate: plCarbohydrate,
    leanBodyMass: plLeanBodyMass,
    healthyWeight: plHealthyWeight,
    heartRate: plHeartRate,
    bodyType: plBodyType,
    protein: plProtein,
    caloriesBurned: plCaloriesBurned,
    bsa: plBSA,
    bloodType: plBloodType,
    ovulation: plOvulation,
    period: plPeriod,
    bodyFrame: plBodyFrame,
    waistHip: plWaistHip,
    age: plAge,
    tip: plTip,
    date: plDate,
    percentage: plPercentage,
    gfr: plGFR,
    sleep: plSleep,
    oneRepMax: plOneRepMax,
    fatIntake: plFatIntake,
  },
  sv: {
    ...svCommon,
    categories: svCategories,
    bmi: svBMI,
    calorie: svCalorie,
    idealWeight: svIdealWeight,
    bodyFat: svBodyFat,
    bmr: svBMR,
    tdee: svTDEE,
    weightWatchers: svWeightWatchers,
    armyBodyFat: svArmyBodyFat,
    pace: svPace,
    macro: svMacro,
    bac: svBAC,
    pregnancy: svPregnancy,
    pregnancyWeightGain: svPregnancyWeightGain,
    pregnancyConception: svPregnancyConception,
    dueDate: svDueDate,
    carbohydrate: svCarbohydrate,
    leanBodyMass: svLeanBodyMass,
    healthyWeight: svHealthyWeight,
    heartRate: svHeartRate,
    bodyType: svBodyType,
    protein: svProtein,
    caloriesBurned: svCaloriesBurned,
    bsa: svBSA,
    bloodType: svBloodType,
    ovulation: svOvulation,
    period: svPeriod,
    bodyFrame: svBodyFrame,
    waistHip: svWaistHip,
    age: svAge,
    tip: svTip,
    date: svDate,
    percentage: svPercentage,
    gfr: svGFR,
    sleep: svSleep,
    oneRepMax: svOneRepMax,
    fatIntake: svFatIntake,
  },
  nl: {
    ...nlCommon,
    categories: nlCategories,
    bmi: nlBmi,
    calorie: nlCalorie,
    idealWeight: nlIdealWeight,
    bodyFat: nlBodyFat,
    bmr: nlBmr,
    weightWatchers: nlWeightWatchers,
    tdee: nlTdee,
    armyBodyFat: nlArmyBodyFat,
    pace: nlPace,
    macro: nlMacro,
    bac: nlBAC,
    pregnancy: nlPregnancy,
    pregnancyWeightGain: nlPregnancyWeightGain,
    pregnancyConception: nlPregnancyConception,
    dueDate: nlDueDate,
    carbohydrate: nlCarbohydrate,
    leanBodyMass: nlLeanBodyMass,
    healthyWeight: nlHealthyWeight,
    heartRate: nlHeartRate,
    bodyType: nlBodyType,
    protein: nlProtein,
    caloriesBurned: nlCaloriesBurned,
    bsa: nlBsa,
    bloodType: nlBloodType,
    ovulation: nlOvulation,
    period: nlPeriod,
    bodyFrame: nlBodyFrame,
    waistHip: nlWaistHip,
    tip: nlTip,
    date: nlDate,
    age: nlAge,
    percentage: nlPercentage,
    gfr: nlGFR,
    sleep: nlSleep,
    oneRepMax: nlOneRepMax,
    fatIntake: nlFatIntake,
  },
  tr: {
    ...trCommon,
    categories: trCategories,
    bmi: trBmi,
    calorie: trCalorie,
    idealWeight: trIdealWeight,
    bodyFat: trBodyFat,
    weightWatchers: trWeightWatchers,
    bmr: trBmr,
    tdee: trTdee,
    armyBodyFat: trArmyBodyFat,
    pace: trPace,
    macro: trMacro,
    bac: trBAC,
    pregnancy: trPregnancy,
    pregnancyWeightGain: trPregnancyWeightGain,
    pregnancyConception: trPregnancyConception,
    dueDate: trDueDate,
    carbohydrate: trCarbohydrate,
    leanBodyMass: trLeanBodyMass,
    healthyWeight: trHealthyWeight,
    heartRate: trHeartRate,
    bodyType: trBodyType,
    protein: trProtein,
    caloriesBurned: trCaloriesBurned,
    bsa: trBsa,
    bloodType: trBloodType,
    ovulation: trOvulation,
    period: trPeriod,
    bodyFrame: trBodyFrame,
    waistHip: trWaistHip,
    tip: trTip,
    date: trDate,
    age: trAge,
    percentage: trPercentage,
    gfr: trGFR,
    sleep: trSleep,
    oneRepMax: trOneRepMax,
    fatIntake: trFatIntake,
  },
  ru: {
    ...ruCommon,
    categories: ruCategories,
    bmi: ruBmi,
    calorie: ruCalorie,
    idealWeight: ruIdealWeight,
    bodyFat: ruBodyFat,
    weightWatchers: ruWeightWatchers,
    bmr: ruBmr,
    tdee: ruTdee,
    armyBodyFat: ruArmyBodyFat,
    pace: ruPace,
    macro: ruMacro,
    bac: ruBAC,
    pregnancy: ruPregnancy,
    pregnancyWeightGain: ruPregnancyWeightGain,
    pregnancyConception: ruPregnancyConception,
    dueDate: ruDueDate,
    carbohydrate: ruCarbohydrate,
    leanBodyMass: ruLeanBodyMass,
    healthyWeight: ruHealthyWeight,
    heartRate: ruHeartRate,
    bodyType: ruBodyType,
    protein: ruProtein,
    caloriesBurned: ruCaloriesBurned,
    bsa: ruBsa,
    bloodType: ruBloodType,
    ovulation: ruOvulation,
    period: ruPeriod,
    bodyFrame: ruBodyFrame,
    waistHip: ruWaistHip,
    tip: ruTip,
    date: ruDate,
    age: ruAge,
    percentage: ruPercentage,
    gfr: ruGFR,
    sleep: ruSleep,
    oneRepMax: ruOneRepMax,
    fatIntake: ruFatIntake,
  },
};

/**
 * Get translation for a key
 * @param key - Translation key (e.g., 'site.title' or 'bmi:form.title')
 * @param locale - Language locale
 */
export function t(key: string, locale: Locale = 'en'): string {
  const parts = key.split(':');
  let namespace = '';
  let path = '';

  if (parts.length === 2) {
    namespace = parts[0];
    path = parts[1];
  } else {
    path = key;
  }

  const keys = path.split('.');
  let value: any = namespace ? translations[locale][namespace] : translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Language configuration
 */
export const languageConfig: Record<Locale, { name: string; nativeName: string; path: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', path: '/es' },
  en: { name: 'English', nativeName: 'English', path: '' },
  pt: { name: 'Portuguese', nativeName: 'Português', path: '/pt' },
  fr: { name: 'French', nativeName: 'Français', path: '/fr' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', path: '/hi' },
  de: { name: 'German', nativeName: 'Deutsch', path: '/de' },
  it: { name: 'Italian', nativeName: 'Italiano', path: '/it' },
  pl: { name: 'Polish', nativeName: 'Polski', path: '/pl' },
  sv: { name: 'Swedish', nativeName: 'Svenska', path: '/sv' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', path: '/nl' },
  tr: { name: 'Turkish', nativeName: 'Türkçe', path: '/tr' },
  ru: { name: 'Russian', nativeName: 'Русский', path: '/ru' },
};

/**
 * Calculator paths for all supported locales
 * Maps calculator ID to locale-specific URLs
 */
/**
 * Helper function to convert kebab-case to camelCase
 * Example: 'ideal-weight' -> 'idealWeight'
 */
function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Generate calculator paths dynamically from routes configuration
 * This ensures all paths use the correct translated slugs from routes.ts
 */
function generateCalculatorPaths(): Record<string, Record<Locale, string>> {
  const paths: Record<string, Record<Locale, string>> = {};

  for (const calculatorId of calculators) {
    const camelCaseId = kebabToCamelCase(calculatorId);
    paths[camelCaseId] = {} as Record<Locale, string>;

    for (const locale of getSupportedLocales()) {
      const slug = getSlug(calculatorId, locale);
      const folder = languages[locale].folder;

      if (locale === defaultLocale) {
        // English (default locale) has no language prefix
        paths[camelCaseId][locale] = `/${folder}/${slug}/`;
      } else {
        // All other languages include language code prefix
        paths[camelCaseId][locale] = `/${locale}/${folder}/${slug}/`;
      }
    }
  }

  return paths;
}

/**
 * Calculator paths for all calculators and locales
 * Generated dynamically from routes.ts and languages.ts
 */
export const calculatorPaths = generateCalculatorPaths();

/**
 * Get locale-specific URL
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') {
    // English is default, no prefix
    return path;
  }

  const langPath = languageConfig[locale].path;
  if (path === '/') return langPath || '/';
  return `${langPath}${path}`;
}

/**
 * Get alternate locale path for a given calculator
 * Uses the new routing system from @/config/routes and @/config/languages
 */
export function getAlternatePath(currentPath: string, targetLocale: Locale, calculator?: CalculatorId): string {
  // If we have a calculator ID, build the URL using the new routing system
  if (calculator) {
    const slug = getSlug(calculator, targetLocale);
    const langConfig = languages[targetLocale];

    if (targetLocale === defaultLocale) {
      // English (default) has no language prefix
      return `/${langConfig.folder}/${slug}/`;
    } else {
      // Other languages include language code
      return `/${targetLocale}/${langConfig.folder}/${slug}/`;
    }
  }

  // For homepage/language root
  if (targetLocale === defaultLocale) {
    return '/';
  } else {
    return `/${targetLocale}/`;
  }
}

