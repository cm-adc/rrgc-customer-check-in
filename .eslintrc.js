module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals', // this pulls in eslint-config-next defaults
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // --- stricter booleans ---
    '@typescript-eslint/strict-boolean-expressions': 'warn',

    // --- forbid literal nulls ---
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=null]',
        message: 'Use undefined or explicit Maybe<T> instead of null.',
      },
    ],

    // optional: make undefined explicit instead of implicit 'falsy'
    eqeqeq: ['error', 'always'],
  },
};
