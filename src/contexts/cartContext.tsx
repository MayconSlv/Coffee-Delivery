import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  coffesCartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCoffeeQuantity: (
    cartItemid: number,
    type: 'incress' | 'decress',
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const coffesCartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
    console.log(cartItems)
  }

  function changeCoffeeQuantity(
    cartItemId: number,
    type: 'incress' | 'decress',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const existInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (existInCart >= 0) {
        const item = draft[existInCart]
        draft[existInCart].quantity =
          type === 'incress' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        coffesCartQuantity,
        changeCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
