module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_apiUrl: "http://kei-app-back.local",
    FRONTEND_Url: "http://kei-app-frontweb.local",
  },
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
