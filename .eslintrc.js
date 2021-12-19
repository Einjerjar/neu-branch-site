/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: [ '*.svelte' ],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    indent: [ 'error', 2 ],
    semi: [ 'error', 'never' ],
    quotes: [ 'error', 'single' ],
    'linebreak-style': [ 'error', 'unix' ],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'quote-props': [ 'error', 'as-needed' ],
    'no-extra-parens': [ 'error', 'all' ],
    'no-template-curly-in-string': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/no-children-prop': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ]
  },
}

module.exports = config