import styled from 'styled-components'
import { BaseCard } from '../../style'

export const CoffeeCartContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 1.5rem;
  }
`

export const SelectedCoffees = styled(BaseCard)`
  border-radius: 6px 44px;
  width: 44.8rem;
`
