import tw, { styled, css } from 'twin.macro';
import { NextSeo } from 'next-seo';

function Galeri() {
    return (
        <>
            <section className="text-gray 700 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">
                            Galeri Photo
                        </h1>
                        <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                            heard of them man bun deep jianbing selfies heirloom.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/500x300"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/501x301"
                                />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/600x360"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/601x361"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/502x302"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block object-cover object-center w-full h-full"
                                    src="https://dummyimage.com/503x303"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Galeri;
