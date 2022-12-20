module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'yarn prettier --write',
    'yarn lint:js --fix',
    'yarn test:lib --passWithNoTests',
  ],
  '**/*.css': ['yarn lint:css --fix'],
}
