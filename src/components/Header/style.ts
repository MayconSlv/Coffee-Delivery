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
    padding-bottom: 1px;
  }
`

const baseButton = styled.span`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 6px;
  height: 3.8rem;
  position: relative;
`
export const LocalButton = styled(baseButton)`
  display: flex;
  gap: 4px;
  user-select: none;

  > svg {
    color: ${(props) => props.theme.colors['base-purple']};
  }
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
`

export const CartButton = styled(baseButton)`
  width: 3.8rem;

  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    font-size: 1.2rem;
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: calc(-1rem / 2);
    right: calc(-1rem / 2);
    background: ${({ theme }) => theme.colors['yellow-dark']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
