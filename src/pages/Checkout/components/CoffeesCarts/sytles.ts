import styled from 'styled-components'

export const CoffeeCartContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SelectedCoffees = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px;
  width: 44.8rem;
  padding: 20px 40px 40px;
`
