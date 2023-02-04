import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 4rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors['base-text']};
  }

  input {
    border: 0;
    border-radius: 4px;
    padding: 12px;

    color: ${(props) => props.theme.colors['base-button']};
    background-color: ${(props) => props.theme.colors['base-input']};
  }

  div {
    display: flex;
    gap: 12px;
  }
`

export const PaymentMethod = styled.section`
  padding: 4rem;
  background-color: ${(props) => props.theme.colors['base-card']};

  border-radius: 4px;
  margin-top: 12px;
`
