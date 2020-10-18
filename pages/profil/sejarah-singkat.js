import { NextSeo } from 'next-seo'
import PageLayout from 'components/tw/generalLayout'

const SejarahData = {
    id: `101`,
    hero: {
        title: `Sejarah SMK Muhammadiyah Sampit`,
        deskripsi: `Semangat Pengabdian Meniti Jalan Meraih Kesuksesan. Perjalanan dari tahun ke tahun SMK Muhammadiyah Sampit`,
    },
    contents: [
        {
            id: `1011`,
            title: `1983 - Cikal Bakal`,
            deskripsi: `SMK Muhammadiyah Sampit diawali dengan berdirinya SPG Muhammadiyah (Sekolah Pendidikan Guru) Muhammadiyah pada tahun 1983.
            Pada saat awalnya SPG Muhammadiyah Sampit berlokasi di Jl. Sukabumi Gang Madrasah. Dan pada saat itu Jabatan Kepala Sekolah dipegang oleh Bapak Drs.Abdurrahim Dahib.
            `,
        },
        {
            id: `1012`,
            title: `1984 - SMPSM Muhammadiyah`,
            deskripsi: `Dengan terbitnya peraturan mendiknas bahwa SPG (Sekolah Pendidikan Guru) akan ditutup, 
            maka pada tahun 1984 SPG Muhammadiyah berubah nama menjadi SMPSM 
            (Sekolah Menengah Pekerjaan Sosial Muhammadiyah ) yang menerapkan sistem program belajar 4 tahun 
            dengan satu Jurusan utama, yaitu Pembangunan Masyarakat Desa. 
            Kemudian seiring dengan bertambahnya jumlah siswa, maka gedung sekolah dipindahkan ke 
            Jalan Padat Karya (sebelah Barat lapangan sepak bola), Kelurahan Baamang Hilir, Kecamatan Baamang, 
            Kabupaten Kotawaringin Timur.
            `,
        },
        {
            id: `1013`,
            title: `1987 - Pengamanahan ke Bpk Nurdin Kazub `,
            deskripsi: `Selanjutnya, pada tahun 1987 jabatan Kepala Sekolah di amanahkan kepada Bapak Nurdin Kazub, B.Sw, SH
            `,
        },
        {
            id: `1014`,
            title: `1989 - Perubahan Nama menjadi SMK`,
            deskripsi: `
            Pada Tahun 1989 terjadi perubahan nama dari SMPSM menjadi SMK Muhammadiyah Sampit, dengan satu Jurusan utama, yaitu Pekerjaan Sosial.
            `
        },
        {
            id: `1015`,
            title: `1991 - Pengamanahan ke Bpk Sirojuddin`,
            deskripsi: `
            Pada Tahun 1991 amanah jabatan Kepala Sekolah SMK Muhammadiyah Sampit diteruskan oleh Bapak Sirojuddin Noor,BA, S.pd, MM.
            `
        },
        {
            id: `1016`,
            title: `2001 - Jurusan Administrasi Perkantoran`,
            deskripsi: `
            Pada Tahun 2001, SMK Muhammadiyah mulai menyesuaikan diri dengan perkembangan perubahan kebutuhan minat, 
            jasa & animo masyarakat, maka SMK Muhammadiyah Sampit pada tahun itu merubah jurusannya menjadi 
            Administrasi Perkantoran dan dikarenakan untuk alasan keamanan, maka gedung sekolah dipindahkan 
            kembali menuju jalan S. Parman dan jabatan Kepala Sekolah diteruskan oleh Bapak Drs. H M.Yusuf.
            `
        },
        {
            id: `1017`,
            title: `2002 - Pengamanahan ke Bpk Drs. Hamdi`,
            deskripsi: `
            Pada Tahun 2002 jabatan kepala sekolah dipegang oleh Bapak Drs. Hamdi, dengan menggunakan lokasi dan jurusan yang masih sama.
            `
        },
        {
            id: `1018`,
            title: `2005 - Program Studi Baru Teknologi Informasi - TKJ`,
            deskripsi: `
            Pada Tahun 2005 dibukalah jurusan baru program pendidikan TI (Teknologi Informasi) dengan program keahlian TKJ (Tehnik Komputer & jaringan ). Pada saat ini Jabatan kepala sekolah dipegang oleh Bapak Drs. Muhammad Guntur, MM.
            `
        },
        {
            id: `1019`,
            title: `2007 - Jalan Merak No. 47`,
            deskripsi: `
            Terakhir Pada Tahun 2007 Kegiatan belajar mengajar di SMK Muhammadiyah Sampit, 
            dikembalikan ke gedung lama, yaitu di Jalan merak No.47 sampai sekarang (saat berita ini dimuat). 
            `
        },
        {
            id: `1020`,
            title: `2010 - Pengamanahan ke Ibu Dra. Lismayani`,
            deskripsi: `
            Selanjutnya di penghujung tahun 2010 Kepala SMK Muhammadiyah Sampit diamanahkan 
            oleh Majelis Pendidikan Dasar dan Menengah Muhammadiyah Kotawaringin Timur 
            kepada Ibu Dra. Lismayani.
            `
        },
        {
            id: `1021`,
            title: `2014 - Pengamanahan ke Bpk Ushuludin Noor, SH`,
            deskripsi: `
            Pada tahun 2014 Kepala SMK Muhammadiyah Sampit diamanahkan 
            oleh Majelis Pendidikan Dasar dan Menengah Muhammadiyah Kotawaringin Timur 
            kepada Bpk Ushuludin Noor, SH.
            `
        },
        {
            id: `1022`,
            title: `2019 - Pengamanahan ke Bpk Drs. Tahlirudin`,
            deskripsi: `
            Pada tahun 2019 Kepala SMK Muhammadiyah Sampit diamanahkan 
            oleh Majelis Pendidikan Dasar dan Menengah Muhammadiyah Kotawaringin Timur 
            kepada Bpk Drs. Tahlirudin.
            `
        },
    ]
}

function SejarahSingkat() {
    const SEO = {
        title: `SMK Muhammadiyah Sampit | Profil`,
        description: 'Sejarah singkat SMK Muhammadiyah Sampit',

        openGraph: {
            title: `SMK Muhammadiyah Sampit | Profil`,
            description: 'Sejarah singkat SMK Muhammadiyah Sampit',
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <PageLayout post={SejarahData} />
        </>
    )
}

export default SejarahSingkat