import { ShoppingCart } from 'phosphor-react'
import {
  CardFooter,
  CardContainer,
  CardDesc,
  Price,
  Tags,
  FooterButtons,
} from './style'
import { QuantityInput } from '../../../../components/QuantityInput'
import { FormatedMoney } from '../../../../utils/FormatedMoney'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/cartContext'

export interface Coffee {
  id: number
  photo: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)
  const formatedPrice = FormatedMoney(coffee.price)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncress() {
    setQuantity((state) => state + 1)
  }

  function handleDecress() {
    setQuantity((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`{${coffee.id}${tag}}`}>{tag}</span>
        ))}
      </Tags>

      <CardDesc>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </CardDesc>

      <CardFooter>
        <Price>
          <span>R$</span>
          <span>{formatedPrice}</span>
        </Price>

        <FooterButtons>
          <QuantityInput
            quantity={quantity}
            onIncress={handleIncress}
            onDecress={handleDecress}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </FooterButtons>
      </CardFooter>
    </CardContainer>
  )
}
