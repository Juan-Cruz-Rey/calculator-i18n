export type PercentageCalculationType =
  | 'percentOf' // What is X% of Y?
  | 'isWhatPercent' // X is what % of Y?
  | 'isPercentOfWhat' // X is Y% of what?
  | 'percentageChange' // Percentage increase/decrease from X to Y
  | 'percentageDifference' // Percentage difference between X and Y
  | 'addTax' // Add tax to base price (price + tax%)
  | 'removeTax' // Remove tax from total price (find base price)
  | 'discount' // Calculate final price after discount
  | 'reverseDiscount'; // Find original price from discounted price

export interface PercentageInput {
  calculationType: PercentageCalculationType;
  value1: number;
  value2?: number;
}

export interface PercentageResult {
  result: number;
  formula: string;
  explanation: string;
}

/**
 * Calculate what is X% of Y
 * Example: What is 20% of 100? = 20
 */
export function calculatePercentOf(percent: number, value: number): PercentageResult {
  const result = (percent / 100) * value;
  return {
    result: parseFloat(result.toFixed(4)),
    formula: `(${percent} / 100) × ${value} = ${result.toFixed(4)}`,
    explanation: `${percent}% of ${value} is ${result.toFixed(4)}`,
  };
}

/**
 * Calculate X is what % of Y
 * Example: 20 is what % of 100? = 20%
 */
export function calculateIsWhatPercent(value: number, total: number): PercentageResult {
  if (total === 0) {
    throw new Error('Total cannot be zero');
  }
  const result = (value / total) * 100;
  return {
    result: parseFloat(result.toFixed(4)),
    formula: `(${value} / ${total}) × 100 = ${result.toFixed(4)}%`,
    explanation: `${value} is ${result.toFixed(4)}% of ${total}`,
  };
}

/**
 * Calculate X is Y% of what
 * Example: 20 is 50% of what? = 40
 */
export function calculateIsPercentOfWhat(value: number, percent: number): PercentageResult {
  if (percent === 0) {
    throw new Error('Percentage cannot be zero');
  }
  const result = (value / percent) * 100;
  return {
    result: parseFloat(result.toFixed(4)),
    formula: `(${value} / ${percent}) × 100 = ${result.toFixed(4)}`,
    explanation: `${value} is ${percent}% of ${result.toFixed(4)}`,
  };
}

/**
 * Calculate percentage change (increase or decrease)
 * Example: From 100 to 120 = 20% increase
 * Example: From 120 to 100 = -16.67% decrease
 */
export function calculatePercentageChange(
  oldValue: number,
  newValue: number
): PercentageResult {
  if (oldValue === 0) {
    throw new Error('Old value cannot be zero');
  }
  const change = newValue - oldValue;
  const percentChange = (change / oldValue) * 100;
  const isIncrease = percentChange >= 0;

  return {
    result: parseFloat(percentChange.toFixed(4)),
    formula: `((${newValue} - ${oldValue}) / ${oldValue}) × 100 = ${percentChange.toFixed(4)}%`,
    explanation: `${
      isIncrease ? 'Increase' : 'Decrease'
    } of ${Math.abs(percentChange).toFixed(4)}%`,
  };
}

/**
 * Calculate percentage difference between two values
 * Uses the average of the two values as the base
 * Example: Difference between 100 and 120 = 18.18%
 */
export function calculatePercentageDifference(
  value1: number,
  value2: number
): PercentageResult {
  const average = (value1 + value2) / 2;
  if (average === 0) {
    throw new Error('Average of values cannot be zero');
  }
  const difference = Math.abs(value1 - value2);
  const percentDifference = (difference / average) * 100;

  return {
    result: parseFloat(percentDifference.toFixed(4)),
    formula: `(|${value1} - ${value2}| / ((${value1} + ${value2}) / 2)) × 100 = ${percentDifference.toFixed(4)}%`,
    explanation: `Percentage difference is ${percentDifference.toFixed(4)}%`,
  };
}

/**
 * Apply percentage increase to a value
 * Example: 100 increased by 20% = 120
 */
export function applyPercentageIncrease(value: number, percent: number): number {
  return value * (1 + percent / 100);
}

/**
 * Apply percentage decrease to a value
 * Example: 100 decreased by 20% = 80
 */
export function applyPercentageDecrease(value: number, percent: number): number {
  return value * (1 - percent / 100);
}

/**
 * Add tax to a base price
 * Example: 100 with 21% tax = 121
 */
export function calculateAddTax(basePrice: number, taxPercent: number): PercentageResult {
  const taxAmount = (basePrice * taxPercent) / 100;
  const totalPrice = basePrice + taxAmount;

  return {
    result: parseFloat(totalPrice.toFixed(2)),
    formula: `${basePrice} + (${basePrice} × ${taxPercent}%) = ${basePrice} + ${taxAmount.toFixed(2)} = ${totalPrice.toFixed(2)}`,
    explanation: `Base: ${basePrice.toFixed(2)} | Tax (${taxPercent}%): ${taxAmount.toFixed(2)} | Total: ${totalPrice.toFixed(2)}`,
  };
}

/**
 * Remove tax from total price to find base price
 * Example: 121 with 21% tax = 100 base price
 */
export function calculateRemoveTax(totalPrice: number, taxPercent: number): PercentageResult {
  const basePrice = totalPrice / (1 + taxPercent / 100);
  const taxAmount = totalPrice - basePrice;

  return {
    result: parseFloat(basePrice.toFixed(2)),
    formula: `${totalPrice} / (1 + ${taxPercent}%) = ${totalPrice} / ${(1 + taxPercent / 100).toFixed(4)} = ${basePrice.toFixed(2)}`,
    explanation: `Total: ${totalPrice.toFixed(2)} | Tax (${taxPercent}%): ${taxAmount.toFixed(2)} | Base: ${basePrice.toFixed(2)}`,
  };
}

/**
 * Calculate final price after discount
 * Example: 100 with 20% discount = 80
 */
export function calculateDiscount(originalPrice: number, discountPercent: number): PercentageResult {
  const discountAmount = (originalPrice * discountPercent) / 100;
  const finalPrice = originalPrice - discountAmount;

  return {
    result: parseFloat(finalPrice.toFixed(2)),
    formula: `${originalPrice} - (${originalPrice} × ${discountPercent}%) = ${originalPrice} - ${discountAmount.toFixed(2)} = ${finalPrice.toFixed(2)}`,
    explanation: `Original: ${originalPrice.toFixed(2)} | Discount (${discountPercent}%): -${discountAmount.toFixed(2)} | Final: ${finalPrice.toFixed(2)}`,
  };
}

/**
 * Find original price from discounted price
 * Example: 80 after 20% discount = 100 original
 */
export function calculateReverseDiscount(
  discountedPrice: number,
  discountPercent: number
): PercentageResult {
  const originalPrice = discountedPrice / (1 - discountPercent / 100);
  const discountAmount = originalPrice - discountedPrice;

  return {
    result: parseFloat(originalPrice.toFixed(2)),
    formula: `${discountedPrice} / (1 - ${discountPercent}%) = ${discountedPrice} / ${(1 - discountPercent / 100).toFixed(4)} = ${originalPrice.toFixed(2)}`,
    explanation: `Final: ${discountedPrice.toFixed(2)} | Discount (${discountPercent}%): ${discountAmount.toFixed(2)} | Original: ${originalPrice.toFixed(2)}`,
  };
}

/**
 * Main calculation function that routes to the appropriate calculator
 */
export function calculatePercentage(input: PercentageInput): PercentageResult {
  const { calculationType, value1, value2 } = input;

  switch (calculationType) {
    case 'percentOf':
      if (value2 === undefined) {
        throw new Error('Second value is required for percentOf calculation');
      }
      return calculatePercentOf(value1, value2);

    case 'isWhatPercent':
      if (value2 === undefined) {
        throw new Error('Second value is required for isWhatPercent calculation');
      }
      return calculateIsWhatPercent(value1, value2);

    case 'isPercentOfWhat':
      return calculateIsPercentOfWhat(value1, value2 || value1);

    case 'percentageChange':
      if (value2 === undefined) {
        throw new Error('Second value is required for percentageChange calculation');
      }
      return calculatePercentageChange(value1, value2);

    case 'percentageDifference':
      if (value2 === undefined) {
        throw new Error('Second value is required for percentageDifference calculation');
      }
      return calculatePercentageDifference(value1, value2);

    case 'addTax':
      if (value2 === undefined) {
        throw new Error('Second value is required for addTax calculation');
      }
      return calculateAddTax(value1, value2);

    case 'removeTax':
      if (value2 === undefined) {
        throw new Error('Second value is required for removeTax calculation');
      }
      return calculateRemoveTax(value1, value2);

    case 'discount':
      if (value2 === undefined) {
        throw new Error('Second value is required for discount calculation');
      }
      return calculateDiscount(value1, value2);

    case 'reverseDiscount':
      if (value2 === undefined) {
        throw new Error('Second value is required for reverseDiscount calculation');
      }
      return calculateReverseDiscount(value1, value2);

    default:
      throw new Error('Invalid calculation type');
  }
}
