# Playwright Tests - Calculator I18n Project

## Overview

Esta carpeta contiene documentación sobre los tests automatizados del proyecto usando Playwright.

Los tests cubren 3 escenarios principales:
1. **Homepage Translations**: Verifica que las traducciones en la homepage funcionan correctamente
2. **Calculator Display**: Verifica que las calculadoras se muestran correctamente en todas las páginas
3. **Language Selector**: Verifica que los enlaces del footer redirigen correctamente

## Estructura de Tests

```
tests/
├── e2e/
│   ├── homepage.spec.ts              # Tests de homepage (12 tests, uno por idioma)
│   ├── calculators-display.spec.ts   # Tests de display (432 tests, 36 calc × 12 idiomas)
│   └── language-selector.spec.ts     # Tests de language selector (~5000 verificaciones)
└── helpers/
    ├── languages.ts                  # Configuración de idiomas
    ├── calculators.ts                # Lista de calculadoras
    ├── routes.ts                     # Mapeo de slugs por idioma
    └── url-builder.ts                # Utilidades para construir URLs
```

## Ejecutar Tests

### Todos los tests
```bash
npm run test
```

### Solo un archivo específico
```bash
npx playwright test tests/e2e/homepage.spec.ts
```

### En modo UI (interfaz visual)
```bash
npx playwright test --ui
```

### Ver reporte HTML
```bash
npx playwright show-report
```

## Agregar un Nuevo Idioma

Cuando agregues un nuevo idioma al proyecto, sigue estos pasos:

### 1. Actualizar Helpers de Tests

#### `tests/helpers/languages.ts`:
```typescript
// 1. Agregar el código del idioma al tipo Locale
export type Locale =
  | 'es'
  | 'en'
  // ... otros
  | 'tu-nuevo-idioma'; // ← Agregar aquí

// 2. Agregar la configuración del idioma
export const languages: Record<Locale, LanguageConfig> = {
  // ... otros idiomas
  'tu-nuevo-idioma': {
    name: 'Nombre Nativo',
    folder: 'nombre-carpeta-url',
    dir: 'ltr' // o 'rtl' si es de derecha a izquierda
  }
};

// 3. Agregar al array de todos los idiomas
export const allLocales: Locale[] = [
  'es', 'en', /* ... */ 'tu-nuevo-idioma'
];
```

#### `tests/helpers/routes.ts`:
```typescript
// Agregar las traducciones de slugs para el nuevo idioma
export const routes: RouteMap = {
  // ... otros idiomas
  'tu-nuevo-idioma': {
    'age': 'slug-en-tu-idioma',
    'bmi': 'otro-slug',
    // ... todos los calculadores con sus slugs traducidos
  }
};
```

### 2. Los Tests se Actualizan Automáticamente

Los tests iteran sobre `allLocales` y `allCalculators`, así que automáticamente incluirán:
- 1 nuevo test de homepage
- 36 nuevos tests de display de calculadoras
- ~400 nuevas verificaciones de enlaces

**Total de tests adicionales**: ~37 tests

## Agregar una Nueva Calculadora

Cuando agregues una nueva calculadora al proyecto:

### 1. Actualizar Helpers de Tests

#### `tests/helpers/calculators.ts`:
```typescript
// 1. Agregar el ID al tipo CalculatorId
export type CalculatorId =
  | 'age'
  | 'bmi'
  // ... otros
  | 'tu-nueva-calc'; // ← Agregar aquí

// 2. Agregar al array de todas las calculadoras
export const allCalculators: CalculatorId[] = [
  'age', 'bmi', /* ... */ 'tu-nueva-calc'
];
```

#### `tests/helpers/routes.ts`:
```typescript
// Agregar el slug para TODOS los idiomas
export const routes: RouteMap = {
  es: {
    // ... otros
    'tu-nueva-calc': 'slug-espanol'
  },
  en: {
    // ... otros
    'tu-nueva-calc': 'slug-english'
  },
  // ... repetir para los 12 idiomas
};
```

### 2. Los Tests se Actualizan Automáticamente

Los tests iteran sobre `allCalculators`, así que automáticamente se agregarán:
- 12 tests de display (uno por idioma)
- ~132 verificaciones de enlaces del footer

**Total de tests adicionales**: ~12 tests

## Cobertura Actual

### Homepage Tests
- **Total**: 12 tests (uno por idioma)
- **Verifica**:
  - Ninguna card muestra claves sin traducir (e.g., "sleep.title")
  - Todas las cards tienen h3, párrafo y categoría traducidos

### Calculator Display Tests
- **Total**: 432 tests (36 calculadoras × 12 idiomas)
- **Verifica**:
  - La calculadora se renderiza (existe formulario, inputs, botón)
  - No muestra solo título/descripción vacío

### Language Selector Tests
- **Total**: 432 tests (uno por cada calculadora en cada idioma)
- **Verifica**:
  - Existen 12 enlaces de idioma en el footer
  - Cada enlace tiene el href correcto
  - Cada enlace navega correctamente (no da 404)
  - Los enlaces no redirigen a homepage (a menos que sea correcto)

## Notas Importantes

### Tiempo de Ejecución
- Los tests completos pueden tardar **5-15 minutos** dependiendo de tu hardware
- Se ejecutan en paralelo para optimizar el tiempo
- En CI se ejecutan secuencialmente para evitar sobrecarga

### Fallos Comunes
1. **"connect ECONNREFUSED"**: El servidor dev no está corriendo
   - Solución: Ejecutar `npm run dev` antes de los tests
   - O usar `npm run test` que inicia el servidor automáticamente

2. **Tests fallan en calculator display**: Falta el componente de la calculadora
   - Verificar que existe `src/components/calculators/{Name}Calculator.astro`

3. **Language selector 404**: Ruta mal configurada
   - Verificar `src/config/routes.ts` y `tests/helpers/routes.ts` coinciden

### CI/CD
Los tests están configurados para ejecutarse en CI con:
- 2 reintentos automáticos en caso de fallo
- Ejecución secuencial (no paralela)
- Screenshots en caso de fallo
- Traces en primer reintento

## Mantenimiento

### Sincronización con Código Fuente
Los archivos en `tests/helpers/` deben mantenerse sincronizados con:
- `src/config/languages.ts`
- `src/config/calculators.ts`
- `src/config/routes.ts`

Si haces cambios en esos archivos, actualiza también los helpers de tests.

### Agregar Nuevos Escenarios
Si necesitas agregar nuevos tipos de tests:
1. Crear nuevo archivo en `tests/e2e/tu-test.spec.ts`
2. Importar helpers necesarios de `tests/helpers/`
3. Documentar en este README

## Recursos

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
