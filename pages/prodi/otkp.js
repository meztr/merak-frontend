import { NextSeo } from "next-seo";
import { Box } from "reflexbox";

function OTKP() {
  const SEO = {
    title: `SMK Muhammadiyah Sampit | Profil`,
    description:
      "OTKP (Otomatisasi dan Tata Kelola Perkantoran) SMK Muhammadiyah Sampit",

    openGraph: {
      title: `SMK Muhammadiyah Sampit | Profil`,
      description:
        "OTKP (Otomatisasi dan Tata Kelola Perkantoran) SMK Muhammadiyah Sampit",
    },
  };

  const collectionProdi = {
    title: `Otomatisasi & Tata Kelola Perkantoran`,
    shortname: `OTKP`,
    deskripsi: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum euismod dolor id tristique. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus, ipsum at pulvinar posuere, 
    nibh ipsum laoreet dolor, et feugiat ante sapien eu est. Nulla facilisis nulla tellus, 
    ut maximus nunc maximus ac`,
    kaprodi: {
      person: {
        id: `101`,
        nama: `Heny Silvanita, S.Pd`,
        periode: `2019-2023`,
        photo_profile: `https://dummyimage.com/3:4x200`,
      },
    },
    guru_produktif: [
      {
        id: 1,
        nama: `Heny Silvanita, S.Pd`,
        mapel: [
          { id: 1, nama_mapel: `Korespondensi` },
          { id: 2, nama_mapel: `Otomatisasi Tata Kelola Kepegawaian` },
        ],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 2,
        nama: `Santoso`,
        mapel: [
          { id: 1, nama_mapel: `Kearsipan` },
          { id: 2, nama_mapel: `Otomatisasi Tata Kelola Keuangan` },
          { id: 3, nama_mapel: `O.T.K Humas dan Protokol` },
        ],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 3,
        nama: `Banika, S.Pd`,
        mapel: [
          { id: 1, nama_mapel: `Otomatisasi Tata Kelola Sarana Prasarana` },
          { id: 2, nama_mapel: `O.T.K Humas dan Protokol` },
        ],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 4,
        nama: `Haqiqi`,
        mapel: [{ id: 1, nama_mapel: `Teknologi Perkantoran` }],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 5,
        nama: `Utfa Yunianto, S.Pd`,
        mapel: [
          { id: 1, nama_mapel: `Produk Kreatif & Kewirausahaan` },
          { id: 2, nama_mapel: `Administrasi Umum` },
          { id: 3, nama_mapel: `Aplikasi Spreadsheet` },
        ],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 6,
        nama: `Susanty, S.Pd`,
        mapel: [{ id: 1, nama_mapel: `Produk Kreatif & Kewirausahaan` }],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 7,
        nama: `Harisma Oktavia, S.Pd`,
        mapel: [
          { id: 1, nama_mapel: `O.T.K Sarana Prasarana` },
          { id: 2, nama_mapel: `O.T.K Humas dan Protokol` },
        ],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
      {
        id: 8,
        nama: `Riska Purwaningsih, S.Pd`,
        mapel: [{ id: 1, nama_mapel: `O.T.K Humas dan Protokol` }],
        photo_profile: `https://dummyimage.com/1:1x100`,
      },
    ],
    kompetensi: [
      { id: 1, name: `Korespondensi` },
      { id: 2, name: `Kearsipan` },
      { id: 3, name: `Otomatisasi Tata Kelola Kepegawaian` },
      { id: 4, name: `Pengantar Akuntansi` },
      { id: 5, name: `Otomatisasi Perkantoran` },
      { id: 6, name: `Simulasi Digital` },
      { id: 7, name: `Administrasi Kepegawaian` },
      { id: 8, name: `Administrasi Keuangan` },
      { id: 9, name: `Administrasi Sarana Prasarana` },
      { id: 10, name: `Administrasi Humas dan Keprotokolan` },
    ],
    profesi: [
      { id: 1, name: `Tenaga Administrasi Kantor` },
      { id: 2, name: `Tenaga Resepsionis` },
      { id: 3, name: `Sekretaris Muda` },
      { id: 4, name: `Protokoler` },
    ],
    prestasi: [
      { id: 1, name: `Tahun 2015 - Juara III LKS tk. Nasional - English Conversation` },
    ],
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
            <div className="flex flex-col">
              <a
                href="#kompetensi"
                className="text-indigo-500 inline-flex items-center tracking-widest mt-4"
              >
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
              <a
                href="#tim"
                className="text-indigo-500 inline-flex items-center tracking-widest mt-4"
              >
                Tim Guru Produktif {collectionProdi.shortname}
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
      <section id="kompetensi" className="text-gray-700 body-font pb-10">
        <div className="container flex flex-wrap md:w-autp md:pl-12 bg-gray-100 container px-5 py-8 mx-auto justify-between">
          <div className="flex flex-row pb-8">
            <div className="w-full">
              <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
                Kompetensi {collectionProdi.shortname}
              </h2>
              <nav className="flex flex-col text-sm list-none -mb-1">
                {/* iteration kompetensi items */}
                {collectionProdi.kompetensi &&
                  collectionProdi.kompetensi.map((item) => (
                    <li key={item.id} className="mb-1 list-disc">
                      <a className="text-gray-600 hover:text-gray-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-row pb-8">
            <div className="w-full">
              <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
                Prospek Profesi {collectionProdi.shortname}
              </h2>
              <nav className="flex flex-col text-sm list-none -mb-1">
                {/* iteration profesi items */}
                {collectionProdi.profesi &&
                  collectionProdi.profesi.map((item) => (
                    <li key={item.id} className="mb-1 list-disc">
                      <a className="text-gray-600 hover:text-gray-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
              </nav>
            </div>
          </div>
          {/* iteration prestasi items */}
          {!!collectionProdi.prestasi.length && (
            <div className="flex flex-row pb-8">
              <div className="w-full">
                <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
                  Prestasi {collectionProdi.shortname}
                </h2>
                <nav className="flex flex-col text-sm list-none -mb-1">
                 { collectionProdi.prestasi.map((item) => (
                  <li key={item.id} className="mb-1 list-disc">
                    <a className="text-gray-600 hover:text-gray-800">
                      {item.name}
                    </a>
                  </li>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </section>
      <section id="tim" className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-12">
            <div className="w-full lg:w-6/12 md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold tracking-widest">
                Tim Produktif {collectionProdi.shortname}
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Tim Guru Produktif berkomitmen untuk membimbing dan mendorong
                Peserta Didik OTKP menguasai kompetensi keahlian OTKP
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full overflow-hidden justify-center">
            {/* guru 1 */}
            {collectionProdi.guru_produktif &&
              collectionProdi.guru_produktif.map((item) => (
                <div className="flex flex-wrap ml-4 mr-4 mt-4 mb-4 overflow-hidden w-64 justify-center">
                  <div key={item.id} className="px-6 pb-6">
                    <img
                      alt="..."
                      src={item.photo_profile}
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: "100px" }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-sm font-bold">{item.nama}</h5>

                      {/* {item.mapel[0].nama_mapel} */}
                      {item.mapel &&
                        item.mapel.map((subitem) => (
                          <div key={subitem.key}>
                            <p className="mt-2 text-xs text-gray-500 uppercase tracking-tight font-semibold">
                              {subitem.nama_mapel}
                            </p>
                          </div>
                        ))}

                      <div className="mt-6">
                        <button
                          className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-twitter"></i>
                        </button>
                        <button
                          className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          <i className="fab fa-dribbble"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OTKP;
