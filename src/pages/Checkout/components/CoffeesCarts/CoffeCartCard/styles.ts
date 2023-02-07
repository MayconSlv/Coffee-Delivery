import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-text']};
  }
  .coffee-selected {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
  }

  .info {
    display: flex;
    gap: 20px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }

  .icons {
    display: flex;
    gap: 8px;
  }
`
