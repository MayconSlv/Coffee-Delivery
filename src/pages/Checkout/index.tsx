/* eslint-disable no-unused-vars */
import { FormContainer } from './style'
import { AddressForm } from './components/AddressForm'
import { CoffeeCart } from './components/CoffeesCarts'

import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighbor: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.nativeEnum(PaymentMethods),
})

export type formData = zod.infer<typeof addressFormValidationSchema>

type AddressFormData = formData

export function Checkout() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { handleSubmit } = addressForm
  const navigate = useNavigate()

  function handleConfirmForm(data: AddressFormData) {
    navigate('/Success', {
      state: data,
    })
  }

  return (
    <FormProvider {...addressForm}>
      <FormContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmForm)}
      >
        <AddressForm />
        <CoffeeCart />
      </FormContainer>
    </FormProvider>
  )
}
