/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: "auto",
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
