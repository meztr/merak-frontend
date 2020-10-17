import { NextSeo } from "next-seo";
import { Box } from "reflexbox";

function TKJ() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description: "TKJ (Teknik Komputer dan Jaringan) SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description: "TKJ (Teknik Komputer dan Jaringan) SMK Muhammadiyah Sampit",
    },
  };

  const collectionProdi = {
    title: `Teknik Komputer & Jaringan`,
    shortname: `TKJ`,
    deskripsi: `Semakin berkembangnya Ilmu Pengetahuan dan Teknologi di bidang IT
    maka pada tahun 2005 SMK Muhammadiyah Sampit mendirikan Program
    Studi Paket Keahlian Teknik Komputer dan Jaringan. Diharapkan
    jurusan Program Studi TKJ menghasilkan lulusan yang mampu
    menembus dunia kerja dan industri yang sesuai dengan keahlian TKJ.`,
    kaprodi: {
      person: {
        nama: `Achmad Mawardi, S.Kom`,
        periode: `2019-2023`,
        photo_profile: `https://dummyimage.com/3:4x200`,
      },
    },
    kompetensi: {
      1: `Perakitan Komputer`,
      2: `Simulasi Digital`,
      3: `Jaringan Komputer Dasar`,
      4: `Pemrograman Web dan Mobile`,
      5: `Rancang Bangun Jaringan`,
      6: `Sistem Operasi Jaringan`,
      7: `Administrasi Server`,
      8: `Keamanan Jaringan`,
      9: `Troubleshooting Jaringan`,
    },
    profesi: {
      1: `Administrasi Jaringan Komputer`,
      2: `Administrasi Sistem Jaringan`,
      3: `Teknisi Jaringan Komputer`,
      4: `Teknisi Komputer`,
      5: `Distributor/Toko Hardware Komputer`,
      6: `Internet Service Provider (ISP)`,
      7: `Programmer Web dan Mobile`,
    },
    prestasi: {
      1: `Tahun 2009 - Juara II LKS tk. Kalimantan Tengah`,
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <section className="text-gray-700 body-font">
        <div className="container flex flex-wrap px-5 py-12 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {collectionProdi.title} ({collectionProdi.shortname})
            </h1>
            <p className="leading-relaxed text-base">
              {collectionProdi.deskripsi}
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
              Kompetensi {collectionProdi.shortname}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="block md:w-1/2 md:pl-12">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
              Ka.Prodi {collectionProdi.shortname}
            </h2>
            <img
              alt="photo-kaprodi-tkj"
              className="object-cover object-center block"
              src={collectionProdi.kaprodi.person.photo_profile}
            />
            <span className="text-xs text-center">
              {collectionProdi.kaprodi.person.nama}
            </span>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font pb-10">
        <div className="container flex flex-row md:w-1/2 md:pl-12 bg-gray-100 container px-5 py-8 mx-auto justify-between">
          <div className="flex flex-col">
            <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
              Kompetensi yang diajarkan:
            </h2>
            <nav class="flex flex-col text-sm list-none -mb-1">
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Perakitan Komputer
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Simulasi Digital
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Jaringan Komputer Dasar
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Pemrograman Web dan Mobile
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Rancang Bangun Jaringan
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Sistem Operasi Jaringan
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Administrasi Server
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Keamanan Jaringan
                </a>
              </li>
              <li class="mb-1 list-disc">
                <a class="text-gray-600 hover:text-gray-800">
                  Troubleshooting Jaringan
                </a>
              </li>
            </nav>
          </div>
          <div className="flex flex-col">
            <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
            </nav>
          </div>
          <div className="flex flex-col">
            <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default TKJ;
