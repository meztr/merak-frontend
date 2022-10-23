// hints : https://stackoverflow.com/questions/62345671/nextjs-with-global-css-import-fail-in-production-mode

// tailwind.config.js sebelum lebaran 1442H
// module.exports = {
//     future: {
//         removeDeprecatedGapUtilities: true,
//         purgeLayersByDefault: true
//     },
//     purge: ['./pages/**/*.js', './components/**/*.js'],
//     theme: {
//         extend: {}
//     },
//     variants: {},
//     plugins: []
// };

module.exports = {
    darkMode: 'media',
    theme: {
        container: {
            padding: {
                DEFAULT: ['1rem', '2rem'],
                sm: ['2rem'],
                lg: '4rem',
                xl: '6rem',
                object: '8rem',
                'object-width': '10rem',
                'object-min-max': '12rem'
            },
            margin: {
                DEFAULT: ['2rem', '3rem'],
                sm: ['auto'],
                lg: '5rem',
                xl: '7rem'
            }
        },
        aspectRatio: {
            2: '2',
            4: '4',
            6: '6'
        },
        extend: {
            screens: {
                object: { min: '968px' },
                'object-width': { 'min-width': '992px' },
                'object-min-max': { min: '1200px', max: '1600px' }
            },
            colors: {
                electric: ({ opacityVariable, opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(219, 0, 255, ${opacityValue})`;
                    }

                    if (opacityVariable !== undefined) {
                        return `rgba(219, 0, 255, var(${opacityVariable}, 1))`;
                    }

                    return `rgb(219, 0, 255)`;
                }
            },
            fontWeight: {
                customFontWeightAsString: '700',
                // Tailwind accepts numbers in configuration as well
                // https://tailwindcss.com/docs/font-weight#font-weights
                customFontWeightAsNumber: 800
            },
            fontSize: {
                size: '24px',
                sizeLineHeight: ['24px', '15px'],
                sizeLineHeightLetterSpacing: [
                    '32px',
                    {
                        lineHeight: '40px',
                        letterSpacing: '-0.02em'
                    }
                ]
            },
            spacing: {
                'gutter-1/2': 'var(--gutter-half)'
            }
        }
    },
    plugins: [
        addUtilitiesTest,
        addUtilitiesTest2,
        addComponentsTest,
        addComponentsTestElementPrefixes,
        addComponentsTestElementScreenReplacements,
        addComponentsTestCssVariableAsRuleProperty,
        pluginBaseSelectors
    ]
};

function addUtilitiesTest({ addUtilities, theme }) {
    const newUtilities = {
        '.type-sm': {
            fontSize: theme('fontSize.sm'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.tight')
        }
    };
    addUtilities(newUtilities);
}

function addUtilitiesTest2({ addUtilities }) {
    const newUtilities = {
        '.skew-10deg': {
            transform: 'skewY(-10deg)'
        },
        '.skew-15deg': {
            transform: 'skewY(-15deg)'
        }
    };

    addUtilities(newUtilities);
}

function addComponentsTest({ addComponents }) {
    const buttons = {
        '.btn': {
            padding: '.5rem 1rem',
            borderRadius: '.25rem',
            fontWeight: '600'
        },
        '.btn-blue': {
            backgroundColor: '#3490dc',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#2779bd'
            }
        },
        '.btn-red': {
            backgroundColor: '#e3342f',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#cc1f1a'
            }
        }
    };

    addComponents(buttons);
}

function addComponentsTestElementPrefixes({ addComponents }) {
    const styles = [
        {
            '.prefixes': {
                h1: {
                    margin: 'auto',
                    marginRight: '10px'
                },
                'h2:hover': {
                    color: 'red'
                },
                'h3:hover, h3:active': {
                    color: 'green'
                },
                ':focus': {
                    display: 'none'
                }
            }
        }
    ];

    addComponents(styles);
}

function addComponentsTestElementScreenReplacements({ addComponents }) {
    const styles = [
        {
            '.screenies': {
                '@screen sm': {
                    display: 'block'
                },
                '@screen lg': {
                    display: 'inline-block'
                },
                '@screen md': {
                    display: 'flex'
                },
                '@screen xl': {
                    h1: {
                        marginTop: '50px',
                        '&:hover, &:focus': {
                            color: 'blue'
                        }
                    }
                }
            }
        }
    ];

    addComponents(styles);
}

function addComponentsTestCssVariableAsRuleProperty({ addComponents }) {
    const styles = [
        {
            '.css-class-with-variable-as-rule-property': {
                '--some-css-variable-as-rule-prop': 'blue'
            }
        }
    ];

    addComponents(styles);
}

// tests introducing a config item and using the items as base selectors
function pluginBaseSelectors({ addComponents, theme, e }) {
    const values = theme('aspectRatio');

    const baseSelectors = Object.entries(values)
        .map(([key]) => `.${e(`aspect-test-${key}`)}`)
        .join(',\n');

    addComponents([{ [baseSelectors]: { content: 'test' } }]);
}
