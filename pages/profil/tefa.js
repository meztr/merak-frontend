import { NextSeo } from "next-seo";
import ComingSoon from "components/tw/comingsoon";

function Tefa() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description: "Teaching Factory SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description: "Teaching Factory SMK Muhammadiyah Sampit",
    },
  };

  const pageData = {
    title: `Teaching Factory`,
    image: `/images/references/coffee-mbp.jpg`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ComingSoon post={pageData} />
    </>
  );
}

export default Tefa;
