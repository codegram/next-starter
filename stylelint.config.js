module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  ignoreFiles: ['**/*.jsx', '**/*.tsx', '**/*.json', 'node_modules/**/*'],
  rules: {
    'prettier/prettier': true,
  },
}
