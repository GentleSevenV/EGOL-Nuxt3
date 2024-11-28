// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxt/icon', "nuxt-swiper"],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  css: ["normalize.css",],
  runtimeConfig: {
    public: {
      // 在配置前端代理时，不可在该文件中配置baseURL，否则可能会导致代理失效。
      // baseURL: "http://127.0.0.1:4523/m1/2770615-0-default",
      // baseURL: "http://106.15.3.48:8001",
      // baseURL: "http://127.0.0.1:8001",
    },
  },
  // 配置开发阶段前端跨域代理，/open/** 表示凡是以 /open 开头的url都将代理到 http://127.0.0.1:8001/open/**，注意由于使用了封装之后的useFetch进行发送网络请求，在配置前端代理时，不可在该文件中配置baseURL，否则可能会导致代理失效。
  routeRules: {
    '/open/**': {
      proxy: 'http://127.0.0.1:8001/open/**',
    },
  },
})