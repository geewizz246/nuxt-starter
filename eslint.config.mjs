// @ts-check
import antfu from "@antfu/eslint-config";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },
    rules: {
      "no-console": "off",
      "node/prefer-global/process": "off",
      "antfu/if-newline": "off",
      "ts/no-redeclare": "off",

      // Vue-specific
      "vue/attribute-hyphenation": "off",
      "vue/max-attributes-per-line": ["warn", { singleline: 3, multiline: 1 }],
    },
  }),
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,

      // or configure rules individually
      "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 180 }],
      "better-tailwindcss/no-unregistered-classes": "off",
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/assets/css/main.css",
      },
    },
  },
);
