import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Kemitraan() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Kemitraan SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Kemitraan SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  Kemitraan content goes here
                </Box>
            </Box>
        </>
    )
}

export default Kemitraan