import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/Header';
import mainTheme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <NextUIProvider theme={mainTheme}>
    <Header/>
   <Component {...pageProps} />
  </NextUIProvider>
 )
}

export default MyApp
