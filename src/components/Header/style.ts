import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  margin: 0 auto;
  padding: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.4rem;
  }
`

const baseButton = styled.a`
  padding: .8rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 6px;
`
export const LocalButton = styled(baseButton)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartButton = styled(baseButton)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`