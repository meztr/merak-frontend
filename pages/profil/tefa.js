import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Tefa() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Teaching Factory SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Teaching Factory SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  Teaching Factory content goes here
                </Box>
            </Box>
        </>
    )
}

export default Tefa