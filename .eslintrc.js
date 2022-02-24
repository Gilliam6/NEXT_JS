module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: [
        'next.config.js',
        'postcss.config.js',
        'jest.config.js',
        'babel.config.js',
        'tailwind.config.js',
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      env: {
        node: true,
        browser: false,
      },
    },
  ],
};
