import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Image from 'next/future/image'
import Link from 'next/link'
import Head from 'next/head'
import Stripe from 'stripe'
import { Logo } from '../components/Logo'

import { 
  ImageContainer, 
  SuccessContainer, 
  ImagesWrapper, 
} from '../styles/pages/success'

interface ProductSuccess {
  name: string
  imageUrl: string
  id: string
}

interface SuccessProps {
  customerName: string
  products: ProductSuccess[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content='noindex' />
      </Head>

      <SuccessContainer>
        <Logo />

        <ImagesWrapper>
          {products.map((product, index) => (
            <ImageContainer 
              key={product.id}
              css={index > 0 && { marginLeft: '-4.21rem' }}
            >
              <Image 
                src={product.imageUrl} 
                width={135} 
                height={135} 
                alt="" 
              />
            </ImageContainer>
          ))}
        </ImagesWrapper>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul, <strong>{customerName}</strong>, sua compra de <strong>{products.length}</strong> camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data.map((product) => {
    const productStripe = product.price.product as Stripe.Product

    return {
      name: productStripe.name,
      imageUrl: productStripe.images[0],
      id: productStripe.id
    }
  })

  return {
    props: {
      customerName, 
      products
    }
  }
}
