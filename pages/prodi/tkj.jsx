/* eslint-disable jsx-a11y/img-redundant-alt */
import { NextSeo } from 'next-seo';

function TKJ() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'TKJ (Teknik Komputer dan Jaringan) SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'TKJ (Teknik Komputer dan Jaringan) SMK Muhammadiyah Sampit'
        }
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
                id: `200`,
                nama: `Achmad Mawardi, S.Kom`,
                periode: `2019-2023`,
                photo_profile: `https://dummyimage.com/3:4x200`
            }
        },
        guru_produktif: [
            {
                id: 1,
                nama: `Achmad Mawardi, S.Kom`,
                mapel: [
                    { id: 1, nama_mapel: `Teknologi Layanan Jaringan` },
                    { id: 2, nama_mapel: `Sistem Komputer` },
                    { id: 3, nama_mapel: `Pemrograman Dasar` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 2,
                nama: `Johan Firmansyah, S.Kom`,
                mapel: [{ id: 1, nama_mapel: `Administrasi Infrastruktur Jaringan II` }],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 3,
                nama: `Utfa Yunianto, S.Pd `,
                mapel: [
                    { id: 1, nama_mapel: `Dasar Design Grafis` },
                    { id: 2, nama_mapel: `Produk Kreatif & Kewirausahaan` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 4,
                nama: `M. Latif Noor`,
                mapel: [
                    { id: 1, nama_mapel: `Administrasi Infrastruktur Jaringan I` },
                    { id: 2, nama_mapel: `Administrasi Sistem Jaringan I` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 5,
                nama: `Haqiqi`,
                mapel: [{ id: 1, nama_mapel: `Simulasi Digital` }],
                photo_profile: `https://dummyimage.com/1:1x100`
            },
            {
                id: 6,
                nama: `M. Rachmatullah, ST`,
                mapel: [
                    { id: 1, nama_mapel: `Komputer & Jaringan Dasar` },
                    { id: 2, nama_mapel: `Teknologi Jaringan Berbasis Luas` },
                    { id: 3, nama_mapel: `Administrasi Sistem Jaringan II` }
                ],
                photo_profile: `https://dummyimage.com/1:1x100`
            }
        ],
        kompetensi: [
            { id: 1, name: `Perakitan Komputer` },
            { id: 2, name: `Simulasi Digital` },
            { id: 3, name: `Jaringan Komputer Dasar` },
            { id: 4, name: `Pemrograman Web dan Mobile` },
            { id: 5, name: `Rancang Bangun Jaringan` },
            { id: 6, name: `Sistem Operasi Jaringan` },
            { id: 7, name: `Administrasi Server` },
            { id: 8, name: `Keamanan Jaringan` },
            { id: 9, name: `Troubleshooting Jaringan` },
            { id: 10, name: `Design Grafis` },
            { id: 11, name: `Video Editing` }
        ],
        profesi: [
            { id: 1, name: `Administrasi Jaringan Komputer` },
            { id: 2, name: `Administrasi Sistem Jaringan` },
            { id: 3, name: `Teknisi Jaringan Komputer` },
            { id: 4, name: `Teknisi Komputer` },
            { id: 5, name: `Distributor/Toko Hardware Komputer` },
            { id: 6, name: `Internet Service Provider (ISP)` },
            { id: 7, name: `Programmer Web dan Mobile` },
            { id: 8, name: `Designer Grafis` },
            { id: 9, name: `Video Editor` }
        ],
        prestasi: [{ id: 1, name: `Tahun 2009 - Juara II LKS IT Support - tk. Kalimantan Tengah` }]
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
                                Peserta Didik TKJ menguasai kompetensi keahlian TKJ
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center w-full overflow-hidden">
                        {/* guru 1 */}
                        {collectionProdi.guru_produktif &&
                            collectionProdi.guru_produktif.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-wrap justify-center w-64 mt-4 mb-4 ml-4 mr-4 overflow-hidden">
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
                                                        <p className="mt-1 text-xs font-semibold tracking-tight text-gray-500 uppercase">
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

export default TKJ;
