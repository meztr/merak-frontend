import { Box, Flex } from 'reflexbox';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';

function Artikel({ artikel }) {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | ${artikel.title}`,
        description: artikel.deskripsi,

        openGraph: {
            title: `SMK Muhammadiyah Sampit | ${artikel.title}`,
            description: artikel.deskripsi
        }
    };

    return (
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" my={40}>
                    {artikel.title}
                </Box>
                {artikel.image && <img src={artikel.image.url} alt={artikel.image.name} />}

                {artikel.deskripsi && (
                    <Box py={10} maxWidth={600}>
                        <p dangerouslySetInnerHTML={{ __html: artikel.deskripsi }} />
                    </Box>
                )}

                {artikel.content && (
                    <Box py={40}>
                        <p dangerouslySetInnerHTML={{ __html: artikel.content }} />
                    </Box>
                )}
            </Box>
        </>
    );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
    const { slug } = context.query;
    // const res = await fetch(`${publicRuntimeConfig.API_URL}/artikels/${slug}`)
    const res = await fetch(`${publicRuntimeConfig.API_URL}/artikels?slug=${slug}`);
    const data = await res.json();
    console.log(context);
    return {
        props: {
            artikel: data[0]
        }
    };
}

export default Artikel;
