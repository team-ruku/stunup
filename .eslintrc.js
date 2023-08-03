module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['babel', 'react', 'react-native', 'import'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        distinctGroup: true,
        warnOnUnassignedImports: true,
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@root/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/context/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/res/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/utils/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@src/screens/*',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
