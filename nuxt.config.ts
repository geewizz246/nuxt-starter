// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-09-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  eslint: {
    config: {
      standalone: false,
    },
  },
});
