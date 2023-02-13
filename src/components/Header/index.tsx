import { ShoppingCart, MapPin } from 'phosphor-react'
import img from '../../assets/Logo.svg'
import { CartButton, HeaderContainer, LocalButton } from './style'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

export function Header() {
  const { coffesCartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={img} alt="" />
        </NavLink>

        <div>
          <LocalButton>
            <MapPin size={18} weight="fill" />
            Porto Alegre, RS
          </LocalButton>

          <NavLink to="/Checkout">
            <CartButton>
              <ShoppingCart size={18} weight="fill" />
              {coffesCartQuantity >= 1 && <span>{coffesCartQuantity}</span>}
            </CartButton>
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
