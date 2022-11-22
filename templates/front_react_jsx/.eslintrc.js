module.exports = {
  extends: ['prettier', 'react-app'],

  parser: '@babel/eslint-parser',

  rules: {
    'no-useless-escape': 'error',
    'no-unused-vars': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-var': 'error',
  },
}
