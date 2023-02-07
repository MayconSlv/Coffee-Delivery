import { AddressFormContainer, InputsLayout } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
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
