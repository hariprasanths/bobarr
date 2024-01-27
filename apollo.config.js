/* eslint import/no-commonjs: off */

module.exports = {
  client: {
    service: {
      name: 'bobarr',
      url: 'https://localhost:4000/graphql',
    },
    excludes: ['**/*.{ts,tsx,js,jsx}'],
  },
};
