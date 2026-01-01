# Guía Completa para Agregar Nuevas Calculadoras

Esta guía completa documenta **todos los requisitos y mejores prácticas** para agregar nuevas calculadoras al proyecto, basándose en la experiencia de los 6 batches completados (36 calculadoras en 12 idiomas = 432 archivos MDX).

---

## 📋 Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Requisitos Previos](#requisitos-previos)
3. [Arquitectura de una Calculadora](#arquitectura-de-una-calculadora)
4. [Proceso Paso a Paso](#proceso-paso-a-paso)
5. [Requisitos de Contenido MDX](#requisitos-de-contenido-mdx)
6. [Optimización SEO](#optimización-seo)
7. [Localización Cultural](#localización-cultural)
8. [Validación y Testing](#validación-y-testing)
9. [Estrategia de Batches](#estrategia-de-batches)
10. [Checklist Final](#checklist-final)
11. [Troubleshooting](#troubleshooting)

---

## Resumen Ejecutivo

### ¿Qué se necesita para agregar una calculadora?

**Por calculadora:**
- **1 componente** Astro (compartido entre idiomas)
- **1 archivo** de utilidades TypeScript (lógica de cálculo)
- **12 archivos** MDX (uno por idioma)
- **12 archivos** JSON de traducción (uno por idioma)
- Configuración en 2 archivos (calculators.ts, routes.ts)

**Total:** ~26 archivos por calculadora

### Tiempo Estimado

- **Investigación SEO:** 30-45 min por idioma
- **Componente + Lógica:** 2-3 horas (una sola vez)
- **Contenido MDX:** 60-90 min por idioma
- **Configuración + Testing:** 30 min

**Total por calculadora (12 idiomas):** 15-20 horas

**Estrategia recomendada:** Usar agentes paralelos (12 simultáneos) para reducir tiempo a 3-4 horas por calculadora.

---

## Requisitos Previos

### Conocimientos Técnicos

- TypeScript (interfaces, types)
- Astro (componentes, scripts)
- MDX (frontmatter, JSX en Markdown)
- SEO básico (meta tags, keywords, canonical URLs)

### Herramientas Necesarias

- Editor de código (VS Code recomendado)
- Node.js 20+
- Git
- Navegador con DevTools
- Acceso a Google/Bing para investigación SEO

### Documentación de Referencia

Leer antes de comenzar:
1. `docs/CALCULATOR_OPTIMIZATION_GUIDE.md` - Metodología SEO
2. `docs/BATCH_STRATEGY.md` - Estrategia de batches
3. `docs/url-localization-rules.md` - Reglas de URLs

---

## Arquitectura de una Calculadora

### Estructura de Archivos

```
calculator-i18n/
├── src/
│   ├── components/calculators/
│   │   └── BMICalculator.astro              # 1 componente (compartido)
│   ├── content/calculators/
│   │   ├── es/bmi.mdx                       # 12 archivos MDX
│   │   ├── en/bmi.mdx                       # (uno por idioma)
│   │   ├── pt/bmi.mdx
│   │   ├── fr/bmi.mdx
│   │   ├── hi/bmi.mdx
│   │   ├── de/bmi.mdx
│   │   ├── it/bmi.mdx
│   │   ├── pl/bmi.mdx
│   │   ├── nl/bmi.mdx
│   │   ├── tr/bmi.mdx
│   │   ├── sv/bmi.mdx
│   │   └── ru/bmi.mdx
│   ├── utils/calculators/
│   │   └── bmi.ts                           # 1 archivo de lógica
│   └── config/
│       ├── calculators.ts                   # Agregar ID aquí
│       └── routes.ts                        # Agregar rutas (12 idiomas)
└── public/locales/
    ├── es/calculators/bmi.json              # 12 archivos de traducción
    ├── en/calculators/bmi.json              # (uno por idioma)
    ├── pt/calculators/bmi.json
    ├── fr/calculators/bmi.json
    ├── hi/calculators/bmi.json
    ├── de/calculators/bmi.json
    ├── it/calculators/bmi.json
    ├── pl/calculators/bmi.json
    ├── nl/calculators/bmi.json
    ├── tr/calculators/bmi.json
    ├── sv/calculators/bmi.json
    └── ru/calculators/bmi.json
```

### Flujo de Datos

```
Usuario ingresa datos en formulario
         ↓
Componente Astro (UI + validación)
         ↓
Script del lado del cliente
         ↓
Función de cálculo (utils/calculators/*.ts)
         ↓
Resultado mostrado en la página
```

---

## Proceso Paso a Paso

### Paso 1: Definir la Calculadora

**1.1. Elegir un ID único**
- Usar kebab-case: `'body-fat'`, `'one-rep-max'`
- Debe ser descriptivo y corto
- Verificar que no exista en `src/config/calculators.ts`

**1.2. Investigar la calculadora**
- Visitar calculator.net para entender la funcionalidad
- Identificar inputs necesarios
- Identificar outputs esperados
- Documentar fórmulas matemáticas

**Ejemplo: Calculadora de IMC**
```
Inputs: peso (kg o lbs), altura (cm o in), edad, sexo
Outputs: IMC, categoría (bajo peso, normal, sobrepeso, obesidad), rango saludable
Fórmula: IMC = peso (kg) / (altura (m))²
```

---

### Paso 2: Crear la Lógica de Cálculo

**Ubicación:** `src/utils/calculators/{calculator-id}.ts`

**Plantilla:**
```typescript
/**
 * {Calculator Name} Calculator Utilities
 *
 * Description: {Brief description of what this calculator does}
 * Reference: {URL to calculator.net or source}
 */

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface {CalculatorName}Input {
  // Define all required inputs
  value1: number;
  value2: number;
  unit?: 'metric' | 'imperial';
}

export interface {CalculatorName}Result {
  // Define all outputs
  mainResult: number;
  category: string;
  additionalInfo?: string;
}

// ============================================================================
// Constants
// ============================================================================

const SOME_CONSTANT = 100;

// ============================================================================
// Main Calculation Function
// ============================================================================

/**
 * Calculate {what it calculates}
 * @param input - Input parameters
 * @returns Calculation result
 */
export function calculate{CalculatorName}(
  input: {CalculatorName}Input
): {CalculatorName}Result {
  // Input validation
  if (input.value1 <= 0) {
    throw new Error('Value must be positive');
  }

  // Perform calculations
  const result = input.value1 * SOME_CONSTANT;

  // Determine category/interpretation
  let category = 'normal';
  if (result < 18.5) category = 'low';
  else if (result >= 25) category = 'high';

  return {
    mainResult: result,
    category,
  };
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Convert imperial to metric
 */
export function convertToMetric(value: number): number {
  return value * 2.54; // example conversion
}
```

**Mejores Prácticas:**
- ✅ Funciones puras (sin side effects)
- ✅ Type-safe con TypeScript
- ✅ Validación de inputs
- ✅ Comentarios claros
- ✅ Manejo de errores
- ✅ Funciones helper para conversiones

---

### Paso 3: Crear el Componente Astro

**Ubicación:** `src/components/calculators/{CalculatorName}Calculator.astro`

**Nombre del componente:**
- Usar PascalCase
- Acronimos en mayúsculas: `BMICalculator`, `BMRCalculator`
- Palabras completas: `BodyFatCalculator`, `OneRepMaxCalculator`

**Plantilla:**
```astro
---
import { t, type Locale } from '@/utils/i18n';

const { lang } = Astro.props as { lang: Locale };
---

<div class="{calculator-id}-calculator calculator">
  <div class="calculator-form">
    <h2>{t('{calculator-id}.form.title', lang)}</h2>

    <form id="{calculator-id}-form">
      <!-- Unit System Toggle (si aplica) -->
      <fieldset class="form-group unit-toggle">
        <legend class="sr-only">{t('units.system', lang)}</legend>
        <label>
          <input type="radio" name="unitSystem" value="metric" checked />
          {t('units.metric', lang)}
        </label>
        <label>
          <input type="radio" name="unitSystem" value="imperial" />
          {t('units.imperial', lang)}
        </label>
      </fieldset>

      <!-- Input Fields -->
      <div class="form-group">
        <label for="value1">{t('{calculator-id}.form.value1Label', lang)}</label>
        <input
          type="number"
          id="value1"
          name="value1"
          min="0"
          step="0.1"
          required
          placeholder={t('{calculator-id}.form.value1Placeholder', lang)}
        />
        <span class="unit">{t('units.kg', lang)}</span>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">
        {t('common.calculate', lang)}
      </button>
    </form>
  </div>

  <!-- Results Area -->
  <div id="{calculator-id}-results" class="calculator-results hidden">
    <h3>{t('{calculator-id}.results.title', lang)}</h3>
    <div id="result-content"></div>
  </div>
</div>

<script>
  import { calculate{CalculatorName} } from '@/utils/calculators/{calculator-id}';

  const form = document.getElementById('{calculator-id}-form') as HTMLFormElement;
  const resultsDiv = document.getElementById('{calculator-id}-results') as HTMLElement;
  const resultContent = document.getElementById('result-content') as HTMLElement;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      // Get form values
      const input = {
        value1: Number(formData.get('value1')),
        value2: Number(formData.get('value2')),
        unit: formData.get('unitSystem') as 'metric' | 'imperial',
      };

      // Calculate result
      const result = calculate{CalculatorName}(input);

      // Display results
      resultContent.innerHTML = `
        <div class="result-main">
          <div class="result-value">${result.mainResult.toFixed(2)}</div>
          <div class="result-label">Main Result</div>
        </div>
        <div class="result-category ${result.category}">
          <strong>Category:</strong> ${result.category}
        </div>
      `;

      // Show results
      resultsDiv.classList.remove('hidden');
      resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (error) {
      alert('Error: ' + (error as Error).message);
    }
  });
</script>

<style>
  .{calculator-id}-calculator {
    max-width: 800px;
    margin: 0 auto;
  }

  .calculator-form {
    background: var(--bg-secondary);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
  }

  .calculator-results {
    background: var(--bg-tertiary);
    padding: 2rem;
    border-radius: 8px;
  }

  .calculator-results.hidden {
    display: none;
  }

  .result-main {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .result-value {
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .calculator-form,
    .calculator-results {
      padding: 1rem;
    }

    .result-value {
      font-size: 2rem;
    }
  }
</style>
```

**Elementos Clave:**
- ✅ `class="calculator"` en el div principal
- ✅ Usar `t()` para todas las traducciones
- ✅ IDs únicos para form y results
- ✅ Validación de inputs (required, min, max, step)
- ✅ Manejo de errores con try/catch
- ✅ Smooth scroll a resultados
- ✅ Diseño responsive

---

### Paso 4: Configurar la Calculadora

**4.1. Agregar a calculators.ts**

**Archivo:** `src/config/calculators.ts`

```typescript
export type CalculatorId =
  | 'age'
  | 'bmi'
  // ... existing calculators
  | '{calculator-id}'; // ← Agregar aquí

export const calculators: CalculatorId[] = [
  'age',
  'bmi',
  // ... existing calculators
  '{calculator-id}' // ← Agregar aquí
];

// Si el ID es un acrónimo, agregarlo aquí:
const ACRONYMS = new Set(['bmi', 'bmr', 'bsa', 'gfr', 'tdee', 'bac']);
```

**4.2. Agregar rutas en routes.ts**

**Archivo:** `src/config/routes.ts`

```typescript
export const routes: RouteMap = {
  es: {
    // ... existing routes
    '{calculator-id}': '{slug-espanol}',
  },
  en: {
    // ... existing routes
    '{calculator-id}': '{slug-english}',
  },
  pt: {
    // ... existing routes
    '{calculator-id}': '{slug-portugues}',
  },
  fr: {
    // ... existing routes
    '{calculator-id}': '{slug-francais}',
  },
  hi: {
    // ... existing routes
    '{calculator-id}': '{slug-hindi}', // Usually English
  },
  de: {
    // ... existing routes
    '{calculator-id}': '{slug-deutsch}',
  },
  it: {
    // ... existing routes
    '{calculator-id}': '{slug-italiano}',
  },
  pl: {
    // ... existing routes
    '{calculator-id}': '{slug-polski}',
  },
  nl: {
    // ... existing routes
    '{calculator-id}': '{slug-nederlands}',
  },
  tr: {
    // ... existing routes
    '{calculator-id}': '{slug-turkce}',
  },
  sv: {
    // ... existing routes
    '{calculator-id}': '{slug-svenska}',
  },
  ru: {
    // ... existing routes
    '{calculator-id}': '{slug-russky}',
  },
};
```

**Ejemplo Real (BMI):**
```typescript
{
  es: { 'bmi': 'imc' },
  en: { 'bmi': 'bmi' },
  pt: { 'bmi': 'imc' },
  fr: { 'bmi': 'imc' },
  hi: { 'bmi': 'bmi' },
  de: { 'bmi': 'bmi' },
  it: { 'bmi': 'imc' },
  pl: { 'bmi': 'bmi' },
  nl: { 'bmi': 'bmi' },
  tr: { 'bmi': 'bmi' },
  sv: { 'bmi': 'bmi' },
  ru: { 'bmi': 'bmi' },
}
```

---

### Paso 5: Crear Archivos de Traducción

**Ubicación:** `public/locales/{lang}/calculators/{calculator-id}.json`

**Estructura Estándar:**
```json
{
  "title": "Calculator Title",
  "description": "Brief description",
  "metaDescription": "SEO meta description",
  "form": {
    "title": "Enter Your Information",
    "value1Label": "Value 1",
    "value1Placeholder": "Enter value",
    "value2Label": "Value 2",
    "submitButton": "Calculate"
  },
  "results": {
    "title": "Results",
    "mainResultLabel": "Your Result",
    "categoryLabel": "Category",
    "interpretationLabel": "Interpretation"
  },
  "categories": {
    "low": "Low",
    "normal": "Normal",
    "high": "High"
  },
  "errors": {
    "invalidInput": "Please enter valid values",
    "outOfRange": "Value out of range"
  }
}
```

**Crear para los 12 idiomas:**
- `public/locales/es/calculators/{calculator-id}.json`
- `public/locales/en/calculators/{calculator-id}.json`
- `public/locales/pt/calculators/{calculator-id}.json`
- `public/locales/fr/calculators/{calculator-id}.json`
- `public/locales/hi/calculators/{calculator-id}.json`
- `public/locales/de/calculators/{calculator-id}.json`
- `public/locales/it/calculators/{calculator-id}.json`
- `public/locales/pl/calculators/{calculator-id}.json`
- `public/locales/nl/calculators/{calculator-id}.json`
- `public/locales/tr/calculators/{calculator-id}.json`
- `public/locales/sv/calculators/{calculator-id}.json`
- `public/locales/ru/calculators/{calculator-id}.json`

---

### Paso 6: Crear Contenido MDX (12 idiomas)

**⚠️ CRÍTICO:** Este es el paso más importante y consume más tiempo.

**Proceso Recomendado:** Seguir la metodología del `CALCULATOR_OPTIMIZATION_GUIDE.md`

#### Paso 6.1: Investigación SEO (30-45 min por idioma)

**Para cada idioma:**

1. **Buscar en Google y Bing:**
   - Términos nativos (ej: "calculadora IMC" para español)
   - "calculadora {nombre} gratis online"
   - "{nombre} calculator" + idioma

2. **Analizar Top 3-5 resultados:**
   - ¿Cómo estructuran el contenido?
   - ¿Qué keywords usan?
   - ¿Calculadora primero o contenido primero?
   - ¿Qué secciones incluyen?
   - ¿Tienen tablas? ¿FAQs?

3. **Extraer keywords:**
   - 10-15 keywords por idioma
   - Usar términos nativos (no traducciones literales)
   - Incluir variaciones y long-tail keywords

#### Paso 6.2: Estructura del Archivo MDX

**Ubicación:** `src/content/calculators/{lang}/{calculator-id}.mdx`

**Template:**
```mdx
---
title: {Keyword Principal} Gratis - {Keyword Secundario} Online 2026
metaDescription: {Keyword} 100% gratuita y precisa. {Beneficio 1}, {Beneficio 2}, {Beneficio 3}. {Call-to-action}.
keywords: [keyword1, keyword2, keyword3, keyword4, keyword5, keyword6, keyword7, keyword8, keyword9, keyword10]
canonical: /{lang-prefix}/{folder-translated}/{slug-translated}/
lang: "{lang}"
---

import {CalculatorName}Calculator from '@/components/calculators/{CalculatorName}Calculator.astro';

# {Título Principal H1 con Keyword}

{Párrafo introductorio breve 1-2 oraciones explicando qué es y para qué sirve}

## ¿Qué es {el Concepto}?

{Definición clara y concisa del concepto - 2-3 párrafos}

### Fórmula de Cálculo

{Explicar la fórmula matemática con ejemplo práctico}

**Fórmula:**
```
Resultado = (Valor1 × Valor2) / Constante
```

**Ejemplo:**
Si Valor1 = 70 y Valor2 = 1.75:
- Resultado = (70 × 1.75) / 100
- Resultado = **122.5**

<{CalculatorName}Calculator lang="{lang}" />

## Categorías de {Resultado}

{Tabla con interpretación de resultados}

| Categoría | Rango | Descripción | Interpretación |
|-----------|-------|-------------|----------------|
| Bajo | {'<'} 18.5 | Por debajo del rango normal | Se recomienda consultar médico |
| Normal | 18.5 - 24.9 | Rango saludable | Mantener hábitos saludables |
| Alto | 25 - 29.9 | Por encima del rango normal | Considerar cambios de estilo de vida |
| Muy Alto | {'≥'} 30 | Significativamente elevado | Consultar con profesional de salud |

## ¿Por Qué es Importante {el Concepto}?

### Beneficios de Conocer tu {Resultado}

1. **Salud preventiva:** {Explicar beneficio}
2. **Monitoreo:** {Explicar beneficio}
3. **Toma de decisiones:** {Explicar beneficio}

### Implicaciones para la Salud

{Explicar qué significa el resultado para la salud}

## Factores que Afectan {el Resultado}

1. **Factor 1:** {Explicación}
2. **Factor 2:** {Explicación}
3. **Factor 3:** {Explicación}
4. **Factor 4:** {Explicación}
5. **Factor 5:** {Explicación}

## Limitaciones de la Calculadora

**Importante:** Esta calculadora es una herramienta de estimación y tiene limitaciones:

- ⚠️ No reemplaza el diagnóstico médico profesional
- ⚠️ No considera {factor específico}
- ⚠️ Puede no ser preciso para {casos especiales}
- ⚠️ Siempre consulte con un profesional de la salud

## Consejos Prácticos

### Cómo Mejorar tu {Resultado}

1. **Consejo 1:** {Descripción detallada}
2. **Consejo 2:** {Descripción detallada}
3. **Consejo 3:** {Descripción detallada}

### Recomendaciones de Expertos

{Citas o recomendaciones de organizaciones de salud reconocidas}

## {Métrica Relacionada 1}

{Explicar otra métrica relacionada con tabla si aplica}

## {Métrica Relacionada 2}

{Explicar otra métrica relacionada}

## Preguntas Frecuentes

### ¿{Pregunta 1 más común}?

{Respuesta detallada con 2-3 párrafos}

### ¿{Pregunta 2}?

{Respuesta detallada}

### ¿{Pregunta 3}?

{Respuesta detallada}

### ¿{Pregunta 4}?

{Respuesta detallada}

### ¿{Pregunta 5}?

{Respuesta detallada}

### ¿{Pregunta 6}?

{Respuesta detallada}

### ¿{Pregunta 7}?

{Respuesta detallada}

### ¿{Pregunta 8}?

{Respuesta detallada}

## Conclusión

{Resumen de 2-3 párrafos}

**Nota Importante:** Esta calculadora proporciona estimaciones basadas en fórmulas estándar. Para un análisis completo y personalizado, consulte siempre con un profesional de la salud calificado. Los resultados no constituyen diagnóstico médico.

{Call-to-action: Usar la calculadora, compartir, etc.}
```

---

## Requisitos de Contenido MDX

### Frontmatter

**Campos obligatorios:**
```yaml
title: string         # 50-60 caracteres, incluir año 2026
metaDescription: string # 145-155 caracteres
keywords: string[]    # 10-15 keywords
canonical: string     # URL canónica correcta
lang: string          # Código de idioma (es, en, pt, etc.)
```

**Ejemplos por Idioma:**

**Español:**
```yaml
---
title: Calculadora de IMC Gratis - Índice de Masa Corporal Online 2026
metaDescription: Calculadora de IMC 100% gratuita y precisa. Calcula tu índice de masa corporal en segundos. Conoce tu peso ideal, categoría OMS y rango saludable.
keywords: [calculadora IMC, IMC gratis, índice de masa corporal, peso ideal, IMC online, calcular IMC, tabla IMC, peso saludable, obesidad, sobrepeso]
canonical: /calculadoras/imc/
lang: "es"
---
```

**English:**
```yaml
---
title: Free BMI Calculator - Body Mass Index Calculator Online 2026
metaDescription: Free and accurate BMI calculator. Calculate your body mass index in seconds. Know your ideal weight, WHO category and healthy range. Metric and imperial.
keywords: [BMI calculator, free BMI, body mass index, ideal weight, BMI online, calculate BMI, BMI chart, healthy weight, obesity, overweight]
canonical: /calculators/bmi/
lang: "en"
---
```

**Hindi (Caso Especial):**
```yaml
---
title: Free BMI Calculator - बॉडी मास इंडेक्स कैलकुलेटर Online 2026
metaDescription: Free BMI calculator for Indians. Calculate your body mass index with Asian-Indian thresholds. Know your healthy weight and WHO category.
keywords: [BMI calculator, बॉडी मास इंडेक्स, BMI कैलकुलेटर, Indian BMI, Asian BMI thresholds, स्वस्थ वजन]
canonical: /hi/calculators/bmi/
lang: "hi"
---
```

### Longitud de Contenido

**Requisitos mínimos:**
- **1,500-3,000 palabras** por archivo
- Promedio exitoso: **2,200-2,500 palabras**
- Máximo recomendado: **5,000 palabras**

**Distribución recomendada:**
- Introducción: 100-200 palabras
- Definición y concepto: 300-500 palabras
- Tablas e interpretación: 400-600 palabras
- Factores y consejos: 400-600 palabras
- FAQs: 400-800 palabras (6-8 preguntas)
- Conclusión: 100-200 palabras

### Estructura de Headings

**Jerarquía obligatoria:**
```
# H1 - Título principal (solo uno)
## H2 - Secciones principales (5-8)
### H3 - Subsecciones (10-15)
```

**Ejemplo:**
```markdown
# Calculadora de IMC              ← H1 (1)
## ¿Qué es el IMC?                ← H2 (1)
### Fórmula de Cálculo            ← H3 (1.1)
### Historia del IMC              ← H3 (1.2)
## Categorías del IMC             ← H2 (2)
## Por Qué es Importante          ← H2 (3)
### Salud Cardiovascular          ← H3 (3.1)
### Prevención de Enfermedades   ← H3 (3.2)
## Limitaciones                   ← H2 (4)
## Preguntas Frecuentes           ← H2 (5)
### ¿Pregunta 1?                  ← H3 (5.1)
### ¿Pregunta 2?                  ← H3 (5.2)
## Conclusión                     ← H2 (6)
```

### Tablas

**Requisitos:**
- **Mínimo 2-3 tablas** por archivo
- Usar formato Markdown
- Incluir encabezados descriptivos
- Alinear columnas

**Ejemplo de tabla estándar:**
```markdown
| Categoría IMC | Rango (kg/m²) | Interpretación | Riesgo para Salud |
|---------------|---------------|----------------|-------------------|
| Bajo peso | {'<'} 18.5 | Por debajo del peso saludable | Moderado |
| Normal | 18.5 - 24.9 | Peso saludable | Bajo |
| Sobrepeso | 25.0 - 29.9 | Por encima del peso saludable | Moderado |
| Obesidad I | 30.0 - 34.9 | Obesidad moderada | Alto |
| Obesidad II | 35.0 - 39.9 | Obesidad severa | Muy Alto |
| Obesidad III | ≥ 40.0 | Obesidad mórbida | Extremadamente Alto |
```

### FAQs (Preguntas Frecuentes)

**Requisitos:**
- **6-8 preguntas** mínimo
- Formato H3 para cada pregunta
- Respuestas de 50-150 palabras
- Basadas en búsquedas reales (usar AnswerThePublic, Google Autocomplete)

**Ejemplo:**
```markdown
## Preguntas Frecuentes

### ¿Es el IMC una medida precisa de la salud?

El IMC es una herramienta de screening útil para poblaciones, pero tiene limitaciones importantes. No distingue entre masa muscular y grasa, por lo que atletas con mucha músculo pueden tener un IMC alto sin exceso de grasa. Tampoco considera la distribución de la grasa corporal, que es un factor importante para el riesgo de enfermedades. Para una evaluación completa, se deben considerar otras medidas como el porcentaje de grasa corporal, circunferencia de cintura y consulta médica.

### ¿Cómo puedo mejorar mi IMC?

Para mejorar tu IMC hacia el rango saludable, combina tres estrategias principales: 1) Dieta balanceada con déficit calórico moderado (300-500 calorías menos que tu gasto diario), 2) Ejercicio regular que combine cardio (150 minutos semanales) y entrenamiento de fuerza (2-3 veces por semana), y 3) Cambios de estilo de vida sostenibles como mejor sueño, manejo de estrés y hidratación adecuada. Los cambios graduales de 0.5-1 kg por semana son más sostenibles que dietas extremas.

{... 4-6 preguntas más}
```

### Escapado de Caracteres Especiales

**⚠️ MUY IMPORTANTE:** Los caracteres `<` y `>` deben escaparse en MDX.

**Incorrecto:**
```markdown
| Bajo peso | < 18.5 | ...           ← ERROR: Rompe MDX
| Obesidad | ≥ 40 | ...             ← ERROR: Rompe MDX
```

**Correcto:**
```markdown
| Bajo peso | {'<'} 18.5 | ...         ← ✅ Correcto
| Obesidad | {'≥'} 40 | ...           ← ✅ Correcto (o usar >=)
```

**Otros caracteres a tener cuidado:**
- `<` → `{'<'}` o `&lt;`
- `>` → `{'>'}` o `&gt;`
- `≤` → `{'≤'}` o `<=`
- `≥` → `{'≥'}` o `>=`

### Componente de Calculadora

**Posicionamiento:**
- **Después de introducción breve** (patrón recomendado)
- 1-2 párrafos de intro
- Sección "¿Qué es?"
- **LUEGO** el componente
- Contenido educativo después

**Sintaxis correcta:**
```mdx
<BMICalculator lang="es" />
```

**⚠️ CRÍTICO:** Incluir el componente **SOLO UNA VEZ**

---

## Optimización SEO

### Title Tag

**Fórmula:**
```
[Keyword Principal] Gratis/Free - [Keyword Secundario] Online 2026
```

**Requisitos:**
- 50-60 caracteres ideal
- Incluir keyword principal al inicio
- Incluir "Gratis/Free/Kostenlos/Gratuit" (alta conversión)
- Incluir "Online/En línea"
- Incluir año actual (2026)

**Ejemplos:**
- Español: `Calculadora de IMC Gratis - Índice de Masa Corporal Online 2026`
- English: `Free BMI Calculator - Body Mass Index Calculator Online 2026`
- Deutsch: `BMI Rechner Kostenlos - Body Mass Index Online 2026`
- Français: `Calculateur IMC Gratuit - Indice de Masse Corporelle 2026`

### Meta Description

**Fórmula:**
```
[Keyword] 100% [gratis/free] y [precisa/accurate]. [Beneficio 1], [Beneficio 2], [Beneficio 3]. [Sistema métrico/imperial].
```

**Requisitos:**
- 145-155 caracteres
- Keyword en primeras palabras
- Beneficios claros
- Call-to-action implícito
- Incluir "100% gratuita" o similar

**Ejemplo Español:**
```
Calculadora de IMC 100% gratuita y precisa. Calcula tu índice de masa corporal en segundos. Conoce tu peso ideal, categoría OMS y rango saludable.
```
*Longitud: 150 caracteres* ✅

### Keywords

**Estructura:**
```yaml
keywords: [
  # Primary keyword (exact match)
  calculadora IMC,

  # Primary variations
  IMC gratis,
  calculadora índice masa corporal,
  IMC online,

  # Long-tail keywords
  calcular IMC,
  calculadora de IMC gratis,
  índice de masa corporal,

  # Related concepts
  peso ideal,
  peso saludable,

  # Tool variations
  tabla IMC,
  IMC calculadora online
]
```

**Requisitos:**
- **10-15 keywords** por idioma
- Basadas en investigación real (Google Trends, Ubersuggest)
- Mezcla de short-tail y long-tail
- Incluir variaciones naturales
- NO keyword stuffing

### Canonical URL

**Formato:**
```
/[lang-prefix]/[folder-translated]/[slug-translated]/
```

**Ejemplos:**
- Español (default): `/calculadoras/imc/`
- English: `/calculators/bmi/`
- Português: `/pt/calculadoras/imc/`
- Français: `/fr/calculatrices/imc/`
- Deutsch: `/de/rechner/bmi/`
- Italiano: `/it/calcolatrici/imc/`
- Hindi: `/hi/calculators/bmi/`

**⚠️ IMPORTANTE:** Debe coincidir exactamente con la configuración en `routes.ts`

---

## Localización Cultural

### Principio Fundamental

**NO traducir literalmente - LOCALIZAR culturalmente**

### Adaptaciones Requeridas

#### 1. Terminología Médica

**Usar términos oficiales locales:**
- Español: OMS (Organización Mundial de la Salud)
- English: WHO (World Health Organization)
- Português: OMS (Organização Mundial da Saúde)
- Français: OMS (Organisation mondiale de la Santé)
- Deutsch: WHO (Weltgesundheitsorganisation)

#### 2. Ejemplos y Contexto

**Adaptar ejemplos a la cultura:**

**Español (España):**
```markdown
Por ejemplo, si pesas 70 kg y mides 1,75 m, tu IMC sería 22,9 kg/m².
```

**Português (Brasil):**
```markdown
Por exemplo, se você pesa 70 kg e mede 1,75 m, seu IMC seria 22,9 kg/m².
```

**English (US):**
```markdown
For example, if you weigh 154 lbs and are 5'9" tall, your BMI would be 22.7.
```

#### 3. Unidades de Medida

**Preferencias por región:**
- España, Portugal, Europa: Sistema métrico (kg, cm, m)
- Estados Unidos: Sistema imperial (lbs, ft, in)
- Reino Unido: Mixto (stones, feet)
- India: Métrico pero altura en feet/inches común

#### 4. Referencias Locales

**Citar autoridades de salud locales:**

| Idioma | Autoridades de Salud Locales |
|--------|------------------------------|
| Español (ES) | Ministerio de Sanidad, Fundación Española del Corazón |
| Español (MX) | Secretaría de Salud, IMSS |
| English (US) | CDC, NIH, Mayo Clinic |
| Português (BR) | Ministério da Saúde, SBE, Tua Saúde |
| Français | Santé Publique France, Ameli.fr |
| Deutsch | Robert Koch Institut, DGE |
| Italiano | Ministero della Salute, ISS |
| Hindi | ICMR, NIN |
| Polski | Narodowy Fundusz Zdrowia |
| Nederlands | RIVM, Voedingscentrum |
| Türkçe | Türkiye Sağlık Bakanlığı |
| Svenska | Folkhälsomyndigheten |
| Русский | Минздрав России |

#### 5. Estadísticas Locales

**Usar datos específicos del país:**

**Español (España):**
```markdown
Según la Encuesta Nacional de Salud (2020), el 53,6% de la población adulta española tiene sobrepeso u obesidad.
```

**Português (Brasil):**
```markdown
De acordo com o IBGE (2019), 60,3% dos brasileiros adultos estão acima do peso.
```

#### 6. Formato de Números

**Decimal y separadores:**
- Español/Português/Alemán/Francés: `1.750` (punto) y `0,5` (coma decimal)
- English: `1,750` (comma) y `0.5` (point decimal)
- Hindi: `1,750` (comma) y `0.5` (point)

#### 7. Casos Especiales

**Hindi - Asian BMI Thresholds:**

Los umbrales de IMC son diferentes para asiáticos:
```markdown
| Categoría | Rango Asiático | Rango OMS Global |
|-----------|----------------|------------------|
| Normal | 18.5 - 22.9 | 18.5 - 24.9 |
| Sobrepeso | 23.0 - 24.9 | 25.0 - 29.9 |
| Obesidad | ≥ 25.0 | ≥ 30.0 |
```

**Incluir en contenido Hindi:**
```markdown
**Nota Importante para India:** Los umbrales de IMC para población asiática son diferentes debido a diferencias en composición corporal y riesgo metabólico.
```

#### 8. Contactos de Emergencia

**Localizar números de emergencia y recursos:**

**Español (España):**
```markdown
- Emergencias: 112
- Salud Responde (Andalucía): 955 545 060
```

**Português (Brasil):**
```markdown
- SAMU: 192
- Bombeiros: 193
- CVV (Apoio emocional): 188
```

**English (US):**
```markdown
- Emergency: 911
- National Suicide Prevention Lifeline: 988
```

---

## Validación y Testing

### Pre-Build Checklist

**Antes de construir:**

- [ ] Todos los archivos MDX tienen frontmatter completo
- [ ] Todos los caracteres `<` y `>` están escapados
- [ ] El componente se incluye SOLO UNA VEZ
- [ ] Canonical URLs son correctos
- [ ] Keywords tienen 10-15 items
- [ ] Meta descriptions 145-155 caracteres
- [ ] Titles 50-60 caracteres con año 2026

### Validación de Archivos

**Comando:**
```bash
# Verificar que existen todos los archivos necesarios
node scripts/validate-calculator.js {calculator-id}
```

**Verificación manual:**
```bash
# 12 archivos MDX
ls src/content/calculators/*/{ calculator-id}.mdx | wc -l
# Debe retornar: 12

# 12 archivos JSON
ls public/locales/*/calculators/{calculator-id}.json | wc -l
# Debe retornar: 12

# 1 componente
ls src/components/calculators/{CalculatorName}Calculator.astro
# Debe existir

# 1 utilidad
ls src/utils/calculators/{calculator-id}.ts
# Debe existir
```

### Testing Local

**Iniciar servidor de desarrollo:**
```bash
npm run dev
```

**Verificar URLs para cada idioma:**
- Español: `http://localhost:4321/calculadoras/{slug}/`
- English: `http://localhost:4321/calculators/{slug}/`
- Português: `http://localhost:4321/pt/calculadoras/{slug}/`
- Français: `http://localhost:4321/fr/calculatrices/{slug}/`
- Hindi: `http://localhost:4321/hi/calculators/{slug}/`
- Deutsch: `http://localhost:4321/de/rechner/{slug}/`
- Italiano: `http://localhost:4321/it/calcolatrici/{slug}/`
- Polski: `http://localhost:4321/pl/kalkulatory/{slug}/`
- Nederlands: `http://localhost:4321/nl/calculators/{slug}/`
- Türkçe: `http://localhost:4321/tr/hesap-makineleri/{slug}/`
- Svenska: `http://localhost:4321/sv/kalkylatorer/{slug}/`
- Русский: `http://localhost:4321/ru/калькуляторы/{slug}/`

**Verificar en cada página:**
- ✅ Calculadora se renderiza correctamente
- ✅ Formulario funciona (ingresar valores, calcular)
- ✅ Resultados se muestran correctamente
- ✅ Traducciones son correctas
- ✅ No hay errores en consola (F12)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Meta tags correctos (ver fuente HTML)

### Tests E2E

**Ejecutar tests:**
```bash
npm test
```

**Debe pasar:**
- ✅ All calculators have component files
- ✅ All calculators have route configurations
- ✅ All calculators have translation files
- ✅ No duplicate calculator IDs
- ✅ Calculator rendering tests
- ✅ Homepage translations

### Build de Producción

**Ejecutar build:**
```bash
npm run build
```

**Verificar:**
- ✅ 0 errores de TypeScript
- ✅ 0 errores de Astro
- ✅ Páginas generadas correctamente
- ✅ Número esperado de páginas HTML

**Conteo esperado:**
```
36 calculadoras × 12 idiomas = 432 páginas de calculadoras
+ homepages (12)
+ índices de calculadoras (12)
= ~456 páginas totales
```

### Verificación de SEO

**Usar herramientas:**
- Chrome DevTools → Lighthouse
- View Page Source (Ctrl+U)
- Extensión SEO Meta in 1 Click

**Verificar:**
- ✅ Title tag correcto
- ✅ Meta description presente
- ✅ Canonical URL correcto
- ✅ hreflang tags presentes
- ✅ Open Graph tags
- ✅ Headings jerárquicos (H1 → H2 → H3)

---

## Estrategia de Batches

### ¿Por Qué Usar Batches?

**Ventajas:**
1. **Organización temática** - Calculadoras relacionadas juntas
2. **Eficiencia** - Usar agentes paralelos (12 simultáneos)
3. **Control de calidad** - Testing por grupo
4. **Commits atómicos** - Fácil rollback si necesario
5. **Progreso medible** - Trackeo claro

### Tamaño Ideal de Batch

**Recomendado:** 5-7 calculadoras por batch

**Cálculo:**
- 6 calculadoras × 12 idiomas = 72 archivos MDX
- ~2,500 palabras promedio = 180,000 palabras totales
- Tiempo: 3-4 horas con agentes paralelos

### Proceso de Batch

#### Fase 1: Planificación (5-10 min)

1. Seleccionar 5-7 calculadoras relacionadas temáticamente
2. Verificar que componentes existan
3. Verificar rutas en `routes.ts`
4. Crear lista de IDs

**Ejemplo - Batch 6 (Salud y Estilo de Vida):**
```
1. bac - Blood Alcohol Content
2. blood-type - Tipo de sangre
3. calories-burned - Calorías quemadas
4. date - Calculadora de fechas
5. sleep - Calculadora de sueño
6. tip - Calculadora de propinas
7. weight-watchers - Puntos Weight Watchers
```

#### Fase 2: Lanzar Agentes Paralelos (Recomendado)

**Crear 12 agentes Task en UN SOLO mensaje:**

```markdown
Lanzar 12 agentes Task en paralelo para crear contenido MDX del Batch X:

1. Task(subagent_type: "general-purpose", model: "sonnet",
   prompt: "Create 7 calculators in Spanish (es) following CALCULATOR_OPTIMIZATION_GUIDE.md...")

2. Task(subagent_type: "general-purpose", model: "sonnet",
   prompt: "Create 7 calculators in English (en) following CALCULATOR_OPTIMIZATION_GUIDE.md...")

3. Task(subagent_type: "general-purpose", model: "sonnet",
   prompt: "Create 7 calculators in Portuguese (pt) following CALCULATOR_OPTIMIZATION_GUIDE.md...")

... (repetir para los 12 idiomas)
```

**Prompt template para cada agente:**
```
Create N optimized MDX files for Batch X calculators in [LANGUAGE] ([code]).

**CRITICAL: Follow the CALCULATOR_OPTIMIZATION_GUIDE.md methodology**

**Calculators to create:**
1. {calculator-id-1} - {Description}
2. {calculator-id-2} - {Description}
...

**Requirements:**
1. Research-based SEO (10-15 keywords per calculator in native language)
2. Content length: 1,500-3,000 words per file
3. Structure: Calculator after brief intro, FAQs (6-8), tables, comprehensive content
4. Component imports: {CalculatorName}Calculator from '@/components/calculators/'
5. Medical accuracy: Use WHO/local authority terminology, disclaimers
6. Escape special characters: < → {'<'}, > → {'>'}

**Files:** src/content/calculators/[code]/{calculator-id}.mdx
**Canonical:** /[lang-prefix]/[folder]/[slug]/

**Report back:** Total words per file, keywords used.
```

#### Fase 3: Validación (10-15 min)

**Verificar archivos creados:**
```bash
# Contar archivos
find src/content/calculators -name "{calc1}.mdx" -o -name "{calc2}.mdx" | wc -l
# Debe ser: N calculadoras × 12 idiomas

# Verificar palabras
wc -w src/content/calculators/*/{calc1,calc2,...}.mdx

# Escapar caracteres
# Usar Task agent para escapar < y > si es necesario
```

**Validación de contenido:**
- ✅ Frontmatter completo
- ✅ Import correcto
- ✅ Componente incluido UNA vez
- ✅ Mínimo 1,500 palabras
- ✅ 6-8 FAQs
- ✅ Caracteres escapados

#### Fase 4: Testing (5-10 min)

```bash
# Tests E2E
npm test

# Build
npm run build
```

**Verificar:**
- ✅ Todos los tests pasan
- ✅ Build sin errores
- ✅ Número correcto de páginas generadas

#### Fase 5: Commit (5 min)

**Formato de commit:**
```bash
git add src/content/calculators/*/{calc1,calc2,...}.mdx

git commit -m "feat: agregado contenido MDX para calculadoras (Batch X)

Batch X: [Tema del Batch]
- N calculadoras: calc1, calc2, calc3...
- 12 idiomas: es, en, pt, fr, hi, de, it, pl, nl, tr, sv, ru
- Total: N×12 = XX archivos MDX

Características:
- ~XXX,XXX palabras totales (promedio X,XXX palabras/archivo)
- Optimizado según CALCULATOR_OPTIMIZATION_GUIDE.md
- Keywords localizadas (10-15 por archivo)
- Contenido comprehensive (1,500-3,000 palabras)
- FAQs (6-8 por calculadora)
- Localización cultural avanzada por idioma

Verificación:
✓ Tests E2E: XX/XX passed
✓ Build: XXX páginas generadas
✓ Schema validation: 100%

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Checklist Final

### Pre-Commit Checklist

Antes de hacer commit de una nueva calculadora:

#### ✅ Configuración
- [ ] ID agregado a `src/config/calculators.ts`
- [ ] Rutas agregadas para 12 idiomas en `src/config/routes.ts`
- [ ] Si es acrónimo, agregado a ACRONYMS set

#### ✅ Componente
- [ ] Componente creado en `src/components/calculators/`
- [ ] Nombre correcto: `{CalculatorName}Calculator.astro`
- [ ] Usa `t()` para traducciones
- [ ] Tiene `class="calculator"`
- [ ] Form con ID único
- [ ] Results div con ID único
- [ ] Script funciona correctamente
- [ ] Estilos responsive

#### ✅ Lógica
- [ ] Archivo creado en `src/utils/calculators/{calculator-id}.ts`
- [ ] Interfaces TypeScript definidas
- [ ] Funciones puras (sin side effects)
- [ ] Validación de inputs
- [ ] Manejo de errores
- [ ] Funciones helper documentadas

#### ✅ Traducciones (×12)
- [ ] 12 archivos JSON en `public/locales/{lang}/calculators/`
- [ ] Estructura consistente
- [ ] Todas las keys traducidas
- [ ] Sin traducciones literales (localizado)

#### ✅ Contenido MDX (×12)
- [ ] 12 archivos MDX en `src/content/calculators/{lang}/`
- [ ] Frontmatter completo (title, metaDescription, keywords, canonical, lang)
- [ ] Title 50-60 caracteres con año 2026
- [ ] Meta description 145-155 caracteres
- [ ] 10-15 keywords por idioma
- [ ] Canonical URL correcto
- [ ] Import del componente correcto
- [ ] Componente incluido SOLO UNA VEZ
- [ ] Mínimo 1,500 palabras
- [ ] 6-8 FAQs
- [ ] 2-3 tablas
- [ ] Caracteres `<` y `>` escapados
- [ ] Localización cultural (no traducción literal)

#### ✅ SEO
- [ ] Keywords investigadas (no inventadas)
- [ ] Estructura de headings correcta (H1 → H2 → H3)
- [ ] Keywords distribuidas naturalmente
- [ ] Links internos relevantes (opcional)
- [ ] Disclaimer médico incluido

#### ✅ Testing
- [ ] Tests E2E pasan (`npm test`)
- [ ] Build sin errores (`npm run build`)
- [ ] URLs funcionan en los 12 idiomas
- [ ] Calculadora funciona (inputs → cálculo → resultados)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Sin errores en consola
- [ ] Meta tags correctos en HTML source

---

## Troubleshooting

### Problema: Calculadora no aparece

**Síntomas:**
- Página carga pero calculadora no se renderiza
- Espacio en blanco donde debería estar la calculadora

**Causas y Soluciones:**

**1. Import faltante o incorrecto**
```mdx
<!-- ❌ Mal - No hay import -->
<BMICalculator lang="es" />

<!-- ✅ Bien -->
---
...
---
import BMICalculator from '@/components/calculators/BMICalculator.astro';

<BMICalculator lang="es" />
```

**2. Nombre de componente incorrecto**
```mdx
<!-- ❌ Mal -->
import BmiCalculator from '@/components/calculators/BMICalculator.astro';

<!-- ✅ Bien - Respetar PascalCase exacto -->
import BMICalculator from '@/components/calculators/BMICalculator.astro';
```

**3. Path incorrecto**
```mdx
<!-- ❌ Mal -->
import BMICalculator from '../components/calculators/BMICalculator.astro';

<!-- ✅ Bien - Usar alias @ -->
import BMICalculator from '@/components/calculators/BMICalculator.astro';
```

### Problema: Calculadora aparece DOS veces

**Síntomas:**
- Calculadora se renderiza duplicada

**Causa:**
Incluiste el componente dos veces en el MDX

**Solución:**
```mdx
<!-- ❌ Mal -->
<BMICalculator lang="es" />
... contenido ...
<BMICalculator lang="es" />

<!-- ✅ Bien - SOLO UNA VEZ -->
<BMICalculator lang="es" />
... contenido ...
```

### Problema: Error 404 al acceder a URL

**Síntomas:**
- URL retorna 404 Not Found

**Causas y Soluciones:**

**1. Ruta no configurada en routes.ts**
```typescript
// src/config/routes.ts
export const routes: RouteMap = {
  es: {
    // ❌ Falta la ruta
  },
  // ✅ Agregar la ruta
  es: {
    'bmi': 'imc',
  },
};
```

**2. Archivo MDX no existe**
```bash
# Verificar que existe
ls src/content/calculators/es/bmi.mdx
```

**3. Canonical URL incorrecto en frontmatter**
```yaml
---
# ❌ Mal
canonical: /calculators/bmi/

# ✅ Bien (para español)
canonical: /calculadoras/imc/
---
```

### Problema: Build falla con error MDX

**Síntomas:**
```
Error: MDX syntax error...
```

**Causas y Soluciones:**

**1. Caracteres `<` o `>` sin escapar**
```markdown
<!-- ❌ Mal -->
| Bajo peso | < 18.5 |

<!-- ✅ Bien -->
| Bajo peso | {'<'} 18.5 |
```

**2. JSX mal formado**
```mdx
<!-- ❌ Mal -->
<BMICalculator lang=es />

<!-- ✅ Bien -->
<BMICalculator lang="es" />
```

**3. Frontmatter YAML inválido**
```yaml
---
# ❌ Mal - Comillas sin cerrar
title: "Calculadora de IMC
metaDescription: Calcula tu IMC

# ✅ Bien
title: "Calculadora de IMC"
metaDescription: "Calcula tu IMC"
---
```

### Problema: Tests E2E fallan

**Síntomas:**
```
npm test
FAIL tests/e2e/config.spec.ts
```

**Causas y Soluciones:**

**1. Falta archivo de traducción**
```bash
# Verificar que existen todos
ls public/locales/*/calculators/bmi.json | wc -l
# Debe retornar 12
```

**2. Falta archivo MDX**
```bash
# Verificar que existen todos
ls src/content/calculators/*/bmi.mdx | wc -l
# Debe retornar 12
```

**3. ID de calculadora no agregado a config**
```typescript
// src/config/calculators.ts
export const calculators: CalculatorId[] = [
  'age',
  'bmi',
  // Agregar aquí
  'nueva-calculadora'
];
```

### Problema: Keywords no rankean en Google

**Síntomas:**
- Página no aparece en búsquedas
- Tráfico orgánico bajo

**Causas y Soluciones:**

**1. Keywords en idioma incorrecto**
```yaml
---
# ❌ Mal - Keywords en inglés para página en español
keywords: [BMI calculator, body mass index, free calculator]

# ✅ Bien - Keywords en español
keywords: [calculadora IMC, índice de masa corporal, IMC gratis]
---
```

**2. Keywords inventadas (no investigadas)**
```yaml
---
# ❌ Mal - Nadie busca esto
keywords: [herramienta de cálculo de masa corpórea biométrica]

# ✅ Bien - Basado en Google Trends
keywords: [calculadora IMC, IMC gratis, calcular IMC]
---
```

**3. Keyword stuffing (densidad >3%)**
```markdown
<!-- ❌ Mal - Keyword stuffing -->
La calculadora de IMC es la mejor calculadora de IMC para calcular tu IMC gratis. Esta calculadora de IMC online te permite calcular el IMC rápidamente.

<!-- ✅ Bien - Densidad natural -->
Esta calculadora te permite determinar tu índice de masa corporal de forma gratuita. El IMC es una medida útil para evaluar si tu peso es saludable.
```

**4. Contenido insuficiente**
```bash
# Verificar palabras
wc -w src/content/calculators/es/bmi.mdx
# Debe ser >1,500 palabras
```

---

## Recursos Adicionales

### Herramientas SEO

- **Google Search Console** - Monitorear performance
- **Google Trends** - Investigar keywords
- **Ubersuggest** - Análisis de competidores
- **AnswerThePublic** - Ideas de FAQs
- **Ahrefs/SEMrush** - Análisis profundo de keywords

### Validadores

- **W3C Markup Validator** - Validar HTML
- **PageSpeed Insights** - Performance y SEO
- **Mobile-Friendly Test** - UX móvil
- **Schema.org Validator** - Structured data

### Referencias Médicas

| Idioma | Fuentes Autorizadas |
|--------|---------------------|
| ES | OMS, Ministerio de Sanidad, Fundación Española del Corazón |
| EN | WHO, CDC, NIH, Mayo Clinic, Harvard Health |
| PT | OMS, Ministério da Saúde BR, Tua Saúde, SBE |
| FR | OMS, Santé Publique France, Ameli.fr |
| DE | WHO, Robert Koch Institut, DGE |
| IT | OMS, Ministero della Salute, ISS |
| HI | WHO, ICMR, NIN |
| PL | WHO, NFZ, GUS |
| NL | WHO, RIVM, Voedingscentrum |
| TR | WHO, Türkiye Sağlık Bakanlığı |
| SV | WHO, Folkhälsomyndigheten |
| RU | ВОЗ, Минздрав России |

---

## Conclusión

Agregar una nueva calculadora es un proceso estructurado que requiere:

1. **Preparación** - Investigación y planificación
2. **Desarrollo** - Componente + lógica
3. **Contenido** - 12 archivos MDX optimizados para SEO
4. **Localización** - Adaptación cultural (no traducción literal)
5. **Validación** - Testing exhaustivo
6. **Deployment** - Build y commit

**Tiempo total estimado:** 15-20 horas por calculadora (o 3-4 horas con agentes paralelos)

**Estrategia recomendada:** Trabajar en batches de 5-7 calculadoras relacionadas usando agentes paralelos para maximizar eficiencia.

**Próximos pasos:**
1. Seleccionar calculadora a agregar
2. Seguir esta guía paso a paso
3. Validar con checklist
4. Hacer commit siguiendo formato establecido

---

**Última actualización:** Enero 2026
**Versión:** 2.0
**Estado del proyecto:** 36/36 calculadoras completadas (100%)
**Idiomas soportados:** 12 (es, en, pt, fr, hi, de, it, pl, nl, tr, sv, ru)
**Total archivos MDX:** 432
