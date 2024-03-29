import Link from 'next/link';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAward,
//   faRetweet,
// } from "@fortawesome/free-solid-svg-icons";
// import tw, { styled } from "twin.macro";

function LandingTwo() {
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-20 text-center">
                        <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">
                            Dikdasmen Muhammadiyah Kalimantan Tengah
                        </h2>
                        <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                            SMK Muhammadiyah Sampit
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-yellow-500 rounded-full">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-medium text-gray-900 title-font">
                                        OTKP
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-base leading-relaxed">
                                        <span className="block font-bold">
                                            Otomatisasi dan Tata Kelola Perkantoran{' '}
                                        </span>
                                        merupakan kompetensi keahlian siswa pada kegiatan
                                        perkantoran dan ketatausahaan berbasis otomatisasi IT.
                                    </p>
                                    <Link href="/prodi/otkp">
                                        <a className="inline-flex items-center mt-3 text-indigo-500">
                                            Lebih lanjut
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-blue-500 rounded-full">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-medium text-gray-900 title-font">
                                        TKJ
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-base leading-relaxed">
                                        <span className="block font-bold">
                                            Teknik Komputer dan Jaringan{' '}
                                        </span>
                                        merupakan kompetensi keahlian siswa di bidang IT Hardware
                                        dan Networking terutama
                                        <span className="font-light">
                                            {' '}
                                            Administrator Jaringan Komputer, Technical Support,
                                            Computer Network Maintenance dan Keamanan Jaringan
                                            Komputer
                                        </span>
                                    </p>
                                    <Link href="/prodi/tkj">
                                        <a className="inline-flex items-center mt-3 text-indigo-500">
                                            Lebih lanjut
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-red-500 rounded-full">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-medium text-gray-900 title-font">
                                        PBKS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-base leading-relaxed">
                                        <span className="block font-bold">Perbankan Syariah</span>
                                        kompetensi keahlian yang mampu bekerja dalam bidang
                                        perbankan syariah guna membantu tugas-tugas tenaga perbankan
                                        profesional terutama tenaga akuntan syariah, operasional
                                        lembaga keuangan syariah, manajemen perbankan syariah, dan
                                        pemasaran syariah.
                                    </p>
                                    <Link href="/prodi/pbks">
                                        <a className="inline-flex items-center mt-3 text-indigo-500">
                                            Lebih lanjut
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingTwo;
