const path = require('path');

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}