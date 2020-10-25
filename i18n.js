const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    otherLanguages: ['en', 'id'],
    defaultNS: 'common',
    localeSubpaths: {
        en: 'en'
    },
    localePath: 'public/static/locales'
});
