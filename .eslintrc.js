module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'netguru-ember',
  env: {
    browser: true
  },
  rules: {
    'linebreak-style': ["error", "windows"]
  }
};
