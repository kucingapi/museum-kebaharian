/* eslint-disable @next/next/no-head-element */
import { Roboto } from '@next/font/google';
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'] });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
