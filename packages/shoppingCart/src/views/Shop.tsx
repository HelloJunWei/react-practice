import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

export default function () {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <section className="mt-[70px]">
        <Outlet />
      </section>
    </ShoppingCartProvider>
  )
}
