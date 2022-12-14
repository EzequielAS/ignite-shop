import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import { useShop } from '../../context/ShopContext'
import { Header } from '../../components/Header'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'

import { 
  ImageContainer, 
  ProductContainer, 
  ProductDetails 
} from '../../styles/pages/product'


interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const titlePage = `${product.name} | Ignite Shop`
  const { handleAddProductToCart } = useShop()

  function addToCart() {
    handleAddProductToCart({
      id: product.id,
      imageUrl: product.imageUrl,
      defaultPriceId: product.defaultPriceId,
      name: product.name,
      price: product.price
    })
  }

  return (
    <>
      <Head>
        <title>{titlePage}</title>
      </Head>

      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button 
            onClick={addToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}