import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function visimisiLayout({ post, children }) {
    return (
        <>
            {/* wrapper */}
            <section className="text-gray-700 body-font">
                {/* hero */}
                <div className="container px-5 py-24 mx-auto">
                    {/* 1.1 */}
                    <div className="flex flex-col w-full mb-20 text-center">
                        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                            Visi &amp; Misi SMK Muhammadiyah Sampit
                        </h1>
                    </div>
                    {/* contents */}
                    <div className="flex-wrap fex">
                        {/* check dulu jika ada array di deskripsi contents */}
                        <div className="px-8 py-6 border-l-2 border-gray-200 md:w-full">
                            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                                {post.title} SMK
                            </h2>
                            <div className="flex flex-col w-auto">
                                <p className="mb-4 text-base leading-relaxed">{post.deskripsi}</p>
                            </div>
                        </div>

                        <div className="px-8 py-6 border-l-2 border-gray-200 md:w-full">
                            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
                                Misi SMK
                            </h2>
                            {!!post.misis.length &&
                                post.misis.map((item) => (
                                    <div key={item.id} className="flex flex-row m-2">
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            className="mt-1 mr-3"
                                        />
                                        <p className="mb-4 text-base leading-relaxed">
                                            {item.deskripsi}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap">{children}</div>
                </div>
            </section>
        </>
    );
}

export default visimisiLayout;
