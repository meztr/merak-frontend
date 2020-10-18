import tw, { styled, css } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function generalLayout({ post, children }) {
  return (
    <>
      {/* wrapper */}
      <section className="text-gray-700 body-font">
        {/* hero */}
        <div className="container px-5 py-24 mx-auto">
          {/* 1.1 */}
          <div className="flex flex-col text-center w-full mb-20">
            {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2> */}
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {post.hero.title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {post.hero.deskripsi}
            </p>
          </div>
          {/* contents */}
          <div className="fex flex-wrap">
            {/* check dulu jika ada array di deskripsi contents */}
            {!!post.contents.length &&
              post.contents.map((item) => (
                <div key={item.id} className="md:w-full px-8 py-6 border-l-2 border-gray-200">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    {item.title}
                  </h2>
                  <div className="flex flex-col w-auto">
                    {Array.isArray(item.deskripsi) == 0 ? (
                      <p className="leading-relaxed text-base mb-4">
                        {item.deskripsi}
                      </p>
                    ) : (
                      item.deskripsi.map((subitem) => (
                        <div key={subitem.id} className="flex flex-row m-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="mt-1 mr-3"/>
                          <p className="leading-relaxed text-base mb-4">
                            {subitem.title}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap">{children}</div>
        </div>
      </section>
    </>
  );
}

export default generalLayout;
