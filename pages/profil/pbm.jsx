import { NextSeo } from 'next-seo';
import ComingSoon from 'components/tw/comingsoon';

function Pbm() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Proses Belajar Mengajar SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Proses Belajar Mengajar SMK Muhammadiyah Sampit'
        }
    };

    const pageData = {
        title: `Proses Belajar Mengajar`,
        image: `/images/references/coffee-mbp.jpg`
    };

    return (
        <>
            <NextSeo {...SEO} />
            <ComingSoon post={pageData} />
        </>
    );
}

export default Pbm;
