import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, Spacer } from '@nextui-org/react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import mainTheme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <NextUIProvider theme={mainTheme}>
   <div id='header'/>
   <Header />
   <Component {...pageProps}/>
   <Footer/>
  </NextUIProvider>
 )
}

export default MyApp
