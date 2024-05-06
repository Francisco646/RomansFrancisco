const fs = require('fs');

// Custom ESLint rules
const customRules = {
  'valid-roman-numeral-pattern': ['error', { allow: ['I', 'V', 'X', 'L', 'C', 'D', 'M'] }],
  'valid-integer-input': 'error',
  'valid-integer-range': ['error', { min: 1, max: 3999 }],
};

// Create a JavaScript file with the custom ESLint rules
const customRulesFileContent = `
module.exports = {
  rules: ${JSON.stringify(customRules, null, 2)},
};
`;

// Write the custom ESLint rules to a file
fs.writeFile('custom-eslint-rules.js', customRulesFileContent, err => {
  if (err) {
    console.error('Error writing custom ESLint rules file:', err);
  } else {
    console.log('Custom ESLint rules file generated successfully!');
  }
});
