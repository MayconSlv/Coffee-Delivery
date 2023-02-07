import { MapPin } from 'phosphor-react'
import { AddressTitle } from '../AddressTitle'
import { AddressFormContainer, InputsLayout } from './styles'
import { useTheme } from 'styled-components'

export function AddressForm() {
  const { colors } = useTheme()

  return (
    <AddressFormContainer>
      <AddressTitle
        title='Endereço de entrega'
        subtitle='Informe o endereço onde deseja receber seu pedido'
        icon={<MapPin size={22} color={colors['yellow-dark']} />}
      />

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
