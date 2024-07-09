module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ['error', 'single'],
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'react/no-unused-prop-types': 'off',
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
