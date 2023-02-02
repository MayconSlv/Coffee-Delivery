import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expresso from '../../assets/coffees/Type=Expresso.svg'
import {
  ButtonsContainer,
  CardContainer,
  CardDesc,
  CartIconContainer,
  CounterButton,
  Price,
  PriceContainer,
  TradicionalText,
} from './style'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={expresso} alt='' />

      <TradicionalText>TRADICIONAL</TradicionalText>

      <CardDesc>
        <h4>Expresso tradicional</h4>
        <p>O café quente feito com água quente e grãos moídos</p>
      </CardDesc>

      <PriceContainer>
        <Price>
          <span>R$</span>
          <span>9,90</span>
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