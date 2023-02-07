import { AddressFormTitle } from './styles'
import { ReactNode } from 'react'

interface AddressTitleProps {
  subtitle: string
  label: string
  icon: ReactNode
}

interface AddressTitles {
  AddressTitle: AddressTitleProps
}

export function AddressTitle({ AddressTitle }: AddressTitles) {
  return (
    <AddressFormTitle>
      {AddressTitle.icon}
      <div>
        <p>{AddressTitle.subtitle}</p>
        <span>{AddressTitle.label}</span>
      </div>
    </AddressFormTitle>
  )
}
