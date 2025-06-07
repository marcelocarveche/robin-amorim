import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const ScarcityIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_625_4973)">
        <path d="M31.5 29L49.2535 54.5H13.7465L31.5 29Z" fill="#171717" />
        <path d="M30.5 32L48.2535 6.5H12.7465L30.5 32Z" fill="#171717" />
        <path d="M29.5 28L47.2535 53.5H11.7465L29.5 28Z" fill="white" />
        <path d="M29.5 31L47.2535 5.5H11.7465L29.5 31Z" fill="white" />
        <path d="M29.5 31L34.2631 23.5H24.7369L29.5 31Z" fill="#FF7A02" />
        <path d="M29.5 38L47.2535 53.75H11.7465L29.5 38Z" fill="#FF7A02" />
      </g>
      <defs>
        <clipPath id="clip0_625_4973">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
