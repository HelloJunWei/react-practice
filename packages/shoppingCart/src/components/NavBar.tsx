import { NavLink } from 'react-router-dom'
import navClass from '../assets/css/navBar.module.scss'
import c from 'classnames'


// 不會變動的拉到外面吧
const classN = c([
  'mx-2',
  navClass.nav_a_link,
])

export default function NavBar (props: { active: string }) {
  // 可能會有 rebuld 的問題，這要注意一下
  console.log('navBar')
  return (
    <div className="flex items-center py-5">
      <NavLink className={`${classN} ${props.active === '/' ? navClass.active: ''}`} to="/">Home</NavLink>/
      <NavLink className={`${classN} ${props.active === '/about' ? navClass.active: ''}`} to="/about">about</NavLink>/
      <NavLink className={`${classN} ${props.active === '/store' ? navClass.active: ''}`} to="/store">store</NavLink>
    </div>
  )
}
