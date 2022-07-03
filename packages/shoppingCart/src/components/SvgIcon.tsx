
export type SvgIconProps = {
  size?: number
  fill?: string,
  rotate?: number,
  svgcontent: string,
  className?: string
}

export default function SvgIcon ({ fill = 'currentColor', rotate = 0, size = 24, svgcontent, className = '' }: SvgIconProps) {
  const svgStyle = {
    transform: `rotate(${rotate}deg)`, 
    display: 'inline-block'
  }

  return (
     <svg 
      viewBox="0 0 24 24" 
      fill={fill}
      height={size}
      width={size}
      style={svgStyle}
      className={className}
    >
      <path d={svgcontent}></path>
    </svg>

  )
}


