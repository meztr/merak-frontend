import { NextSeo } from 'next-seo';
import ComingSoon from 'components/tw/comingsoon';

function Sarpras() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Sarana Prasarana SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Sarana Prasarana SMK Muhammadiyah Sampit'
        }
    };

    const pageData = {
        title: `Sarana Prasarana`,
        image: `/images/references/coffee-mbp.jpg`
    };

    return (
        <>
            <NextSeo {...SEO} />
            <ComingSoon post={pageData} />
        </>
    );
}

export default Sarpras;
