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
    // Custom rule: valid-roman-numeral-pattern
    'valid-roman-numeral-pattern': ['error', { allow: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] }],
    
    // Custom rule: valid-integer-input
    'valid-integer-input': 'error',
    
    // Custom rule: valid-integer-range
    'valid-integer-range': ['error', { min: 1, max: 3999 }],
  },
};
