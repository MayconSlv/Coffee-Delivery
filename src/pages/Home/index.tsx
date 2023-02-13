import { CoffeeContainer, MainContent } from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../datas/coffees'
import { Intro } from './components/Intro/index'

export function Home() {
  return (
    <MainContent className="container">
      <Intro />
      <h2>Nossos cafés</h2>
      <CoffeeContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeContainer>
    </MainContent>
  )
}
