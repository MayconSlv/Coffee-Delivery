import { ShoppingCart } from 'phosphor-react'
import {
  CardFooter,
  CardContainer,
  CardDesc,
  CartIconContainer,
  Price,
  PriceContainer,
  Tags,
} from './style'
import { QuantityInput } from '../../../../components/QuantityInput'

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

        <CardFooter>
          <div>
            <QuantityInput />
          </div>
          <CartIconContainer>
            <ShoppingCart weight='fill' size={20} />
          </CartIconContainer>
        </CardFooter>
      </PriceContainer>
    </CardContainer>
  )
}
