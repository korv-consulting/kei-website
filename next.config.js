module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpackDevMiddleware: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
