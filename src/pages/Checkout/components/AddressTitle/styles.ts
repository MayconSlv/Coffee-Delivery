import styled from 'styled-components'

export const AddressFormTitle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 3.2rem;

  > p {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  span {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1.4rem;
  }
`
