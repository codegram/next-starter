import { ReactElement } from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
