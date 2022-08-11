import { createContext, ReactNode, useContext, useState } from 'react'

export type ShoppingCardProviderType = {
  children: ReactNode
}

type ShoppingCartContextType = {
  getItemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
}

type CartItem = {
  id: string
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCardProviderType) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])


  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  const increaseCartQuantity = (id: string) => {
    setCartItems((current) => {
      if (current.find(val => val.id === id) === undefined ) {
        console.log([...current, { id, quantity: 1 }])
        return [...current, { id, quantity: 1 }]
      }
     return current.map((val) => {
       if (val.id === id) {
          return { ...val, quantity: val.quantity ++ }
        }
        return val
      })
    })
  }

  const decreaseCartQuantity = (id: string) => {
    setCartItems((current) => {
      if (current.find(val => val.id === id)?.quantity === 1 ) {
        return current.filter((val) => val.id !== id)
      }
      return current.map((val) => {
       if (val.id === id) {
          return { ...val, quantity: val.quantity -- }
        }
        return val
      })
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems(current => {
      return current.filter((val) => val.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}

