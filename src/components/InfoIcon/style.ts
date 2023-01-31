import styled from 'styled-components'

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${(props) => props.theme.colors['base-text']};
`

interface InfoIconPropos {
  iconBg: string
}

export const IconInfo = styled.div<InfoIconPropos>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.iconBg};
  color: ${(props) => props.theme.colors['base-white']};
`
