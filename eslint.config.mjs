import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').FlatConfigItem[]} */
export default [
  // Recommended settings come first.
  pluginJs.configs.recommended,
  // Custom settings follow and override the recommended ones if needed.
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "no-console": "off",
      "no-trailing-spaces": "error",
      "no-prototype-builtins": "off"
      // Add additional custom rules here.
    }
  }
];
