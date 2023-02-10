import { CoffeeCartCard } from '../CoffeCartCard'
import { SubmitCoffees } from './SubmitCoffees'
import { CoffeeCartContainer, SelectedCoffees } from './sytles'

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <h2>Cafés selecionados</h2>
      <SelectedCoffees>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <SubmitCoffees />
      </SelectedCoffees>
    </CoffeeCartContainer>
  )
}
