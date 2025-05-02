import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const RemoveIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.93438 13.1375C5.61521 13.1375 5.34579 13.0278 5.12612 12.8083C4.90662 12.5886 4.79688 12.3192 4.79688 12C4.79688 11.6809 4.90662 11.4115 5.12612 11.1918C5.34579 10.9723 5.61521 10.8625 5.93438 10.8625H18.0659C18.385 10.8625 18.6545 10.9723 18.8741 11.1918C19.0936 11.4115 19.2034 11.6809 19.2034 12C19.2034 12.3192 19.0936 12.5886 18.8741 12.8083C18.6545 13.0278 18.385 13.1375 18.0659 13.1375H5.93438Z"
        fill={color}
      />
    </svg>
  )
}
