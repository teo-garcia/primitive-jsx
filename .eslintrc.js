// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:testing-library/react',
//     'prettier',
//   ],
//   env: {
//     browser: true,
//     jest: true,
//   },
//   parserOptions: {
//     ecmaVersion: 12,
//     ecmaFeatures: {
//       jsx: true,
//     },
//     sourceType: 'module',
//   },
//   settings: {
//     react: {
//       version: 'latest',
//     },
//   },
//   overrides: {
//     files: ['*.tsx'],
//     rules: {
//       '@typescript-eslint/explicit-function-return-type': 'off',
//     },
//   },
// };

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
}
