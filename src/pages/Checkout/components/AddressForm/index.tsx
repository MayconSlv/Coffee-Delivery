import { AddressFormContainer } from './styles'
import { AddressFormInputs } from './AddressForm'
import { PaymentMethod } from '../PaymentMethod'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressFormInputs />
      <PaymentMethod />
    </AddressFormContainer>
  )
}
