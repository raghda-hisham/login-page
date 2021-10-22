module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ship-shape/recommended'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'complexity': ['warn', 6],
    'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
    'no-console': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        'babel.config.js',
        'jest.config.js',
        'rollup.config.js'
      ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015
      },
      env: {
        node: true
      }
    }
  ]
};
