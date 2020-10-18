import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="text-gray-700 body-font bg-gray-300">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
          <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
            <div className="mt-4 items-center justify-center mb-5 title-font font-medium text-gray-900 tracking-wide text-sm">
              <h5>Jl. Merak No. 47A Baamang Hilir, Sampit</h5>
              <h5>Kotawaringin Timur Kalimantan Tengah</h5>
              <a
                href="mailto:smk.muhsampit@gmail.com"
                className="block text-sm text-indigo-500 font-mono mt-2 hover:underline"
                alt="email-sekolah"
              >
                <FontAwesomeIcon icon={faEnvelope} /> smk.muhsampit@gmail.com
              </a>
              <a
                href="mailto:humas@smkmuhsampit.sch.id"
                className="block text-sm text-indigo-500 font-mono hover:underline leading-5"
                alt="email-humas-sekolah"
              >
                <FontAwesomeIcon icon={faEnvelope} /> humas@smkmuhsampit.sch.id
              </a>
              <a
                href="tel:053121336 "
                className="block text-sm font-mono leading-10 hover:underline"
                alt="telepon-sekolah"
              >
                <FontAwesomeIcon icon={faPhone} /> 0531-21336
              </a>
            </div>
            <div className="mt-4 inline-flex items-center justify-center mb-5">
              <button
                className="bg-gray-100 hover:bg-white text-gray-600 hover:text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </button>
              <button
                className="bg-gray-100 hover:bg-white text-gray-600 hover:text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </button>
              <button
                className="bg-gray-100 hover:bg-white text-gray-600 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </i>
              </button>
              <button
                className="bg-gray-100 hover:bg-white text-gray-600 hover:text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex">
                  <FontAwesomeIcon icon={faYoutube} />
                </i>
              </button>
              <button
                className="bg-gray-100 hover:bg-white text-gray-600 hover:text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex">
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </button>
            </div>
          </div>
          <div className="justify-end flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LINK TERKAIT
              </h2>
              <nav className="list-none mb-10">
                <Link href="/profil">
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Profil Sekolah
                  </a>
                </Link>
                <Link href="/prodi/otkp">
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Otomatisasi Tata Kelola Perkantoran
                  </a>
                </Link>
                <Link href="/prodi/tkj">
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Teknik Komputer Jaringan
                  </a>
                </Link>
                <Link href="/prodi/pbks">
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Perbankan Syariah
                  </a>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LINK UMUM
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Learning Management System
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Artikel
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-xs">
                    Pengumuman
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © ICT SMK Muhammadiyah Sampit - 2020
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="mailto:ict@smkmuhsampit.sch.id">
                <a className="ml-3 text-gray-500 hover:text-red-700">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
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
                    viewBox="0 0 24 24"
                  >
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
