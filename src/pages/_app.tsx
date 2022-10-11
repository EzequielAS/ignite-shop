import { AppProps } from 'next/app'
import { ShopProvider } from '../context/ShopContext'

import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ShopProvider>
  )
}
