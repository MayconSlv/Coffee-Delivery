/* eslint-disable jsx-a11y/alt-text */
import {
  CardActions,
  CardDetails,
  CoffeeCardInfo,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import cafe from '../../../../../public/coffees/Type=Americano.svg'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <CoffeeCardInfo>
        <div className='info'>
          <img src={cafe} />
          <CardDetails>
            <p>Expresso Tradicional</p>
            <CardActions>
              <QuantityInput />
              <RemoveButton>
                <Trash size={16} />
                REMOVER
              </RemoveButton>
            </CardActions>
          </CardDetails>
        </div>

        <span>R$ 9,90</span>
      </CoffeeCardInfo>
    </CoffeeCartCardContainer>
  )
}
