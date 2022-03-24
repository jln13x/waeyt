const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 */
const i18NextConfig = {
    i18n: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
    },
    localePath: path.resolve('./src/locales'),
}

module.exports = i18NextConfig;