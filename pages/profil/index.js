import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'
// import { withTranslation } from '../../i18n'

import Dropdown from 'components/tw/dropdown'

// function Profil({ t }) {
function Profil() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Profil SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Profil SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" pt={40}>
                    Hubungi Kami <br />
                    Profil
                </Box>
                
                <div>
                    Ini halaman profil
                </div>
            </Box>
            <Dropdown />
        </>
    )
}

// Profil.getInitialProps = async () => {
//     return {
//         namespacesRequired: ['common', 'profil']
//     }
// }

/**
 * TODO: OnHold i18n multi language 'en', 'id' feature
 */

// export default withTranslation()(Profil)
export default Profil