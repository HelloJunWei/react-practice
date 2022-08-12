import {
  Link,
  LinkProps,
  useResolvedPath,
  useMatch
  } from 'react-router-dom'
import navClass from '../assets/css/navBar.module.scss'
import c from 'classnames'
import { mdiCart } from '@mdi/js'
import SvgIcon from '../components/SvgIcon'
import type { MouseEvent } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'


// 不會變動的拉到外面吧
const classN = c([
  'mx-2',
  navClass.nav_a_link,
])

type PropsType = {
  className?: string
}

export default function NavBar (props: PropsType) {
  const {
    className,
  } = props
  const classes = c(
    className,
    'flex items-center fixed w-full top-0 bg-white',
  )
  const { cartQuantity } = useShoppingCart()
  const clickBtn = (e: MouseEvent<HTMLElement>) => {
    console.log('click', e)
  }

  return (
  <div className={classes}>
    <div className="flex items-center py-5">
      <CustomLink to="/">Home</CustomLink>/
      <CustomLink to="/about">about</CustomLink>
    </div>
    <button className="relative ml-auto mr-5 border rounded-md w-12 h-12 bg-blue-600" onClick={clickBtn}>
      <SvgIcon svgcontent={mdiCart} className="text-white" />
      {
        cartQuantity > 0 ?
        <div className="absolute bottom-[-5px] right-[-5px] w-[25px] h-[25px] rounded-[50px] bg-red-700 text-white flex justify-center items-center">
          { cartQuantity }
        </div> : null
      }
    </button>
  </div>
  )
}


function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        className={`${classN} ${match ? navClass.active: ''}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
