import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { InfoIcon } from '../../../../components/InfoIcon'
import { DeliveryDetailsContainer } from './styles'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { formData } from '../../../Checkout'
import { paymentMethods } from '../../../Checkout/components/PaymentMethod'
import { useEffect } from 'react'

interface LocationType {
  state: formData
}

export function DeliveryDetails() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <DeliveryDetailsContainer>
      <InfoIcon
        iconBg={colors['base-purple']}
        icon={<MapPin size={16} weight="fill" />}
        text={
          <p>
            Entrega em{' '}
            <strong>
              {state.street}, {state.number}
            </strong>
            <br />
            <p>
              {state.neighbor} - {state.city}, {state.uf}
            </p>
          </p>
        }
      />

      <InfoIcon
        iconBg={colors['base-yellow']}
        icon={<Clock size={16} weight="fill" />}
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
        icon={<CurrencyDollar size={16} weight="fill" />}
        text={
          <p>
            Pagamento de entrega
            <br />
            <strong>{paymentMethods[state.paymentMethod].label}</strong>
          </p>
        }
      />
    </DeliveryDetailsContainer>
  )
}
