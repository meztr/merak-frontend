import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function SejarahSingkat() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Sejarah singkat SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Sejarah singkat SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                    Sejarah Singkat content goes here
                </Box>
            </Box>
        </>
    )
}

export default SejarahSingkat