import Header from 'components/Header'
import Haydar from 'components/layout/Haydar'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo'
import ContextWrapper from 'components/ContextWrapper'
// import { appWithTranslation } from '../i18n'
import Router from 'next/router'
import { parseCookies } from 'nookies'

/**
 * FontAwesome call all library 
 * ? Cari riset ttg optimization fontawesome with library
 * TODO: FontAwesome optimize leak
 */
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import SEO from '../next-seo-config'

// library.add(fab, faCoffee)

function MyApp({ Component, pageProps, navigation }) {
    // console.log(navigation)

    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {/* <Header navigation={navigation} /> */}
                <ContextWrapper navigation={navigation}>
                    {/* <Header /> */}
                    <Haydar />
                </ContextWrapper>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {}
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    if (!jwt) {
        if (ctx.pathname === '/admisi') {
            redirectUser(ctx, '/login')
        }

        if (ctx.pathname === '/add-artikel') {
            redirectUser(ctx, '/login')
        }
    }

    return { 
        pageProps,
        navigation
    }
}

// export default appWithTranslation(MyApp)
export default MyApp