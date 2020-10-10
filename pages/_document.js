import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Important step to normalize web browser css */}
                    {/* disable due to tailwind */}
                    {/* <link rel="stylesheet" type="text/css" href="/styles/reset.min.css" /> */}
                    <link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                    
                    {/* <script type="text/javascript" src="/scripts/tawkto.js" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
