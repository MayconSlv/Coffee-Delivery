import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FormContainer, PaymentMethod } from './style'
import { AddressForm } from './components/Address'

export function Checkout() {
  return (
    <FormContainer className='container'>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressForm />
      </div>

      <PaymentMethod>
        <div>
          <h4>
            <CurrencyDollar /> Pagamento
          </h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </div>

        <ul>
          <li>
            <CreditCard />
            CARTÃO DE CREDITO
          </li>
          <li>
            <Bank />
            CARTÃO DEDEBITO
          </li>
          <li>
            <Money />
            DINHEIRO
          </li>
        </ul>
      </PaymentMethod>
    </FormContainer>
  )
}
