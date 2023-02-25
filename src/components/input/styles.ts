import styled from 'styled-components'

export const InputContainer = styled.input`
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  border-radius: 4px;
  padding: 1.2rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors['base-yellow']};
  }
`
