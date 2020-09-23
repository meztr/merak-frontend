const breakpoints = [
    '360px', '768px', '1024px', '1280px', '1600px'
]

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]
breakpoints.xxl = breakpoints[4]

export default {
    colors: {
        primary: '#272466',
        secondary: '#FFC600'
    },

    variants: {
        container: {
            mx: 'auto',
            maxWidth: 1200,
            width: '100%',
            px: 30
        },

        hero: {
            mx: 'auto',
            maxWidth: 1200,
            width: '100%',
        }
    },

    breakpoints
}