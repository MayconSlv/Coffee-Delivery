import { AddressTitle } from '../AddressTitle'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'

import { MapPin } from 'phosphor-react'
import { AddressCardContainer, InputsLayout } from './styles'

export function AddressFormInputs() {
  const { colors } = useTheme()
  const { register, setValue } = useFormContext()

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
        <input
          type="text"
          className="cep"
          placeholder="CEP"
          onBlur={checkCEP}
        />
        <input
          type="text"
          className="street"
          placeholder="Rua"
          {...register('street')}
        />
        <input type="number" placeholder="Número" {...register('number')} />
        <input
          type="text"
          className="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
        <input type="text" placeholder="Bairro" {...register('neighbor')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('uf')} />
      </InputsLayout>
    </AddressCardContainer>
  )
}
