import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebookSquare,
    faGithub,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className="text-gray-700 bg-gray-300 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img
                                src="/images/logo192.png"
                                className="w-12 h-12 rounded-full"
                                viewBox="0 0 24 24"
                            />
                            <span className="ml-2 text-lg tracking-tight">
                                SMK Muhammadiyah Sampit
                                <p className="-mt-1 text-sm tracking-wider text-gray-800">
                                    Fastabiqul Khairat
                                </p>
                            </span>
                        </a>
                        <div className="items-center justify-center mt-4 mb-5 text-sm font-medium tracking-wide text-gray-900 title-font">
                            <h5>Jl. Merak No. 47A Baamang Hilir, Sampit</h5>
                            <h5>Kotawaringin Timur Kalimantan Tengah</h5>
                            <a
                                href="mailto:smk.muhsampit@gmail.com"
                                className="block mt-2 font-mono text-sm text-indigo-500 hover:underline"
                                alt="email-sekolah">
                                <FontAwesomeIcon icon={faEnvelope} /> smk.muhsampit@gmail.com
                            </a>
                            <a
                                href="mailto:humas@smkmuhsampit.sch.id"
                                className="block font-mono text-sm text-indigo-500 hover:underline leading-5"
                                alt="email-humas-sekolah">
                                <FontAwesomeIcon icon={faEnvelope} /> humas@smkmuhsampit.sch.id
                            </a>
                            <a
                                href="tel:053121336 "
                                className="block font-mono text-sm leading-10 hover:underline"
                                alt="telepon-sekolah">
                                <FontAwesomeIcon icon={faPhone} /> 0531-21336
                            </a>
                        </div>
                        <div className="inline-flex items-center justify-center mt-4 mb-5">
                            <button
                                className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-600 bg-gray-100 rounded-full shadow-lg outline-none hover:bg-white hover:text-blue-400 align-center focus:outline-none"
                                type="button">
                                <i className="flex">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </i>
                            </button>
                            <button
                                className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-600 bg-gray-100 rounded-full shadow-lg outline-none hover:bg-white hover:text-pink-400 align-center focus:outline-none"
                                type="button">
                                <i className="flex">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </i>
                            </button>
                            <button
                                className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-600 bg-gray-100 rounded-full shadow-lg outline-none hover:bg-white hover:text-blue-600 align-center focus:outline-none"
                                type="button">
                                <i className="flex">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </i>
                            </button>
                            <button
                                className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-600 bg-gray-100 rounded-full shadow-lg outline-none hover:bg-white hover:text-red-600 align-center focus:outline-none"
                                type="button">
                                <i className="flex">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </i>
                            </button>
                            <button
                                className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-600 bg-gray-100 rounded-full shadow-lg outline-none hover:bg-white hover:text-gray-800 align-center focus:outline-none"
                                type="button">
                                <i className="flex">
                                    <FontAwesomeIcon icon={faGithub} />
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                                LINK TERKAIT
                            </h2>
                            <nav className="mb-10 list-none">
                                <Link href="/profil">
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Profil Sekolah
                                    </a>
                                </Link>
                                <Link href="/prodi/otkp">
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Otomatisasi Tata Kelola Perkantoran
                                    </a>
                                </Link>
                                <Link href="/prodi/tkj">
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Teknik Komputer Jaringan
                                    </a>
                                </Link>
                                <Link href="/prodi/pbks">
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Perbankan Syariah
                                    </a>
                                </Link>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                                LINK UMUM
                            </h2>
                            <nav className="mb-10 list-none">
                                <li>
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Learning Management System
                                    </a>
                                </li>
                                <li>
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Artikel
                                    </a>
                                </li>
                                <li>
                                    <a className="block pb-2 text-xs font-semibold text-gray-700 hover:text-gray-900">
                                        Pengumuman
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200">
                    <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                        <p className="text-sm text-center text-gray-500 sm:text-left">
                            © ICT SMK Muhammadiyah Sampit - 2020
                        </p>
                        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                            <Link href="mailto:ict@smkmuhsampit.sch.id">
                                <a className="ml-3 text-gray-500 hover:text-red-700">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{' '}
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://twitter.com/meztr">
                                <a className="ml-3 text-gray-500 hover:text-blue-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
