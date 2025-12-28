/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en", "pl"],
  namespaces: ["common", "calculators"],
  defaultNamespace: "common",
  routes: {
    en: {
      "calculadoras": "calculators",
      "calculadoras/imc": "calculators/bmi",
    }
  },
  showDefaultLocale: false,
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
  },
};
