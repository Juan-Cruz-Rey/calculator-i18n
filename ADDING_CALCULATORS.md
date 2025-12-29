# Adding New Calculators and Languages

This document explains how to add new calculators and languages to the project using the new dynamic routing system.

## Overview

The dynamic routing system eliminates the need to create separate page files for each calculator in each language. Instead:

- **1 dynamic router** (`src/pages/[...slug].astro`) handles all calculator pages
- **1 calculator component** serves all languages
- **1 MDX file per language** contains the unique content for that language
- **Configuration files** define calculators, languages, and routes

## Adding a New Calculator

Follow these steps to add a new calculator (e.g., a "Debt Calculator"):

### 1. Create the Calculation Logic

Create a TypeScript file with pure calculation functions:

**`src/utils/calculators/debt.ts`**
```typescript
export interface DebtInput {
  principal: number;
  interestRate: number;
  monthlyPayment: number;
}

export interface DebtResult {
  monthsToPayoff: number;
  totalInterest: number;
  totalPaid: number;
}

export function calculateDebt(input: DebtInput): DebtResult {
  // Calculation logic here
  return {
    monthsToPayoff: 24,
    totalInterest: 500,
    totalPaid: 10500
  };
}
```

### 2. Create the Calculator Component

Create an Astro component for the UI:

**`src/components/calculators/DebtCalculator.astro`**
```astro
---
import { t } from '@/utils/i18n';

interface Props {
  lang: string;
}

const { lang } = Astro.props;
---

<div class="calculator">
  <h2>{t('debt.form.title', lang)}</h2>

  <form id="debt-calculator">
    <div class="form-group">
      <label for="principal">{t('debt.form.principalLabel', lang)}</label>
      <input type="number" id="principal" name="principal" required />
    </div>

    <button type="submit">{t('common.calculate', lang)}</button>
  </form>

  <div id="results" class="results hidden"></div>
</div>

<script>
  import { calculateDebt } from '@/utils/calculators/debt';

  document.getElementById('debt-calculator')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const result = calculateDebt({
      principal: Number(formData.get('principal')),
      interestRate: Number(formData.get('interestRate')),
      monthlyPayment: Number(formData.get('monthlyPayment'))
    });

    // Display results
    document.getElementById('results')!.innerHTML = `
      <h3>Results</h3>
      <p>Months to payoff: ${result.monthsToPayoff}</p>
    `;
  });
</script>

<style>
  .calculator {
    max-width: 600px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }
</style>
```

### 3. Add Calculator to Configuration

Add the calculator ID to the list:

**`src/config/calculators.ts`**
```typescript
export type CalculatorId =
  | 'age'
  | 'bmi'
  // ... existing calculators
  | 'debt'; // ← Add here

export const calculators: CalculatorId[] = [
  'age',
  'bmi',
  // ... existing calculators
  'debt' // ← Add here
];
```

If the calculator ID is an acronym, add it to the ACRONYMS set for proper component naming.

### 4. Add Routes for All Languages

Add the calculator slug for each language:

**`src/config/routes.ts`**
```typescript
export const routes: RouteMap = {
  es: {
    // ... existing routes
    'debt': 'deudas',
  },
  en: {
    // ... existing routes
    'debt': 'debt',
  },
  pt: {
    // ... existing routes
    'debt': 'dividas',
  },
  // ... Add for all 12 languages
};
```

### 5. Create MDX Content for Each Language

Create one MDX file per supported language with SEO-optimized content:

**`src/content/calculators/es/debt.mdx`**
```mdx
---
title: Calculadora de Deudas - Planifica el Pago de tus Deudas
metaDescription: Calculadora gratuita de deudas. Descubre cuánto tiempo tardarás en pagar tu deuda y cuánto pagarás en intereses.
keywords: deudas, calculadora deudas, pago deudas, intereses
canonical: /calculadoras/deudas/
showCalculatorFirst: false
hideCalculator: false
---

import DebtCalculator from '@/components/calculators/DebtCalculator.astro';

# Calculadora de Deudas

Planifica el pago de tus deudas y descubre cuánto pagarás en intereses.

## ¿Cómo funciona?

Esta calculadora te ayuda a...

<DebtCalculator lang="es" />

## Consejos para Pagar Deudas

1. Paga más del mínimo mensual
2. Prioriza deudas con mayor interés
3. Evita acumular nuevas deudas

## Preguntas Frecuentes

### ¿Cuál es la mejor estrategia para pagar deudas?

La estrategia de avalancha (pagar primero las deudas con mayor interés) suele ser la más efectiva...
```

Repeat for each language with localized content:
- `src/content/calculators/en/debt.mdx`
- `src/content/calculators/pt/debt.mdx`
- `src/content/calculators/fr/debt.mdx`
- etc. (all 12 languages)

### 6. Create Translation Files

Create translation JSON files for form labels and UI text:

**`public/locales/es/calculators/debt.json`**
```json
{
  "title": "Calculadora de Deudas",
  "description": "Planifica el pago de tus deudas",
  "metaDescription": "Calculadora gratuita de deudas...",
  "form": {
    "title": "Ingresa los datos de tu deuda",
    "principalLabel": "Monto de la deuda",
    "interestRateLabel": "Tasa de interés anual (%)",
    "monthlyPaymentLabel": "Pago mensual"
  },
  "results": {
    "title": "Resultados",
    "monthsToPayoff": "Meses para pagar",
    "totalInterest": "Intereses totales",
    "totalPaid": "Total a pagar"
  }
}
```

Repeat for all 12 languages in `public/locales/{lang}/calculators/debt.json`.

### 7. Test Your Calculator

```bash
# Start development server
npm run dev

# Test each language URL:
# Spanish: http://localhost:4321/calculadoras/deudas/
# English: http://localhost:4321/en/calculators/debt/
# Portuguese: http://localhost:4321/pt/calculadoras/dividas/
# etc.
```

### 8. Build and Deploy

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

That's it! Your new calculator is now available in all 12 languages with SEO-optimized URLs.

---

## Adding a New Language

To add a new language (e.g., Japanese):

### 1. Add Language Configuration

**`src/config/languages.ts`**
```typescript
export type Locale =
  | 'es'
  | 'en'
  // ... existing languages
  | 'ja'; // ← Add here

export const languages: Record<Locale, LanguageConfig> = {
  // ... existing languages
  ja: {
    name: '日本語',
    folder: 'calculator',  // or 'keisan' for localized folder
    dir: 'ltr'
  }
};
```

### 2. Add Routes for All Calculators

**`src/config/routes.ts`**
```typescript
export const routes: RouteMap = {
  // ... existing languages
  ja: {
    'age': 'nenrei',
    'bmi': 'bmi',
    'bmr': 'kisotaisha',
    'calorie': 'karori',
    'debt': 'shakkin',
    // ... all 36 calculators
  }
};
```

### 3. Create MDX Content

Create MDX files for each calculator in the new language:

```
src/content/calculators/ja/
├── age.mdx
├── bmi.mdx
├── bmr.mdx
├── calorie.mdx
├── debt.mdx
└── ... (all 36 calculators)
```

### 4. Create Translation Files

Create JSON translation files:

```
public/locales/ja/
├── common.json
├── categories.json
└── calculators/
    ├── age.json
    ├── bmi.json
    ├── bmr.json
    └── ... (all 36 calculators)
```

### 5. Update Sitemap Configuration

**`astro.config.mjs`**
```javascript
sitemap({
  i18n: {
    defaultLocale: 'en',
    locales: {
      // ... existing locales
      ja: 'ja'
    }
  }
})
```

### 6. Update BaseLayout

**`src/layouts/BaseLayout.astro`**
```astro
---
const ogLocaleMap: Record<string, string> = {
  // ... existing mappings
  ja: 'ja_JP'
};

const locales: Locale[] = [/* ... existing */, 'ja'];

const calculatorsIndexPaths: Record<Locale, string> = {
  // ... existing paths
  ja: '/ja/calculator/'
};

const navTranslations = {
  // ... existing translations
  ja: {
    home: 'ホーム',
    calculators: '計算機',
    siteName: '計算機'
  }
};
---
```

### 7. Test the New Language

```bash
npm run dev

# Test Japanese URLs:
# http://localhost:4321/ja/calculator/bmi/
# http://localhost:4321/ja/calculator/karori/
```

---

## Tips and Best Practices

### MDX Content

- Write unique, SEO-optimized content for each language
- Don't just translate - localize! Adapt examples, statistics, and cultural references
- Use the `showCalculatorFirst` option to display the calculator before content
- Use the `hideCalculator` option if you want to embed the calculator manually

### SEO Optimization

- Write descriptive, keyword-rich titles and meta descriptions for each language
- Include relevant keywords in the frontmatter
- Structure content with proper headings (H1, H2, H3)
- Add tables, lists, and FAQs for better indexing

### Performance

- Keep MDX files focused on content
- Put interactive logic in the calculator component
- Minimize inline styles in MDX

### Translations

- Use the translation JSON files for UI text and form labels
- Use MDX content for long-form, SEO-optimized explanatory text
- Keep translations consistent across all languages

---

## File Structure Summary

For each calculator:

```
calculator-i18n/
├── src/
│   ├── components/calculators/
│   │   └── CalculatorNameCalculator.astro    # 1 file (shared)
│   ├── content/calculators/
│   │   ├── es/calculator-id.mdx               # 12 files (one per lang)
│   │   ├── en/calculator-id.mdx
│   │   └── ... (10 more languages)
│   ├── utils/calculators/
│   │   └── calculator-id.ts                   # 1 file (shared)
│   └── config/
│       ├── calculators.ts                     # Add ID here
│       └── routes.ts                          # Add slugs for 12 langs
└── public/locales/
    ├── es/calculators/calculator-id.json      # 12 files (one per lang)
    ├── en/calculators/calculator-id.json
    └── ... (10 more languages)
```

**Total files per calculator:** 1 component + 1 utility + 12 MDX + 12 JSON = **26 files**

Compare this to the old system: **429 page files** for 36 calculators!

---

## Migration from Old System

To migrate an existing calculator from the old page-based system to MDX:

1. Keep the existing calculator component (no changes needed)
2. Keep the existing utility file (no changes needed)
3. Extract content from one existing page file (e.g., Spanish)
4. Convert it to MDX format with frontmatter
5. Create MDX files for other 11 languages
6. Test that URLs still work
7. Delete the old page files once confirmed working

You can run both systems in parallel during migration since the old pages take precedence over the dynamic router.
