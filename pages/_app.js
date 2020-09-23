import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
// import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo-config'

function MyApp({ Component, pageProps, navigation }) {
    // console.log(navigation)

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {/* <Head>
                    <title>SMK Muhammadiyah Sampit</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head> */}
                <Header navigation={navigation} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    return { navigation }
}

export default MyApp
