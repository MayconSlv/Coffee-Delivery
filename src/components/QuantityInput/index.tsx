import { Minus, Plus } from 'phosphor-react'
import { IconsButton, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconsButton>
        <Minus size={22} weight='bold' />
      </IconsButton>
      <input type='number' value={1} readOnly />
      <IconsButton>
        <Plus size={22} weight='bold' />
      </IconsButton>
    </QuantityInputContainer>
  )
}
