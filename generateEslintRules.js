const fs = require('fs');

// Load the ESLint configuration file
const eslintConfig = require('./eslintrc.js');

// Extract custom rules from the ESLint configuration
const { rules } = eslintConfig;

// Create a JavaScript file with the custom ESLint rules
const customRulesFileContent = `
module.exports = {
  rules: ${JSON.stringify(rules, null, 2)},
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
