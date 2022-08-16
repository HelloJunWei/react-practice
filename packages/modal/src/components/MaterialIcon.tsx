import React from 'react'
import classNames from 'classnames'
type IconType = 'close'

export type MaterialIconProp = {
  icon: IconType
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export default function ({ icon, className, onClick }: MaterialIconProp) {
  const classes = classNames(
    className,
    'material-icons'
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
  }

  return (
    <span className={ classes } onClick={handleClick}>{ icon }</span> 
  )
}
