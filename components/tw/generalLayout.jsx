import tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function generalLayout({ post, children }) {
    return (
        <>
            {/* wrapper */}
            <section className="text-gray-700 body-font">
                {/* hero */}
                <div className="container px-5 py-24 mx-auto">
                    {/* 1.1 */}
                    <div className="flex flex-col w-full mb-20 text-center">
                        {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2> */}
                        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                            {post.hero.title}
                        </h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                            {post.hero.deskripsi}
                        </p>
                    </div>
                    {/* contents */}
                    <div className="flex-wrap fex">
                        {/* check dulu jika ada array di deskripsi contents */}
                        {!!post.contents.length &&
                            post.contents.map((item) => (
                                <div
                                    key={item.id}
                                    className="px-8 py-6 border-l-2 border-gray-200 md:w-full">
                                    <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                                        {item.title}
                                    </h2>
                                    <div className="flex flex-col w-auto">
                                        {Array.isArray(item.deskripsi) == 0 ? (
                                            <p className="mb-4 text-base leading-relaxed">
                                                {item.deskripsi}
                                            </p>
                                        ) : (
                                            item.deskripsi.map((subitem) => (
                                                <div key={subitem.id} className="flex flex-row m-2">
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        className="mt-1 mr-3"
                                                    />
                                                    <p className="mb-4 text-base leading-relaxed">
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
