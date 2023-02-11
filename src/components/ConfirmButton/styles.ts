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
  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
