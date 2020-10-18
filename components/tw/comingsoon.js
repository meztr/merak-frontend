// import tw, { styled, css } from "twin.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

function CoomingSoon({ post, children }) {
  const withTitle = post.title ? post.title : "This page";
  const withImage = !post.image ? post.image : "/images/references/soon.png"; //"https://dummyimage.com/720x600"

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src={withImage}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-xl text-xl mb-4 font-serif text-gray-900">
              halaman {withTitle} will coming soon
            </h1>
            <Link href="/">
              <a className="text-indigo-600 hover:underline font-mono mt-10">Kembali ke Beranda</a>
            </Link>
            <div className="flex flex-wrap">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoomingSoon
