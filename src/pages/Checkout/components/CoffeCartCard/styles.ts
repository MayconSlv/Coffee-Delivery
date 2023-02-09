import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  > div {
    display: flex;
    gap: 20px;
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CardActions = styled.div`
  display: flex;
  gap: 8px;
  > div {
    height: 3.2rem;
  }
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors['base-text']};
  height: 3.2rem;

  svg {
    color: ${({ theme }) => theme.colors['base-purple']};
  }
`
