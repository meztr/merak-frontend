import { NextSeo } from "next-seo";
import ComingSoon from "components/tw/comingsoon";

function StrukturOrganisasi() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description: "Struktur Organisasi SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description: "Struktur Organisasi SMK Muhammadiyah Sampit",
    },
  };

  const pageData = {
    title: `Struktur Organisasi`,
    image: `/images/references/coffee-mbp.jpg`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ComingSoon post={pageData} />
    </>
  );
}

export default StrukturOrganisasi;
