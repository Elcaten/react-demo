module.exports = {
  printWidth: 160,
  tabWidth: 4,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  jsxBracketSameLine: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.css', '*.json', '*.code-snippets', '.eslintrc.js', '.prettierrc.js'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
