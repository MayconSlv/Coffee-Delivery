import { MapPin } from 'phosphor-react'
import { AddressFormContainer, AddressFormTitle, InputsLayout } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <AddressFormTitle>
        <MapPin size={22} />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber o seu pedido</span>
        </div>
      </AddressFormTitle>

      <InputsLayout>
        <input type='text' className='cep' placeholder='CEP' />
        <input type='text' className='street' placeholder='RUA' />
        <input type='number' placeholder='Número' />
        <input type='text' className='complement' placeholder='Complemento' />
        <input type='text' placeholder='Bairro' />
        <input type='text' placeholder='Cidade' />
        <input type='text' placeholder='UF' />
      </InputsLayout>
    </AddressFormContainer>
  )
}
