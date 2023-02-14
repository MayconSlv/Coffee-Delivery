import { CurrencyDollar } from 'phosphor-react'
import { AddressTitle } from '../AddressTitle'
import { PaymentMethodContainer } from './styles'
import { useTheme } from 'styled-components'
import { PaymentInput } from './PaymentInput'

export function PaymentMethod() {
  const { colors } = useTheme()

  return (
    <PaymentMethodContainer>
      <AddressTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar size={22} color={colors['base-purple']} />}
      />
      <div>
        <PaymentInput />
        <PaymentInput />
        <PaymentInput />
      </div>
    </PaymentMethodContainer>
  )
}
