import { Timer, Package, ShoppingCart, Coffee } from 'phosphor-react'
import introImage from '../../assets/intro.svg'

export function Intro() {
  return(
    <article>
      <div>

        <div>
          <h1>Enconter o café perfeito para qualquer hora do dia  </h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        

        <p> <ShoppingCart /> Compra simples e segura</p>
        <p> <Timer /> Entrega rápida e rastreada</p>
        <p> <Package /> Embalagem mantém o café intacto</p>
        <p> <Coffee /> O café chega fresquinho até você</p>
        
      </div>
      

      <img src={introImage} alt="" />
    </article>
  )
}