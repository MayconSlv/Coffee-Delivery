import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutStyle } from './styles'

export function DefaultLayout() {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
    </LayoutStyle>
  )
}
