import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 3.2rem;
`

export const PaymentMethod = styled.section`
  padding: 4rem;
  background-color: ${(props) => props.theme.colors['base-card']};

  border-radius: 4px;
  margin-top: 12px;
`

export const BaseCard = styled.div`
  width: 64rem;
  padding: 4rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
`
