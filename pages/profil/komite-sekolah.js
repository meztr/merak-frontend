import { NextSeo } from "next-seo";
import ComingSoon from "components/tw/comingsoon";

function Komite() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description: "Komite Sekolah SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description: "Komite Sekolah SMK Muhammadiyah Sampit",
    },
  };

  const pageData = {
    title: `Komite Sekolah`,
    image: `/images/references/coffee-mbp.jpg`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ComingSoon post={pageData} />
    </>
  );
}

export default Komite;
