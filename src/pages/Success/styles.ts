import styled from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  gap: 4rem;
  flex-direction: column;
`

export const SuccessTitle = styled.div`
  margin-top: 4rem;

  h2 {
    font-weight: 800;
    font-size: 3rem;
    font-family: 'Baloo 2';
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const SuccessSection = styled.section`
  display: flex;
  gap: 10rem;
`
