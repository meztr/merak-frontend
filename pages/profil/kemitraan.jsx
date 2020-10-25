import { NextSeo } from 'next-seo';
import ComingSoon from 'components/tw/comingsoon';

function Kemitraan() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Kemitraan SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Kemitraan SMK Muhammadiyah Sampit'
        }
    };

    const pageData = {
        title: `Kemitraan`,
        image: `/images/references/soon.png`
    };

    return (
        <>
            <NextSeo {...SEO} />
            <ComingSoon post={pageData} />
        </>
    );
}

export default Kemitraan;
