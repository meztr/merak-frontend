import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Sarpras() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Sarana Prasarana SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Sarana Prasarana SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                    Sarana Prasarana content goes here
                </Box>
            </Box>
        </>
    )
}

export default Sarpras