import styled from 'styled-components'

export const PaymentInputContainer = styled.div``

export const InputContainer = styled.div`
  width: 17.8rem;
  height: 5.1rem;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors['base-text']};
  background: ${({ theme }) => theme.colors['base-button']};

  font-size: 1.2rem;
  text-align: left;

  border-radius: 6px;

  user-select: none;
  svg {
    color: ${({ theme }) => theme.colors['base-purple']};
  }
`
