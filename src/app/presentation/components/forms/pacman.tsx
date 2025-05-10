import React from 'react'

type Props = {
  color?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const PacmanForm: React.FC<Props> = ({
  color = '#FFC314',
  ...props
}) => {
  return (
    <svg
      width="215"
      height="274"
      viewBox="0 0 215 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-24.9058 171.257C-43.6269 114.625 -12.8935 53.5384 43.7392 34.8174L77.6367 137.36L180.179 103.462C198.9 160.095 168.167 221.181 111.534 239.902C54.9015 258.623 -6.18473 227.89 -24.9058 171.257Z"
        fill={color}
      />
    </svg>
  )
}
