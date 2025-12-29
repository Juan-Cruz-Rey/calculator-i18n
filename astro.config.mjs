import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import sitemap from '@astrojs/sitemap';
import indexNow from 'astro-indexnow';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://calculatoria.net',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    astroI18next(),
    sitemap({
      // Generar sitemap con todas las URLs de todos los idiomas
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt',
          fr: 'fr',
          hi: 'hi',
          de: 'de',
          it: 'it',
          pl: 'pl',
          nl: 'nl',
          tr: 'tr',
          sv: 'sv',
          ru: 'ru',
        },
      },
      // Personalizar URLs en el sitemap
      serialize(item) {
        // Determinar la prioridad y frecuencia de cambio basada en el tipo de página
        const url = item.url;
        // Extraer solo el pathname para comparación más precisa
        const pathname = new URL(url).pathname;
        let priority = 0.5;
        let changefreq = 'monthly';

        // Homepage de cualquier idioma - máxima prioridad y cambio diario
        // Matchea: /, /es/, /en/, /pt/, etc.
        if (pathname === '/' || pathname.match(/^\/(es|en|pt|fr|hi|de|it|pl|nl|tr|sv|ru)\/?$/)) {
          priority = 1.0;
          changefreq = 'daily';
        }
        // Páginas de índice de calculadoras - cambio diario
        else if (pathname.endsWith('/calculadoras/') || pathname.endsWith('/calculators/') ||
                 pathname.endsWith('/calculatrices/') || pathname.endsWith('/rechner/') ||
                 pathname.endsWith('/calcolatrici/') || pathname.endsWith('/kalkulatory/') ||
                 pathname.endsWith('/rekenmachines/') || pathname.endsWith('/hesap-makineleri/') ||
                 pathname.endsWith('/kalkylatorer/') || pathname.endsWith('/kalkulyatory/')) {
          priority = 0.9;
          changefreq = 'daily';
        }
        // Páginas de calculadoras individuales - cambio semanal
        else if (pathname.includes('/calculadoras/') || pathname.includes('/calculators/') ||
                 pathname.includes('/calculatrices/') || pathname.includes('/rechner/') ||
                 pathname.includes('/calcolatrici/') || pathname.includes('/kalkulatory/') ||
                 pathname.includes('/rekenmachines/') || pathname.includes('/hesap-makineleri/') ||
                 pathname.includes('/kalkylatorer/') || pathname.includes('/kalkulyatory/')) {
          priority = 0.8;
          changefreq = 'weekly';
        }

        return {
          ...item,
          changefreq,
          priority,
        };
      },
      // Filtrar URLs no deseadas (opcional)
      filter: (page) => {
        // Excluir páginas de desarrollo o test si las hay
        return !page.includes('/test/') && !page.includes('/dev/');
      },
    }),
    indexNow({
      key: '55813a23124e4cdc893ca3a9e299afc6'
    }),
  ],
});
