import type { NuxtPage } from "nuxt/schema";
import { z } from "zod";

const env = z
  .object({
    HELLO_WORLD: z.string().default("Hello world!"),
  })
  .parse(process.env);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["assets/css/tailwind.css", "assets/css/main.css"],

  runtimeConfig: {
    public: {
      helloWorld: env.HELLO_WORLD,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/pages",
      pattern: ["**/components/**"],
      pathPrefix: false,
    },
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "radix-vue/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "dayjs-nuxt",
  ],

  hooks: {
    "pages:extend": ignoreComponentsDirInPages,
  },

  colorMode: {
    classSuffix: "",
  },
});

/** Do not treat components created in a directory named "components" as pages within the "pages" directory. */
function ignoreComponentsDirInPages(pages: NuxtPage[]) {
  const pagesToRemove = pages.filter((page) => page.path.includes("component"));

  pagesToRemove.forEach((page) => pages.splice(pages.indexOf(page), 1));
}
