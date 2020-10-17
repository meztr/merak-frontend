import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Pbm() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Proses Belajar Mengajar SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Proses Belajar Mengajar SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  Proses Belajar Mengajar content goes here
                </Box>
            </Box>
        </>
    )
}

export default Pbm