import { ShoppingCart, MapPin } from 'phosphor-react'
import img from '../../assets/Logo.svg'
import { CartButton, HeaderContainer, LocalButton } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img src={img} alt='' />
        </NavLink>

        <div>
          <LocalButton>
            <MapPin size={18} weight='fill' />
            Porto Alegre, RS
          </LocalButton>

          <NavLink to='/Checkout'>
            <CartButton>
              <ShoppingCart size={18} weight='fill' />
            </CartButton>
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
