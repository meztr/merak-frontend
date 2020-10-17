import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function VisiMisi() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Visi Misi SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Visi Misi SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                    Visi Misi content goes here
                </Box>
            </Box>
        </>
    )
}

export default VisiMisi