import { useContext } from 'react'
import { ConfirmButton } from '../../../../components/ConfirmButton'
import { CartContext } from '../../../../contexts/cartContext'
import { SubmitCoffeesContainer, TotalPrice } from './sytles'
import { FormatedMoney } from '../../../../utils/FormatedMoney'

export function SubmitCoffees() {
  const { cartItems } = useContext(CartContext)
  const totalItemsPrice = cartItems.reduce((acumulator, total) => {
    return acumulator + total.price * total.quantity
  }, 0)
  console.log(totalItemsPrice)
  const formatedTotalItemsPrice = FormatedMoney(totalItemsPrice)

  return (
    <SubmitCoffeesContainer>
      <TotalPrice>
        <div>
          <p>Total de itens</p>
          <p>R$ {formatedTotalItemsPrice}</p>
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
