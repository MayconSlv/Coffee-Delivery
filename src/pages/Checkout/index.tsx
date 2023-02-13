import { FormContainer } from './style'
import { AddressForm } from './components/AddressForm'
import { CoffeeCart } from './components/CoffeesCarts'

export function Checkout() {
  return (
    <FormContainer className="container">
      <div>
        <AddressForm />
      </div>

      <CoffeeCart />
    </FormContainer>
  )
}
