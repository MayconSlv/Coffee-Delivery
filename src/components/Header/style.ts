import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors['base-background']};

  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;

  padding: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    font-size: 1.4rem;
  }
`

const baseButton = styled.a`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 6px;
`
export const LocalButton = styled(baseButton)`
  > svg {
    color: ${(props) => props.theme.colors['base-purple']};
  }
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
`

export const CartButton = styled(baseButton)`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
`
