import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  coffesCartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeById: (coffeeId: number) => void
  changeCoffeeQuantity: (
    cartItemid: number,
    type: 'incress' | 'decress',
  ) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_STORAGE_KEY = 'coffeeDelivery:CartItem'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const coffesCartQuantity = cartItems.reduce((acumulator, total) => {
    return acumulator + total.quantity
  }, 0)

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

  function removeCoffeeById(coffeeId: number) {
    const newCoffeesWithoutCoffeeDeleted = cartItems.filter((coffee) => {
      return coffee.id !== coffeeId
    })

    setCartItems(newCoffeesWithoutCoffeeDeleted)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        coffesCartQuantity,
        changeCoffeeQuantity,
        removeCoffeeById,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
