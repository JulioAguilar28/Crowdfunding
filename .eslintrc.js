module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['prettier', 'prettier/vue', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-array-constructor': 'off',
    indent: ['error', 2],
    'no-multi-spaces': ['error']
  }
}
