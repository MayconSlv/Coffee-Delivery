import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['purple-light']};
      border-color: ${theme.colors['base-purple']};

      &:hover {
        background: ${theme.colors['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  width: 17.8rem;
  height: 5.1rem;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors['base-text']};
  background: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  font-size: 1.2rem;
  text-align: left;
  text-transform: uppercase;

  border-radius: 6px;
  user-select: none;

  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors['base-purple']};
  }

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
