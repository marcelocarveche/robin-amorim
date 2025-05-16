import React from 'react'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLDivElement>

export const TriangleForm: React.FC<Props> = ({
  color = '#FF7A02',
  size,
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M52.7671 72L0 20.0816L72 0L52.7671 72Z" fill={color} />
      </svg>
    </div>
  )
}
