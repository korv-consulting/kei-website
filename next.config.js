const nextI18NextConfig = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_apiUrl: "https://api-dev.kei-app.com",
    FRONTEND_Url: "https://front-dev.kei-app.com",
  },
  experimental: {
    outputStandalone: true,
  },
  webpackDevMiddleware: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: 1000,//Enables file polling, checking for changes every 1000 milliseconds (1 second)
      aggregateTimeout: 300,//Adds an aggregation delay of 300 milliseconds. This means that 
      //  Webpack will wait 300 milliseconds after a detected change before rebuilding
    };


    return config;
  },
  output: 'standalone',
  // i18n: nextI18NextConfig.i18n,
  i18n: {
    locales: ['en', 'es', 'fr', 'zh'], // Define your locales
    defaultLocale: 'en',
  },
  react: { useSuspense: false },
};
