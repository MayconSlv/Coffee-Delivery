import { Timer, Package, ShoppingCart, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

import introImage from '../../assets/intro.svg'

import { BenefitsLayout, CoffeeContainer, Intro, IntroText } from './styles'
import { InfoIcon } from '../../components/InfoIcon'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  const { colors } = useTheme()

  return (
    <>
      <Intro>
        <div>
          <IntroText>
            <h1>Enconter o café perfeito para qualquer hora do dia </h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </IntroText>

          <BenefitsLayout>
            <InfoIcon
              iconBg={colors['yellow-dark']}
              icon={<ShoppingCart weight='fill' />}
              text='compra simples e segura'
            />
            <InfoIcon
              iconBg={colors['base-text']}
              icon={<Package weight='fill' />}
              text='Embalagem manteém o café intacto'
            />
            <InfoIcon
              iconBg={colors['base-yellow']}
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada'
            />
            <InfoIcon
              iconBg={colors['base-purple']}
              icon={<Coffee weight='fill' />}
              text='O café chega fresquinho até sua casa'
            />
          </BenefitsLayout>
        </div>

        <img src={introImage} alt='' />
      </Intro>

      <h2>Nossos cafés</h2>
      <CoffeeContainer>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeContainer>
    </>
  )
}
