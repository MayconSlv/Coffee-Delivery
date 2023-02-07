import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 3.2rem;

  div {
    margin-bottom: 1.2rem;
  }
`

export const BaseCard = styled.div`
  width: 64rem;
  padding: 4rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
`
