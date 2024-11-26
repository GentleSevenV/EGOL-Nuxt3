// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxt/icon'],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  css: ["normalize.css",],
  routeRules: {
    '/open/**': {
      proxy: 'http://127.0.0.1:8001/open/**',
    },
  },
})