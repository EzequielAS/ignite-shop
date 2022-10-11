import Image from 'next/future/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { useShop } from '../../context/ShopContext'
import axios from 'axios'

import { 
  DialogContainer, 
  ProductCard, 
  ImageContainer,
  InfosWrapper,
  CloseButton,
  ProductsWrapper,
  DetailsContainer
} from './styles'

interface CartModalProps {
  isOpen: boolean
  toggleModal: () => void
}

export function CartModal({ isOpen, toggleModal }: CartModalProps) {
  const { products, handleRemoveProductFromCart } = useShop()
  const [isCreatingCheckoutSession ,setIsCreatingCheckoutSession] = useState(false)
  const totalPrice = products.reduce((acc, product) => {
    const priceSanitized = Number(product.price.slice(2).replace(',', '.'))
    return acc + priceSanitized
  }, 0)

  async function handleBuyProducts() {
    const defaultPricesId = products.map(product => {
      return product.defaultPriceId
    })

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        pricesId: defaultPricesId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <DialogContainer toggle={isOpen ? 'isOpen' : 'isClosed'}>
      <CloseButton onClick={toggleModal}>
        <X weight='bold' size={24} />
      </CloseButton>
      <h3>Sacola de compras</h3>

      <ProductsWrapper>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <Image src={product.imageUrl} width={100} height={93} alt="" />
            </ImageContainer>

            <InfosWrapper>
              <span>{product.name}</span>
              <b>{product.price}</b>
              <button 
                onClick={() => {
                  handleRemoveProductFromCart(product.id)
                }}
              >
                Remover
              </button>
            </InfosWrapper>
          </ProductCard>
        ))}
      </ProductsWrapper>

      <DetailsContainer>
        <div>
          <span>Quantidade</span>
          <span>{products.length} itens</span>
        </div>

        <div>
          <b>Valor total</b>
          <b>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice)}
          </b>
        </div>

        <button
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProducts}
        >
          Finalizar compra
        </button>
      </DetailsContainer>
    </DialogContainer>
  )
}