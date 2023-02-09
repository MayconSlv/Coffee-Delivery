import { CoffeeCartCard } from './CoffeCartCard'
import { CoffeeCartContainer, SelectedCoffees } from './sytles'

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <h2>Cafés selecionados</h2>
      <SelectedCoffees>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </SelectedCoffees>

      <button>fasduhfsu</button>
    </CoffeeCartContainer>
  )
}
