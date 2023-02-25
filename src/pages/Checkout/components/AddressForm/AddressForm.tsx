import { AddressTitle } from '../AddressTitle'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'

import { MapPin } from 'phosphor-react'
import { AddressCardContainer, InputsLayout } from './styles'
import { Input } from '../../../../components/Input/index'

export function AddressFormInputs() {
  const { colors } = useTheme()
  const { register, setValue } = useFormContext()

  const checkCEP = (event: any) => {
    const cep = event.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('street', data.logradouro)
        setValue('neighbor', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
      })
  }

  return (
    <AddressCardContainer>
      <AddressTitle
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPin size={22} color={colors['yellow-dark']} />}
      />

      <InputsLayout>
        <Input
          type="text"
          className="cep"
          placeholder="CEP"
          {...register('cep')}
          onBlur={checkCEP}
        />
        <Input
          type="text"
          className="street"
          placeholder="Rua"
          {...register('street')}
        />
        <Input type="number" placeholder="Número" {...register('number')} />
        <Input
          type="text"
          className="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
        <Input type="text" placeholder="Bairro" {...register('neighbor')} />
        <Input type="text" placeholder="Cidade" {...register('city')} />
        <Input type="text" placeholder="UF" {...register('uf')} />
      </InputsLayout>
    </AddressCardContainer>
  )
}
