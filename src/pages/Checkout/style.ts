import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 3.2rem;

  div {
    h2 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-family: 'Baloo 2';
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.3rem;
      margin: 1.5rem 0;
    }
  }
`

export const BaseCard = styled.div`
  width: 64rem;
  padding: 4rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
`
