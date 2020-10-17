import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function RkasBos() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'RKAS dan BOS SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'RKAS dan BOS SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  RKAS dan BOS content goes here
                </Box>
            </Box>
        </>
    )
}

export default RkasBos