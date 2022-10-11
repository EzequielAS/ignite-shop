import { useState } from 'react'
import { CartModal } from '../CartModal'
import { Handbag } from 'phosphor-react'
import { useShop } from '../../context/ShopContext'
import { Logo } from '../Logo'

import { HeaderContainer, ShopButton } from './styles'

export function Header() {
  const { products } = useShop()
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleToggleModal() {
    setIsOpenModal(state => !state)
  }

  return (
    <HeaderContainer>
      <Logo />

      <ShopButton onClick={handleToggleModal}>
        {products.length > 0 && <span>{products.length}</span>}
        <Handbag weight='bold' size={24} />
      </ShopButton>

      <CartModal 
        isOpen={isOpenModal} 
        toggleModal={handleToggleModal}
      />
    </HeaderContainer>
  )
}