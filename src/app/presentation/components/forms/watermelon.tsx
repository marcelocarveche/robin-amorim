import React from 'react'

type Props = {
  color?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const WatermelonForm: React.FC<Props> = ({
  color = '#FF7A02',
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 162 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M127.966 0.948603C146.22 36.2758 132.379 79.7118 97.0519 97.9658C61.7247 116.22 18.2887 102.379 0.0346756 67.0521L127.966 0.948603Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
