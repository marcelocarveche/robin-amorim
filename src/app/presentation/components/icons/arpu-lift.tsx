import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const ARPULiftIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 71 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="10" width="64" height="41" rx="2" fill="#96D446" />
      <rect
        x="5"
        y="5"
        width="64"
        height="41"
        rx="2"
        stroke="#171717"
        stroke-width="3"
      />
      <circle cx="37" cy="26" r="10.5" fill="#171717" stroke="#171717" />
      <circle cx="65" cy="42" r="4.5" fill="#171717" stroke="#171717" />
      <circle cx="9" cy="42" r="4.5" fill="#171717" stroke="#171717" />
      <circle cx="65" cy="9" r="4.5" fill="#171717" stroke="#171717" />
      <circle cx="9" cy="9" r="4.5" fill="#171717" stroke="#171717" />
    </svg>
  )
}
