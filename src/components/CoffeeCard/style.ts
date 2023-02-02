import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};

  width: 25.6rem;
  height: 31rem;
  padding: 2rem;

  border-radius: 0.6rem 3.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  img {
    margin-top: -40px;
  }
`

export const TradicionalText = styled.span`
  padding: 4px 8px;
  border-radius: 100px;

  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};

  font-weight: 700;
  font-size: 1rem;

  margin: 2rem;
`

export const CardDesc = styled.div`
  h4 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 700;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin: 0.8rem 0;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2.3rem;
`

export const Price = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;

  span:last-child {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const CounterButton = styled.span`
  width: 7.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem;

  background: ${(props) => props.theme.colors['base-button']};

  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors['base-purple']};
  }
`

export const CartIconContainer = styled.button`
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors['base-white']};

  width: 3.8rem;
  height: 3.8rem;
  padding: 0.8rem;
`
