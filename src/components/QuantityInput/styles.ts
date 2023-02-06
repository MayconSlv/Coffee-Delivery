import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['base-button']};

  padding: 0.8rem;
  border-radius: 6px;
  gap: 4px;

  width: 7.2rem;
  height: 3.2rem;

  input {
    width: 100%;
    background: none;
    border: none;
    text-align: center;

    color: ${({ theme }) => theme.colors['base-text']}
    font-size: 1.6rem;
    font-family: 'Roboto';

    &:focus {
      outline: none;
    }
  }
`

export const IconsButton = styled.button.attrs({
  type: 'button',
})`
  width: 1.4rem;
  height: 1.4rem;
  border: none;
  background: none;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-purple']};
`
