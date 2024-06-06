module.exports = {
    ignores: ["node_modules/**"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
    languageOptions: {
      ecmaVersion: 6,
      globals: {
        node: true,
        browser: true,
      },
      sourceType: "module",
    }
  };