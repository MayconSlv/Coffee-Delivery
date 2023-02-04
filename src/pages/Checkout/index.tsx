import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { FormContainer, PaymentMethod } from './style'

export function Checkout() {
  return (
    <>
      <h1>Complete seu pedido</h1>
      <FormContainer action='POST'>
        <h2>
          <MapPin size={22} />
          Endereço de entrega
        </h2>
        <p>Informe o endereço onde deseja receber o pedido</p>

        <input type='text' placeholder='CEP' />
        <input type='text' placeholder='RUA' />
        <div>
          <input type='text' placeholder='Número' />
          <input type='text' placeholder='Complemento' />
        </div>

        <div>
          <input type='text' placeholder='Bairro' />
          <input type='text' placeholder='Cidade' />
          <input type='text' placeholder='UF' />
        </div>
      </FormContainer>

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
    </>
  )
}
