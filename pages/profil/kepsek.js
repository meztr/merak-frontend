import { NextSeo } from 'next-seo'
import ComingSoon from "components/tw/comingsoon";

function Kepsek() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Kepala Sekolah SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Kepala Sekolah SMK Muhammadiyah Sampit',
        }
    }
    const pageData = {
        title: `Kepala Sekolah`,
        image: `/images/references/coffee-mbp.jpg`,
      };
    
      return (
        <>
          <NextSeo {...SEO} />
          <ComingSoon post={pageData} />
        </>
      );
}

export default Kepsek