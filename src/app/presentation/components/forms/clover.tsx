import React from 'react'

type Props = {
  color?: string
  size?: number | string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const CloverForm: React.FC<Props> = ({
  color = '#6779FF',
  size = 196,
  ...props
}) => {
  const base = 196
  const scale = typeof size === 'number' ? size / base : 1

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 196 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform={`scale(${scale})`}>
        <rect
          x={54.7968}
          y={26.307}
          width={144}
          height={84}
          rx={28}
          transform="rotate(28.7293 54.7968 26.307)"
          fill={color}
        />
        <rect
          x={26.307}
          y={140.694}
          width={144}
          height={84}
          rx={28}
          transform="rotate(-61.2707 26.307 140.694)"
          fill={color}
        />
      </g>
    </svg>
  )
}
