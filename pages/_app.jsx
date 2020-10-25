// import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming';

// import tailwind global css
import '../styles/tailwind.css';
import { GlobalStyles } from 'twin.macro';
import theme from '../theme/theme.js';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { DefaultSeo } from 'next-seo';
import ContextWrapper from 'components/ContextWrapper';
// import { appWithTranslation } from '../i18n'   // onhold multi language feature
import Router from 'next/router';
import { parseCookies } from 'nookies';
import NProgress from 'nprogress';
// import Haydar from "components/layout/Haydar";
import Navbar from 'components/layout/Navbar';
import Layout from 'components/layout/Layout';

/**
 * FontAwesome call all library
 * ? Cari riset ttg optimization fontawesome with library
 * TODO: FontAwesome optimize leak
 */
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import SEO from '../next-seo-config';

// library.add(fab, faCoffee)

// NProgress routine
Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false }); // disable NProgress spinner style

function MyApp({ Component, pageProps, navigation, konten }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {/* <Header navigation={navigation} /> */}
                <ContextWrapper navigation={navigation} konten={konten}>
                    {/* <Header /> */}
                    {/* <Haydar /> */}
                    <Navbar transparent />
                </ContextWrapper>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

const { publicRuntimeConfig } = getConfig();

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    const jwt = parseCookies(ctx).jwt;

    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations?_sort=id:ASC`);
    const navigation = await res.json();

    const reskonten = await fetch(`${publicRuntimeConfig.API_URL}/kontens?_sort=id:ASC`);
    const konten = await reskonten.json();

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    if (!jwt) {
        // if (ctx.pathname === "/admisi") {
        //   redirectUser(ctx, "/login");
        // }

        if (ctx.pathname === '/add-artikel') {
            redirectUser(ctx, '/login');
        }
    }

    return {
        pageProps,
        navigation,
        konten
    };
};

// export default appWithTranslation(MyApp)
export default MyApp;
