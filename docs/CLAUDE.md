# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based web application featuring a collection of calculators with full internationalization (i18n) support. The project is designed to replicate calculators from calculator.net, starting with the BMI Calculator as the MVP.

**Technology Stack:**
- Astro 5.x with TypeScript (strict mode)
- Custom i18n system with JSON translations
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

**⚠️ CRITICAL RULE:** All URLs MUST be fully localized. See `docs/url-localization-rules.md` for complete guidelines.

**System:** Custom lightweight i18n implementation

**Supported Languages:**
- Spanish (es) - Default language
- English (en)
- Portuguese (pt)
- French (fr)
- Hindi (hi)
- German (de)
- Italian (it)
- Polish (pl)
- Dutch (nl)
- Turkish (tr)
- Swedish (sv)
- Russian (ru)

**Configuration:**
- Language configs: `src/config/languages.ts`
- Route mappings: `src/config/routes.ts`
- Calculator IDs: `src/config/calculators.ts`

**Translation Files Location:** `public/locales/{lang}/calculators/{calculator-id}.json`

**URL Structure (ALWAYS use translated paths):**
- Spanish: `/calculadoras/imc`
- English: `/en/calculators/bmi`
- Portuguese: `/pt/calculadoras/imc`
- French: `/fr/calculatrices/imc`
- Hindi: `/hi/calculators/bmi`
- German: `/de/rechner/bmi`
- Italian: `/it/calcolatrici/imc`
- Polish: `/pl/kalkulatory/bmi`

**Route Mapping:**
- The `routes` config in `src/config/routes.ts` maps calculator slugs to localized URLs for each language
- Spanish is the default locale (no language prefix in URLs)
- **NEVER** use `/calculators/` for non-English languages - always use translated folder names
- Dynamic routing via `[...slug].astro` handles all calculator pages

**Using Translations:**
```astro
---
import { t } from '@/utils/i18n';
---
<h1>{t('bmi:title', 'es')}</h1>
```

**Translation Structure:**
- Each calculator has its own translation file
- Format: `{calculator-id}:{key}`
- Example: `t('bmi:form.title', lang)`

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

The project supports 12 languages covering Europe, Latin America, Asia, and global markets:

- **Spanish (es)** - Default language (Spain, Latin America)
- **English (en)** - International
- **Portuguese (pt)** - Brazil, Portugal
- **French (fr)** - France, French-speaking regions
- **Hindi (hi)** - India
- **German (de)** - Germany, Austria
- **Italian (it)** - Italy
- **Polish (pl)** - Poland
- **Dutch (nl)** - Netherlands, Belgium
- **Turkish (tr)** - Turkey
- **Swedish (sv)** - Sweden
- **Russian (ru)** - Russia, Eastern Europe

### URL Structure by Language

- Spanish (default): `/`, `/calculadoras/imc/`
- English: `/en/`, `/en/calculators/bmi/`
- Portuguese: `/pt/`, `/pt/calculadoras/imc/`
- French: `/fr/`, `/fr/calculatrices/imc/`
- Hindi: `/hi/`, `/hi/calculators/bmi/`
- German: `/de/`, `/de/rechner/bmi/`
- Italian: `/it/`, `/it/calcolatrici/imc/`
- Polish: `/pl/`, `/pl/kalkulatory/bmi/`
- Dutch: `/nl/`, `/nl/calculators/bmi/`
- Turkish: `/tr/`, `/tr/hesap-makineleri/bmi/`
- Swedish: `/sv/`, `/sv/kalkylatorer/bmi/`
- Russian: `/ru/`, `/ru/калькуляторы/bmi/`

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

## Calculator Categories

The project uses a category system to organize calculators into logical groups:

**7 Categories:**
1. **Health & Fitness** (`health-fitness`) - BMI, BMR, TDEE, heart rate, GFR, BAC, sleep, calories burned, one rep max, pace
2. **Pregnancy** (`pregnancy`) - Pregnancy, due date, conception, weight gain, ovulation, period
3. **Nutrition** (`nutrition`) - Calorie, protein, carbohydrate, macro, fat intake, weight watchers
4. **Body Composition** (`body-composition`) - Body fat, army body fat, body frame, body type, BSA, lean body mass, ideal weight, healthy weight, waist-hip
5. **Date & Time** (`date-time`) - Age, date
6. **Financial** (`financial`) - Tip
7. **General** (`general`) - Percentage, blood type

**Configuration Files:**
- **Category mappings:** `src/config/categories.ts`
- **Calculator-to-category mapping:** `calculatorCategories` object in `categories.ts`
- **Translated category names:** `categoryNames` object with translations for all 12 languages

**Helper Functions:**
```typescript
import { getCategoryName } from '@/config/categories';

// Get translated category name for a calculator
const categoryName = getCategoryName('bmi', 'en'); // Returns "Health & Fitness"
const categoryNameEs = getCategoryName('bmi', 'es'); // Returns "Salud y Fitness"
```

## Adding New Calculators

1. **Add calculator ID** to `src/config/calculators.ts`
   - Add calculator ID to the `calculators` array
   - Use kebab-case (e.g., 'body-fat')

2. **Assign category** in `src/config/categories.ts`
   - Add entry to `calculatorCategories` mapping
   - Choose appropriate category ID from the 7 available categories

3. **Create calculation logic** in `src/utils/calculators/{name}.ts`
   - Pure TypeScript functions
   - Type-safe interfaces for inputs/outputs
   - Unit conversion utilities

4. **Create component** in `src/components/calculators/{Name}Calculator.astro`
   - Use `t('calculator-id:key', lang)` for translations
   - Import calculation functions from utils
   - Add `class="calculator"` to main wrapper div

5. **Add translations** for ALL 12 languages in `public/locales/{lang}/calculators/{calculator-id}.json`
   - es, en, pt, fr, hi, de, it, pl, nl, tr, sv, ru
   - Follow the structure from existing calculator translation files

6. **Create MDX content** for each language in `src/content/calculators/{lang}/{calculator-id}.mdx`
   - Include frontmatter with: title, metaDescription, keywords, canonical, category, lang
   - The `category` field should contain the translated category name (automatically populated)
   - Import and render the calculator component
   - Add SEO-optimized content below the calculator

7. **Update route config** in `src/config/routes.ts`
   - Add URL mappings for all languages
   - Follow existing patterns for localized paths

8. **Update homepage** (if displaying on homepage)
   - Add calculator to the list in `src/pages/index.astro` and `src/pages/[lang]/index.astro`
   - Use `getCategoryName('calculator-id', lang)` for the category field

The dynamic router (`[...slug].astro`) will automatically handle all calculator pages.

## Current Calculators

**23 calculators** available in **12 languages** = **276 localized pages**

### Health & Fitness Calculators:
- BMI, BMR, TDEE, Body Fat, BSA
- Calorie, Protein, Carbohydrate, Fat Intake, Macro
- Ideal Weight, Healthy Weight
- Army Body Fat, Lean Body Mass, Body Frame, Body Type
- Waist-to-Hip Ratio

### Life & Other Calculators:
- Age, Pregnancy
- GFR (Kidney Function), Heart Rate
- One Rep Max, Pace, Percentage

All calculators support:
- Multiple units (metric/imperial where applicable)
- Responsive design
- Full SEO optimization
- Dynamic routing

## Future Expansion

The project is designed to scale to ~175-180 calculators from calculator.net across categories:
- Health & Fitness (~30 calculators) - 23 completed
- Financial (~50 calculators)
- Math (~40 calculators)
- Other (~50 calculators)

Each calculator will be available in all 12 supported languages.

**Calculator Reference:**
- The complete list of calculators to implement is available at: https://www.calculator.net/sitemap.html
- Use this sitemap as the reference for identifying and prioritizing new calculators to add to the project
