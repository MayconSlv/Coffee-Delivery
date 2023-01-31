import { ReactNode } from 'react'
import { IconInfo, InfoIconContainer } from './style'

interface InfoIconProps {
  icon: ReactNode
  text: string
  iconBg: string
}

export function InfoIcon({ icon, text, iconBg }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <IconInfo iconBg={iconBg}>{icon}</IconInfo>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoIconContainer>
  )
}
