# Calculator i18n

A multilingual calculator web application built with Astro and full internationalization support.

## 🚀 Features

- **Full i18n Support**: 12 languages with comprehensive translations
- **SEO Optimized**: Meta tags, hreflang, Open Graph, and Twitter Cards
- **Responsive Design**: Mobile-first, works on all devices
- **Type-Safe**: Built with TypeScript in strict mode
- **Fast**: Powered by Astro for optimal performance
- **Dynamic Routing**: Single router handles all calculator pages

## 📊 Available Calculators

### Health & Fitness
- ✅ **BMI Calculator** - Body Mass Index with metric/imperial units (12 languages)
- ✅ **BMR Calculator** - Basal Metabolic Rate (12 languages)
- ✅ **TDEE Calculator** - Total Daily Energy Expenditure (12 languages)
- ✅ **Body Fat Calculator** - Body fat percentage estimation (12 languages)
- ✅ **Calorie Calculator** - Daily calorie needs (12 languages)
- ✅ **Protein Calculator** - Daily protein requirements (12 languages)
- ✅ **Carbohydrate Calculator** - Daily carb needs (12 languages)
- ✅ **Fat Intake Calculator** - Daily fat requirements (12 languages)
- ✅ **Macro Calculator** - Macronutrient distribution (12 languages)
- ✅ **Ideal Weight Calculator** - Target weight ranges (12 languages)
- ✅ **Healthy Weight Calculator** - Healthy weight assessment (12 languages)
- ✅ **BSA Calculator** - Body Surface Area (12 languages)

**Total:** 12 calculators × 12 languages = 144 localized calculator pages

### Coming Soon
- ~160+ more calculators across Health, Financial, Math, and Other categories

## 🛠️ Tech Stack

- [Astro 5.x](https://astro.build/) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- Custom i18n System - Lightweight internationalization with JSON translations
- Pure CSS - No framework overhead
- [Playwright](https://playwright.dev/) - E2E Testing

## 🌍 Language Support

Supports 12 major languages covering global markets:

- **Spanish (es)** - Default language
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

### URL Examples
- Spanish (default): `/calculadoras/imc/`
- English: `/en/calculators/bmi/`
- German: `/de/rechner/bmi/`
- French: `/fr/calculatrices/imc/`
- Portuguese: `/pt/calculadoras/imc/`

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run E2E tests
npm run test
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
├── docs/                     # Documentation (see docs/INDEX.md)
├── public/
│   └── locales/             # Translation files (12 languages)
├── src/
│   ├── components/
│   │   └── calculators/     # Calculator components
│   ├── config/              # Project configuration
│   │   ├── calculators.ts   # Calculator IDs
│   │   ├── languages.ts     # Language configs
│   │   └── routes.ts        # URL mappings
│   ├── content/
│   │   └── calculators/     # MDX content (12 langs × calculators)
│   ├── layouts/             # Page layouts with SEO
│   ├── pages/
│   │   └── [...slug].astro  # Dynamic router (handles all calc pages)
│   └── utils/
│       └── calculators/     # Calculation logic
├── tests/                   # Playwright E2E tests
└── astro.config.mjs
```

## 📝 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[docs/INDEX.md](./docs/INDEX.md)** - Documentation index and quick reference
- **[docs/CLAUDE.md](./docs/CLAUDE.md)** - AI assistant guide and project architecture
- **[docs/ADDING_CALCULATORS.md](./docs/ADDING_CALCULATORS.md)** - How to add new calculators
- **[docs/CALCULATOR_OPTIMIZATION_GUIDE.md](./docs/CALCULATOR_OPTIMIZATION_GUIDE.md)** - SEO & UX optimization methodology
- **[docs/url-localization-rules.md](./docs/url-localization-rules.md)** - URL localization rules
- **[docs/PLAYWRIGHT_TESTING.md](./docs/PLAYWRIGHT_TESTING.md)** - Testing documentation

### Quick Links

**Adding a new calculator?** → See [docs/ADDING_CALCULATORS.md](./docs/ADDING_CALCULATORS.md)
**Optimizing content?** → See [docs/CALCULATOR_OPTIMIZATION_GUIDE.md](./docs/CALCULATOR_OPTIMIZATION_GUIDE.md)
**Understanding the architecture?** → See [docs/CLAUDE.md](./docs/CLAUDE.md)

## 🧪 Testing

The project includes comprehensive E2E testing with Playwright:

- **432 tests** for calculator display (36 calculators × 12 languages)
- **12 tests** for homepage translations
- **432 tests** for language selector functionality
- **~5000+ verifications** total

See [docs/PLAYWRIGHT_TESTING.md](./docs/PLAYWRIGHT_TESTING.md) for details.

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test`
5. Submit a pull request

## 🎯 Roadmap

- [x] BMI Calculator (12 languages)
- [x] BMR Calculator (12 languages)
- [x] TDEE Calculator (12 languages)
- [x] Body Fat Calculator (12 languages)
- [x] Calorie Calculator (12 languages)
- [x] Protein Calculator (12 languages)
- [x] Carbohydrate Calculator (12 languages)
- [x] Fat Intake Calculator (12 languages)
- [x] Macro Calculator (12 languages)
- [x] Ideal Weight Calculator (12 languages)
- [x] Healthy Weight Calculator (12 languages)
- [x] BSA Calculator (12 languages)
- [ ] Additional Health & Fitness calculators (~18 remaining)
- [ ] Financial calculators (~50 planned)
- [ ] Math calculators (~40 planned)
- [ ] Other categories (~50+ planned)

**Target:** ~175-180 calculators × 12 languages = 2,100+ localized pages

Reference: [calculator.net sitemap](https://www.calculator.net/sitemap.html)
