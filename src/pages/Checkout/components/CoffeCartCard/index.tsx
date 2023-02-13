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
import { CartItem } from '../../../../contexts/cartContext'
import { FormatedMoney } from '../../../../utils/FormatedMoney'

interface CartItemProps {
  cartItem: CartItem
}

export function CoffeeCartCard({ cartItem }: CartItemProps) {
  const totalPrice = cartItem.quantity * cartItem.price
  const formatedPrice = FormatedMoney(totalPrice)

  return (
    <CoffeeCartCardContainer>
      <CoffeeCardInfo>
        <div className="info">
          <img src={`/coffees/${cartItem.photo}`} />
          <CardDetails>
            <p>{cartItem.name}</p>
            <CardActions>
              <QuantityInput />
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
