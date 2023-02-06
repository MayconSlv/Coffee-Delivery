import { ShoppingCart, MapPin } from 'phosphor-react'
import img from '../../assets/Logo.svg'
import { CartButton, HeaderContainer, LocalButton } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <img src={img} alt='' />

        <div>
          <LocalButton href=''>
            <MapPin size={18} weight='fill' />
            Porto Alegre, RS
          </LocalButton>

          <CartButton>
            <ShoppingCart size={18} weight='fill' />
          </CartButton>
        </div>
      </div>
    </HeaderContainer>
  )
}
