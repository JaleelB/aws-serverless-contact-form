import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat'
})

const clashdiplay = localFont({
  src: '../fonts/ClashDisplay-Medium.ttf',
  variable: '--font-clash-display'
})

export default function App({ Component, pageProps }: AppProps) {
 
  return  (
    <main className={`${clashdiplay.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
