// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    quotes: ['error', 'single'],
    'prefer-const': 'error',
    indent: ['warn', 2],
    'comma-dangle': ['error', 'only-multiline'],
    semi: 'off',
    'no-duplicate-imports': 'error',
    'no-template-curly-in-string': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    camelcase: ['error'],
    'func-style': ['error', 'expression'],
    'max-depth': ['error', 3],
    'no-alert': ['error'],
    'no-var': ['error'],
    'no-unused-vars': 'warn',
    'no-useless-catch': 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
  },
}
