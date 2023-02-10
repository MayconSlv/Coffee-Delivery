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

// SubmitCoffeesContainer

export const TotalPrice = styled.div`
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const SubmitCoffeesContainer = styled.div`
  .total p {
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
