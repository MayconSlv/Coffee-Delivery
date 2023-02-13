import { ConfirmButton } from '../../../../components/ConfirmButton'
import { SubmitCoffeesContainer, TotalPrice } from './sytles'

export function SubmitCoffees() {
  return (
    <SubmitCoffeesContainer>
      <TotalPrice>
        <div>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,00</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>R$ 32,20</p>
        </div>
      </TotalPrice>

      <ConfirmButton />
    </SubmitCoffeesContainer>
  )
}
