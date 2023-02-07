import { FormContainer } from './style'
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'

export function Checkout() {
  return (
    <FormContainer className='container'>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentMethod />
      </div>
    </FormContainer>
  )
}
