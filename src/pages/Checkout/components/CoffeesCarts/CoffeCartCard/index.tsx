/* eslint-disable jsx-a11y/alt-text */
import { CoffeeCartCardContainer } from './styles'
import cafe from '../../../../../../public/coffees/Type=Americano.svg'
import { QuantityInput } from '../../../../../components/QuantityInput'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div className='coffee-selected'>
        <div className='info'>
          <img src={cafe} />
          <div className='details'>
            <p>Expresso tradicional</p>
            <div className='icons'>
              <QuantityInput />
            </div>
          </div>
        </div>

        <span>R$ 9,90</span>
      </div>
    </CoffeeCartCardContainer>
  )
}
