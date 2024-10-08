// @ts-check
import eslintPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  eslintPrettierRecommended,
  {
    name: "geewizz246/nuxt",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "vue/attribute-hyphenation": "off",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  {
    name: "geewizz246/nuxt/nested-page-components",
    files: ["app/pages/**/components/**/*.vue"],
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  },
);
