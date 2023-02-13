import { Minus, Plus } from 'phosphor-react'
import { IconsButton, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onDecress: () => void
  onIncress: () => void
}

export function QuantityInput({
  quantity,
  onDecress,
  onIncress,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconsButton onClick={onDecress} disabled={quantity <= 1}>
        <Minus size={22} weight="bold" />
      </IconsButton>
      <input type="number" value={quantity} readOnly />
      <IconsButton onClick={onIncress} disabled={quantity >= 9}>
        <Plus size={22} weight="bold" />
      </IconsButton>
    </QuantityInputContainer>
  )
}
