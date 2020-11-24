import { NextSeo } from 'next-seo';

function PBKS() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'PBKS (Perbankan Syariah) SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'PBKS (Perbankan Syariah) SMK Muhammadiyah Sampit'
        }
    };

    const collectionProdi = {
        title: `Perbankan Syariah`,
        shortname: `PBKS`,
        deskripsi: `Sistem Perbankan Syariah di Indonesia berkembang pesat seiring dengan maju dan meningkatnya
    kepercayaan umat muslim untuk menggunakan layanan syariah sebagai bentuk transaksinya.
    Lulusan jurusan Perbankan Syariah ... `,
        kaprodi: {
            person: {
                id: `102`,
                nama: `Lestarini, S.Pd`,
                periode: `2019-2023`,
                photo_profile: `https://dummyimage.com/3:4x200`
            }
        },
        guru_produktif: [
            {
                id: 1,
                nama: `Lestarini, S.Pd`,
                mapel: [
                    { id: 1, nama_mapel: `Etika Profesi` },
                    { id: 2, nama_mapel: `Administrasi Umum` },
                    { id: 3, nama_mapel: `Akuntansi Dasar` },
                    { id: 4, nama_mapel: `Pengelolaan Kas` },
                    { id: 5, nama_mapel: `Layanan Lembaga Keuangan Syariah` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 2,
                nama: `Haryati, S.Pd`,
                mapel: [
                    { id: 1, nama_mapel: `Perbankan Dasar` },
                    { id: 2, nama_mapel: `Ekonomi Islam` },
                    { id: 3, nama_mapel: `Akuntansi Perbankan Syariah` },
                    { id: 4, nama_mapel: `Komputer Akuntansi` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 3,
                nama: `Banika, S.Pd`,
                mapel: [
                    { id: 1, nama_mapel: `Otomatisasi Tata Kelola Sarana Prasarana` },
                    { id: 2, nama_mapel: `O.T.K Humas dan Protokol` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 4,
                nama: `Haqiqi`,
                mapel: [{ id: 1, nama_mapel: `Teknologi Perkantoran` }],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 5,
                nama: `Utfa Yunianto, S.Pd`,
                mapel: [
                    { id: 1, nama_mapel: `Produk Kreatif & Kewirausahaan` },
                    { id: 2, nama_mapel: `Administrasi Umum` },
                    { id: 3, nama_mapel: `Aplikasi Spreadsheet` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 6,
                nama: `Susanty, S.Pd`,
                mapel: [{ id: 1, nama_mapel: `Produk Kreatif & Kewirausahaan` }],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 7,
                nama: `Harisma Oktavia, S.Pd`,
                mapel: [
                    { id: 1, nama_mapel: `O.T.K Sarana Prasarana` },
                    { id: 1, nama_mapel: `O.T.K Humas dan Protokol` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            }
        ],
        kompetensi: [
            { id: 1, name: `Etika Profesi` },
            { id: 2, name: `Akuntansi Dasar` },
            { id: 3, name: `Pengelolaan Kas` },
            { id: 4, name: `Layanan Lembaga Keuangan Syariah` },
            { id: 5, name: `Perbankan Dasar` },
            { id: 6, name: `Akuntansi Perbankan Syariah` },
            { id: 7, name: `Komputer Akuntansi` }
        ],
        profesi: [
            { id: 1, name: `Teller` },
            { id: 2, name: `Marketing` },
            { id: 3, name: `Surveyor` },
            { id: 4, name: `Collector` },
            { id: 5, name: `Customer Service` },
            { id: 6, name: `Administrasi Lembaga Keuangan` },
            { id: 7, name: `Tenaga Akuntan Syariah` },
            { id: 8, name: `Manajemen Perbankan Syariah` },
            { id: 9, name: `Tenaga Pemasaran Syariah` }
        ],
        prestasi: []
    };

    return (
        <>
            <NextSeo {...SEO} />
            <section className="text-gray-700 body-font">
                <div className="container flex flex-wrap items-center px-5 py-12 mx-auto">
                    <div className="pb-10 mb-10 border-b border-gray-300 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
                        <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                            {collectionProdi.title} ({collectionProdi.shortname})
                        </h1>
                        <p className="text-base leading-relaxed">{collectionProdi.deskripsi}</p>
                        <div className="flex flex-col">
                            <a
                                href="#kompetensi"
                                className="inline-flex items-center mt-4 tracking-widest text-indigo-500">
                                Kompetensi {collectionProdi.shortname}
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <a
                                href="#tim"
                                className="inline-flex items-center mt-4 tracking-widest text-indigo-500">
                                Tim Guru Produktif {collectionProdi.shortname}
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="block md:w-1/2 md:pl-12">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-800 title-font">
                            Ka.Prodi {collectionProdi.shortname}
                        </h2>
                        <img
                            alt="photo-kaprodi-tkj"
                            className="block object-cover object-center"
                            src={collectionProdi.kaprodi.person.photo_profile}
                        />
                        <span className="text-xs text-center">
                            {collectionProdi.kaprodi.person.nama}
                        </span>
                    </div>
                </div>
            </section>
            <section id="kompetensi" className="pb-10 text-gray-700 body-font">
                <div className="container flex flex-wrap justify-between px-5 py-8 mx-auto bg-gray-100 md:w-autp md:pl-12">
                    <div className="flex flex-row pb-8">
                        <div className="w-full">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-800 title-font">
                                Kompetensi {collectionProdi.shortname}
                            </h2>
                            <nav className="flex flex-col -mb-1 text-sm list-none">
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
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-800 title-font">
                                Prospek Profesi {collectionProdi.shortname}
                            </h2>
                            <nav className="flex flex-col -mb-1 text-sm list-none">
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
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-800 title-font">
                                    Prestasi {collectionProdi.shortname}
                                </h2>
                                <nav className="flex flex-col -mb-1 text-sm list-none">
                                    {collectionProdi.prestasi.map((item) => (
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
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-center mb-12 text-center">
                        <div className="w-full px-4 lg:w-6/12 md:w-1/2">
                            <h2 className="text-3xl font-semibold tracking-widest">
                                Tim Produktif {collectionProdi.shortname}
                            </h2>
                            <p className="m-4 text-lg leading-relaxed text-gray-600">
                                Tim Guru Produktif berkomitmen untuk membimbing dan mendorong
                                Peserta Didik PBKS menguasai kompetensi keahlian PBKS
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center w-full overflow-hidden">
                        {/* guru 1 */}
                        {collectionProdi.guru_produktif &&
                            collectionProdi.guru_produktif.map((item) => (
                                <div className="flex flex-wrap justify-center w-64 mt-4 mb-4 ml-4 mr-4 overflow-hidden">
                                    <div key={item.id} className="px-6 pb-6">
                                        <img
                                            alt="..."
                                            src={item.photo_profile}
                                            className="max-w-full mx-auto rounded-full shadow-lg"
                                            style={{ maxWidth: '100px' }}
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-sm font-bold">{item.nama}</h5>

                                            {/* {item.mapel[0].nama_mapel} */}
                                            {item.mapel &&
                                                item.mapel.map((subitem) => (
                                                    <div key={subitem.key}>
                                                        <p className="mt-2 text-xs font-semibold tracking-tight text-gray-500 uppercase">
                                                            {subitem.nama_mapel}
                                                        </p>
                                                    </div>
                                                ))}

                                            <div className="mt-6">
                                                <button
                                                    className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                                                    type="button">
                                                    <i className="fab fa-twitter"></i>
                                                </button>
                                                <button
                                                    className="w-8 h-8 mb-1 mr-1 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
                                                    type="button">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>
                                                <button
                                                    className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                                                    type="button">
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

export default PBKS;
