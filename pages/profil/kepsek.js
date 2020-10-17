import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Kepsek() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Kepala Sekolah SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Kepala Sekolah SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                    Kepsek content goes here
                </Box>
            </Box>
        </>
    )
}

export default Kepsek