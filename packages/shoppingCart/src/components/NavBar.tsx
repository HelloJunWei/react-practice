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


// 不會變動的拉到外面吧
const classN = c([
  'mx-2',
  navClass.nav_a_link,
])

export default function NavBar () {
  // 可能會有 rebuld 的問題，這要注意一下
  console.log('navBar')
  const clickBtn = (e: MouseEvent<HTMLElement>) => {
    console.log('click', e)
  }

  return (
  <div className="flex items-center">
    <div className="flex items-center py-5">
      <CustomLink to="/">Home</CustomLink>/
      <CustomLink to="/about">about</CustomLink>/
      <CustomLink to="/store">store</CustomLink>
    </div>
    <button className="ml-auto mr-5 border rounded-md w-12 h-12 bg-blue-600" onClick={clickBtn}>
      <SvgIcon svgcontent={mdiCart} className="text-white" />
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
