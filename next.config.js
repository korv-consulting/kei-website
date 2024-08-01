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
      poll: 1000,//Enables file polling, checking for changes every 1000 milliseconds (1 second)
      aggregateTimeout: 300,//Adds an aggregation delay of 300 milliseconds. This means that 
                             //  Webpack will wait 300 milliseconds after a detected change before rebuilding
    };

    
    return config;
  },
};
