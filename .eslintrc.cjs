/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "snake_case"],
      },
    ],
    "react/require-default-props": 0,
  },
};
