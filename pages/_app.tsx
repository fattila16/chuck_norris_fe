import type { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar/Navbar';
import Banner from '../src/components/Banner/Banner';
import React from 'react';
// https://github.com/zeit/next.js/issues/5291
import css from '../src/assets/scss/app.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <header>
                <Navbar />
                <Banner />
            </header>
            <main className={css.main}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
