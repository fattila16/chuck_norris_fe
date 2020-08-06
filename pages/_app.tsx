import type { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar/Navbar';
import Banner from '../src/components/Banner/Banner';
import Head from 'next/head';
import React from 'react';
// https://github.com/zeit/next.js/issues/5291
import css from '../src/assets/scss/app.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <div>
            <Head>
                <title>Chuck Norris Random Facts</title>
                <meta
                    name="description"
                    content="Chuck Norris Random Facts. Get your daily dose of Chuck Norris. Backed by chucknorris.io"
                />
                <link rel="canonical" href="https://chuck-norris-fe.vercel.app" />
                <meta property="og:type" content="facts" />
                <meta property="og:title" content="Chuck Norris Random Facts" />
                <meta
                    property="og:description"
                    content="Chuck Norris Random Facts. Get your daily dose of Chuck Norris. Backed by chucknorris.io"
                />
                <meta property="og:image" content="https://i.ytimg.com/vi/X2b2JHlD-mY/maxresdefault.jpg" />
                <meta property="og:url" content="https://chuck-norris-fe.vercel.app" />
            </Head>
            <header>
                <Navbar />
                <Banner />
            </header>
            <main className={css.main}>
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;
