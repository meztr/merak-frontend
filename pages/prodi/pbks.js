import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function PBKS() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'PBKS (Perbankan Syariah) SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'PBKS (Perbankan Syariah) SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                  PBKS (Perbankan Syariah) content goes here
                </Box>
            </Box>
        </>
    )
}

export default PBKS