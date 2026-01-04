/**
 * Calculator categories configuration
 * Organizes calculators into logical groups for the index page
 */

import type { CalculatorId } from './calculators';
import type { Locale } from '@/utils/i18n';

export type CategoryId =
  | 'body-composition'
  | 'nutrition'
  | 'pregnancy-fertility'
  | 'health-fitness'
  | 'general';

export interface Category {
  id: CategoryId;
  calculators: CalculatorId[];
}

/**
 * Calculator categories
 */
export const categories: Category[] = [
  {
    id: 'body-composition',
    calculators: [
      'bmi',
      'bmr',
      'body-fat',
      'army-body-fat',
      'body-frame',
      'body-type',
      'bsa',
      'healthy-weight',
      'ideal-weight',
      'lean-body-mass',
      'waist-hip',
    ]
  },
  {
    id: 'nutrition',
    calculators: [
      'calorie',
      'tdee',
      'macro',
      'protein',
      'carbohydrate',
      'fat-intake',
      'calories-burned',
      'weight-watchers',
    ]
  },
  {
    id: 'pregnancy-fertility',
    calculators: [
      'pregnancy',
      'due-date',
      'ovulation',
      'period',
      'pregnancy-conception',
      'pregnancy-weight-gain',
    ]
  },
  {
    id: 'health-fitness',
    calculators: [
      'heart-rate',
      'gfr',
      'one-rep-max',
      'pace',
      'sleep',
      'bac',
      'blood-type',
    ]
  },
  {
    id: 'general',
    calculators: [
      'age',
      'date',
      'percentage',
      'tip',
    ]
  }
];

/**
 * Category translations
 */
export const categoryTranslations: Record<Locale, Record<CategoryId, { name: string; description: string }>> = {
  es: {
    'body-composition': {
      name: 'Composición Corporal',
      description: 'Calculadoras para análisis de peso, índice de masa corporal y composición del cuerpo'
    },
    'nutrition': {
      name: 'Nutrición',
      description: 'Herramientas para calcular calorías, macronutrientes y necesidades nutricionales'
    },
    'pregnancy-fertility': {
      name: 'Embarazo y Fertilidad',
      description: 'Calculadoras para embarazo, fecha de parto, ovulación y ciclo menstrual'
    },
    'health-fitness': {
      name: 'Salud y Fitness',
      description: 'Calculadoras para frecuencia cardíaca, ejercicio y salud general'
    },
    'general': {
      name: 'General',
      description: 'Calculadoras de uso general para el día a día'
    }
  },
  en: {
    'body-composition': {
      name: 'Body Composition',
      description: 'Calculators for weight analysis, body mass index, and body composition'
    },
    'nutrition': {
      name: 'Nutrition',
      description: 'Tools to calculate calories, macronutrients, and nutritional needs'
    },
    'pregnancy-fertility': {
      name: 'Pregnancy & Fertility',
      description: 'Calculators for pregnancy, due date, ovulation, and menstrual cycle'
    },
    'health-fitness': {
      name: 'Health & Fitness',
      description: 'Calculators for heart rate, exercise, and general health'
    },
    'general': {
      name: 'General',
      description: 'General-purpose calculators for everyday use'
    }
  },
  pt: {
    'body-composition': {
      name: 'Composição Corporal',
      description: 'Calculadoras para análise de peso, índice de massa corporal e composição do corpo'
    },
    'nutrition': {
      name: 'Nutrição',
      description: 'Ferramentas para calcular calorias, macronutrientes e necessidades nutricionais'
    },
    'pregnancy-fertility': {
      name: 'Gravidez e Fertilidade',
      description: 'Calculadoras para gravidez, data prevista do parto, ovulação e ciclo menstrual'
    },
    'health-fitness': {
      name: 'Saúde e Fitness',
      description: 'Calculadoras para frequência cardíaca, exercício e saúde geral'
    },
    'general': {
      name: 'Geral',
      description: 'Calculadoras de uso geral para o dia a dia'
    }
  },
  fr: {
    'body-composition': {
      name: 'Composition Corporelle',
      description: 'Calculatrices pour l\'analyse du poids, l\'indice de masse corporelle et la composition corporelle'
    },
    'nutrition': {
      name: 'Nutrition',
      description: 'Outils pour calculer les calories, les macronutriments et les besoins nutritionnels'
    },
    'pregnancy-fertility': {
      name: 'Grossesse et Fertilité',
      description: 'Calculatrices pour la grossesse, la date d\'accouchement, l\'ovulation et le cycle menstruel'
    },
    'health-fitness': {
      name: 'Santé et Fitness',
      description: 'Calculatrices pour la fréquence cardiaque, l\'exercice et la santé générale'
    },
    'general': {
      name: 'Général',
      description: 'Calculatrices à usage général pour un usage quotidien'
    }
  },
  hi: {
    'body-composition': {
      name: 'शरीर संरचना',
      description: 'वजन विश्लेषण, बॉडी मास इंडेक्स और शरीर संरचना के लिए कैलकुलेटर'
    },
    'nutrition': {
      name: 'पोषण',
      description: 'कैलोरी, मैक्रोन्यूट्रिएंट्स और पोषण आवश्यकताओं की गणना के लिए उपकरण'
    },
    'pregnancy-fertility': {
      name: 'गर्भावस्था और प्रजनन क्षमता',
      description: 'गर्भावस्था, प्रसव तिथि, ओव्यूलेशन और मासिक धर्म चक्र के लिए कैलकुलेटर'
    },
    'health-fitness': {
      name: 'स्वास्थ्य और फिटनेस',
      description: 'हृदय गति, व्यायाम और सामान्य स्वास्थ्य के लिए कैलकुलेटर'
    },
    'general': {
      name: 'सामान्य',
      description: 'रोजमर्रा के उपयोग के लिए सामान्य प्रयोजन कैलकुलेटर'
    }
  },
  de: {
    'body-composition': {
      name: 'Körperzusammensetzung',
      description: 'Rechner für Gewichtsanalyse, Body-Mass-Index und Körperzusammensetzung'
    },
    'nutrition': {
      name: 'Ernährung',
      description: 'Tools zur Berechnung von Kalorien, Makronährstoffen und Ernährungsbedarf'
    },
    'pregnancy-fertility': {
      name: 'Schwangerschaft & Fruchtbarkeit',
      description: 'Rechner für Schwangerschaft, Geburtstermin, Eisprung und Menstruationszyklus'
    },
    'health-fitness': {
      name: 'Gesundheit & Fitness',
      description: 'Rechner für Herzfrequenz, Training und allgemeine Gesundheit'
    },
    'general': {
      name: 'Allgemein',
      description: 'Allzweckrechner für den täglichen Gebrauch'
    }
  },
  it: {
    'body-composition': {
      name: 'Composizione Corporea',
      description: 'Calcolatrici per analisi del peso, indice di massa corporea e composizione corporea'
    },
    'nutrition': {
      name: 'Nutrizione',
      description: 'Strumenti per calcolare calorie, macronutrienti e fabbisogno nutrizionale'
    },
    'pregnancy-fertility': {
      name: 'Gravidanza e Fertilità',
      description: 'Calcolatrici per gravidanza, data presunta del parto, ovulazione e ciclo mestruale'
    },
    'health-fitness': {
      name: 'Salute e Fitness',
      description: 'Calcolatrici per frequenza cardiaca, esercizio e salute generale'
    },
    'general': {
      name: 'Generale',
      description: 'Calcolatrici per uso generale quotidiano'
    }
  },
  pl: {
    'body-composition': {
      name: 'Skład Ciała',
      description: 'Kalkulatory do analizy wagi, wskaźnika masy ciała i składu ciała'
    },
    'nutrition': {
      name: 'Odżywianie',
      description: 'Narzędzia do obliczania kalorii, makroskładników i potrzeb żywieniowych'
    },
    'pregnancy-fertility': {
      name: 'Ciąża i Płodność',
      description: 'Kalkulatory ciąży, terminu porodu, owulacji i cyklu miesiączkowego'
    },
    'health-fitness': {
      name: 'Zdrowie i Fitness',
      description: 'Kalkulatory tętna, ćwiczeń i ogólnego zdrowia'
    },
    'general': {
      name: 'Ogólne',
      description: 'Kalkulatory ogólnego przeznaczenia do codziennego użytku'
    }
  },
  nl: {
    'body-composition': {
      name: 'Lichaamssamenstelling',
      description: 'Rekenmachines voor gewichtsanalyse, body mass index en lichaamssamenstelling'
    },
    'nutrition': {
      name: 'Voeding',
      description: 'Tools om calorieën, macronutriënten en voedingsbehoeften te berekenen'
    },
    'pregnancy-fertility': {
      name: 'Zwangerschap & Vruchtbaarheid',
      description: 'Rekenmachines voor zwangerschap, uitgerekende datum, eisprong en menstruatiecyclus'
    },
    'health-fitness': {
      name: 'Gezondheid & Fitness',
      description: 'Rekenmachines voor hartslag, oefening en algemene gezondheid'
    },
    'general': {
      name: 'Algemeen',
      description: 'Algemene rekenmachines voor dagelijks gebruik'
    }
  },
  tr: {
    'body-composition': {
      name: 'Vücut Kompozisyonu',
      description: 'Kilo analizi, vücut kitle indeksi ve vücut kompozisyonu için hesaplayıcılar'
    },
    'nutrition': {
      name: 'Beslenme',
      description: 'Kalori, makro besinler ve beslenme ihtiyaçlarını hesaplama araçları'
    },
    'pregnancy-fertility': {
      name: 'Hamilelik ve Doğurganlık',
      description: 'Hamilelik, tahmini doğum tarihi, yumurtlama ve adet döngüsü hesaplayıcıları'
    },
    'health-fitness': {
      name: 'Sağlık ve Fitness',
      description: 'Kalp atış hızı, egzersiz ve genel sağlık hesaplayıcıları'
    },
    'general': {
      name: 'Genel',
      description: 'Günlük kullanım için genel amaçlı hesaplayıcılar'
    }
  },
  sv: {
    'body-composition': {
      name: 'Kroppssammansättning',
      description: 'Kalkylatorer för viktanalys, kroppsmasseindex och kroppssammansättning'
    },
    'nutrition': {
      name: 'Näring',
      description: 'Verktyg för att beräkna kalorier, makronäringsämnen och näringsbehov'
    },
    'pregnancy-fertility': {
      name: 'Graviditet & Fertilitet',
      description: 'Kalkylatorer för graviditet, beräknad förlossning, ägglossning och menstruationscykel'
    },
    'health-fitness': {
      name: 'Hälsa & Fitness',
      description: 'Kalkylatorer för hjärtfrekvens, träning och allmän hälsa'
    },
    'general': {
      name: 'Allmänt',
      description: 'Allmänna kalkylatorer för daglig användning'
    }
  },
  ru: {
    'body-composition': {
      name: 'Состав Тела',
      description: 'Калькуляторы для анализа веса, индекса массы тела и состава тела'
    },
    'nutrition': {
      name: 'Питание',
      description: 'Инструменты для расчета калорий, макронутриентов и потребностей в питании'
    },
    'pregnancy-fertility': {
      name: 'Беременность и Фертильность',
      description: 'Калькуляторы беременности, предполагаемой даты родов, овуляции и менструального цикла'
    },
    'health-fitness': {
      name: 'Здоровье и Фитнес',
      description: 'Калькуляторы частоты сердечных сокращений, упражнений и общего здоровья'
    },
    'general': {
      name: 'Общие',
      description: 'Калькуляторы общего назначения для повседневного использования'
    }
  }
};

/**
 * Get category translation for a specific locale
 */
export function getCategoryTranslation(categoryId: CategoryId, locale: Locale) {
  return categoryTranslations[locale]?.[categoryId] || categoryTranslations.en[categoryId];
}

/**
 * Get all categories with translations for a specific locale
 */
export function getCategoriesWithTranslations(locale: Locale) {
  return categories.map(category => ({
    ...category,
    ...getCategoryTranslation(category.id, locale)
  }));
}
