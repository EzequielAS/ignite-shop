import { X } from 'phosphor-react'
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
  const products = [
    {
      name: 'Camiseta Beyond the Limits',
      price: 'R$ 79,90'
    },
    {
      name: 'Camiseta Beyond the Limits',
      price: 'R$ 79,90'
    },
    {
      name: 'Camiseta Beyond the Limits',
      price: 'R$ 79,90'
    },
  ]

  return (
    <DialogContainer toggle={isOpen ? 'isOpen' : 'isClosed'}>
      <CloseButton onClick={toggleModal}>
        <X weight='bold' size={24} />
      </CloseButton>
      <h3>Sacola de compras</h3>

      <ProductsWrapper>
        {products.map(product => (
          <ProductCard key={product.name}>
            <ImageContainer>

            </ImageContainer>

            <InfosWrapper>
              <span>{product.name}</span>
              <b>{product.price}</b>
              <button>Remover</button>
            </InfosWrapper>
          </ProductCard>
        ))}
      </ProductsWrapper>

      <DetailsContainer>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>

        <div>
          <b>Valor total</b>
          <b>R$ 270,00</b>
        </div>

        <button>Finalizar compra</button>
      </DetailsContainer>
    </DialogContainer>
  )
}