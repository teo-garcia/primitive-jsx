module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: true,
  },
};
