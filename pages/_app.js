
import { useEffect } from 'react';
import Head from 'next/head';
import { BackgroundVideo, Layout } from '@/components';
import { getAppHeight, preventResizeAnime } from '@/utils';
import '@/styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    getAppHeight();
    preventResizeAnime();
  }, []);

  return (
    <>
      <Head>
        <title>Toys From Taiwan</title>{' '}
      </Head>
      <div className="app">
        <BackgroundVideo />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
