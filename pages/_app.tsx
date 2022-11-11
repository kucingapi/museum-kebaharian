/* eslint-disable @next/next/no-head-element */
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Footer } from '../components/homepage/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  );
}

export default MyApp;
