import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};

  width: 25.6rem;
  height: 31rem;
  padding: 2rem;

  border-radius: 0.6rem 3.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  img {
    margin-top: -40px;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;

    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};

    font-weight: 700;
    font-size: 1rem;
  }
`

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 700;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 2.6rem;
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2.3rem;
`

export const Price = styled.div`
  display: flex;
  gap: 4px;

  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;

  span:last-child {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
  }
`

export const FooterButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  width: 11.8rem;

  > button {
    width: 3.8rem;
    height: 3.8rem;
    border: none;
    background: ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors['base-white']};
    border-radius: 6px;
  }
`

export const CartIconContainer = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['base-white']};

  width: 3.8rem;
  height: 3.8rem;
  padding: 0.8rem;
`
