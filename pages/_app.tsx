import type { AppProps } from 'next/app';

import '@/styles/global.scss';
import Head from 'next/head';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;