import styled from 'styled-components'

export const Intro = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5rem 0;
`

export const IntroText = styled.div`
  width: 58.8rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 6.24rem;

    color: ${(props) => props.theme.colors['base-title']};
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const BenefitsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5rem 0;
  gap: 2rem;
`

export const CoffeeContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3.2rem;
`
