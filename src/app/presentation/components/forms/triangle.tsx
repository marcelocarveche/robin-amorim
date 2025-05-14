import React from 'react'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const TriangleForm: React.FC<Props> = ({
  color = '#FF7A02',
  size,
  ...props
}) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M52.7671 72L0 20.0816L72 0L52.7671 72Z" fill={color} />
    </svg>
  )
}
