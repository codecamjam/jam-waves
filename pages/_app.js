import '@/styles/globals.scss';
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import { useEffect } from 'react';
import { getAppHeight } from '@/utils/getAppHeight.utils';
import BackgroundVideo from '@/components/ui/background-video';
import { preventResizeAnime } from '@/utils/preventResizeAnime.utils';

function MyApp({ Component, pageProps }) {
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

export default MyApp;
