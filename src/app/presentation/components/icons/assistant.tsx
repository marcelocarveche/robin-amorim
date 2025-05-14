import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const AssistantIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <svg
      width="67"
      height="54"
      viewBox="0 0 67 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="67" height="31" rx="15.5" fill="#6779FF" />
      <path
        d="M0 51.8889C0 42.5614 7.56141 35 16.8889 35H50.1111C59.4386 35 67 42.5614 67 51.8889C67 53.0548 66.0548 54 64.8889 54H2.11111C0.945179 54 0 53.0548 0 51.8889Z"
        fill="#6779FF"
      />
      <path
        d="M18 17C18 14.7909 19.7909 13 22 13C24.2091 13 26 14.7909 26 17V17.4444C26 17.7513 25.7513 18 25.4444 18H18.5556C18.2487 18 18 17.7513 18 17.4444V17Z"
        fill="#171717"
      />
      <path
        d="M42 17C42 14.7909 43.7909 13 46 13C48.2091 13 50 14.7909 50 17V17.4444C50 17.7513 49.7513 18 49.4444 18H42.5556C42.2487 18 42 17.7513 42 17.4444V17Z"
        fill="#171717"
      />
    </svg>
  )
}
