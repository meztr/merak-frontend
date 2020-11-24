// hints : https://stackoverflow.com/questions/62345671/nextjs-with-global-css-import-fail-in-production-mode

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: ['./pages/**/*.js', './components/**/*.js'],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
};
