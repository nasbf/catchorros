import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser }, rules: {
      "no-unused-vars": "error",   // Marca variables no usadas como error
      "semi": ["error", "always"], // Obliga a usar ;
      "quotes": ["error", "double"] // Obliga comillas dobles
    }
  },


]);
