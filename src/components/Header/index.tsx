import { ShoppingCart, MapPin } from 'phosphor-react'
import img from '../../assets/Logo.svg'
import { CartButton, HeaderContainer, LocalButton } from './style'

export function Header() {
  return(
    <HeaderContainer>
      <img src={img} alt="" />
      
      <div>
        <LocalButton href="">
          <MapPin size={18}/>Porto Alegre, RS
        </LocalButton>
        
        <CartButton>
          <ShoppingCart size={18}/>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}