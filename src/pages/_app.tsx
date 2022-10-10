import { AppProps } from 'next/app'
import { useState } from 'react'
import Image from 'next/future/image'
import logo from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { CartModal } from '../components/CartModal'

import { Container, Header, ShopButton } from '../styles/pages/app'
import { globalStyles } from '../styles/global'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleToggleModal() {
    setIsOpenModal(state => !state)
  }

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>

        <ShopButton onClick={handleToggleModal}>
          <Handbag weight='bold' size={24} />
        </ShopButton>

        <CartModal 
          isOpen={isOpenModal} 
          toggleModal={handleToggleModal}
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
