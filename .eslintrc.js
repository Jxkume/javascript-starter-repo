module.exports = {
  env: {
    browser: true,
    'es2021': true,
  },
  'extends': ['google', 'eslint:recommended', 'plugin:prettier/recommended'],
    'overrides': [
      {
        'env': {
          'node': true,
        },
        'files': [
          '.eslintrc.{js,cjs}',
        ],
          'sourceType': 'script',

      }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'require-jsdoc': 0,
  },
};
