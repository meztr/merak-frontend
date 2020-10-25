import CoomingSoon from 'components//tw/comingsoon';
import { NextSeo } from 'next-seo';
// import { Box } from 'reflexbox'
// import { withTranslation } from '../../i18n'

// function Profil({ t }) {
function Profil() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Profil SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Profil SMK Muhammadiyah Sampit'
        }
    };

    const pageData = {
        title: `Profil Sekolah`,
        image: `/images/references/soon.png`
    };

    return (
        <>
            <NextSeo {...SEO} />
            <CoomingSoon post={pageData} />
        </>
    );
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
export default Profil;
