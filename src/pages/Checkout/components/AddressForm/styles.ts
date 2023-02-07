import styled from 'styled-components'
import { BaseCard } from '../../style'

export const AddressFormContainer = styled(BaseCard)`
  margin-bottom: 1.2rem;

  input {
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    background: ${({ theme }) => theme.colors['base-input']};
    border-radius: 4px;
    padding: 1.2rem;
    :focus {
      outline: none;
    }
  }
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