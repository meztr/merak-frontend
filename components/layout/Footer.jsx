import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faDribbble,
    faFacebookSquare,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <footer className="relative pt-8 pb-6 bg-gray-300">
                {/* <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 lg:w-6/12">
                            <h4 className="text-3xl font-semibold">SMK MUHAMMADIYAH SAMPIT</h4>
                            <h5 className="mt-0 mb-2 text-lg text-gray-700">
                                Jl. Merak No. 47A Baamang Hulu, Sampit
                            </h5>
                            <h5 className="mt-0 mb-2 text-lg text-gray-700">
                                Kotawaringin Timur - Kalimantan Tengah
                            </h5>
                            <div className="mt-6">
                                <button
                                    className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                                    type="button">
                                    {/* <i className="flex fab fa-twitter"></i> */}
                                    <i className="flex">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </i>
                                </button>
                                <button
                                    className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-600 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                                    type="button">
                                    {/* <i className="flex fab fa-facebook-square"></i> */}
                                    <i className="flex">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </i>
                                </button>
                                <button
                                    className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                                    type="button">
                                    {/* <i className="flex fab fa-dribbble"></i> */}
                                    <i className="flex">
                                        <FontAwesomeIcon icon={faDribbble} />
                                    </i>
                                </button>
                                <button
                                    className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-900 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                                    type="button">
                                    {/* <i className="flex fab fa-github"></i> */}
                                    <i className="flex">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex flex-wrap mb-6 items-top">
                                <div className="w-full px-4 ml-auto lg:w-6/12">
                                    <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                                        Internal Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Profil SMK Muhammadiyah Sampit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Otomatisasi Tata Kelola Perkantoran
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Teknik Komputer Jaringan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Perbankan Syariah
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full px-4 lg:w-5/12">
                                    <span className="block mb-2 text-sm font-semibold text-gray-600 uppercase">
                                        Link Umum
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Learning Management System
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="#">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="https://creative-tim.com/privacy">
                                                Artikel
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="https://creative-tim.com/contact-us">
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                                                href="https://creative-tim.com/contact-us">
                                                Pengumuman
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                        <div className="w-full px-4 mx-auto text-center md:w-6/12">
                            <div className="py-1 text-sm font-semibold text-gray-600">
                                Copyright © {new Date().getFullYear()} Website Frontend by{' '}
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    ICT SMK Muhammadiyah Sampit
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
