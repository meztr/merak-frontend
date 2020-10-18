import { NextSeo } from "next-seo";
import ComingSoon from "components/tw/comingsoon";

function RkasBos() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description: "RKAS dan BOS SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description: "RKAS dan BOS SMK Muhammadiyah Sampit",
    },
  };

  const pageData = {
    title: `RKAS & BOS`,
    image: `/images/references/coffee-mbp.jpg`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ComingSoon post={pageData} />
    </>
  );
}

export default RkasBos;
