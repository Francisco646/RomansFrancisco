module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    "no-cond-assign": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error","single"],
    "no-unused-vars": "off",
    "semi": ["error","always"],
    "no-extra-semi": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-undef": "error",
    "no-unreachable": "error",
    "no-use-before-define": "error",
    "comma-dangle": ["error", "always-multiline"]
  },
};
