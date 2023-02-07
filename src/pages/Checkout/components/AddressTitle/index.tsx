import { AddressFormTitle } from './styles'
import { ReactNode } from 'react'

interface AddressTitleProps {
  title: string
  subtitle: string
  icon?: ReactNode
}

export function AddressTitle({ icon, title, subtitle }: AddressTitleProps) {
  return (
    <AddressFormTitle>
      {icon}
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </AddressFormTitle>
  )
}
