import { InputContainer, ContentContainer } from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentInput = forwardRef<HTMLInputElement, PaymentInputProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <InputContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </InputContainer>
    )
  },
)
