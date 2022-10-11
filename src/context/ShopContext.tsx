import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

interface CartProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

type ShopContextData = {
  products: CartProductProps[]
  handleAddProductToCart: (product: CartProductProps) => void;
  handleRemoveProductFromCart: (id: string) => void
}

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext({} as ShopContextData)

export function ShopProvider({ children }: ShopProviderProps) {
  const [products, setProducts] = useState<CartProductProps[]>([])

  const handleAddProductToCart = useCallback((product: CartProductProps) => {
    const isProductAlreadyAdded = products.some(prdct => prdct.id === product.id)

    if (isProductAlreadyAdded) return

    setProducts(state => [...state, product])
  }, [products])

  const handleRemoveProductFromCart = useCallback((id: string) => {
    setProducts(state => state.filter(prdct => prdct.id !== id))
  }, [])

  return(
    <ShopContext.Provider value={{ 
        products,
        handleAddProductToCart,
        handleRemoveProductFromCart
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext);

  if(!context) {
      throw new Error('useShop must be used within an ShopProvider');
  }

  return context;
}