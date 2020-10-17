import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Komite() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Komite Sekolah SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Komite Sekolah SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  Komite Sekolah content goes here
                </Box>
            </Box>
        </>
    )
}

export default Komite