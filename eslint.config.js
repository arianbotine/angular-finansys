const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const angularEslint = require("@angular-eslint/eslint-plugin");
const angularTemplateEslint = require("@angular-eslint/eslint-plugin-template");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@angular-eslint": angularEslint,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: require("@angular-eslint/template-parser"),
    },
    plugins: {
      "@angular-eslint/template": angularTemplateEslint,
    },
    rules: {},
  },
];
