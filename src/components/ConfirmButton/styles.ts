import styled from 'styled-components'

export const ConfirmButtonContainer = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-yellow']};
  color: ${({ theme }) => theme.colors['base-white']};

  padding: 1.2rem 8rem;
  border: none;
  border-radius: 6px;

  font-size: 1.4rem;
  font-weight: 700;
`
