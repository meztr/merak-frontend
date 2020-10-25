import PropTypes from 'prop-types';
import Link from 'next/link';

const AdmisiItem = ({ target, title, deskripsi, thumbnail }) => (
    <div id="feature" className="w-full p-2 lg:w-1/3 md:w-1/2">
        <Link href={target ? target : '#feature'}>
            <a className="hover:underline">
                <div className="flex items-center h-full p-4 bg-gray-100 border border-gray-200 rounded-lg hover:bg-indigo-100 hover:shadow-sm">
                    <img
                        alt="team"
                        className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full"
                        src={thumbnail ? thumbnail : 'https://dummyimage.com/80x80'}
                    />
                    <div className="flex-grow">
                        <h2 className="font-medium text-gray-900 title-font">{title}</h2>
                        <p className="text-sm text-gray-500">{deskripsi}</p>
                    </div>
                </div>
            </a>
        </Link>
    </div>
);

AdmisiItem.propTypes = {
    target: PropTypes.string,
    title: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    thumbnail: PropTypes.string
};

const AppsDownload = () => (
    <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row">
        <div className="flex flex-col w-full pr-0 mb-6 text-center md:pr-10 md:mb-0 md:w-auto md:text-left">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">
                ADMISI MOBILE APPS
            </h2>
            <h1 className="text-xl font-medium text-gray-900 md:text-2xl title-font">
                Download Apps Admisi for Mobile
            </h1>
        </div>
        <div className="flex items-center flex-shrink-0 mx-auto md:ml-auto md:mr-0">
            <button className="inline-flex items-center px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
                    <span className="font-medium title-font">Google Play</span>
                </span>
            </button>
            <button className="inline-flex items-center px-5 py-3 ml-4 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 305 305">
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs text-gray-600">Download on the</span>
                    <span className="font-medium title-font">App Store</span>
                </span>
            </button>
        </div>
    </div>
);

function Feature() {
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-20 text-center">
                        <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">
                            Menuju Sekolah Islam Berbasis IT
                        </h2>
                        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                            Sentral Admisi Data
                        </h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                            Selamat datang di halaman Admisi,{' '}
                            <span className="block">
                                Pusat Manajemen Kelola Data Internal SMK Muhammadiyah Sampit
                            </span>
                            Harap login terlebih dahulu untuk mengakses fitur admisi ini.
                        </p>
                    </div>
                    <AppsDownload />
                    <div className="flex flex-col w-full mb-5">
                        <h2 className="mb-1 font-mono text-sm font-medium tracking-widest text-indigo-600 title-font">
                            *) Sistem Admisi masih dalam Tahap Pengembangan
                        </h2>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <AdmisiItem
                            // target="/admisi/mi"
                            title="Manajemen Internal"
                            deskripsi="Standar Mutu & Assessment Internal"
                            thumbnail="https://ui-avatars.com/api/?name=M+I"
                        />
                        <AdmisiItem
                            title="Kurikulum"
                            deskripsi="KI/KD, Silabus, RPP, PBM"
                            thumbnail="https://ui-avatars.com/api/?name=K+K"
                        />
                        <AdmisiItem
                            title="Kesiswaan"
                            deskripsi="Ekstrakurikuler, PPDB, MOS"
                            thumbnail="https://ui-avatars.com/api/?name=K+S"
                        />
                        <AdmisiItem
                            title="Sarana Prasarana"
                            deskripsi="Inventaris Barang, Lab., Kelas"
                            thumbnail="https://ui-avatars.com/api/?name=S+P"
                        />
                        <AdmisiItem
                            title="Humas"
                            deskripsi="Kerjasama, DU/DI, Branding Sekolah"
                            thumbnail="https://ui-avatars.com/api/?name=H+M"
                        />
                        <AdmisiItem
                            title="Tata Usaha"
                            deskripsi="Kelola Data Induk Sekolah, Staff dan Siswa"
                            thumbnail="https://ui-avatars.com/api/?name=T+U"
                        />
                        <AdmisiItem
                            title="Bimbingan Konseling"
                            deskripsi="Konseling Peserta Didik"
                            thumbnail="https://ui-avatars.com/api/?name=B+K"
                        />
                        <AdmisiItem
                            title="Perpustakaan"
                            deskripsi="Manajemen Perpustakaan"
                            thumbnail="https://ui-avatars.com/api/?name=P+S"
                        />
                        <AdmisiItem
                            title="Laboratorium"
                            deskripsi="Manajemen Laboratorium"
                            thumbnail="https://ui-avatars.com/api/?name=L+B"
                        />
                        <AdmisiItem
                            title="IT Support"
                            deskripsi="Panduan Sistem, Helpdesk, Bug, Keamanan Sistem Admisi "
                            thumbnail="https://ui-avatars.com/api/?name=I+T"
                        />
                        <AdmisiItem
                            title="Web Admin"
                            deskripsi="Manajemen Kelola Informasi Website"
                            thumbnail="https://ui-avatars.com/api/?name=W+A"
                        />
                        <AdmisiItem
                            title="RKAS & BOS"
                            deskripsi="Kelola Informasi RKAS & Dana BOS"
                            thumbnail="https://ui-avatars.com/api/?name=R+B"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feature;
