import { DeliveryDetails } from './components/DeliveryDetails'
import { SuccessContainer, SuccessSection, SuccessTitle } from './styles'
import deliveryImage from '../../assets/Illustration.svg'

export function Success() {
  return (
    <SuccessContainer className="container">
      <SuccessTitle>
        <h2>Uhu! O pedido foi confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessTitle>

      <SuccessSection>
        <DeliveryDetails />

        <img src={deliveryImage} alt="" />
      </SuccessSection>
    </SuccessContainer>
  )
}
