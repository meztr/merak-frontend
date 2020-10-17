import tw, { styled, css } from "twin.macro";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

function KumparanCard() {
  return (
    <>
      <div className="box-border bg-gray-200 p-1 pb-4">
        <div className="box-border w-full h-full">
          <div className="flex items-center justify-between pl-4 pt-2 pb-2 pr-5 relative">
            <a className="justify-start text-lg font-bold" href="#">
              Title
            </a>
            <div
              css={{
                content: '""',
                position: "absolute",
                left: "0px",
                width: "0.4rem",
                height: "20px",
                background: "red",
              }}
            />
            <a className="justify-end" href="#">
              <button tw="flex flex-row-reverse">
                <div tw="ml-2 justify-center">
                  <span> {`>`} </span>
                </div>
                <div tw="justify-center">
                  <span>Lihat lainnya</span>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-row" css={{height:"500px"}}>
          {/* L */}
          <div className="mx-2 rounded-lg" >
            <div id="LeftWrapper" className="flex-col shadow-lg overflow-hidden">
              <div
                id="headline-card"
                className="relative flex flex-col justify-between bg-white text-black min-h-full"
              >
                <div id="card-image" className="bg-white rounded-lg">
                  <img
                    className="w-screen bg-white rounded-lg"
                    src="/images/references/sule.jpg"
                  />
                </div>
                <div
                  id="card-caption"
                  className="absolute z-10 p-4 bottom-0 left-0 right-0 text-white antialiased bg-gradient-to-t from-gray-900 rounded-lg"
                >
                  <div className="flex-col">
                    <div className="flex-row items-center">
                      <div>
                        <span className="text-xs font-bold text-red-700">
                          HEADLINE
                        </span>
                      </div>
                      <a href="#" className="pointer">
                        <span className="text-xl font-bold">
                          Dikabarkan Sudah Mengurus Surat Pengantar Nikah, Ini
                          Kata Sule
                        </span>
                        <div className="flex flex-row items-center">
                          <img
                            className="w-3 h-3 mr-1 rounded-full"
                            src="/images/references/uhits.png"
                          />
                          <span className="text-xs text-gray-400 mr-1">
                            kumparanHITS
                          </span>
                          <img
                            className="w-3 h-3 mr-1"
                            src="/images/references/verified.svg"
                          />
                        </div>
                      </a>
                      <div className="flex flex-row items-center mt-2">
                        <button
                          aria-label="like-button"
                          className="text-lg mr-5"
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <a
                          aria-label="comment-button"
                          href="#"
                          className="text-lg mr-5"
                        >
                          <FontAwesomeIcon icon={faComment} />
                        </a>
                        <button
                          aria-label="share-button"
                          className="text-lg mr-5"
                        >
                          <FontAwesomeIcon icon={faShareAlt} />
                        </button>
                        <span className="text-sm">8 menit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* M */}
          <div className="bg-white w-screen shadow-lg mx-2 rounded-lg" css={{height:"496px"}}>
            <div className="block w-full bg-white rounded-t-lg h-64">
              <div className="flex justify-between pl-4 pt-2 pb-2 pr-5 relative">
                <span className="justify-start font-bold" href="#">
                  Trending di Entertainment
                </span>
                <div
                  css={{
                    content: '""',
                    position: "absolute",
                    left: "0px",
                    width: "0.4rem",
                    height: "14px",
                    background: "darkgreen",
                  }}
                />
              </div>
              <div className="border-gray-200 border" />
              <div className="">
                <div
                  id="ListWeb-Scroll"
                  className="overflow-auto bg-white overflow-x-hidden overflow-y-scroll rounded-lg"
                  css={{height:"456px"}}
                >
                  {/* 1 */}
                  <div className="flex flex-row p-4">
                    {/* nomor */}
                    <div className="pr-2">
                      <span className="text-red-600 font-bold leading-5 text ">
                        1.
                      </span>
                    </div>
                    {/* title */}
                    <div className="block w-full">
                      <div className="w-full">
                        <div
                          id="trending-item"
                          className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                        >
                          <div className="flex flex-col leading-8">
                            <a className="leading-5">
                              Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                              Berbeda Konsep di Dalamnya
                            </a>
                            <div className="flex flex-row items-center">
                              <img
                                className="w-3 h-3 mr-1 rounded-full"
                                src="/images/references/uhits.png"
                              />
                              <span className="text-xs text-gray-500 mr-1">
                                kumparanHITS
                              </span>
                              <img
                                className="w-3 h-3 mr-1"
                                src="/images/references/verified.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center mt-2 text-gray-500">
                              <button
                                aria-label="like-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <a
                                aria-label="comment-button"
                                href="#"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faComment} />
                              </a>
                              <button
                                aria-label="share-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faShareAlt} />
                              </button>
                              <span className="text-xs">22 jam</span>
                            </div>
                          </div>
                          <div className="flex flex-col pl-2">
                            <a className="outline-none" href="#">
                              <div className="bg-white float-left rounded-lg">
                                <div>
                                  <div
                                    className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{
                                      backgroundImage: `url("/images/references/rano.jpg")`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-row p-4">
                    {/* nomor */}
                    <div className="pr-2">
                      <span className="text-red-600 font-bold leading-5 text ">
                        2.
                      </span>
                    </div>
                    {/* title */}
                    <div className="block w-full">
                      <div className="w-full">
                        <div
                          id="trending-item"
                          className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                        >
                          <div className="flex flex-col leading-8">
                            <a className="leading-5">
                              Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                              Berbeda Konsep di Dalamnya
                            </a>
                            <div className="flex flex-row items-center">
                              <img
                                className="w-3 h-3 mr-1 rounded-full"
                                src="/images/references/uhits.png"
                              />
                              <span className="text-xs text-gray-500 mr-1">
                                kumparanHITS
                              </span>
                              <img
                                className="w-3 h-3 mr-1"
                                src="/images/references/verified.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center mt-2 text-gray-500">
                              <button
                                aria-label="like-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <a
                                aria-label="comment-button"
                                href="#"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faComment} />
                              </a>
                              <button
                                aria-label="share-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faShareAlt} />
                              </button>
                              <span className="text-xs">22 jam</span>
                            </div>
                          </div>
                          <div className="flex flex-col pl-2">
                            <a className="outline-none" href="#">
                              <div className="bg-white float-left rounded-lg">
                                <div>
                                  <div
                                    className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{
                                      backgroundImage: `url("/images/references/rano.jpg")`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex flex-row p-4">
                    {/* nomor */}
                    <div className="pr-2">
                      <span className="text-red-600 font-bold leading-5 text ">
                        3.
                      </span>
                    </div>
                    {/* title */}
                    <div className="block w-full">
                      <div className="w-full">
                        <div
                          id="trending-item"
                          className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                        >
                          <div className="flex flex-col leading-8">
                            <a className="leading-5">
                              Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                              Berbeda Konsep di Dalamnya
                            </a>
                            <div className="flex flex-row items-center">
                              <img
                                className="w-3 h-3 mr-1 rounded-full"
                                src="/images/references/uhits.png"
                              />
                              <span className="text-xs text-gray-500 mr-1">
                                kumparanHITS
                              </span>
                              <img
                                className="w-3 h-3 mr-1"
                                src="/images/references/verified.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center mt-2 text-gray-500">
                              <button
                                aria-label="like-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <a
                                aria-label="comment-button"
                                href="#"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faComment} />
                              </a>
                              <button
                                aria-label="share-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faShareAlt} />
                              </button>
                              <span className="text-xs">22 jam</span>
                            </div>
                          </div>
                          <div className="flex flex-col pl-2">
                            <a className="outline-none" href="#">
                              <div className="bg-white float-left rounded-lg">
                                <div>
                                  <div
                                    className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{
                                      backgroundImage: `url("/images/references/rano.jpg")`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex flex-row p-4">
                    {/* nomor */}
                    <div className="pr-2">
                      <span className="text-red-600 font-bold leading-5 text ">
                        4.
                      </span>
                    </div>
                    {/* title */}
                    <div className="block w-full">
                      <div className="w-full">
                        <div
                          id="trending-item"
                          className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                        >
                          <div className="flex flex-col leading-8">
                            <a className="leading-5">
                              Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                              Berbeda Konsep di Dalamnya
                            </a>
                            <div className="flex flex-row items-center">
                              <img
                                className="w-3 h-3 mr-1 rounded-full"
                                src="/images/references/uhits.png"
                              />
                              <span className="text-xs text-gray-500 mr-1">
                                kumparanHITS
                              </span>
                              <img
                                className="w-3 h-3 mr-1"
                                src="/images/references/verified.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center mt-2 text-gray-500">
                              <button
                                aria-label="like-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <a
                                aria-label="comment-button"
                                href="#"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faComment} />
                              </a>
                              <button
                                aria-label="share-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faShareAlt} />
                              </button>
                              <span className="text-xs">22 jam</span>
                            </div>
                          </div>
                          <div className="flex flex-col pl-2">
                            <a className="outline-none" href="#">
                              <div className="bg-white float-left rounded-lg">
                                <div>
                                  <div
                                    className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{
                                      backgroundImage: `url("/images/references/rano.jpg")`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                  <div className="flex flex-row p-4">
                    {/* nomor */}
                    <div className="pr-2">
                      <span className="text-red-600 font-bold leading-5 text ">
                        5.
                      </span>
                    </div>
                    {/* title */}
                    <div className="block w-full">
                      <div className="w-full">
                        <div
                          id="trending-item"
                          className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                        >
                          <div className="flex flex-col leading-8">
                            <a className="leading-5">
                              Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                              Berbeda Konsep di Dalamnya
                            </a>
                            <div className="flex flex-row items-center">
                              <img
                                className="w-3 h-3 mr-1 rounded-full"
                                src="/images/references/uhits.png"
                              />
                              <span className="text-xs text-gray-500 mr-1">
                                kumparanHITS
                              </span>
                              <img
                                className="w-3 h-3 mr-1"
                                src="/images/references/verified.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center mt-2 text-gray-500">
                              <button
                                aria-label="like-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <a
                                aria-label="comment-button"
                                href="#"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faComment} />
                              </a>
                              <button
                                aria-label="share-button"
                                className="text-lg mr-4"
                              >
                                <FontAwesomeIcon icon={faShareAlt} />
                              </button>
                              <span className="text-xs">22 jam</span>
                            </div>
                          </div>
                          <div className="flex flex-col pl-2">
                            <a className="outline-none" href="#">
                              <div className="bg-white float-left rounded-lg">
                                <div>
                                  <div
                                    className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                    style={{
                                      backgroundImage: `url("/images/references/rano.jpg")`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* R */}
          <div className="bg-white w-screen shadow-lg rounded-lg mx-2" css={{height:"496px"}}>
            <div className="flex justify-between pl-4 pt-2 pb-2 pr-5 relative">
              <span className="justify-start font-bold" href="#">
                Terbaru di Entertainment
              </span>
              <div
                css={{
                  content: '""',
                  position: "absolute",
                  left: "0px",
                  width: "0.4rem",
                  height: "14px",
                  background: "darkgreen",
                }}
              />
            </div>
            <div className="border-gray-200 border"></div>
            <div className="">
              <div
                id="ListWeb-Scroll"
                className="bg-white overflow-x-hidden overflow-y-auto h-screen rounded-lg"
                css={{height:"438px"}}
              >
                {/* 1 */}
                <div className="flex flex-row p-4">
                  {/* nomor */}
                  <div className="pr-2">
                    <span className="text-red-600 font-bold leading-5 text ">
                      1.
                    </span>
                  </div>
                  {/* title */}
                  <div className="block w-full">
                    <div className="w-full">
                      <div
                        id="trending-item"
                        className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                      >
                        <div className="flex flex-col leading-8">
                          <a className="leading-5">
                            Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                            Berbeda Konsep di Dalamnya
                          </a>
                          <div className="flex flex-row items-center">
                            <img
                              className="w-3 h-3 mr-1 rounded-full"
                              src="/images/references/uhits.png"
                            />
                            <span className="text-xs text-gray-500 mr-1">
                              kumparanHITS
                            </span>
                            <img
                              className="w-3 h-3 mr-1"
                              src="/images/references/verified.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center mt-2 text-gray-500">
                            <button
                              aria-label="like-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a
                              aria-label="comment-button"
                              href="#"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faComment} />
                            </a>
                            <button
                              aria-label="share-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <span className="text-xs">22 jam</span>
                          </div>
                        </div>
                        <div className="flex flex-col pl-2">
                          <a className="outline-none" href="#">
                            <div className="bg-white float-left rounded-lg">
                              <div>
                                <div
                                  className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                  style={{
                                    backgroundImage: `url("/images/references/rano.jpg")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-row p-4">
                  {/* nomor */}
                  <div className="pr-2">
                    <span className="text-red-600 font-bold leading-5 text ">
                      2.
                    </span>
                  </div>
                  {/* title */}
                  <div className="block w-full">
                    <div className="w-full">
                      <div
                        id="trending-item"
                        className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                      >
                        <div className="flex flex-col leading-8">
                          <a className="leading-5">
                            Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                            Berbeda Konsep di Dalamnya
                          </a>
                          <div className="flex flex-row items-center">
                            <img
                              className="w-3 h-3 mr-1 rounded-full"
                              src="/images/references/uhits.png"
                            />
                            <span className="text-xs text-gray-500 mr-1">
                              kumparanHITS
                            </span>
                            <img
                              className="w-3 h-3 mr-1"
                              src="/images/references/verified.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center mt-2 text-gray-500">
                            <button
                              aria-label="like-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a
                              aria-label="comment-button"
                              href="#"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faComment} />
                            </a>
                            <button
                              aria-label="share-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <span className="text-xs">22 jam</span>
                          </div>
                        </div>
                        <div className="flex flex-col pl-2">
                          <a className="outline-none" href="#">
                            <div className="bg-white float-left rounded-lg">
                              <div>
                                <div
                                  className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                  style={{
                                    backgroundImage: `url("/images/references/rano.jpg")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-row p-4">
                  {/* nomor */}
                  <div className="pr-2">
                    <span className="text-red-600 font-bold leading-5 text ">
                      3.
                    </span>
                  </div>
                  {/* title */}
                  <div className="block w-full">
                    <div className="w-full">
                      <div
                        id="trending-item"
                        className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                      >
                        <div className="flex flex-col leading-8">
                          <a className="leading-5">
                            Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                            Berbeda Konsep di Dalamnya
                          </a>
                          <div className="flex flex-row items-center">
                            <img
                              className="w-3 h-3 mr-1 rounded-full"
                              src="/images/references/uhits.png"
                            />
                            <span className="text-xs text-gray-500 mr-1">
                              kumparanHITS
                            </span>
                            <img
                              className="w-3 h-3 mr-1"
                              src="/images/references/verified.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center mt-2 text-gray-500">
                            <button
                              aria-label="like-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a
                              aria-label="comment-button"
                              href="#"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faComment} />
                            </a>
                            <button
                              aria-label="share-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <span className="text-xs">22 jam</span>
                          </div>
                        </div>
                        <div className="flex flex-col pl-2">
                          <a className="outline-none" href="#">
                            <div className="bg-white float-left rounded-lg">
                              <div>
                                <div
                                  className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                  style={{
                                    backgroundImage: `url("/images/references/rano.jpg")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex flex-row p-4">
                  {/* nomor */}
                  <div className="pr-2">
                    <span className="text-red-600 font-bold leading-5 text ">
                      4.
                    </span>
                  </div>
                  {/* title */}
                  <div className="block w-full">
                    <div className="w-full">
                      <div
                        id="trending-item"
                        className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                      >
                        <div className="flex flex-col leading-8">
                          <a className="leading-5">
                            Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                            Berbeda Konsep di Dalamnya
                          </a>
                          <div className="flex flex-row items-center">
                            <img
                              className="w-3 h-3 mr-1 rounded-full"
                              src="/images/references/uhits.png"
                            />
                            <span className="text-xs text-gray-500 mr-1">
                              kumparanHITS
                            </span>
                            <img
                              className="w-3 h-3 mr-1"
                              src="/images/references/verified.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center mt-2 text-gray-500">
                            <button
                              aria-label="like-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a
                              aria-label="comment-button"
                              href="#"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faComment} />
                            </a>
                            <button
                              aria-label="share-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <span className="text-xs">22 jam</span>
                          </div>
                        </div>
                        <div className="flex flex-col pl-2">
                          <a className="outline-none" href="#">
                            <div className="bg-white float-left rounded-lg">
                              <div>
                                <div
                                  className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                  style={{
                                    backgroundImage: `url("/images/references/rano.jpg")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div className="flex flex-row p-4">
                  {/* nomor */}
                  <div className="pr-2">
                    <span className="text-red-600 font-bold leading-5 text ">
                      5.
                    </span>
                  </div>
                  {/* title */}
                  <div className="block w-full">
                    <div className="w-full">
                      <div
                        id="trending-item"
                        className="flex flex-row justify-between overflow-hidden bg-white text-black border-transparent"
                      >
                        <div className="flex flex-col leading-8">
                          <a className="leading-5">
                            Uniknya Rumah Mewah Rano Karno, Ada Tiga Bangunan
                            Berbeda Konsep di Dalamnya
                          </a>
                          <div className="flex flex-row items-center">
                            <img
                              className="w-3 h-3 mr-1 rounded-full"
                              src="/images/references/uhits.png"
                            />
                            <span className="text-xs text-gray-500 mr-1">
                              kumparanHITS
                            </span>
                            <img
                              className="w-3 h-3 mr-1"
                              src="/images/references/verified.svg"
                            />
                          </div>
                          <div className="flex flex-row items-center mt-2 text-gray-500">
                            <button
                              aria-label="like-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a
                              aria-label="comment-button"
                              href="#"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faComment} />
                            </a>
                            <button
                              aria-label="share-button"
                              className="text-lg mr-4"
                            >
                              <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <span className="text-xs">22 jam</span>
                          </div>
                        </div>
                        <div className="flex flex-col pl-2">
                          <a className="outline-none" href="#">
                            <div className="bg-white float-left rounded-lg">
                              <div>
                                <div
                                  className="relative overflow-hidden bg-red-400 w-24 pb-24 bg-center bg-no-repeat bg-cover rounded-lg"
                                  style={{
                                    backgroundImage: `url("/images/references/rano.jpg")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KumparanCard;
