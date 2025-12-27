# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based web application featuring a collection of calculators with full internationalization (i18n) support. The project is designed to replicate calculators from calculator.net, starting with the BMI Calculator as the MVP.

**Technology Stack:**
- Astro 5.x with TypeScript (strict mode)
- astro-i18next for internationalization
- Pure CSS (no framework)
- Client-side interactivity via Astro scripts

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:4321
npm run build    # Build for production (runs type check + build)
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Code Architecture

### Directory Structure

```
src/
├── components/
│   └── calculators/          # Calculator components
│       └── BMICalculator.astro
├── layouts/
│   └── BaseLayout.astro      # Main layout with SEO, nav, footer
├── pages/
│   ├── index.astro           # Spanish homepage
│   ├── calculadoras/
│   │   ├── index.astro       # Spanish calculator listing
│   │   └── imc.astro         # Spanish BMI calculator page
│   └── en/                   # English routes
│       ├── index.astro
│       └── calculators/
│           ├── index.astro
│           └── bmi.astro
├── utils/
│   └── calculators/
│       └── bmi.ts            # BMI calculation logic (pure functions)
└── env.d.ts

public/
└── locales/                  # i18n translation files
    ├── es/
    │   ├── common.json
    │   └── calculators.json
    └── en/
        ├── common.json
        └── calculators.json
```

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@utils/*` → `src/utils/*`
- `@i18n/*` → `src/i18n/*`

## Internationalization

**Library:** astro-i18next

**Supported Languages:**
- Spanish (es) - Default language
- English (en)

**Configuration:** `astro-i18next.config.mjs`

**Translation Files Location:** `public/locales/{lang}/*.json`

**URL Structure:**
- Spanish: `/` (root), `/calculadoras/imc`
- English: `/en`, `/en/calculators/bmi`

**Route Mapping:**
- The `routes` object in `astro-i18next.config.mjs` maps Spanish URLs to English equivalents
- Spanish is the default locale (`showDefaultLocale: false`)

**Using Translations:**
```astro
---
import { t, changeLanguage } from 'i18next';
changeLanguage('es'); // Set language at page level
---
<h1>{t('calculators:bmi.title')}</h1>
```

**Translation Namespaces:**
- `common` - Site-wide strings (nav, buttons, units)
- `calculators` - Calculator-specific content

## Calculator Implementation Pattern

Each calculator follows this structure:

1. **Calculation Logic** (`src/utils/calculators/*.ts`):
   - Pure TypeScript functions
   - Type-safe interfaces for inputs/outputs
   - Unit conversion utilities
   - No UI dependencies

2. **Calculator Component** (`src/components/calculators/*.astro`):
   - Form UI with i18n labels
   - Client-side script for interactivity
   - Imports calculation functions from utils
   - Handles both metric and imperial units
   - Displays results dynamically

3. **Page** (`src/pages/{lang}/calculators/*.astro`):
   - Uses BaseLayout for SEO and structure
   - Sets language via `changeLanguage()`
   - Includes calculator component
   - Provides context/help text

## SEO Implementation

**BaseLayout.astro** handles all SEO:
- Meta tags (title, description)
- Canonical URLs
- hreflang tags (via HeadHrefLangs component)
- Open Graph tags
- Twitter Card tags

Each page sets:
```astro
<BaseLayout
  title={t('calculators:bmi.title') + ' - ' + t('site.title')}
  description={t('calculators:bmi.metaDescription')}
  lang="es"
>
```

## Supported Languages

The project supports 7 languages covering Europe, Latin America, and India:

- **Spanish (es)** - Default language (Spain, Latin America)
- **English (en)** - International
- **Portuguese (pt)** - Brazil, Portugal
- **French (fr)** - France, French-speaking Europe
- **Hindi (hi)** - India
- **German (de)** - Germany, Austria
- **Italian (it)** - Italy

### URL Structure by Language

- Spanish (default): `/`, `/calculadoras/imc/`
- English: `/en/`, `/en/calculators/bmi/`
- Portuguese: `/pt/`, `/pt/calculadoras/imc/`
- French: `/fr/`, `/fr/calculatrices/imc/`
- Hindi: `/hi/`, `/hi/calculators/bmi/`
- German: `/de/`, `/de/rechner/bmi/`
- Italian: `/it/`, `/it/calcolatrici/imc/`

## Translation Structure

Each calculator has its own translation file for better organization and scalability:

```
public/locales/
├── es/
│   ├── common.json          # Site-wide translations
│   ├── categories.json      # Calculator categories
│   └── calculators/
│       └── bmi.json         # BMI calculator translations
├── en/
│   ├── common.json
│   ├── categories.json
│   └── calculators/
│       └── bmi.json
└── [pt, fr, hi, de, it]/   # Same structure for each language
```

## Adding New Calculators

1. **Create calculation logic** in `src/utils/calculators/{name}.ts`
   - Pure TypeScript functions
   - Type-safe interfaces for inputs/outputs
   - Unit conversion utilities

2. **Create component** in `src/components/calculators/{Name}Calculator.astro`
   - Use `t('calculator-name:key', lang)` for translations
   - Import calculation functions from utils

3. **Add translations** for ALL languages in `public/locales/{lang}/calculators/{name}.json`
   - es, en, pt, fr, hi, de, it
   - Follow the structure from `bmi.json`

4. **Update i18n system** in `src/utils/i18n.ts`
   - Import the new calculator translations for all languages
   - Add to translations object
   - Add calculator paths to `getAlternatePath()` function

5. **Create pages** for each language:
   - `src/pages/calculadoras/{name}.astro` (Spanish)
   - `src/pages/en/calculators/{name}.astro` (English)
   - `src/pages/pt/calculadoras/{name}.astro` (Portuguese)
   - `src/pages/fr/calculatrices/{name}.astro` (French)
   - `src/pages/hi/calculators/{name}.astro` (Hindi)
   - `src/pages/de/rechner/{name}.astro` (German)
   - `src/pages/it/calcolatrici/{name}.astro` (Italian)

6. **Update calculator listings** in index pages for all languages

## Current Calculators

- **BMI Calculator** - Available in 7 languages
  - Supports metric and imperial units
  - Calculates: BMI, BMI Prime, Ponderal Index
  - Provides category and healthy weight range
  - URLs: `/calculadoras/imc/` (es), `/en/calculators/bmi/`, `/pt/calculadoras/imc/`, etc.

## Future Expansion

The project is designed to scale to ~175-180 calculators from calculator.net across categories:
- Health & Fitness (~30 calculators)
- Financial (~50 calculators)
- Math (~40 calculators)
- Other (~50 calculators)

Each calculator will be available in all 7 supported languages.
