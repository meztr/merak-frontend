// import tw, { styled, css } from "twin.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function CoomingSoon({ post, children }) {
    const withTitle = post.title ? post.title : 'This page';
    const withImage = !post.image ? post.image : '/images/references/soon.png'; //"https://dummyimage.com/720x600"

    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
                    <img
                        className="object-cover object-center w-5/6 mb-10 rounded-lg shadow-lg lg:w-2/6 md:w-3/6"
                        alt="hero"
                        src={withImage}
                    />
                    <div className="flex flex-col items-center w-full mb-16 text-center md:w-2/3">
                        <h1 className="mb-4 font-serif text-xl text-gray-900 title-font sm:text-xl">
                            halaman {withTitle} will coming soon
                        </h1>
                        <Link href="/">
                            <a className="mt-10 font-mono text-indigo-600 hover:underline">
                                Kembali ke Beranda
                            </a>
                        </Link>
                        <div className="flex flex-wrap">{children}</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoomingSoon;
