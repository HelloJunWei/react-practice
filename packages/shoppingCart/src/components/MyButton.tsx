import React from 'react'
import classNames from 'classnames'
type BaseButtonProps = {
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  danger?: boolean
}

export default function (props: BaseButtonProps) {
  const {
    className,
    children,
    danger
  } = props
  const classes = classNames(
    className,
    'text-white rounded-md p-2',
    danger ? 'bg-red-600' : 'bg-blue-600'
  )
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };
  return (
    <button
      className={classes}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}
