import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { InfoIcon } from '../../../../components/InfoIcon'
import { DeliveryDetailsContainer } from './styles'
import { useTheme } from 'styled-components'

export function DeliveryDetails() {
  const { colors } = useTheme()

  return (
    <DeliveryDetailsContainer>
      <InfoIcon
        iconBg={colors['base-purple']}
        icon={<MapPin size={16} weight='fill' />}
        text={
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            <br />
            <p>Farrapos Porto Alegre, RS</p>
          </p>
        }
      />

      <InfoIcon
        iconBg={colors['base-yellow']}
        icon={<Clock size={16} weight='fill' />}
        text={
          <p>
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </p>
        }
      />

      <InfoIcon
        iconBg={colors['yellow-dark']}
        icon={<CurrencyDollar size={16} weight='fill' />}
        text={
          <p>
            Pagamento de entrega
            <br />
            <strong>Cartão de crédito</strong>
          </p>
        }
      />
    </DeliveryDetailsContainer>
  )
}
