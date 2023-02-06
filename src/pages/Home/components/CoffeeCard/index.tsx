import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonsContainer,
  CardContainer,
  CardDesc,
  CartIconContainer,
  CounterButton,
  Price,
  PriceContainer,
  Tags,
} from './style'

interface Coffee {
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
  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt='' />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`{${coffee.id}${tag}}`}>{tag}</span>
        ))}
      </Tags>

      <CardDesc>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </CardDesc>

      <PriceContainer>
        <Price>
          <span>R$</span>
          <span>{coffee.price}</span>
        </Price>

        <ButtonsContainer>
          <CounterButton>
            <Minus size={14} weight='bold' /> 1 <Plus size={14} weight='bold' />
          </CounterButton>
          <CartIconContainer>
            <ShoppingCart weight='fill' size={20} />
          </CartIconContainer>
        </ButtonsContainer>
      </PriceContainer>
    </CardContainer>
  )
}
