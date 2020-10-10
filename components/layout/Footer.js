import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter

} from "@fortawesome/free-brands-svg-icons";
import { faDribbble, faFacebookSquare, faGithub } from "node_modules/@fortawesome/free-brands-svg-icons/index";

function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
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
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">SMK MUHAMMADIYAH SAMPIT</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Jl. Merak No. 47A Baamang Hulu, Sampit
              </h5>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Kotawaringin Timur - Kalimantan Tengah
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  {/* <i className="flex fab fa-twitter"></i> */}
                  <i className="flex" ><FontAwesomeIcon icon={faTwitter} /></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  {/* <i className="flex fab fa-facebook-square"></i> */}
                  <i className="flex"><FontAwesomeIcon icon={faFacebookSquare} /></i> 
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  {/* <i className="flex fab fa-dribbble"></i> */}
                  <i className="flex"><FontAwesomeIcon icon={faDribbble} /></i> 
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  {/* <i className="flex fab fa-github"></i> */}
                  <i className="flex"><FontAwesomeIcon icon={faGithub} /></i> 
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Internal Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Profil SMK Muhammadiyah Sampit
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Otomatisasi Tata Kelola Perkantoran
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Teknik Komputer Jaringan
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Perbankan Syariah
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-5/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Link Umum
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Learning Management System
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy"
                      >
                        Artikel
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us"
                      >
                        Berita
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us"
                      >
                        Pengumuman
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Website Frontend by{" "}
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900"
                >
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
