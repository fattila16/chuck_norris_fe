/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/normalize.css" />
                </Head>
                <body dir="ltr" style={{ background: '#fefae0' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
