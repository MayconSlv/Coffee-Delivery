import { InputContainer, ContentContainer } from './styles'
import { InputHTMLAttributes, ReactNode } from 'react'

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export function PaymentInput({ id, icon, label, ...props }: PaymentInputProps) {
  return (
    <InputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </InputContainer>
  )
}
