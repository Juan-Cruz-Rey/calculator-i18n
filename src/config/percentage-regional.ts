/**
 * Regional configuration for percentage calculator
 * Tax rates, currency symbols, and market-specific settings
 */

export interface TaxRate {
  rate: number;
  label: string;
  description: string;
}

export interface PercentageRegionalConfig {
  currency: string;
  currencySymbol: string;
  currencyPosition: 'before' | 'after';
  decimalSeparator: '.' | ',';
  thousandSeparator: ',' | '.' | ' ' | '';
  taxName: string; // IVA, VAT, GST, MwSt, BTW, etc.
  taxRates: TaxRate[];
  commonTipPercentages: number[];
  commonDiscountPercentages: number[];
}

export const percentageRegionalConfig: Record<string, PercentageRegionalConfig> = {
  es: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'IVA',
    taxRates: [
      { rate: 21, label: 'IVA General', description: 'Tipo general (21%)' },
      { rate: 10, label: 'IVA Reducido', description: 'Tipo reducido (10%)' },
      { rate: 4, label: 'IVA Superreducido', description: 'Tipo superreducido (4%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  en: {
    currency: 'USD',
    currencySymbol: '$',
    currencyPosition: 'before',
    decimalSeparator: '.',
    thousandSeparator: ',',
    taxName: 'Sales Tax',
    taxRates: [
      { rate: 0, label: 'No Tax', description: 'Tax-free states' },
      { rate: 5, label: 'Low Tax', description: 'Low tax states (5%)' },
      { rate: 7, label: 'Medium Tax', description: 'Medium tax states (7%)' },
      { rate: 10, label: 'High Tax', description: 'High tax states (10%)' },
      { rate: 20, label: 'UK VAT', description: 'UK Standard VAT (20%)' },
    ],
    commonTipPercentages: [15, 18, 20, 25],
    commonDiscountPercentages: [10, 15, 20, 25, 30, 40, 50, 60, 70],
  },
  de: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'MwSt',
    taxRates: [
      { rate: 19, label: 'Regelsteuersatz', description: 'Regelsteuersatz (19%)' },
      { rate: 7, label: 'Ermäßigter Steuersatz', description: 'Ermäßigter Steuersatz (7%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 50],
  },
  fr: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
    taxName: 'TVA',
    taxRates: [
      { rate: 20, label: 'Taux normal', description: 'Taux normal (20%)' },
      { rate: 10, label: 'Taux intermédiaire', description: 'Taux intermédiaire (10%)' },
      { rate: 5.5, label: 'Taux réduit', description: 'Taux réduit (5,5%)' },
      { rate: 2.1, label: 'Taux super réduit', description: 'Taux super réduit (2,1%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  it: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'IVA',
    taxRates: [
      { rate: 22, label: 'Aliquota ordinaria', description: 'Aliquota ordinaria (22%)' },
      { rate: 10, label: 'Aliquota ridotta', description: 'Aliquota ridotta (10%)' },
      { rate: 5, label: 'Aliquota minima', description: 'Aliquota minima (5%)' },
      { rate: 4, label: 'Aliquota super ridotta', description: 'Aliquota super ridotta (4%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  pt: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'IVA',
    taxRates: [
      { rate: 23, label: 'Taxa normal', description: 'Taxa normal - Portugal (23%)' },
      { rate: 13, label: 'Taxa intermédia', description: 'Taxa intermédia - Portugal (13%)' },
      { rate: 6, label: 'Taxa reduzida', description: 'Taxa reduzida - Portugal (6%)' },
      { rate: 17, label: 'ICMS médio', description: 'ICMS médio - Brasil (17%)' },
    ],
    commonTipPercentages: [10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  hi: {
    currency: 'INR',
    currencySymbol: '₹',
    currencyPosition: 'before',
    decimalSeparator: '.',
    thousandSeparator: ',',
    taxName: 'GST',
    taxRates: [
      { rate: 28, label: 'GST 28%', description: 'Luxury items (28%)' },
      { rate: 18, label: 'GST 18%', description: 'Standard rate (18%)' },
      { rate: 12, label: 'GST 12%', description: 'Reduced rate (12%)' },
      { rate: 5, label: 'GST 5%', description: 'Essential items (5%)' },
    ],
    commonTipPercentages: [10],
    commonDiscountPercentages: [10, 20, 30, 40, 50, 60, 70],
  },
  nl: {
    currency: 'EUR',
    currencySymbol: '€',
    currencyPosition: 'before',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'BTW',
    taxRates: [
      { rate: 21, label: 'Algemeen tarief', description: 'Algemeen tarief (21%)' },
      { rate: 9, label: 'Verlaagd tarief', description: 'Verlaagd tarief (9%)' },
      { rate: 0, label: 'Nultarief', description: 'Nultarief (0%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 50],
  },
  pl: {
    currency: 'PLN',
    currencySymbol: 'zł',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
    taxName: 'VAT',
    taxRates: [
      { rate: 23, label: 'Stawka podstawowa', description: 'Stawka podstawowa (23%)' },
      { rate: 8, label: 'Stawka obniżona', description: 'Stawka obniżona (8%)' },
      { rate: 5, label: 'Stawka preferencyjna', description: 'Stawka preferencyjna (5%)' },
      { rate: 0, label: 'Stawka zerowa', description: 'Stawka zerowa (0%)' },
    ],
    commonTipPercentages: [10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  ru: {
    currency: 'RUB',
    currencySymbol: '₽',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
    taxName: 'НДС',
    taxRates: [
      { rate: 20, label: 'Основная ставка', description: 'Основная ставка (20%)' },
      { rate: 10, label: 'Пониженная ставка', description: 'Пониженная ставка (10%)' },
      { rate: 0, label: 'Нулевая ставка', description: 'Нулевая ставка (0%)' },
    ],
    commonTipPercentages: [10],
    commonDiscountPercentages: [10, 20, 30, 50, 70],
  },
  sv: {
    currency: 'SEK',
    currencySymbol: 'kr',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: ' ',
    taxName: 'Moms',
    taxRates: [
      { rate: 25, label: 'Normalskatt', description: 'Normalskatt (25%)' },
      { rate: 12, label: 'Mellanskatt', description: 'Mellanskatt (12%)' },
      { rate: 6, label: 'Lågskatt', description: 'Lågskatt (6%)' },
    ],
    commonTipPercentages: [10],
    commonDiscountPercentages: [10, 20, 30, 50],
  },
  tr: {
    currency: 'TRY',
    currencySymbol: '₺',
    currencyPosition: 'after',
    decimalSeparator: ',',
    thousandSeparator: '.',
    taxName: 'KDV',
    taxRates: [
      { rate: 20, label: 'Genel Oran', description: 'Genel Oran (20%)' },
      { rate: 10, label: 'İndirilmiş Oran', description: 'İndirilmiş Oran (10%)' },
      { rate: 1, label: 'Düşük Oran', description: 'Düşük Oran (1%)' },
    ],
    commonTipPercentages: [5, 10],
    commonDiscountPercentages: [10, 20, 30, 40, 50, 60, 70],
  },
};

/**
 * Format number according to locale
 */
export function formatCurrency(
  amount: number,
  locale: string
): string {
  const config = percentageRegionalConfig[locale] || percentageRegionalConfig.en;

  // Format number with proper separators
  const parts = amount.toFixed(2).split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, config.thousandSeparator);
  const decimalPart = parts[1];

  const formattedNumber = `${integerPart}${config.decimalSeparator}${decimalPart}`;

  // Add currency symbol
  if (config.currencyPosition === 'before') {
    return `${config.currencySymbol}${formattedNumber}`;
  } else {
    return `${formattedNumber} ${config.currencySymbol}`;
  }
}

/**
 * Get tax rates for a specific locale
 */
export function getTaxRates(locale: string): TaxRate[] {
  const config = percentageRegionalConfig[locale] || percentageRegionalConfig.en;
  return config.taxRates;
}

/**
 * Get common tip percentages for a locale
 */
export function getCommonTips(locale: string): number[] {
  const config = percentageRegionalConfig[locale] || percentageRegionalConfig.en;
  return config.commonTipPercentages;
}

/**
 * Get common discount percentages for a locale
 */
export function getCommonDiscounts(locale: string): number[] {
  const config = percentageRegionalConfig[locale] || percentageRegionalConfig.en;
  return config.commonDiscountPercentages;
}
