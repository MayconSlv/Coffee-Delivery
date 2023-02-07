import styled from 'styled-components'

export const RemoveButtonContainer = styled.button.attrs({
  type: 'button',
})`
  background: ${({ theme }) => theme.colors['base-button']};
  border: none;
  width: 9.1rem;
  height: 3.8rem;
  padding: 0 8px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors['base-text']};

  svg {
    color: ${({ theme }) => theme.colors['base-purple']};
  }
`
