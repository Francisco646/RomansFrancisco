module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Rule to check for valid Roman numeral pattern
    'valid-roman-numeral-pattern': ['error', { allow: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] }],

    // Rule to ensure input values for integer conversion are integers
    'valid-integer-input': 'error',

    // Rule to check for valid integer range
    'valid-integer-range': ['error', { min: 1, max: 3999 }],
  },
};
