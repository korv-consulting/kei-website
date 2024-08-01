const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fr', 'en', 'es', 'zh'],
    localePath: path.resolve('./public/locales'),
  },
};
