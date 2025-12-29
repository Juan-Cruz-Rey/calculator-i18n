const calculators = [
  'bmi', 'calorie', 'idealWeight', 'bodyFat', 'bmr', 'tdee', 'armyBodyFat',
  'pace', 'macro', 'pregnancy', 'pregnancyWeightGain', 'pregnancyConception',
  'dueDate', 'carbohydrate', 'leanBodyMass', 'healthyWeight', 'heartRate',
  'bodyType', 'protein', 'caloriesBurned', 'bsa', 'bloodType', 'ovulation',
  'period', 'bodyFrame', 'waistHip', 'tip', 'date', 'age', 'percentage', 'sleep'
];

const newLocales = ['nl', 'tr', 'sv', 'ru'];

// Generate imports for each calculator
let imports = '';
calculators.forEach(calc => {
  const calcCap = calc.charAt(0).toUpperCase() + calc.slice(1);
  newLocales.forEach(locale => {
    imports += `import ${locale}${calcCap} from '../../public/locales/${locale}/calculators/${calc}.json';\n`;
  });
});

console.log('=== CALCULATOR IMPORTS TO ADD ===\n');
console.log(imports);

// Generate translations object entries
let translations = '';
newLocales.forEach(locale => {
  translations += `  ${locale}: {\n`;
  translations += `    ...${locale}Common,\n`;
  translations += `    categories: ${locale}Categories,\n`;
  calculators.forEach(calc => {
    const calcCap = calc.charAt(0).toUpperCase() + calc.slice(1);
    translations += `    ${calc}: ${locale}${calcCap},\n`;
  });
  translations += `  },\n`;
});

console.log('\n=== TRANSLATIONS OBJECT ENTRIES TO ADD ===\n');
console.log(translations);

// Generate languageConfig entries
let langConfig = '';
newLocales.forEach(locale => {
  const names = {
    nl: { name: 'Dutch', nativeName: 'Nederlands', path: '/nl' },
    tr: { name: 'Turkish', nativeName: 'Türkçe', path: '/tr' },
    sv: { name: 'Swedish', nativeName: 'Svenska', path: '/sv' },
    ru: { name: 'Russian', nativeName: 'Русский', path: '/ru' }
  };
  const config = names[locale];
  langConfig += `  ${locale}: { name: '${config.name}', nativeName: '${config.nativeName}', path: '${config.path}' },\n`;
});

console.log('\n=== LANGUAGE CONFIG ENTRIES TO ADD ===\n');
console.log(langConfig);

// Generate calculator paths
let paths = '';
newLocales.forEach(locale => {
  const folderNames = {
    nl: 'rekenmachines',
    tr: 'hesap-makineleri',
    sv: 'kalkylatorer',
    ru: 'kalkulyatory'
  };
  paths += `\n// ${locale.toUpperCase()} calculator paths:\n`;
  calculators.forEach(calc => {
    // Convert camelCase to kebab-case
    const kebab = calc.replace(/([A-Z])/g, '-$1').toLowerCase();
    paths += `      ${locale}: '/${locale}/${folderNames[locale]}/${kebab}/',\n`;
  });
});

console.log('\n=== CALCULATOR PATHS TO ADD (add to each calculator object) ===\n');
console.log(paths);
