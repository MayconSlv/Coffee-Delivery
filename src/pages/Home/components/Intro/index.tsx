import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoIcon } from '../../../../components/InfoIcon'
import { BenefitsLayout, IntroContainer, IntroText } from './styles'
import { useTheme } from 'styled-components'

import introImage from '../../../../assets/intro.svg'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer className='container'>
      <div>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
    </IntroContainer>
  )
}
