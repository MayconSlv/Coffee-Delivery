import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { AddressTitle } from '../AddressTitle'
import { PaymentMethodContainer } from './styles'
import { useTheme } from 'styled-components'
import { PaymentInput } from './PaymentInput'
import { useFormContext } from 'react-hook-form'

const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethod() {
  const { colors } = useTheme()
  const { register } = useFormContext()

  return (
    <PaymentMethodContainer>
      <AddressTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar size={22} color={colors['base-purple']} />}
      />
      <div>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </div>
    </PaymentMethodContainer>
  )
}
