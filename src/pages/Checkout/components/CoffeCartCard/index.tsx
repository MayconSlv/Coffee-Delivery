/* eslint-disable jsx-a11y/alt-text */
import {
  CardActions,
  CardDetails,
  CoffeeCardInfo,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CartContext, CartItem } from '../../../../contexts/cartContext'
import { FormatedMoney } from '../../../../utils/FormatedMoney'
import { useContext } from 'react'

interface CoffeeCartCardProps {
  cartItem: CartItem
}

export function CoffeeCartCard({ cartItem }: CoffeeCartCardProps) {
  const { changeCoffeeQuantity } = useContext(CartContext)

  const totalPrice = cartItem.quantity * cartItem.price
  const formatedPrice = FormatedMoney(totalPrice)

  function handleIncressQuantity() {
    changeCoffeeQuantity(cartItem.id, 'incress')
  }

  function handleDecressQuantity() {
    changeCoffeeQuantity(cartItem.id, 'decress')
  }

  return (
    <CoffeeCartCardContainer>
      <CoffeeCardInfo>
        <div className="info">
          <img src={`/coffees/${cartItem.photo}`} />
          <CardDetails>
            <p>{cartItem.name}</p>
            <CardActions>
              <QuantityInput
                quantity={cartItem.quantity}
                onDecress={handleDecressQuantity}
                onIncress={handleIncressQuantity}
              />
              <RemoveButton>
                <Trash size={16} />
                REMOVER
              </RemoveButton>
            </CardActions>
          </CardDetails>
        </div>

        <span>R${formatedPrice}</span>
      </CoffeeCardInfo>
    </CoffeeCartCardContainer>
  )
}
