import { CreditCard } from 'phosphor-react'
import { InputContainer, PaymentInputContainer } from './styles'

export function PaymentInput() {
  return (
    <PaymentInputContainer>
      <InputContainer>
        <CreditCard size={16} />
        CARTÃO DE CRÉDITO
      </InputContainer>
    </PaymentInputContainer>
  )
}
