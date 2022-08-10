import React from 'react'
import classNames from 'classnames'
type BaseButtonProps = {
  className?: string;
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function (props: BaseButtonProps) {
  const {
    className,
    children
  } = props
  const classes = classNames(
    className,
    'bg-blue-700 text-white rounded-md p-2'
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
