const nextI18NextConfig = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  i18n: nextI18NextConfig.i18n,
};
