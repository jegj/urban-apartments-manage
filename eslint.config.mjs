// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'frontend'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'array-bracket-newline': ['error', 'consistent'],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': 'error',
      'brace-style': 'error',
      camelcase: 'error',
      'comma-dangle': ['error', 'only-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'eol-last': 'error',
      'generator-star-spacing': 'error',
      'lines-between-class-members': 'error',
      'max-len': ['error', { code: 120, ignoreStrings: true }],
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-multi-spaces': 'error',
      'no-return-await': 'error',
      'no-trailing-spaces': 'error',
      'no-useless-concat': 'error',
      'no-var': 'error',
      'no-whitespace-before-property': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      quotes: [2, 'single'],
      semi: ['error'],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
        },
      ],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },
);
