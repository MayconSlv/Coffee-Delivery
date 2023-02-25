import styled from 'styled-components'
import { BaseCard } from '../../style'

export const AddressFormContainer = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 1.5rem;
  }
`

export const AddressCardContainer = styled(BaseCard)`
  margin-bottom: 1.5rem;
`

export const InputsLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  gap: 4px;
  column-gap: 1.6rem;
  row-gap: 1.2rem;
  .cep {
    grid-column: span 3;
    width: 20rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
