import { NextSeo } from 'next-seo';

function About() {
    const SEO = {
        title: 'About SMK Muhammadiyah Sampit',
        description: 'Profil tentang SMK Muhammadiyah Sampit',

        openGraph: {
            title: 'About SMK Muhammadiyah Sampit',
            description: 'Profil tentang SMK Muhammadiyah Sampit'
        }
    };

    return (
        <>
            <NextSeo {...SEO} />
            <h1>'I am an about page'</h1>
        </>
    );
}

export default About;
