import styled from 'styled-components'

export const DeliveryDetailsContainer = styled.div`
  padding: 4rem;
  min-width: 52.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background: ${({ theme }) => theme.colors['base-background']};
  border-radius: 6px 36px;
  position: relative;
  margin: 1rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
