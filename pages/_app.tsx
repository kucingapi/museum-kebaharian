/* eslint-disable @next/next/no-head-element */

import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
