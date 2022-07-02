import {
  Link,
  LinkProps,
  useResolvedPath,
  useMatch
  } from 'react-router-dom'
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
      <CustomLink to="/">Home</CustomLink>/
      <CustomLink to="/about">about</CustomLink>/
      <CustomLink to="/store">store</CustomLink>
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
