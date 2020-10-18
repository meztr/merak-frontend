import { NextSeo } from 'next-seo'
import PageLayout from 'components/tw/generalLayout'

const VisiMisiData = {
    id: `101`,
    hero: {
        title: `Visi & Misi SMK Muhammadiyah Sampit`,
        deskripsi: `Demi terwujudnya sekolah yang bermartabat, berkualitas dan terpercaya`,
    },
    contents: [
        {
            id: `1011`,
            title: `Visi SMK`,
            deskripsi: `Menjadikan penyelenggara pendidikan berkualitas dan terpercaya.`,
        },
        {
            id: `1012`,
            title: `Misi SMK`,
            deskripsi: [
                {
                    id: `10121`,
                    title: `Mewujudkan tata kelola, sistem pengendalian manajemen, dan sistem.pengawasan internal yang modern, efektif, dan efesien`,
                },
                {
                    id: `10122`,
                    title: `Menyalurkan dan Mendukung kreativitas peserta didik dengan sarana dan prasarana yang lengkap.`,
                },
                {
                    id: `10123`,
                    title: `Mewujudkan budaya religi, jujur, disiplin, beretika, berestetika, pekerja keras, kreatif, inovatif, kompetitif, dan berkualitas.`,
                },
                {
                    id: `10124`,
                    title: `Mewujudkan dinamisasi peningkatan kualitas pendidikan barkarakter yang berkesinambungan dan berkelanjutan.`,
                },
                {
                    id: `10125`,
                    title: `Mewujudkan produk kompetensi keahlian bernilai Jual Pasar Global.`,
                },
                {
                    id: `10126`,
                    title: `Memperluas akses kemitraan dunia kerja yang menjamin lapangan kerja dan prakerin bagi peserta didik dan lulusan SMK Muhammadiyah Sampit.`,
                },
                {
                    id: `10127`,
                    title: `Mewujudkan jiwa entrepreneurshing kuat yang mampu meningkatkan kualitas hidup civitas akademika SMK Muhammadiyah Sampit.`,
                },
            ]
        }
    ]
}

function VisiMisi() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Visi Misi SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Visi Misi SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <PageLayout post={VisiMisiData} />
        </>
    )
}

export default VisiMisi