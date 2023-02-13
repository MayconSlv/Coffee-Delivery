import { useContext } from 'react'
import { CoffeeCartCard } from '../CoffeCartCard'
import { SubmitCoffees } from './SubmitCoffees'
import { CoffeeCartContainer, SelectedCoffees } from './sytles'
import { CartContext } from '../../../../contexts/cartContext'

export function CoffeeCart() {
  const { cartItems } = useContext(CartContext)

  return (
    <CoffeeCartContainer>
      <h2>Cafés selecionados</h2>
      <SelectedCoffees>
        {cartItems.map((cartItem) => (
          <CoffeeCartCard key={cartItem.id} cartItem={cartItem} />
        ))}
        <SubmitCoffees />
      </SelectedCoffees>
    </CoffeeCartContainer>
  )
}
